$(document).ready(function () {

  $("#loading .spinner").fadeOut(1000, () => {
    $("#loading .spinner").parent().fadeOut(1000, () => {
      $("#loading").remove();
      $("body").css("overflow-y", "auto");
    });
  });


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

  // Bootstrap carousel initialization
  //carosel timer when u out it
  $("#carouselExampleSlidesOnly").carousel({
    interval: 2000,
    touch: true
  });
  $(".card").fadeIn(4000);




  //about section
  function isInViewport(element) {
    var rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Handle the animation
  function handleAnimation() {
    var aboutPart = $(".about-part");
    var aboutImage = $(".about-image");

    if (isInViewport(aboutPart[0]) && isInViewport(aboutImage[0])) {
      aboutPart.add(aboutImage).addClass("activeAbout");
      // Remove the scroll event listener after the animation has played
      $(window).off("scroll", handleAnimation);
    }
  }

  // Attach the event listener to trigger the animation on scroll
  $(window).on("scroll", handleAnimation);

  // Initial check in case the section is already in the viewport
  handleAnimation();

  $('#Accordion').on("click", "li", function () {
    let tabId = $(this).attr('id');
    $(this).addClass('active').siblings().removeClass('active');
    $("#" + tabId + "-content").addClass('active').siblings().removeClass('active');
  });


  function isElementInViewport(elem) {
    var bounding = elem.getBoundingClientRect();
    return (
      bounding.top >= 0 &&
      bounding.left >= 0 &&
      bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Show cards with custom animation on scroll

  $(window).on('scroll', function () {
    $('.ourServices').each(function (index) {
      if (isElementInViewport(this) && !$(this).hasClass('animated')) {
        $(this).delay(1000 * index).animate({
          opacity: 1,
          transform: 'translateY(0)',
        }, 800);
        $(this).addClass('animated');
      }
    });
  });

  // Trigger the scroll event initially to check if any cards are in the viewport
  $(window).scroll();





  function counter1() {
    var count = setInterval(function () {
      var c = parseInt($('.counter1').text());
      $('.counter1').text((++c).toString());
      if (c == 50) {
        clearInterval(count);
      }
    })
  }
  counter1();

  function counter2() {
    var count = setInterval(function () {
      var c = parseInt($('.counter2').text());
      $('.counter2').text((++c).toString() + '+');
      if (c == 500) {
        clearInterval(count);
      }
    })
  }
  counter2();

  function counter3() {
    var count = setInterval(function () {
      var c = parseInt($('.counter3').text());
      $('.counter3').text((++c).toString());
      if (c == 100) {
        clearInterval(count);
      }
    })
  }
  counter3();

});





