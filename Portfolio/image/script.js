// Initialize AOS
AOS.init({
    duration: 1000,
    easing: 'ease-in-out',
    once: true
  });
  
  // Add scroll effect to navbar (if added in future)
  window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
      header.classList.add('shadow');
    } else {
      header.classList.remove('shadow');
    }
  });
  