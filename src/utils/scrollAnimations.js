// Scroll Animation Utility
let currentObserver = null;

export const initScrollAnimations = () => {
  // Clean up existing observer if any
  if (currentObserver) {
    const allElements = document.querySelectorAll(
      '.scroll-from-left, .scroll-from-right, .scroll-from-center, .animate-on-scroll'
    );
    allElements.forEach(el => currentObserver.unobserve(el));
  }

  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        // Only observe once for better performance
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  currentObserver = observer;

  // Find all elements with scroll animation classes that haven't been animated yet
  const animatedElements = document.querySelectorAll(
    '.scroll-from-left:not(.animated), .scroll-from-right:not(.animated), .scroll-from-center:not(.animated), .animate-on-scroll:not(.animated)'
  );

  animatedElements.forEach(el => observer.observe(el));

  return () => {
    if (currentObserver) {
      animatedElements.forEach(el => currentObserver.unobserve(el));
    }
  };
};

