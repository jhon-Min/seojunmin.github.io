// // ========== Typed JS ============
 var typed = new Typed('.animate', {
      strings: [
        "Seo Jun Min",
        "a Web Developer.",
        "a Web Designer.",
        "a Freelancer.",
        "Coder."
      ],
      typeSpeed: 80,
      backSpeed: 90,
      loop: true
 });

//======== WOW JS =========
  wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animate__animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();


// ============ Auto Select Sidebar =============
$(document).ready(function () {
    
    let screenHeight = $(window).height();
    $(window).scroll(function () {
        let currPosition = $(this).scrollTop();
        if (currPosition > screenHeight-150) {
        //    console.log("Hello")
        } else {
            setActive('home');
        }
    })
});

function setActive(x) {
    $('.side-link').removeClass("current");
    $(`.side-link[href='#${x}']`).addClass("current");
}

function navScroll() {
    let currentSection = $("div[id]");
    currentSection.waypoint(function (direction) {
        if (direction == "down") {
            let currentSection = $(this.element).attr('id');
            setActive(currentSection);
        }
    }, { offset: '120px' });
    
     currentSection.waypoint(function (direction) {
         if (direction == "up") {
             let currentSection = $(this.element).attr('id');
             setActive(currentSection);
         }
     },{ offset: '20px'});
}

navScroll();

// ===== Venobox =====
$(document).ready(function(){
    $('.venobox').venobox({
        arrowsColor: '#20c997',
        framewidth : '800px',                            // default: ''
        frameheight: 'auto',                            // default: ''
        border     : '2px',                             // default: '0'
        bgcolor    : '#ffffff',                          // default: '#fff'
        titleattr  : 'data-title',                       // default: 'title'
        numeratio  : true,                               // default: false
        infinigall: true,
        spinColor: '#20c997',                          // default: false
        // share: ['facebook', 'twitter', 'download'], // default: []
        spinner: 'double-bounce'
    }); 
});
