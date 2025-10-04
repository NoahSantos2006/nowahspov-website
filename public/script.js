const observer = new IntersectionObserver(entries => { // Intersection Overserver is a browser API that watched elements and tells when they enter and leave the viewport
  entries.forEach(entry => {
    if (entry.isIntersecting) { // When the element becomes visible
      entry.target.classList.add('visible'); // adds 'visible' class to the img
    }
    else {
        entry.target.classList.remove('visible');
    }
  });
});

document.querySelectorAll('.fade-on-scroll').forEach(img => { // selects all elements that have the class .fade-on-scroll
  observer.observe(img);
});
