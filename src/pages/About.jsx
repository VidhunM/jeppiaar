import React, { useEffect, useState } from 'react';
import ab01Image from '../assets/images/ab01.jpg';
import visionIcon from '../assets/icons/abt1.png';
import missionIcon from '../assets/icons/abt2.png';
import chairmanImage from '../assets/images/c1.png';
import directorImage from '../assets/images/c2.jpg';
import deanImage from '../assets/images/c3.jpg';
import chrishanthiImage from '../assets/images/c4.jpg';
import banupriyaImage from '../assets/images/c5.jpg';
import augustineImage from '../assets/images/c6.jpg';
import nirmalaImage from '../assets/images/c7.jpeg';
import sangeethaImage from '../assets/images/c8.jpg';
import icon1 from '../assets/icons/Icon1.png';
import icon2 from '../assets/icons/Icon2.png';
import icon3 from '../assets/icons/Icon3.png';
import icon4 from '../assets/icons/Icon4.png';
import icon5 from '../assets/icons/Icon5.png';
import TeamMemberModal from '../components/TeamMemberModal/TeamMemberModal';
import './About.css';

const About = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

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

  useEffect(() => {
    if (isMobile) {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % coreValues.length);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [isMobile, coreValues.length]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.scroll-from-left, .scroll-from-right, .scroll-from-center');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const teamMembers = [
    {
      name: 'B. Jaikumar',
      role: 'Chairman',
      image: chairmanImage,
      description: `B. Jaikumar ChristhuRajan is a visionary second-generation entrepreneur and the Chairman & Managing Director of the Jeppiaar Group. With a strong academic foundation in Engineering and an MBA from the UK, he brings strategic leadership, administrative excellence, and a people-centric approach to all Jeppiaar institutions. He currently serves on the Board of Trustees of Sancta Maria Educational Trust.

An educationalist since 2010, he has played a pivotal role as Director of the Jeppiaar Group of Educational Institutions. Through his training and placement initiatives, he has mentored and guided hundreds of students across diverse disciplines, helping them build successful careers. A strong advocate for youth development, he is the patron of JCR Basketball Club, which trains over 250 children free of cost and organizes All India Basketball Tournaments for more than 22 years. Known for his compassion and community service, Jaikumar is deeply respected for his contributions during the 2015 Chennai floods and 2016 Vardha cyclone, where his relief efforts reached thousands.

At Jeppiaar Academy of Psychology and Research, he provides strategic direction and ensures that the academy grows as a centre of excellence dedicated to mental health education, youth empowerment, and holistic societal wellbeing.`
    },
    {
      name: 'Dr. Saranya Jaikumar',
      role: 'Founder & Director',
      image: directorImage,
      description: `Dr. Saranya Jaikumar is one of India's first Doctorates in Educational Psychology and has made a significant impact in the field through her academic expertise and commitment to student development. As the founder of Voxdemy, she has tutored and mentored more than 7,000 psychology students across the globe, empowering learners with practical skills, academic clarity, and professional confidence. She serves as an Independent Expert to the Ministry of Women & Child Development, Government of India, Tamil Nadu Police Department, Samagra Shiksha, and numerous schools and colleges across India.

A former Member of the Tamil Nadu Commission for Protection of Child Rights, Dr. Saranya is widely acknowledged as a leading advocate for POCSO awareness and digital safety for children. She has conducted her flagship program "Raksha" across 3000+ schools, addressing students, teachers, and parents.

Dr. Saranya is also a Consultant Educational Psychologist at Shadithya Child Therapy Centre and a Child Protection Policy Expert for various international accreditation bodies. She serves as visiting faculty, programme head, keynote speaker, jury panelist, and motivational speaker at national and international platforms. Her articles, interviews, and expert opinions are widely featured in leading newspapers, magazines, TV channels, and digital media.`
    },
    {
      name: 'Dr. Usharani',
      role: 'Dean - Academics',
      image: deanImage,
      description: `Dr. S. Usharani is an accomplished academician and psychologist with extensive experience in psychology education and research. With a Ph.D. in Psychology, she has dedicated her career to advancing the field through teaching, research, and academic leadership.

As Dean of Academics, she oversees the development and implementation of the academy's academic programs, ensuring they meet the highest standards of excellence. Her expertise spans various domains of psychology, and she is committed to creating learning experiences that are both rigorous and practical.

She has been instrumental in developing the academy's curriculum, establishing quality assurance processes, and mentoring faculty and students. Her leadership has contributed significantly to the academy's reputation for academic excellence and innovation in psychology education.`
    },
    {
      name: 'Dr. C. Nirmala',
      role: 'Program Head, Polo Research',
      image: nirmalaImage,
      description: `Dr. C. Nirmala is a Conservative and Endodontic Dental Surgeon with a strong passion for research, innovation, and education. She firmly believes that introducing children to the fundamentals of research during their school years can help channel their natural curiosity into structured inquiry, creative problem-solving, and innovative thinking. With this vision, she founded the Junior Researcher Learning Adventure (JRLA) Program, an initiative dedicated to nurturing research skills among school students. Through JRLA, Dr. Nirmala mentors young learners in research methodology, scientific writing, article preparation, and effective presentations, empowering them to identify research gaps in everyday life and develop solution-oriented thinking.

JRLA has collaborated with Polo Research to deliver high-quality, structured research training for both teachers and students, ensuring a strong foundation in academic inquiry and innovation. Together, JRLA and Polo Research strive to build a culture of research excellence in schools by equipping young minds with the skills, confidence, and mindset required to become future inventors, innovators, and leaders across diverse fields.`
    },
    {
      name: 'Dr. Sangeetha Baid',
      role: 'Program Head, Mind Mastery',
      image: sangeethaImage,
      description: `An accomplished Personality Development and Public Speaking Coach with a Ph.D. in Psychology, she is dedicated to empowering individuals through transformative learning experiences. Her work focuses on building confidence, emotional intelligence, and effective communication skills that enable success in both personal and professional domains.

Currently associated with Voxdemy, Chennai, she trains counselors to manage student interactions with empathy, clarity, and professionalism. Previously, she served as a Relationship and Life Detox Coach with the Department of Social Defence, Government of Tamil Nadu, where she provided personalized guidance using NLP and psychological counseling techniques. Her professional journey is further enriched by over a decade of volunteer social work (2005–2017), during which she led initiatives supporting women's empowerment, leadership development, and life skills.

A Certified NLP Practitioner, Yoga Protocol Instructor (Ministry of AYUSH), and an award-winning mentor, she has received both national and international recognition for her contributions to personal development. Her honors include the IIW SHE Inspires Award 2023 (Mentor Category) at the House of Commons, London, and the Women Power Summit & Award 2023 at the National Stock Exchange of India, Mumbai.

She actively collaborates with individuals, institutions, and organizations to foster positive workplace culture, resilience, and holistic growth, creating environments where people thrive with confidence, clarity, and purpose.`
    },
    {
      name: 'Chrishanthi',
      role: 'Deputy Director',
      image: chrishanthiImage,
      description: `Chrishanthi Vijay is an academic and human resources professional with a multidisciplinary background in commerce, management and psychology. She holds qualifications in B.Com, MBA and M.A. in Psychology, enabling her to integrate business understanding with a strong insight into human behaviour and organisational leadership.

She serves as Head of Faculty at VOXdemy, where she oversees academic planning, faculty coordination, training systems, and student development. She also works as HR Head at POLO Research Organisation, leading HR strategy, organisational culture initiatives, talent development and employee well-being.

Chrishanthi Vijay is known for her empathetic leadership style, strong communication skills, and people-centric approach, with strengths in team coordination, academic development, HR management, conflict resolution and organisational planning.`
    },
    {
      name: 'Banupriya',
      role: 'Joint Director',
      image: banupriyaImage,
      description: `Banupriya is a Psychologist, Certified Emotional Intelligence Coach Practitioner, and Career Coach who has made a meaningful impact in the field through her extensive counselling, training, and wellbeing initiatives. She is deeply committed to strengthening emotional resilience, student wellbeing, and mental health systems across educational and professional settings. Her work focuses on integrating psychology with practical, real-world interventions to support individuals across different life stages.

She has conducted 1000+ workshops, comprehensive school counselling, special education, teacher training, and mental health programmes across India, contributing to the development of structured wellbeing frameworks within educational institutions. She has conducted 800+ workshops and training programmes, empowering psychology students, educators, professionals, and individuals with practical skills, emotional intelligence, and personal growth tools. She also serves as the Chief Operating Officer (COO) of YoungVox, where she supports youth development initiatives, programme execution, and organisational growth while strengthening leadership and community engagement.

Her expertise extends to delivering specialised emotional intelligence and wellbeing sessions for Karnataka Administrative Service (KAS) officers, as well as workplace wellbeing and leadership programmes for corporate organisations, with a focus on stress management, interpersonal effectiveness, and sustainable performance. Through her work, she continues to contribute to building emotionally healthy individuals, institutions, and communities.`
    },
    {
      name: 'Augustine',
      role: 'Department Head, Art Therapy',
      image: augustineImage,
      description: `Augustine Thilak brings a unique blend of artistic and psychological expertise to his role as Department Head, Art Therapy. With qualifications in BFA (Bachelor of Fine Arts) and M.Sc, he combines creative expression with scientific understanding to enhance the academy's academic programs.

His multidisciplinary background enables him to approach psychology education from innovative perspectives, integrating arts-based interventions and creative methodologies into the curriculum. As Department Head, Art Therapy, he plays a crucial role in developing comprehensive academic frameworks that prepare students for diverse career paths in psychology.

Augustine Thilak is committed to fostering an environment that encourages both analytical thinking and creative problem-solving, ensuring that students receive a well-rounded education that prepares them for the evolving field of psychology.`
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
            <div className="introduction-text scroll-from-left">
              <h2>JEPPIAAR ACADEMY<br/> <span style={{ fontSize: '0.85em' }}>OF PSYCHOLOGY AND RESEARCH</span></h2>
              <p>
              Jeppiaar Academy of Psychology and Research was established to bridge the gap between psychology education and real world application. With a vision to nurture ethical, skilled, and research-oriented professionals, the academy offers advanced courses aligned with global mental health standards.
              </p>
              <p>
              The academy provides advanced diploma programs in key domains of psychology, including Counselling and Child Psychology, Counselling and Organisational Psychology, Counselling and Forensic Psychology, and Art Therapy.
              </p>
            </div>
          </div>
          <div className="introduction-images">
            <div className="intro-image scroll-from-center">
              <div className="intro-image-overlay" aria-hidden="true">
              
              </div>
              <img 
                src={ab01Image} 
                alt="Jeppiaar Academy of Psychology and Research"
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
            <div className="vision-card scroll-from-left">
              <div className="card-icon">
                <img src={visionIcon} alt="Vision Icon" />
              </div>
              <h3>OUR VISION</h3>
              <div className="title-separator"></div>
              <p>
                To be India's most trusted and innovative center of excellence in psychology, setting national standards in education, research, and practice, and transforming mental health across communities by empowering generations through ethical leadership, compassionate service, and lifelong learning.
              </p>
            </div>
            <div className="mission-card scroll-from-right">
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

      {/* Meet Our Team Section */}
      <section className="meet-our-team-section">
        <div className="container">
          <h2 className="team-section-title scroll-from-center">MEET OUR TEAM</h2>
          <p className="team-section-subtitle scroll-from-center">
            Distinguished experts guiding our strategic direction and academic excellence.
          </p>
          <div className="team-members-grid">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className={`team-member-card scroll-from-${index % 2 === 0 ? 'left' : 'right'} ${index === 3 || index === 4 || index === 5 ? 'team-member-zoom-fix' : ''}`}
                onClick={() => setSelectedMember(member)}
              >
                <div className="team-member-image">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className={[
                      index === 3 ? 'team-img-center' : '',
                      index === 4 ? 'team-img-zoom' : '',
                      // c4 (Chrishanthi) - slight zoom on the card
                      index === 5 ? 'team-img-zoom-slight' : '',
                      // Show top side for c3 (Dean) and c6 (Augustine) images
                      index === 2 || index === 7 ? 'team-img-top' : ''
                    ].filter(Boolean).join(' ')}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect fill="%23e0e0e0" width="300" height="300"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="16" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3EPhoto Coming Soon%3C/text%3E%3C/svg%3E';
                    }}
                  />
                </div>
                <div className="team-member-info">
                  <h4 className="team-member-name">{member.name}</h4>
                  <p className="team-member-role">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="core-values-section">
        <div className="container">
          <h2 className="section-title scroll-from-center">OUR CORE VALUES</h2>
          <p className="section-subtitle scroll-from-center">
            The principles that guide our commitment to excellence in psychology education and research.
          </p>
          <div className={`core-values-grid ${isMobile ? 'core-values-slider' : ''}`}>
            {isMobile ? (
              <>
                <div className="core-values-slider-wrapper" style={{ transform: `translateX(calc(-${currentSlide * 100}% - ${currentSlide * 1.5}rem))` }}>
                  {coreValues.map((value, index) => (
                    <div key={index} className="core-value-card core-value-slide">
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
                <button className="core-value-nav prev" onClick={() => setCurrentSlide((prev) => (prev - 1 + coreValues.length) % coreValues.length)} aria-label="Previous value">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="core-value-nav next" onClick={() => setCurrentSlide((prev) => (prev + 1) % coreValues.length)} aria-label="Next value">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <div className="core-value-dots">
                  {coreValues.map((_, index) => (
                    <button
                      key={index}
                      className={`core-value-dot ${index === currentSlide ? 'active' : ''}`}
                      onClick={() => setCurrentSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            ) : (
              coreValues.map((value, index) => (
                <div 
                  key={index} 
                  className={`core-value-card scroll-from-${index % 2 === 0 ? 'left' : 'right'}`}
                >
                  <div className="value-icon-container">
                    <div className="value-icon">
                      <img src={value.icon} alt={value.title} />
                    </div>
                  </div>
                  <h4>{value.title}</h4>
                  <p>{value.description}</p>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <TeamMemberModal 
        isOpen={selectedMember !== null}
        onClose={() => setSelectedMember(null)}
        member={selectedMember}
      />
    </div>
  );
};

export default About;
