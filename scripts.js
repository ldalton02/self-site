// function to animate bar loading
const snapLoad = (element) => {
  element.style.width = element.getAttribute('aria-valuenow') + '%';
}

const bars = $('.progress-bar');

$(document).ready(function () {
  $('body').scrollspy({
    target: '.navbar'
  })

  /// observer to fill the percentage of the skills bars
  observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(current => {
      console.log(current);
      if (current.isIntersecting) {
        snapLoad(current.target);
        observer.unobserve(current.target);
      }
    })
  }, {
    threshold: [1.0]
  });

  const allSections = document.querySelectorAll('.progress-bar');

  allSections.forEach(section => {
    observer.observe(section);
  });

  var typed = new Typed(".text-slider", {
    strings: ['Luke Dalton.'],
    typeSpeed: 40,
    startDelay: 1000,
  });

  document.getElementById('contact-button-top').addEventListener('click', function () {
    document.getElementById('contact-page').scrollIntoView();
  })

  document.getElementById('email-button').addEventListener('click', function () {
    window.open('mailto:lukedalton221@gmail.com');
  })

  document.getElementById('linkedin-button').addEventListener('click', function () {
    window.open('https://www.linkedin.com/in/luke-dalton-195996209/');
  })

  document.getElementById('github-button').addEventListener('click', function () {
    window.open('https://github.com/ldalton02');
  })

});