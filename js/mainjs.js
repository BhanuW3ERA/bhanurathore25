setTimeout(function() {
    AOS.init();
},3000);

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.getElementById('spinner-overlay').style.display = 'none';
    }, 3000);
  });

  $(document).ready(function () {


    $('#scrollTopBtn').on('click', function(){
        $('html, body').animate({scrollTop : 0},800);
    });

    $('a[href="#0"]').on('click', function(event){
        event.preventDefault();
    });




$('#red').on('click', function() {
    
    var root = $(':root');
    
    root.css('--main-color', '#ff4646'); 
    root.css('--second-bg', '#ffe9e9'); 
    root.css('--bottom-text', '#f7cbcb'); 

    $('#mainHeroBanner img').attr('src', './heroRed.png');

    $('#developImg').attr('src', './images/codingred.png');
    $('#uiUxImg').attr('src', './images/ui-uxred.png');
    $('#appDesImg').attr('src', './images/bookingred.png');
    $('#grapDesignImg').attr('src', './images/web-designred.png');

    


});

$('#grey').on('click', function() {
    
    var root = $(':root');
    
    root.css('--main-color', '#a9a9a9'); 
    root.css('--second-bg', '#fff'); 
    root.css('--bottom-text', '#dddddd'); 

    $('#mainHeroBanner img').attr('src', './heroGrey.png');

    $('#developImg').attr('src', './images/codinggrey.png');
    $('#uiUxImg').attr('src', './images/ui-uxgrey.png');
    $('#appDesImg').attr('src', './images/bookinggrey.png');
    $('#grapDesignImg').attr('src', './images/web-designgrey.png');


});

$('#blueViolet').on('click', function() {
    
    var root = $(':root');
    
    root.css('--main-color', '#9a46ff'); 
    root.css('--second-bg', '#f3e9ff'); 
    root.css('--bottom-text', '#f5edff'); 

    $('#mainHeroBanner img').attr('src', './hero2.png');

    $('#developImg').attr('src', './images/coding.png');
    $('#uiUxImg').attr('src', './images/ui-ux (1).png');
    $('#appDesImg').attr('src', './images/booking.png');
    $('#grapDesignImg').attr('src', './images/web-design.png');

});


$('#orange').on('click', function() {
    
    var root = $(':root');
    
    root.css('--main-color', '#ffac46'); 
    root.css('--second-bg', '#fff1e9'); 
    root.css('--bottom-text', '#f7dfcb'); 


    $('#mainHeroBanner img').attr('src', './hero.png');

    $('#developImg').attr('src', './images/codingorange.png');
    $('#uiUxImg').attr('src', './images/ui-uxorange.png');
    $('#appDesImg').attr('src', './images/bookingorange.png');
    $('#grapDesignImg').attr('src', './images/web-designorange.png');


});










function showTab(tabContentId, tabId) {
    
    $("#aboutTabContent, #expTabContent, #eduTabContent, #skillTabContent").hide();
    
    $(tabContentId).show();

   
    $("#aboutTab, #expTab, #eduTab, #skillTabs").removeClass("active");

    $(tabId).addClass("active");
}


showTab("#aboutTabContent", "#aboutTab");


$("#aboutTab").click(function() {
    showTab("#aboutTabContent", "#aboutTab");
});

$("#expTab").click(function() {
    showTab("#expTabContent", "#expTab");
});

$("#eduTab").click(function() {
    showTab("#eduTabContent", "#eduTab");
});

$("#skillTabs").click(function() {
    showTab("#skillTabContent", "#skillTabs");
});





$('.owl-carousel.reviewS').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            autoplay:true,
            autoplaySpeed:3000,
            responsive: {
              0: {
                items: 1,
                nav: true
              },
              600: {
                items: 2,
                nav: false
              },
              1000: {
                items: 3,
                nav: true,
                loop: false,
                margin: 20
              }
            }
          })


          $('.owl-carousel.costS').owlCarousel({
            loop: true,
            margin: 10,
            autoplay:true,
            autoplayTimeout:5000,
            autoplaySpeed: 1500,
            responsiveClass: true,
            responsive: {
              0: {
                items: 1,
                nav: true
              },
              600: {
                items: 3,
                nav: false
              },
              1000: {
                items: 5,
                nav: true,
                loop: false,
                margin: 20
              }
            }
          })




});