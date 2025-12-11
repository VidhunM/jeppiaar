import React from 'react';
import about1Image from '../assets/images/about1.png';
import about2Image from '../assets/images/about2.png';
import visionIcon from '../assets/icons/abt1.png';
import missionIcon from '../assets/icons/abt2.png';
import chairmanImage from '../assets/images/c1.png';
import directorImage from '../assets/images/c2.png';
import deanImage from '../assets/images/c3.png';
import icon1 from '../assets/icons/Icon1.png';
import icon2 from '../assets/icons/Icon2.png';
import icon3 from '../assets/icons/Icon3.png';
import icon4 from '../assets/icons/Icon4.png';
import icon5 from '../assets/icons/Icon5.png';
import './About.css';

const About = () => {
  const coreValues = [
    {
      title: 'Integrity',
      description: 'Upholding ethical standards in all our practices',
      icon: icon1
    },
    {
      title: 'Empathy',
      description: 'Understanding and compassion in our approach',
      icon: icon2
    },
    {
      title: 'Innovation',
      description: 'Pioneering new methods and research',
      icon: icon3
    },
    {
      title: 'Excellence',
      description: 'Commitment to highest quality education',
      icon: icon4
    },
    {
      title: 'Social Responsibility',
      description: 'Serving communities with dedication',
      icon: icon5
    }
  ];

  return (
    <div className="about-page">
      {/* About Us Banner */}
      <div className="about-banner">
        <h1>ABOUT US</h1>
      </div>

      {/* Introduction Section */}
      <section className="introduction-section">
        <div className="container">
          <div className="introduction-content">
            <div className="introduction-text">
              <h2>JEPPIAAR ACADEMY OF PSYCHOLOGY AND RESEARCH</h2>
              <p>
                Jeppiaar Academy of Psychology and Research is established to bridge the gap between psychology education and real-world application. With a vision to nurture ethical, skilled, and research-oriented professionals, the academy offers advanced courses aligned with global mental health standards.
              </p>
              <p>
                Jeppiaar Academy of Psychology and Research will offer specialised programmes in key domains of psychology, namely - Art Therapy, Counselling & Child Psychology, Counselling & Organisational Psychology, and Counselling & Forensic Psychology.
              </p>
            </div>
            <div 
              className="vertical-apply-tab"
              onClick={() => {
                const section = document.getElementById('start-career-section');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/#start-career-section';
                }
              }}
            >
              <span>Apply Now</span>
            </div>
          </div>
          <div className="introduction-images">
            <div className="intro-image">
              <img 
                src={about1Image} 
                alt="Students with certificates"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%23e0e0e0" width="600" height="400"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage Coming Soon%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
            <div className="intro-image">
              <img 
                src={about2Image} 
                alt="Certification ceremony"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="400"%3E%3Crect fill="%23e0e0e0" width="600" height="400"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="18" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EImage Coming Soon%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="vision-mission-section">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vision-card">
              <div className="card-icon">
                <img src={visionIcon} alt="Vision Icon" />
              </div>
              <h3>OUR VISION</h3>
              <div className="title-separator"></div>
              <p>
                To be India's most trusted and innovative center of excellence in psychology, setting national standards in education, research, and practice, and transforming mental health for every community empowering generations through ethical leadership, compassionate service, and lifelong learning.
              </p>
            </div>
            <div className="mission-card">
              <div className="card-icon">
                <img src={missionIcon} alt="Mission Icon" />
              </div>
              <h3>OUR MISSION</h3>
              <div className="title-separator"></div>
              <p>
                Our mission is to deliver transformative learning experiences and pioneering initiatives in counselling psychology, nurturing skilled professionals dedicated to holistic well-being. We aim to champion child rights, revolutionize mental health infrastructure, and advance psychological sciences in India. Through research, government collaborations, advanced training, and inclusive outreach, we strive to become the leading platform for psychology education, internships, and impactful policy reforms, ensuring accessible mental health care for all.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values-section">
        <div className="container">
          <h2 className="section-title">OUR CORE VALUES</h2>
          <p className="section-subtitle">
            The principles that guide our commitment to excellence in psychology education and research.
          </p>
          <div className="core-values-grid">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className={`core-value-card ${index === 2 ? 'highlighted' : ''}`}
              >
                <div className="value-icon-container">
                  <div className="value-icon">
                    <img src={value.icon} alt={value.title} />
                  </div>
                </div>
                <h4>{value.title}</h4>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="leadership-section">
        <div className="container">
          <div className="leadership-profile profile-white">
            <div className="profile-image">
              <img 
                src={chairmanImage} 
                alt="B. Jaikumar Christhurajan"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Ccircle cx="100" cy="100" r="100" fill="%23e0e0e0"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="16" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EPhoto Coming Soon%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
            <div className="profile-content">
              <h3 className="profile-title">CHAIRMAN</h3>
              <h4 className="profile-name">B. JAIKUMAR CHRISTHURAJAN, M.E.,M.B.A(UK)</h4>
              <p className="profile-role">Chairman, Jeppiaar Academy of Psychology and Research</p>
              <div className="profile-description">
                <p>
                  B. Jaikumar Christhurajan is a second-generation entrepreneur and serves as the Chairman & Managing Director of the Jeppiaar Group. With an academic foundation in Engineering and an MBA from the UK, he brings strategic leadership and vision to the organization. His commitment extends beyond business, as he is actively involved with the St. Joseph's Institute of Science and Technology Trust and serves as a patron of the Shree Raghavendra Basketball Club. His dedication to community service was evident during the Chennai floods and Vardha cyclone, where he led relief efforts. At Jeppiaar Academy of Psychology and Research, he provides strategic direction, ensuring the institution remains at the forefront of psychology education and research.
                </p>
              </div>
            </div>
          </div>

          <div className="leadership-profile profile-dark profile-reverse">
            <div className="profile-content">
              <h3 className="profile-title">FOUNDER - DIRECTOR'S MESSAGE</h3>
              <h4 className="profile-name">DR. SARANYA T. JAIKUMAR, PH.D. (EDUCATIONAL PSYCHOLOGY)</h4>
              <p className="profile-role">Founder & Director, Jeppiaar Academy of Psychology and Research</p>
              <div className="profile-description">
                <p>
                  Dr. Saranya T. Jaikumar is a distinguished psychologist with a Ph.D. in Educational Psychology. As the Founder and Director of Jeppiaar Academy of Psychology and Research, she brings a wealth of academic expertise and a passion for advancing psychology education.
                </p>
                <p>
                  Her research interests span educational psychology, child development, and innovative teaching methodologies. She is a strong advocate for practice-oriented education and has been instrumental in developing the academy's comprehensive curriculum that bridges theory and application.
                </p>
                <p>
                  Under her leadership, the academy has established partnerships with leading institutions and developed programs that prepare students to address real-world mental health challenges. She is committed to fostering an environment of excellence, innovation, and social responsibility.
                </p>
              </div>
            </div>
            <div className="profile-image">
              <img 
                src={directorImage} 
                alt="Dr. Saranya T. Jaikumar"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Ccircle cx="100" cy="100" r="100" fill="%23e0e0e0"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="16" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EPhoto Coming Soon%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
          </div>

          <div className="leadership-profile profile-white">
            <div className="profile-image">
              <img 
                src={deanImage} 
                alt="Dr. S. Usharani"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Ccircle cx="100" cy="100" r="100" fill="%23e0e0e0"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="16" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EPhoto Coming Soon%3C/text%3E%3C/svg%3E';
                }}
              />
            </div>
            <div className="profile-content">
              <h3 className="profile-title">DEAN - ACADEMICS</h3>
              <h4 className="profile-name">DR. S. USHARANI, PH.D. (PSYCHOLOGY)</h4>
              <p className="profile-role">Dean, Jeppiaar Academy of Psychology and Research</p>
              <div className="profile-description">
                <p>
                  Dr. S. Usharani is an accomplished academician and psychologist with extensive experience in psychology education and research. With a Ph.D. in Psychology, she has dedicated her career to advancing the field through teaching, research, and academic leadership.
                </p>
                <p>
                  As Dean of Academics, she oversees the development and implementation of the academy's academic programs, ensuring they meet the highest standards of excellence. Her expertise spans various domains of psychology, and she is committed to creating learning experiences that are both rigorous and practical.
                </p>
                <p>
                  She has been instrumental in developing the academy's curriculum, establishing quality assurance processes, and mentoring faculty and students. Her leadership has contributed significantly to the academy's reputation for academic excellence and innovation in psychology education.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
