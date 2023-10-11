// intersectionObserver.js

// Initialize the Intersection Observer
export const initIntersectionObserver = () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // If the element is in the viewport, add the 'show' class
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          // If the element is not in the viewport, remove the 'show' class
          entry.target.classList.remove('show');
        }
      });
    });
  
    // Grab all elements with the class 'hidden'
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  };
  
  