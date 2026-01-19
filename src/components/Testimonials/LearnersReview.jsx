import React, { useState, useEffect } from 'react';
import './LearnersReview.css';

const LearnersReview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedTestimonials, setExpandedTestimonials] = useState({});

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const testimonials = [
    {
      id: 1,
      title: "Recognizing Strengths and Weaknesses",
      quote: "This course stands out as one of the best, aiding me in recognizing my strengths and weaknesses while providing effective strategies for handling toddlers. Dr. Saranya mam skillfully conveyed concepts, illustrating them with straightforward examples. Despite lacking a background in Psychology, this course sparked my interest to delve deeper into the field. Gratitude to Dr. Saranya mam and Chrishanthi mam for their unwavering support throughout the entire program.",
      name: "Srividhya Sampathkumar",
      role: "",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      title: "Useful for Beginners",
      quote: "It will be very useful for beginners who plan to pursue a degree in psychology. I really love the way Dr. Saranaya ma'am is teaching, especially her stories and examples. I am working as a counselor and it helps me to brush up my basics.",
      name: "Brindha. S",
      role: "Working as a Counselor",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      title: "Changed My Perspective",
      quote: "I am a teacher and this course has made me change my perspective about student behaviour completely. I handle them very effectively now.",
      name: "Keerthana S",
      role: "Teacher",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      title: "Interesting and Informative",
      quote: "This course was a very interesting and informative class. It helps me a lot to handle the situations. Thank you to saranya mam and kirushanthy mam.",
      name: "PRASANNALAKSHMI",
      role: "",
      rating: 5,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      title: "A Turning Point",
      quote: "I am working as a Head Master. The course help me to understand the situation better. The way Saranya mam handled the class is amazing. The course is a turning point of my life.",
      name: "U.B.Pooja Sri",
      role: "Head Master",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      title: "Metamorphosis in Personality",
      quote: "A very excellent course, helps to realize your self, their is a drastic change in the personality and behavior, Dr. Saranya has been gifted with the velour to create a metamorphosis in us. Thus helping us to face the society with a better understanding. I strongly recommend that each one of us should under go this course immaterial of the age.",
      name: "Ramani",
      role: "",
      rating: 5,
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const slidesToShow = isMobile ? 1 : 3;
      const maxSlide = Math.max(0, testimonials.length - slidesToShow);
      setCurrentSlide((prev) => {
        if (prev >= maxSlide) return 0;
        return prev + 1;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [isMobile, testimonials.length]);

  const nextSlide = () => {
    const slidesToShow = isMobile ? 1 : 3;
    const maxSlide = Math.max(0, testimonials.length - slidesToShow);
    setCurrentSlide((prev) => {
      if (prev >= maxSlide) return 0;
      return prev + 1;
    });
  };

  const prevSlide = () => {
    const slidesToShow = isMobile ? 1 : 3;
    const maxSlide = Math.max(0, testimonials.length - slidesToShow);
    setCurrentSlide((prev) => {
      if (prev <= 0) return maxSlide;
      return prev - 1;
    });
  };

  const toggleExpand = (testimonialId) => {
    setExpandedTestimonials(prev => ({
      ...prev,
      [testimonialId]: !prev[testimonialId]
    }));
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <span key={i} className={i < rating ? 'star-filled' : 'star-empty'}>
          ★
        </span>
      );
    }
    return stars;
  };

  const slidesToShow = isMobile ? 1 : 3;
  const gapPercent = isMobile ? 0 : 1.5; // gap as percentage of container
  const slideWidth = isMobile ? 100 : (100 - (gapPercent * (slidesToShow - 1))) / slidesToShow;

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title scroll-from-center">WHAT OUR LEARNERS SAY</h2>
        <div className="testimonials-slider">
          <div 
            className="testimonials-slider-wrapper" 
            style={{ 
              transform: isMobile 
                ? `translateX(-${currentSlide * 100}%)` 
                : `translateX(calc(-${currentSlide * slideWidth}% - ${currentSlide * gapPercent}%))`
            }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="testimonial-card testimonial-slide"
                style={{ width: isMobile ? '100%' : `${slideWidth}%` }}
              >
                <div className="stars">{renderStars(testimonial.rating)}</div>
                <h3 className="testimonial-title">{testimonial.title}</h3>
                <div className="testimonial-quote-wrapper">
                  <p className={`testimonial-quote ${expandedTestimonials[testimonial.id] ? 'expanded' : ''}`}>
                    {testimonial.quote}
                  </p>
                  {testimonial.quote.length > 150 && (
                    <button 
                      className="read-more-btn"
                      onClick={() => toggleExpand(testimonial.id)}
                    >
                      {expandedTestimonials[testimonial.id] ? 'Read less' : 'Read more'}
                    </button>
                  )}
                </div>
                <div className="testimonial-author">
                  <div className="author-info">
                    <p className="author-name">{testimonial.name}</p>
                    <p className="author-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="testimonial-nav prev" onClick={prevSlide} aria-label="Previous testimonial">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 19L8 12L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button className="testimonial-nav next" onClick={nextSlide} aria-label="Next testimonial">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 5L16 12L9 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <div className="testimonial-dots">
            {Array.from({ length: Math.max(1, testimonials.length - (isMobile ? 0 : 2)) }).map((_, index) => (
              <button
                key={index}
                className={`testimonial-dot ${index === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnersReview;

