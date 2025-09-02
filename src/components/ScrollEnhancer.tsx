import { useEffect } from 'react';

const ScrollEnhancer = () => {
  useEffect(() => {
    // Smooth scroll polyfill for browsers that don't support CSS scroll-behavior
    const smoothScrollPolyfill = () => {
      // Check if smooth scrolling is supported
      if ('scrollBehavior' in document.documentElement.style) {
        return;
      }

      // Polyfill for smooth scrolling
      const links = document.querySelectorAll('a[href^="#"]');
      
      links.forEach(link => {
        link.addEventListener('click', (e) => {
          e.preventDefault();
          const target = document.querySelector(link.getAttribute('href') || '');
          
          if (target) {
            const targetPosition = (target as HTMLElement).offsetTop - 80; // Account for fixed header
            const startPosition = window.pageYOffset;
            const distance = targetPosition - startPosition;
            const duration = 800;
            let start: number | null = null;

            const animation = (currentTime: number) => {
              if (start === null) start = currentTime;
              const timeElapsed = currentTime - start;
              const run = ease(timeElapsed, startPosition, distance, duration);
              window.scrollTo(0, run);
              if (timeElapsed < duration) requestAnimationFrame(animation);
            };

            const ease = (t: number, b: number, c: number, d: number) => {
              t /= d / 2;
              if (t < 1) return c / 2 * t * t + b;
              t--;
              return -c / 2 * (t * (t - 2) - 1) + b;
            };

            requestAnimationFrame(animation);
          }
        });
      });
    };

    // Parallax effect for hero elements
    const parallaxElements = () => {
      const scrolled = window.pageYOffset;
      const parallax = document.querySelectorAll('.parallax');
      
      parallax.forEach(element => {
        const speed = parseFloat(element.getAttribute('data-speed') || '0.5');
        const yPos = -(scrolled * speed);
        (element as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    // Add scroll-based animations
    const observeElements = () => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            entry.target.classList.remove('opacity-0');
          }
        });
      }, observerOptions);

      // Observe elements with animation classes
      const animateElements = document.querySelectorAll('.animate-on-scroll');
      animateElements.forEach(el => {
        el.classList.add('opacity-0');
        observer.observe(el);
      });
    };

    // Enhanced page transitions
    const pageTransitions = () => {
      // Add a subtle page load animation
      document.body.style.opacity = '0';
      document.body.style.transition = 'opacity 0.3s ease-in-out';
      
      setTimeout(() => {
        document.body.style.opacity = '1';
      }, 100);
    };

    // Initialize all enhancements
    smoothScrollPolyfill();
    observeElements();
    pageTransitions();
    
    // Add scroll event listener for parallax
    window.addEventListener('scroll', parallaxElements, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', parallaxElements);
    };
  }, []);

  return null; // This is a utility component that doesn't render anything
};

export default ScrollEnhancer;