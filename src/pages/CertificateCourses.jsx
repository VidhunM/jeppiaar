import React from 'react';
import './CertificateCourses.css';

import bannerGuidance from '../assets/images/f1.jpeg';
import bannerBasics from '../assets/images/image2.png';
import bannerInternship from '../assets/images/o1.jpeg';
import bannerYoungResearcher from '../assets/images/our2.png';
import bannerChildCounselling from '../assets/images/cp4.jpg';
import bannerArtTherapy from '../assets/images/at2.jpeg';
import bannerForensic from '../assets/images/cfp4.jpeg';
import bannerOrganizational from '../assets/images/cop4.jpeg';

const CertificateCourses = () => {
  const courses = [
    {
      id: 'diploma-guidance-meeting',
      title: 'Diploma Guidance Meeting',
      provider: 'JEPPIAAR',
      priceLabel: 'Free',
      image: bannerGuidance,
      href: 'https://www.voxdemy.com/'
    },
    {
      id: 'psychology-basics-jan-2026',
      title: 'Psychology Basics Course Jan 2026',
      provider: 'JEPPIAAR',
      price: 7500,
      originalPrice: 10000,
      image: bannerBasics,
      href: 'https://www.voxdemy.com/courses/Psychology-Basics-Course-Jan-2026-68569c00e0203b5c9661eafa'
    },
    {
      id: 'jeppiaar-internship',
      title: 'Jeppiaar Internship',
      provider: 'JEPPIAAR',
      price: 30000,
      originalPrice: 50000,
      image: bannerInternship,
      href: 'https://www.voxdemy.com/courses/Voxdemy-Internship-May-2025-Batch-680dcda04238861d5cad3f02'
    },
    {
      id: 'young-researcher',
      title: 'YOUNG RESEARCHER',
      provider: 'JEPPIAAR',
      price: 20000,
      originalPrice: 25000,
      image: bannerYoungResearcher,
      href: 'https://youngvox.com/'
    },
    {
      id: 'child-counselling-foundation',
      title: 'Child Counselling Foundation Workshop',
      provider: 'JEPPIAAR',
      price: 2500,
      originalPrice: 4000,
      image: bannerChildCounselling,
      href: '#'
    },
    {
      id: 'art-therapy-basics',
      title: 'Art Therapy Basics Certificate',
      provider: 'JEPPIAAR',
      price: 3500,
      originalPrice: 5000,
      image: bannerArtTherapy,
      href: '#'
    },
    {
      id: 'forensic-psychology-primer',
      title: 'Forensic Psychology Primer',
      provider: 'JEPPIAAR',
      price: 3000,
      originalPrice: 4500,
      image: bannerForensic,
      href: '#'
    },
    {
      id: 'organizational-psychology-starter',
      title: 'Organizational Psychology Starter',
      provider: 'JEPPIAAR',
      price: 3000,
      originalPrice: 4500,
      image: bannerOrganizational,
      href: '#'
    }
  ];

  const formatINR = (value) => {
    try {
      return new Intl.NumberFormat('en-IN').format(value);
    } catch {
      return String(value);
    }
  };

  return (
    <div className="certificate-courses-page">
      <section className="certificate-courses-hero">
        <div className="container">
          <h1>Certificate Courses</h1>
          <p>Explore our short-term certificate offerings and workshops</p>
        </div>
      </section>

      <section className="certificate-courses-content">
        <div className="container">
          <div className="certificate-courses-grid">
            {courses.map((course) => (
              <a
                key={course.id}
                className="certificate-course-card"
                href={course.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="certificate-course-image">
                  <img src={course.image} alt={course.title} loading="lazy" />
                </div>

                <div className="certificate-course-body">
                  <h3 className="certificate-course-title">{course.title}</h3>

                  <div className="certificate-course-meta">
                    <div className="certificate-course-provider">{course.provider}</div>

                    {course.priceLabel ? (
                      <div className="certificate-course-price free">{course.priceLabel}</div>
                    ) : (
                      <div className="certificate-course-price">
                        {typeof course.originalPrice === 'number' && (
                          <span className="original">₹{formatINR(course.originalPrice)}</span>
                        )}
                        <span className="current">₹{formatINR(course.price)}</span>
                      </div>
                    )}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificateCourses;

