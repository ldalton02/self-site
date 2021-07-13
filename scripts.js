// function to animate bar loading
const snapLoad = (element) => {
  element.style.width = element.getAttribute('aria-valuenow') + '%';
}

const bars = $('.progress-bar');

$(document).ready(function(){

  /// observer to fill the percentage of the skills bars
  observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(current => {
      console.log(current);
      if (current.isIntersecting) {
        snapLoad(current.target);
        observer.unobserve(current.target);
      }
    })
  }, {threshold: [1.0]});
  
  const allSections = document.querySelectorAll('.progress-bar');

  allSections.forEach(section => {
    observer.observe(section);
  });


  // observer to change color of page depending upon which section youre on
  $(document).scroll(function() {
    var scroll_top = $(document).scrollTop();
    var div_one_top = $('#about-section').position().top;
    var div_two_top = $('#experience-section').position().top;

  
    if(scroll_top > div_one_top && scroll_top < div_two_top) {
        //You are now past div one
        $('#about-nav').text("gay");
        console.log("about-section");
    } else if( scroll_top > div_two_top) {
        //You are now past div two
       $('#sidebar').text('Two');
       console.log('sidebar-section');
    }
});
  
});




