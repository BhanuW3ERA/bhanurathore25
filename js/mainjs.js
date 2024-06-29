setTimeout(function() {
    AOS.init();
},3000);

document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.getElementById('spinner-overlay').style.display = 'none';
    }, 3000);
  });

  $(document).ready(function () {

    $('#firstName, #lastName').on('keypress', function(event) {
      var input = $(this);
      var keyCode = event.which;
      var isNumber = (keyCode >= 48 && keyCode <= 57);

      if (isNumber) {
          event.preventDefault();
          $('#messageShowing').text('Please enter only letters in the name fields.');
      } else {
          $('#messageShowing').text('');
      }
  });

  $('#numberForm').on('input', function() {
      var input = $(this);
      var isNumber = /^[0-9]+$/.test(input.val());
      var isValidLength = input.val().length >= 10 && input.val().length <= 15;
      var isDemoNumber = /1234567890/.test(input.val());

      if (!isNumber || !isValidLength || isDemoNumber) {
          $('#messageShowing').text('Please enter a valid mobile number.');
      } else {
          $('#messageShowing').text('');
      }
  });

  $('#emailForm').on('input', function() {
      var input = $(this);
      var isValidEmail = /^[\w-.]+@gmail\.com$/.test(input.val());

      if (!isValidEmail) {
          $('#messageShowing').text('Please enter a valid email ending with @gmail.com.');
      } else {
          $('#messageShowing').text('');
      }
  });

  $('#contactForm').on('submit', function(event) {
      var isValid = true;
      var messageShowing = $('#messageShowing');

      $('#firstName, #lastName').each(function() {
          var input = $(this);
          var isName = /^[A-Za-z]+$/.test(input.val());

          if (!isName) {
              messageShowing.text('Please enter only letters in the name fields.');
              isValid = false;
              return false; // Exit each loop early
          } else {
              messageShowing.text('');
          }
      });

      var numberForm = $('#numberForm');
      var isNumber = /^[0-9]+$/.test(numberForm.val());
      var isValidLength = numberForm.val().length >= 10 && numberForm.val().length <= 15;
      var isDemoNumber = /1234567890/.test(numberForm.val());

      if (!isNumber || !isValidLength || isDemoNumber) {
          messageShowing.text('Please enter a valid mobile number.');
          isValid = false;
      }

      var emailForm = $('#emailForm');
      var isValidEmail = /^[\w-.]+@gmail\.com$/.test(emailForm.val());

      if (!isValidEmail) {
          messageShowing.text('Please enter a valid email ending with @gmail.com.');
          isValid = false;
      }

      if (!isValid) {
          event.preventDefault();
      }
  });









    




    setTimeout(function() {
        $("#messageShowing").text(" ");
    }, 5000);

    $("#submitFromBtn").click(function(){


        

        var firstName = $("#firstName").val();
        var lastName = $("#lastName").val();
        var numb = $("#numberForm").val();
        var eml = $("#emailForm").val();
        var msgText = $("#formMsg").val();

        if(firstName == ""){
            $("#messageShowing").text("Enter First Name");
            $("#messageShowing").css("color","red")
        }else if(lastName == ""){
            $("#messageShowing").text("Enter Last Name");
            $("#messageShowing").css("color","red")
        }else if(numb == ""){
            $("#messageShowing").text("Enter Mobile Number");
            $("#messageShowing").css("color","red")
        }else if(eml == ""){
            $("#messageShowing").text("Enter Your Email");
            $("#messageShowing").css("color","red")
        }else if(msgText == ""){
            $("#messageShowing").text("Enter Message");
            $("#messageShowing").css("color","red")
        }else{
            $("#messageShowing").text("Form Submitted sucessfully");
            $("#messageShowing").css("color","green")

            setTimeout(function() {
                $("#messageShowing").text(" ");

                var firstName = $("#firstName").val("");
                var lastName = $("#lastName").val("");
                var numb = $("#numberForm").val("");
                var eml = $("#emailForm").val("");
                var msgText = $("#formMsg").val("");

            }, 2000);
        }


    });






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