import React, { useState, useEffect } from 'react';
import './LearnersReview.css';

const LearnersReview = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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
      title: "Confident in Real Sessions",
      quote: "The counselling labs at Jeppiaar gave me enough practice to handle real client sessions without fear. Faculty were in every step to guide me.",
      name: "Priya S",
      role: "10 months in Counselling",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      title: "From Theory to Practice",
      quote: "I finally understood how psychological theories work in the field. Case discussions and supervised practice changed the way I think as a counsellor.",
      name: "Arjun S",
      role: "12 months in Art Therapy",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      title: "Supportive Mentors",
      quote: "Jeppiaar's faculty and mentors genuinely care. They connected me to internships and helped me shape a clear career path in mental health.",
      name: "Meera V",
      role: "Intern, Research Wing - POLO",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      title: "Holistic Learning Environment",
      quote: "The blend of classroom learning, reflection exercises, and peer practice helped me grow both personally and professionally.",
      name: "Vikram P",
      role: "Advanced Diploma Psychology",
      rating: 4,
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      title: "Flexible for Professionals",
      quote: "With my full-time job, I needed a program that respected my schedule. Jeppiaar's weekend sessions and online support made it possible.",
      name: "Sahana R",
      role: "12 classes",
      rating: 4,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      title: "Career-Focused Guidance",
      quote: "From day one, the focus was on where we want to work after the course—schools, corporates, or clinics—and how to build the right skills for it.",
      name: "Rahul D",
      role: "Forensic Psychology learner",
      rating: 4,
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
                <p className="testimonial-quote">{testimonial.quote}</p>
                <div className="testimonial-author">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="author-image"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="60" height="60"%3E%3Ccircle fill="%23e0e0e0" cx="30" cy="30" r="30"/%3E%3Ctext fill="%23999" font-family="sans-serif" font-size="20" x="50%25" y="50%25" text-anchor="middle" dy=".3em"%3E%3C/text%3E%3C/svg%3E';
                    }}
                  />
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

