// position fixed

$(window).scroll(function () {
  let scrollTop = $(window).scrollTop(); 

  if (scrollTop >= 100) {
    $('nav').addClass('fixed').removeClass('fixed2');
  } else {
    $('nav').removeClass('fixed').addClass('fixed2');
  }
});
// SM CLOSE BUTTON AND SEARCH BUTTON

// HEADER TOP BAR NOTIFICATION START
document.addEventListener('DOMContentLoaded', function () {
  const toastEl = document.querySelector('.toast');
  const toast = new bootstrap.Toast(toastEl);
  toast.show();
});
// HEADER TOP BAR NOTIFICATION END


$(document).ready(function () {
  $('.smSearchBtn .searchIcon').click(function () {
      // Toggle icons and add class
      $(this).hide(); // Hide search icon
      $('.smSearchBtn .closeIcon').show(); // Show close icon
      $('.smMsearch').addClass('searchSm2'); // Add the custom class
      

      var mixer = mixitup('.mix-it');
  });

  $('.smSearchBtn .closeIcon').click(function () {
      // Toggle icons and remove class
      $(this).hide(); // Hide close icon
      $('.smSearchBtn .searchIcon').show(); // Show search icon
      $('.smMsearch').removeClass('searchSm2'); // Remove the custom class
  });



  var mixer = mixitup('.mix-it');
});


// COUNTDOWN TIME
// Set the target date
const targetDate = new Date("2024-12-28T23:59:59").getTime();

// Update the countdown every second
const countdown = setInterval(() => {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  // Calculate days, hours, minutes, and seconds
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the result
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // If the countdown is finished
  if (timeLeft < 0) {
    clearInterval(countdown);
    document.getElementById("countdown").textContent = "Countdown Over!";
  }
}, 1000);



// darkmode on/off
$('.darkModeBtn').click(function () {
  $('body').toggleClass('darkMode');
});


//  preloader remove
$(window).on('load', function(){
  $('#preloader').fadeOut(1500);
});
// BACK TO TOP BUTTON

$("#backToTop").click(function(){
  $("html,body").animate({scrollTop: 0}, 500);
})

//  back to top button show/hide
$(window).scroll(function () {
  let scrollTop = $(window).scrollTop();
  if (scrollTop > 0) {
    $('#backToTop').addClass('backToTop');
  } else {
    $('#backToTop').removeClass('backToTop');
  }
});


// ORDER SYSTEM
// Script.js
const cartItems = [];
const cartTotalElement = document.getElementById('cart-total');
const cartItemsElement = document.getElementById('cart-items');
const orderForm = document.getElementById('order-form');

// Add to Cart Function
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', () => {
    const name = button.getAttribute('data-name');
    const price = parseFloat(button.getAttribute('data-price'));
    const item = cartItems.find(item => item.name === name);
    if (item) {
      item.quantity++;
    } else {
      cartItems.push({ name, price, quantity: 1 });
    }
    updateCart();
  });
});


