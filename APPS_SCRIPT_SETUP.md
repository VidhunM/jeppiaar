# Google Apps Script Setup Guide

This guide will help you set up the Google Apps Script to handle form submissions from your `ApplyOnline.jsx` component.

## Prerequisites

- A Google account
- Access to Google Sheets and Google Drive

## Step-by-Step Setup

### Step 1: Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it something like "Jeppiaar Applications"
4. Copy the **Sheet ID** from the URL:
   - URL format: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
   - The Sheet ID is the long string between `/d/` and `/edit`

### Step 2: Create a Google Drive Folder

1. Go to [Google Drive](https://drive.google.com)
2. Create a new folder (e.g., "Jeppiaar Application Attachments")
3. Right-click the folder and select "Get link" or "Share"
4. Copy the **Folder ID** from the URL:
   - URL format: `https://drive.google.com/drive/folders/FOLDER_ID_HERE`
   - The Folder ID is the long string after `/folders/`

### Step 3: Create the Apps Script

1. Go to [Google Apps Script](https://script.google.com)
2. Click "New Project"
3. Delete the default `myFunction` code
4. Copy the entire contents of `apps-script.gs` and paste it into the editor
5. Update the configuration constants at the top:
   ```javascript
   const SHEET_ID = 'YOUR_SHEET_ID_HERE'; // Replace with your Sheet ID
   const DRIVE_FOLDER_ID = 'YOUR_DRIVE_FOLDER_ID_HERE'; // Replace with your Folder ID
   ```
6. Click "Save" (Ctrl+S or Cmd+S)
7. Name your project (e.g., "Jeppiaar Application Handler")

### Step 4: Deploy as Web App

1. Click "Deploy" → "New deployment"
2. Click the gear icon ⚙️ next to "Select type" and choose "Web app"
3. Configure the deployment:
   - **Description**: "Jeppiaar Application Form Handler" (optional)
   - **Execute as**: "Me" (your account)
   - **Who has access**: 
     - For public access: "Anyone" (recommended for form submissions)
     - For more security: "Anyone with Google account"
4. Click "Deploy"
5. **Copy the Web App URL** - you'll need this for your React app

### Step 5: Authorize Permissions

1. When you first run the script, Google will ask for permissions
2. Click "Review Permissions"
3. Choose your Google account
4. Click "Advanced" → "Go to [Your Project Name] (unsafe)" (this is safe, it's your own script)
5. Click "Allow" to grant permissions:
   - Access to Google Sheets (to save form data)
   - Access to Google Drive (to save file attachments)

### Step 6: Update Your React App

1. Add the Web App URL to your `.env` file:
   ```env
   VITE_ADMISSION_APPLICATION_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec
   ```
2. Or update the `DEFAULT_SCRIPT_URL` in `ApplyOnline.jsx` if you prefer

### Step 7: Test the Setup

1. You can test using the `testSubmission()` function in Apps Script:
   - In the Apps Script editor, select `testSubmission` from the function dropdown
   - Click "Run"
   - Authorize permissions if prompted
   - Check your Google Sheet and Drive folder for test data

2. Or test directly from your React app by submitting a form

## Troubleshooting

### Error: "Script function not found"
- Make sure the function is named exactly `doPost` (case-sensitive)
- Check that you've saved the script

### Error: "Access denied" or "Permission denied"
- Make sure you've authorized all permissions
- Check that "Who has access" is set to "Anyone" or "Anyone with Google account"
- Try redeploying the web app

### Files not saving to Drive
- Verify the `DRIVE_FOLDER_ID` is correct
- Check that you have write permissions to the folder
- Look at the Apps Script execution log for errors

### Data not appearing in Sheet
- Verify the `SHEET_ID` is correct
- Check that the sheet tab is named "Applications" (or update `SHEET_NAME` constant)
- Make sure the sheet is not protected/read-only

### CORS Errors
- Google Apps Script web apps handle CORS automatically
- If you see CORS errors, make sure you're using the correct deployment URL (ends with `/exec`)
- Try redeploying as a new version

## Security Considerations

1. **Access Control**: Consider using "Anyone with Google account" instead of "Anyone" for better security
2. **Rate Limiting**: Google Apps Script has daily quotas. For high-volume applications, consider:
   - Using Google Cloud Functions
   - Implementing your own backend API
3. **Data Validation**: The script includes basic error handling, but you may want to add more validation
4. **File Size Limits**: Google Drive has file size limits. The script handles errors gracefully

## Monitoring

- View execution logs in Apps Script: "Executions" tab
- Monitor quota usage: "Quotas" tab
- Check Google Sheet for new submissions
- Check Google Drive folder for uploaded files

## File Structure in Drive

Each application creates a folder named: `{ApplicationID}_{Date}`
- Example: `JAPR-20260124123456-ABC123_2026-01-24`

Inside each folder, files are named: `{fieldKey}_{originalFileName}`
- Example: `photo_passport.jpg`, `aadhaarCopy_aadhaar.pdf`

## Support

If you encounter issues:
1. Check the Apps Script execution logs
2. Verify all IDs are correct
3. Test with the `testSubmission()` function
4. Check Google's Apps Script quotas and limits
