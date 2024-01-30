
  // Auto-close navbar on link click
  $(".navbar-nav a").on("click", function () {
   $(".navbar-toggler").click();
 });

 // Header scroll effect
 //nav bar change color when scroll dowen
 let head = $("#navbar");
 let carousel = $("#carouselExampleSlidesOnly");
 let carouselHeight = carousel.height();

 $(window).scroll(function () {
   if ($(window).scrollTop() > carouselHeight) {
     head.addClass("change");
   } else {
     head.removeClass("change");
   }
 });
$(function () {
    var availableTags = [
       "Egypt",
       "Tanzania",
       "Brazil",
       "Italy",
       "Greece",
       "Oman",
       "Netherland"
       // Add more options as needed
    ];

    $(".autocomplete").autocomplete({
       source: availableTags
    });
 });
 document.getElementById('form-submit').addEventListener('submit', function (event) {
    // Prevent the form from submitting by default
    event.preventDefault();

    // Perform form field validation
    var firstName = document.getElementById('inputFirstName').value;
    var secondName = document.getElementById('inputSecondName').value;
    var password = document.getElementById('inputPassword6').value;
    var Departing = document.getElementById('inputDeparting').value;
    var Returning = document.getElementById('inputReturning').value; 
    var FlyingFrom = document.getElementById('FlyingFrom').value;
    var FlyingTo = document.getElementById('FlyingTo').value;



    if (!firstName || !secondName  || !password || !Departing || !Returning || !FlyingFrom || !FlyingTo ) {
       alert('Please fill in all fields.');
       return;
    }

    document.getElementById('form-submit').style.display = 'none';
    document.getElementById('hidden-message').style.display = 'block';
 });


 $(document).ready(function () {
   $("#submit-btn").on("click", function () {
       // Get user input dates
       var startDate = $("#inputDeparting").val();
       var endDate = $("#inputReturning").val();

       // Convert input dates to Date objects
       var startTime = new Date(startDate).getTime();
       var endTime = new Date(endDate).getTime();

       // Calculate the time difference in milliseconds
       var timeDiff = endTime - startTime;

       // Display the countdown
       $("#countdown").removeClass("hidden");

       // Initialize the countdown timer
       initializeCountdown(timeDiff);
   });
});

function initializeCountdown(duration) {
   var timer = $("#timer");

   var countdownInterval = setInterval(function () {
       // Calculate remaining time
       var days = Math.floor(duration / (1000 * 60 * 60 * 24));
       var hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
       var minutes = Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60));
       var seconds = Math.floor((duration % (1000 * 60)) / 1000);

       // Display remaining time
       timer.text(`${days}d ${hours}h ${minutes}m ${seconds}s`);

       // Decrease remaining time
       duration -= 1000;

       // Check if the countdown is finished
       if (duration < 0) {
           clearInterval(countdownInterval);
           timer.text("Time's up!");
       }
   }, 1000);
}



$(document).ready(function() {
    $(".radio-btn").change(function() {
        $(".card-group").hide();

        var target = $(this).data("target");
        $("." + target).show();
    });
    $(".card-group").hide();
    $(".Italy-cards").show();
});


