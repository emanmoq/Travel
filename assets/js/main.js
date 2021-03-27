jQuery(function ($) {
//declare slider (owl-carousel slider)
  $('.aboutCar').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    rtl:true,
    dots:false,
    nav:true,
    navText : ['<i class="fas fa-chevron-right"></i>','<i class="fas fa-chevron-left"></i>'],
    responsive: {
      0: {
        items: 1,
        nav:false

      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,

      }
      

    }
  });
  $('.galleryCar').owlCarousel({
    autoplay: true,
    loop: false,
    margin: 70,
    rtl:true,
    dots:false,
    nav:true,
    navText : ['<i class="fas fa-arrow-right"></i>','<i class="fas fa-arrow-left"></i>'],
    responsive: {
      0: {
        items: 1,
        nav:false

      },
      600: {
        items: 2,
      },
      1000: {
        items: 2,

      }
    }
  });
  $('.clientCarusel').owlCarousel({
    autoplay: true,
    loop: true,
    margin:20,
    rtl:true,
    dots:false,
    nav:true,
    navText : ['<i class="fas fa-chevron-right"></i>','<i class="fas fa-chevron-left"></i>'],

    responsive: {
      0: {
        items: 1,
        nav:false

      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,

      }
    }
  });
  function onScroll(event){
			
		var scrollPosition = $(document).scrollTop();
    //add class active when select item from navbar 
		$('.navbar-collapse .nav-item a[href^="#"').each(function () {
			console.log($(this).attr('href')); 
		  var refElement = $($(this).attr("href"));
		  if (refElement.length&&refElement.position().top <= scrollPosition) {
			$('.navbar-collapse .nav-item ').removeClass("active");
			$(this).parent().addClass("active");
		  }
		  else{
			$(this).removeClass("active");
		  }
  
		});
	  }
    $(document).on("scroll", onScroll);
// animate to the section when click  on it
    $('.navbar-collapse ul li a').on('click', function () {
      $('html, body').animate({ scrollTop: $(this.hash).offset().top  - 5 }, 1000);
      $('.navbar-collapse.collapse.in').removeClass('in');
      return false;
    });
    
  $(window).scroll(function () {
    scrollTop = $(window).scrollTop();
//add fix header when scroll down and remove when back up
    if (scrollTop > $('header').height()) {
      $('header').addClass('scrollNav');


    }

    else {
      $('header').removeClass('scrollNav');
    }

  });
  //close menu when choose item
  $(".navbar .nav-link").click(function(){
    $(".collapse").removeClass("show");
  })

$(".navbar-toggler").click(function(){
  $(".overlay").css("display","block")
});
$(".close").click(function(){
  $(".overlay").css("display","none");
  $(".collapse").removeClass('show');
})
$(".overlay").click(function(){
  $(this).css("display","none");
  $(".collapse").removeClass('show');
});
  // declare rating 
  $(".my-rating").starRating({
    starSize: 16,
    rtl: true,
    activeColor: '#FF710F',
    hoverColor: '#FF710F',
    ratedColor: '#FF710F',
    emptyColor: '#FFAF7E',
    starShape: 'rounded',
    useGradient: false,
    disableAfterRate: true,
    initialRating: 4,


    callback: function (currentRating, $el) { }
  });
    //datePicker 
    $( ".datepicker" ).datepicker();
});

