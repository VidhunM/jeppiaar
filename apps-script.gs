/**
 * Google Apps Script for Jeppiaar Academy Online Application Form
 * 
 * SETUP INSTRUCTIONS:
 * 1. Create a new Google Apps Script project: https://script.google.com
 * 2. Paste this entire code into the script editor
 * 3. Create a Google Sheet and note its ID (from the URL)
 * 4. Create a Google Drive folder for storing attachments and note its ID
 * 5. Update the SHEET_ID and DRIVE_FOLDER_ID constants below
 * 6. Deploy as a web app:
 *    - Click "Deploy" > "New deployment"
 *    - Type: "Web app"
 *    - Execute as: "Me"
 *    - Who has access: "Anyone" (or "Anyone with Google account" for more security)
 *    - Click "Deploy"
 * 7. Copy the web app URL and use it as VITE_ADMISSION_APPLICATION_SCRIPT_URL
 * 
 * PERMISSIONS REQUIRED:
 * - Google Sheets API (read/write)
 * - Google Drive API (read/write)
 */

// ========== CONFIGURATION ==========
const SHEET_ID = 'YOUR_SHEET_ID_HERE'; // Replace with your Google Sheet ID
const DRIVE_FOLDER_ID = 'YOUR_DRIVE_FOLDER_ID_HERE'; // Replace with your Google Drive folder ID
const SHEET_NAME = 'Applications'; // Name of the sheet tab
const GALLERY_SHEET_NAME = 'GalleryEnquiries'; // Name of the sheet tab for Gallery.jsx submissions

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

// ========== MAIN DO POST FUNCTION ==========
function doPost(e) {
  try {
    // Parse the incoming JSON payload
    const payload = JSON.parse(e.postData.contents);
    
    // Handle payment confirmation
    if (payload.type === 'payment_confirmation') {
      return handlePaymentConfirmation(payload);
    }

    // Handle Gallery enquiry (and also tolerate legacy "plain form" payloads from Gallery.jsx)
    // - New shape: { type: "gallery_enquiry", form: { ... } }
    // - Legacy shape: { childName, parentName, age, city, phone, email, terms, ... }
    if (
      payload.type === 'gallery_enquiry' ||
      (!payload.type && (payload.childName || payload.parentName || payload.phone || payload.email))
    ) {
      const form = payload.form ? payload.form : payload;
      return handleGalleryEnquiry(form);
    }
    
    // Validate payload type for application submission
    if (payload.type !== 'online_application_full') {
      return jsonResponse({
        status: 'error',
        message: 'Invalid request type'
      });
    }
    
    // Process the application
    const result = processApplication(payload);
    
    // Return success response
    return jsonResponse({
      status: 'success',
      message: 'Application submitted successfully',
      applicationId: payload.applicationId,
      driveFolderUrl: result.driveFolderUrl
    });
      
  } catch (error) {
    // Return error response
    return jsonResponse({
      status: 'error',
      message: error.toString()
    });
  }
}

// ========== HANDLE GALLERY ENQUIRY ==========
function handleGalleryEnquiry(form) {
  try {
    if (!SHEET_ID || SHEET_ID === 'YOUR_SHEET_ID_HERE') {
      return jsonResponse({
        status: 'error',
        message: 'SHEET_ID is not configured in apps-script.gs'
      });
    }

    const ss = SpreadsheetApp.openById(SHEET_ID);
    const sheet = ss.getSheetByName(GALLERY_SHEET_NAME) || ss.insertSheet(GALLERY_SHEET_NAME);

    // Create header row if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Child Name',
        'Parent Name',
        'Age',
        'City',
        'Phone',
        'Email',
        'Terms Accepted'
      ]);
    }

    sheet.appendRow([
      new Date().toISOString(),
      (form && form.childName) || '',
      (form && form.parentName) || '',
      (form && form.age) || '',
      (form && form.city) || '',
      (form && form.phone) || '',
      (form && form.email) || '',
      (form && form.terms) ? 'Yes' : 'No'
    ]);

    return jsonResponse({
      status: 'success',
      message: 'Gallery enquiry submitted'
    });
  } catch (error) {
    return jsonResponse({
      status: 'error',
      message: error.toString()
    });
  }
}

// ========== PROCESS APPLICATION ==========
function processApplication(payload) {
  const { applicationId, form, education, work, attachments } = payload;
  
  // 1. Save data to Google Sheet
  const rowNumber = saveToSheet(payload);
  
  // 2. Save files to Google Drive
  const driveFolderUrl = saveFilesToDrive(applicationId, attachments);
  
  // 3. Update Drive folder URL in the sheet
  if (driveFolderUrl && rowNumber) {
    updateDriveFolderUrlInRow(rowNumber, driveFolderUrl);
  }
  
  return { driveFolderUrl };
}

// ========== SAVE TO GOOGLE SHEET ==========
function saveToSheet(payload) {
  const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
  
  // Create header row if sheet is empty
  if (sheet.getLastRow() === 0) {
    const headers = [
      'Application ID',
      'Timestamp',
      'Programme',
      'Full Name',
      'Gender',
      'Date of Birth',
      'Nationality',
      'Aadhaar',
      'Phone',
      'Alternate Phone',
      'Email',
      'Address',
      'City',
      'State',
      'Pincode',
      'Alternate Contact Name',
      'Alternate Contact Relation',
      'Alternate Contact Phone',
      'Alternate Contact Email',
      'Statement of Purpose',
      'Scholarship',
      'Declaration Place',
      'Declaration Date',
      'Declaration Signature',
      'Education - SSLC Institution',
      'Education - SSLC Board',
      'Education - SSLC Year',
      'Education - SSLC Score',
      'Education - HSC Institution',
      'Education - HSC Board',
      'Education - HSC Year',
      'Education - HSC Score',
      'Education - Diploma Institution',
      'Education - Diploma Board',
      'Education - Diploma Year',
      'Education - Diploma Score',
      'Education - UG Institution',
      'Education - UG Board',
      'Education - UG Year',
      'Education - UG Score',
      'Education - PG Institution',
      'Education - PG Board',
      'Education - PG Year',
      'Education - PG Score',
      'Education - Other Institution',
      'Education - Other Board',
      'Education - Other Year',
      'Education - Other Score',
      'Work Experience 1 - Company',
      'Work Experience 1 - Role',
      'Work Experience 1 - Year',
      'Work Experience 1 - Nature',
      'Work Experience 2 - Company',
      'Work Experience 2 - Role',
      'Work Experience 2 - Year',
      'Work Experience 2 - Nature',
      'Work Experience 3 - Company',
      'Work Experience 3 - Role',
      'Work Experience 3 - Year',
      'Work Experience 3 - Nature',
      'Fee (INR)',
      'Drive Folder URL'
    ];
    sheet.appendRow(headers);
  }
  
  // Extract education data
  const eduMap = {};
  payload.education.forEach(edu => {
    const key = edu.qualification.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    eduMap[key] = edu;
  });
  
  const getEdu = (qual) => {
    const key = qual.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return eduMap[key] || { institution: '', board: '', year: '', score: '' };
  };
  
  // Prepare row data
  const row = [
    payload.applicationId,
    new Date().toISOString(),
    payload.form.programme || '',
    payload.form.fullName || '',
    payload.form.gender || '',
    payload.form.dob || '',
    payload.form.nationality || '',
    payload.form.aadhaar || '',
    payload.form.phone || '',
    payload.form.altPhone || '',
    payload.form.email || '',
    payload.form.address || '',
    payload.form.city || '',
    payload.form.state || '',
    payload.form.pincode || '',
    payload.form.altContactName || '',
    payload.form.altContactRelation || '',
    payload.form.altContactPhone || '',
    payload.form.altContactEmail || '',
    payload.form.sop || '',
    payload.form.scholarship || '',
    payload.form.declarationPlace || '',
    payload.form.declarationDate || '',
    payload.form.declarationSignature || '',
    // SSLC
    getEdu('SSLC / 10th').institution || '',
    getEdu('SSLC / 10th').board || '',
    getEdu('SSLC / 10th').year || '',
    getEdu('SSLC / 10th').score || '',
    // HSC
    getEdu('HSC / 12th').institution || '',
    getEdu('HSC / 12th').board || '',
    getEdu('HSC / 12th').year || '',
    getEdu('HSC / 12th').score || '',
    // Diploma
    getEdu('Diploma').institution || '',
    getEdu('Diploma').board || '',
    getEdu('Diploma').year || '',
    getEdu('Diploma').score || '',
    // UG
    getEdu('UG Degree').institution || '',
    getEdu('UG Degree').board || '',
    getEdu('UG Degree').year || '',
    getEdu('UG Degree').score || '',
    // PG
    getEdu('PG Degree').institution || '',
    getEdu('PG Degree').board || '',
    getEdu('PG Degree').year || '',
    getEdu('PG Degree').score || '',
    // Other
    getEdu('Other').institution || '',
    getEdu('Other').board || '',
    getEdu('Other').year || '',
    getEdu('Other').score || '',
    // Work Experience
    payload.work[0]?.company || '',
    payload.work[0]?.role || '',
    payload.work[0]?.year || '',
    payload.work[0]?.nature || '',
    payload.work[1]?.company || '',
    payload.work[1]?.role || '',
    payload.work[1]?.year || '',
    payload.work[1]?.nature || '',
    payload.work[2]?.company || '',
    payload.work[2]?.role || '',
    payload.work[2]?.year || '',
    payload.work[2]?.nature || '',
    payload.feeInr || '',
    '' // Drive Folder URL will be updated after files are saved
  ];
  
  // Append row to sheet
  sheet.appendRow(row);
  
  // Return the row number for later update
  return sheet.getLastRow();
}

// ========== SAVE FILES TO GOOGLE DRIVE ==========
function saveFilesToDrive(applicationId, attachments) {
  if (!attachments || Object.keys(attachments).length === 0) {
    return '';
  }
  
  try {
    // Get or create the main folder
    const mainFolder = DriveApp.getFolderById(DRIVE_FOLDER_ID);
    
    // Create a subfolder for this application
    const appFolderName = `${applicationId}_${new Date().toISOString().split('T')[0]}`;
    let appFolder;
    
    const existingFolders = mainFolder.getFoldersByName(appFolderName);
    if (existingFolders.hasNext()) {
      appFolder = existingFolders.next();
    } else {
      appFolder = mainFolder.createFolder(appFolderName);
    }
    
    // Save each attachment
    for (const [key, fileData] of Object.entries(attachments)) {
      if (!fileData || !fileData.base64) continue;
      
      try {
        // Convert base64 to blob
        const base64Data = fileData.base64;
        const blob = Utilities.newBlob(
          Utilities.base64Decode(base64Data),
          fileData.type || 'application/octet-stream',
          fileData.name || key
        );
        
        // Create file in Drive folder
        const fileName = `${key}_${fileData.name || 'file'}`;
        appFolder.createFile(blob).setName(fileName);
        
      } catch (fileError) {
        // Log error but continue with other files
        console.error(`Error saving file ${key}:`, fileError);
      }
    }
    
    // Return folder URL
    return appFolder.getUrl();
    
  } catch (error) {
    console.error('Error creating Drive folder:', error);
    return '';
  }
}

// ========== UPDATE DRIVE FOLDER URL IN SHEET ==========
function updateDriveFolderUrlInRow(rowNumber, folderUrl) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    const lastCol = sheet.getLastColumn();
    if (lastCol > 0) {
      sheet.getRange(rowNumber, lastCol).setValue(folderUrl);
    }
  } catch (error) {
    console.error('Error updating Drive folder URL:', error);
  }
}

// ========== HANDLE PAYMENT CONFIRMATION ==========
function handlePaymentConfirmation(payload) {
  try {
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    const dataRange = sheet.getDataRange();
    const values = dataRange.getValues();
    
    // Find header row
    const headers = values[0];
    const appIdCol = headers.indexOf('Application ID');
    const paymentIdCol = headers.indexOf('Payment ID');
    const paymentStatusCol = headers.indexOf('Payment Status');
    
    // Add payment columns if they don't exist
    if (paymentIdCol === -1) {
      const lastCol = sheet.getLastColumn();
      sheet.getRange(1, lastCol + 1).setValue('Payment ID');
      sheet.getRange(1, lastCol + 2).setValue('Payment Status');
      sheet.getRange(1, lastCol + 3).setValue('Payment Date');
    }
    
    // Find the row with matching application ID
    for (let i = 1; i < values.length; i++) {
      if (values[i][appIdCol] === payload.applicationId) {
        const row = i + 1;
        const lastCol = sheet.getLastColumn();
        
        // Update payment information
        sheet.getRange(row, lastCol - 2).setValue(payload.paymentId || '');
        sheet.getRange(row, lastCol - 1).setValue('Paid');
        sheet.getRange(row, lastCol).setValue(new Date().toISOString());
        
        return ContentService
          .createTextOutput(JSON.stringify({
            status: 'success',
            message: 'Payment confirmation recorded'
          }))
          .setMimeType(ContentService.MimeType.JSON);
      }
    }
    
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: 'Application ID not found'
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        status: 'error',
        message: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
