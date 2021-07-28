// function to animate bar loading
const snapLoad = (element) => {
  element.style.width = element.getAttribute('aria-valuenow') + '%';
}

const bars = $('.progress-bar');

$(document).ready(function () {
  console.log('hello');
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

  var button = document.getElementsByClassName('collapsible');
  for (each in button) {
    each.onclick = function() {
      let content = document.getElementById('collapsible1');
      content.style.display = 'block';
      let height = content.scrollHeight + 'px';
      this.classList.toggle('active');
      if (content.classList.contains('is-visible')) {
        content.classList.remove('is-visible');
      } else {
        content.classList.add('is-visible');
      }
    }
  }
  



});


/*
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}
*/