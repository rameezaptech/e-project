$(document).ready(function() {

    // $('.dropdown').click(function(){
    // $('.dropdown-menu').slideDown(500)
    
    // })
    // $('.dropdown-menu li a').click(function() {
    //     $('.dropdown-menu').slideUp(1000);
    //   });

  //   $('.dropdown').click(function(){
  //    $('.dropdown-menu').slidedown(1000)

  //   })
  // }
    $('.dropdown').on({
      mouseenter : function () {
        $('.dropdown-menu').fadeIn(1000)
      },
      mouseleave : function(){
        $('.dropdown-menu').fadeOut(1000)
      }
}) 
  })
  