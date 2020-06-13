$(document).ready(function(){

    // Review Slider
    $('.review-carousel').owlCarousel({
        items: 3,
      loop:true,
      margin:15,
      dots:false,
      autoplay:true,
      autoplayTimeout:4000,
        smartSpeed:2000,
      responsiveClass:true,
      responsive:{
          
        200:{
            items:1
           
        },
          400:{
              items:1,
             
          },
  
          600:{
              items:2,
              
          },
          1000:{
              items:3,
              
              
          }
      }
  });
});

// // Sidebar Post Slider
//   $('.side-post-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//     nav:false,
//     autoplay:true,
//     autoplayTimeout:3000,
//     autoplayHoverPause:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:1
//         },
//         1000:{
//             items:1
//         }
//     }
// });



//     // Testimonial Slider
//     $('.tstimnl-carousel').owlCarousel({
//         loop:true,
//         margin:15,
//         dots:false,
//         nav:true,
//         autoplay:true,
//         autoplayTimeout:3000,
//         smartSpeed:1000,
//         responsiveClass:true,
//         navText: ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
//         responsive:{
//             200:{
//                 items:1,
//                 nav:false
//             },
//             400:{
//                 items:1,
//                 nav:false
//             },
    
//             600:{
//                 items:2,
//                 nav:false
//             },
//             1000:{
//                 items:3,
//                 nav:true
                
//             }
//         }
//     });

//     $('#cate-tab_selector').on('change', function (e) {
// 	    $('.cate-tabs a').eq($(this).val()).tab('show');
// 	});

//     // Upload Logo

//     document.querySelector(".logo-box-wrapper").classList.add('js');

//     var fileInput  = document.querySelector( ".input-file" ),  
//         button     = document.querySelector( ".input-file-trigger" ),
//         the_return = document.querySelector(".file-return");
          
//     button.addEventListener( "keydown", function( event ) {  
//         if ( event.keyCode == 13 || event.keyCode == 32 ) {  
//             fileInput.focus();  
//         }  
//     });
//     button.addEventListener( "click", function( event ) {
//        fileInput.focus();
//        return false;
//     });  
//     fileInput.addEventListener( "change", function( event ) {  
//         the_return.innerHTML = this.value;  
//     });  



//   });

//   // For input Tage
//   $(document).ready(function() {

// 	$('input[name="input"]').tagsinput({
// 		trimValue: true,
// 		confirmKeys: [13, 44, 32],
// 		focusClass: 'my-focus-class'
// 	});
	
// 	$('.bootstrap-tagsinput input').on('focus', function() {
// 		$(this).closest('.bootstrap-tagsinput').addClass('has-focus');
// 	}).on('blur', function() {
// 		$(this).closest('.bootstrap-tagsinput').removeClass('has-focus');
// 	});
	
// });

// // For navigation background
// if(!$("section").hasClass("inner-page-banner")){
//     $(".main-nav").addClass("nav-bg");
//     $("header").addClass("nav-ps");
//  }


