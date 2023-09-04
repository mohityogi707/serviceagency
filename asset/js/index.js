// // ripple
// // document.onclick = () => applyCursorRippleEffect(event);

// // function applyCursorRippleEffect(e) {
// //   const ripple = document.createElement("div");

// //   ripple.className = "ripple";
// //   document.body.appendChild(ripple);

// //   ripple.style.left = `${e.clientX}px`;
// //   ripple.style.top = `${e.clientY}px`;

// //   ripple.style.animation = "ripple-effect .4s  linear";
// //   ripple.onanimationend = () => document.body.removeChild(ripple);
// // }

// // counter
const counters = document.querySelectorAll(".counter");
counters.forEach((counter) => {
  counter.innerText = "0";
  const updateCounter = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / 200;
    if (count < target) {
      counter.innerText = `${Math.ceil(count + increment)}`;
      setTimeout(updateCounter, 1);
    } else counter.innerText = target;
  };
  updateCounter();
});


// onscroll navbar
window.onscroll = function () {
  scrollFunction();
  topfunction();
};

var first = true;

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").classList.add('fixed-navbar');
  }
   else {
    document.getElementById("navbar").classList.remove('fixed-navbar');
  }
}
function topfunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("topbtn").style.opacity=1;
  }
   else {
    document.getElementById("topbtn").style.opacity=0;
  }
}
// const links = document.querySelectorAll('.nav-link');



// active navbar
// $( '.navbar li a' ).on( 'click', function () {
// 	$( '.navbar' ).find( 'li.active' ).removeClass( 'active' );
// 	$( this ).parent( 'li' ).addClass( 'active' );
// });

// slider
$(document).ready(function () {
  (function ($) {
$('.teamscarousel').owlCarousel({
  loop:true,
  margin:40,
  nav:false,
  dots:true,
  autoplay:false,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:2
      }
  }
})
})(jQuery);
});


// slider
// $(document).ready(function () {
//   (function ($) {
// $('.servicecarousel').owlCarousel({
//   loop:true,
//   margin:20,
//   nav:false,
//   dots:true,
//   autoplay:true,
//   autoplayTimeout:5000,
//   autoplayHoverPause:true,

//   responsive:{
//       0:{
//           items:1
//       },
//       600:{
//           items:1
//       },
//       1000:{
//           items:2
//       }
//   }
// })
// })(jQuery);
// });

// slider
$(document).ready(function () {
  (function ($) {
$('.clients-carousel').owlCarousel({
  loop:true,
  margin:30,
  nav:false,
  dots:false,
  slideTransition: 'linear',
  autoplayTimeout:1000,
  autoplaySpeed: 15000,
  autoplay:true,
  responsive:{
      0:{
          items:3
      },
      576:{
          items:3
      },
      767:{
        items:5
     },
      1000:{
          items:6
      }
  }
})
})(jQuery);
});


// form validation



// btn text change
// const btn = document.querySelector("#btn");
// const btnText = document.querySelector("#btnText");

// btn.onclick = () => {
//     btnText.innerHTML = "Thanks";
//     btn.classList.add("active");
// };




// // // Get the element
// // let topBtn = document.querySelector(".top-btn");

// // // On Click, Scroll to the page's top, replace 'smooth' with 'auto' if you don't want smooth scrolling
// // topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// // // On scroll, Show/Hide the btn with animation
// // window.onscroll = () => window.scrollY > 500 ? topBtn.style.opacity = 1 : topBtn.style.opacity = 0

