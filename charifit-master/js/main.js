(function ($) {
"use strict";
// TOP Menu Sticky
$(window).on('scroll', function () {
	var scroll = $(window).scrollTop();
	if (scroll < 400) {
    $("#sticky-header").removeClass("sticky");
    $('#back-top').fadeIn(500);
	} else {
    $("#sticky-header").addClass("sticky");
    $('#back-top').fadeIn(500);
	}
});


$(document).ready(function(){

// mobile_menu
var menu = $('ul#navigation');
if(menu.length){
	menu.slicknav({
		prependTo: ".mobile_menu",
		closedSymbol: '+',
		openedSymbol:'-'
	});
};
// blog-menu
  // $('ul#blog-menu').slicknav({
  //   prependTo: ".blog_menu"
  // });

// review-active
$('.slider_active').owlCarousel({
  loop:true,
  margin:0,
items:1,
autoplay:true,
navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:true,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false,
      },
      767:{
          items:1,
          nav:false,
      },
      992:{
          items:1,
          nav:false
      },
      1200:{
          items:1,
          nav:false
      },
      1600:{
          items:1,
          nav:true
      }
  }
});


// for filter
  // init Isotope
  var $grid = $('.grid').isotope({
    itemSelector: '.grid-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 1
    }
  });

  // filter items on button click
  $('.portfolio-menu').on('click', 'button', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  //for menu active class
  $('.portfolio-menu button').on('click', function (event) {
    $(this).siblings('.active').removeClass('active');
    $(this).addClass('active');
    event.preventDefault();
	});
  
  // wow js
  new WOW().init();

  // counter 
  $('.counter').counterUp({
    delay: 10,
    time: 10000
  });

/* magnificPopup img view */
$('.popup-image').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup img view */
$('.img-pop-up').magnificPopup({
	type: 'image',
	gallery: {
	  enabled: true
	}
});

/* magnificPopup video view */
$('.popup-video').magnificPopup({
	type: 'iframe'
});


  // scrollIt for smoth scroll
  $.scrollIt({
    upKey: 38,             // key code to navigate to the next section
    downKey: 40,           // key code to navigate to the previous section
    easing: 'linear',      // the easing function for animation
    scrollTime: 600,       // how long (in ms) the animation takes
    activeClass: 'active', // class given to the active nav element
    onPageChange: null,    // function(pageIndex) that is called when page is changed
    topOffset: 0           // offste (in px) for fixed top navigation
  });

  // scrollup bottom to top
  $.scrollUp({
    scrollName: 'scrollUp', // Element ID
    topDistance: '4500', // Distance from top before showing element (px)
    topSpeed: 300, // Speed back to top (ms)
    animation: 'fade', // Fade, slide, none
    animationInSpeed: 200, // Animation in speed (ms)
    animationOutSpeed: 200, // Animation out speed (ms)
    scrollText: '<i class="fa fa-angle-double-up"></i>', // Text for element
    activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
  });


  // blog-page

  //brand-active
$('.brand-active').owlCarousel({
  loop:true,
  margin:30,
items:1,
autoplay:true,
  nav:false,
dots:false,
autoplayHoverPause: true,
autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:4
      },
      992:{
          items:7
      }
  }
});

// blog-dtails-page

  //project-active
$('.project-active').owlCarousel({
  loop:true,
  margin:30,
items:1,
// autoplay:true,
navText:['<i class="Flaticon flaticon-left-arrow"></i>','<i class="Flaticon flaticon-right-arrow"></i>'],
nav:true,
dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:1,
          nav:false
      },
      992:{
          items:2,
          nav:false
      },
      1200:{
          items:1,
      },
      1501:{
          items:2,
      }
  }
});

if (document.getElementById('default-select')) {
  $('select').niceSelect();
}

  //about-pro-active
$('.causes_active').owlCarousel({
  loop:true,
  margin:30,
// autoplay:true,
  navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:false,
  dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:2,
          nav:false
      },
      992:{
          items:3,
          nav:false
      },
      1200:{
          items:3,
      }
  }
});
  //about-pro-active
$('.news_active').owlCarousel({
  loop:true,
  margin:30,
// autoplay:true,
  navText:['<i class="ti-angle-left"></i>','<i class="ti-angle-right"></i>'],
  nav:false,
  dots:false,
// autoplayHoverPause: true,
// autoplaySpeed: 800,
  responsive:{
      0:{
          items:1,
          nav:false

      },
      767:{
          items:1,
          nav:false
      },
      992:{
          items:2,
          nav:false
      },
      1200:{
          items:2,
      }
  }
});

});

// resitration_Form
$(document).ready(function() {
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});
});



//------- Mailchimp js --------//  
function mailChimp() {
  $('#mc_embed_signup').find('form').ajaxChimp();
}
mailChimp();



        // Search Toggle
        $("#search_input_box").hide();
        $("#search").on("click", function () {
            $("#search_input_box").slideToggle();
            $("#search_input").focus();
        });
        $("#close_search").on("click", function () {
            $('#search_input_box').slideUp(500);
        });
        // Search Toggle
        $("#search_input_box").hide();
        $("#search_1").on("click", function () {
            $("#search_input_box").slideToggle();
            $("#search_input").focus();
        });

})(jQuery);	

document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  const searchValue = document.getElementById("searchInput").value;
  redirectToPage(searchValue); // Call the function to redirect based on the input
});

function redirectToPage(searchValue) {
  // Logic to determine the specific page based on the search value
  // For example:
  switch (searchValue.toLowerCase()) {
      case "toy":
          window.location.href = "index.html";
          break;
      case "clothes":
          window.location.href = "about.html";
          break;
      case "food":
          window.location.href = "contact.html";
          break;
      default:
          // Handle other cases or show an error message
          alert("Page not found!");
  }
}
document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault();
const searchValue = document.getElementById("searchInput").value;

 
redirectToPage(searchValue); // Call the function to redirect based on the input
});

function redirectToPage(searchValue) {


  // Your code here (e.g., accessing the table)
  const table = document.getElementById('myTable');
  // ...

// Logic to determine the specific page based on the search value
// For example:
switch (searchValue.toLowerCase()) {
    case "toy":
        window.location.href = "toySearch.html";
        break;
    case "clothes":
        window.location.href = "clothesSearch.html";
        break;
    case "food":
        window.location.href = "foodSearch.html";
        break;
        case "donate":
        // const newRow = table.insertRow(); // Insert a row at the end of the table

// Insert cells (columns) into the new row
        const newRow = table.insertRow();
        const cell1 = newRow.insertCell();
        const cell2 = newRow.insertCell();

// Add text to the new cells
const newrow =localStorage.getItem("row");
cell1.textContent = "donated"; // Customize this message
cell2.textContent = 'Your additional data'; 
localStorage.setItem("row",null);// Add any additional data you want

// Save the updated table content to localStorage
const tableContent = table.innerHTML;
localStorage.setItem('myTableContent', tableContent);


// Load the table content from localStorage on page load
const savedTableContent = localStorage.getItem('myTableContent');
if (savedTableContent) {
table.innerHTML = savedTableContent;
}
        break;
    default:
        // Handle other cases or show an error message
        alert("Page not found!");
}
}



// const no="3"

// localStorage.setItem("noOfnotification",no);
// document.getElementById("donate").addEventListener('click', () => {
// alert('Thank you for donating your service!');
// const n =localStorage.getItem("noOfnotification");
  
// let parsedValue = Number.parseInt(n, 10); // Parse as decimal (base 10)

// parsedValue++;
// const number=parsedValue.toString() ;
// const row="rahma made a donation request to your bloodDonation post" ;
// const row1="Madinty,NewCairo" ;
// const row2="rahma@gmail.com" ;
// localStorage.setItem("noOfnotification",number);
// localStorage.setItem("row",row);
// localStorage.setItem("row1",row1);
// localStorage.setItem("row2",row2);
// });


document.getElementById("viewTable").addEventListener('click', () => {
// Output: 123

  alert('Thank you for donating your service!');
  const table = document.getElementById("myTable");
  const storedValue = localStorage.getItem("row");
  if (storedValue !="null"){
  const newRow = table.insertRow();
  const cell1 = newRow.insertCell();
  const cell2 = newRow.insertCell();
  const cell3 = newRow.insertCell();
  const cell4 = newRow.insertCell();

  // Retrieve the stored value from local storage
  
  const storedValue2 = localStorage.getItem("row1");
  const storedValue3 = localStorage.getItem("row2");
  const storedValue1 = localStorage.getItem("noOfnotification"); // Replace with your actual key

  // Add text to the new cells
 
  cell1.textContent = storedValue1; // Customize this message
  cell2.textContent = storedValue; 
 
  cell3.textContent = storedValue2;
  cell4.textContent = storedValue3;  
  localStorage.setItem("row","null");// Add any additional data you want

  // Save the updated table content to local storage
  const tableContent = table.innerHTML;
  localStorage.setItem('myTableContent', tableContent);

  // Load the table content from local storage on page load
  const savedTableContent = localStorage.getItem('myTableContent');
  if (savedTableContent) {
      table.innerHTML = savedTableContent;
  }}
});

document.addEventListener('DOMContentLoaded', () => {
  const table = document.getElementById("myTable");
  const savedTableContent = localStorage.getItem('myTableContent');
  if (savedTableContent) {
      table.innerHTML = savedTableContent;
  }
});



