$(function(){
  //=================back to top=================
  $('.back-to-top').on('click',function(){
    $('html,body').animate({scrollTop:0},0)
  });

	$(window).on('scroll',function(){
		var scroll = $(this).scrollTop()
		if(scroll >50){
			$('.back-to-top').fadeIn(500)
		}
		else{
			$('.back-to-top') .fadeOut(500)
		}
		if(scroll>50){
			$('.navbar').addClass('sticke-menu')
		}
		else{
			$('.navbar').removeClass('sticke-menu')
		}
	});
  //=================back to top================= 
    //=================side bar start=================== 
    $('.show').on('click',function(){
      $('.slide-bar').css('left','0px')
    })
    $('.close').on('click',function(){
      $('.slide-bar').css('left','-100%')
    })
    $('.nav-link').on('click',function(){
      $('.slide-bar').css('left','-100%')
    })
    //=================side bar end=================== 
    //=================side bar start=================== 
    $('#nav').onePageNav({
      currentClass: 'current',
      changeHash: false,
      scrollSpeed: 750,
      scrollThreshold: 0.5,
      filter: '',
      easing: 'swing'
    });
    //=================side bar end=================== 
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
// ========text part===============
wow = new WOW(
  {
  boxClass:     'wow',      // default
  animateClass: 'animated', // default
  offset:       0,          // default
  mobile:       true,       // default
  live:         true        // default
}
)
wow.init();
// ========text part===============
    $('.brand_wrepper').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:false,
        pauseOnHover:false,
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 991,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
        ]
      });
    $('.slider_wrepper').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows:true,
        pauseOnHover:false,
        prevArrow:".btn_right",
        nextArrow:".btn_left",
        responsive: [
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: false
            }
          },
        ]
      });
});

 var yourname = document.getElementById('user_name');
 var nameerr = document.getElementById("name_err");


 var email = document.getElementById('email');
 var email_err = document.getElementById('email_err'); 
 var email_regex =   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

var subject = document.getElementById('subject');
var subject_err = document.getElementById('subject_err');

var message = document.getElementById("message");
var message_err = document.getElementById('message_err')



 function signup(){
   if(yourname.value == ""){
     nameerr.innerHTML = "please enter your name"
     yourname.style.border = "1px solid red"
     yourname.focus()
     return false
   }
   if(email.value == ""){
   email_err.innerHTML = "please enter your email address"
   email.style.border = "1px solid red"
   email.focus()
   return false
  }
  if(!email_regex .test(email.value)){
    email_err.innerHTML = "please enter your email address"
    email.style.border = "1px solid red"
    email.focus()
    return false
   }
   if(subject.value == ""){
    subject_err.innerHTML = "please enter your subject"
    subject.style.border = "1px solid red"
    subject.focus()
    return false
   }
   if(message.value == ""){
    message_err.innerHTML = "please enter your message"
    message.style.border = "1px solid red"
    message.focus()
    return false

   }


 }


 function valid(){
   if(yourname.value != ""){
    nameerr.innerHTML = ""
    yourname.style.border = "1px solid #F4F4F4"
   }
   if(email.value != ""){
    email_err.innerHTML = ""
    email.style.border = "1px solid #F4F4F4"
   }
   if(subject.value != ""){
    subject_err.innerHTML = ""
    subject.style.border = "1px solid #F4F4F4"
   }
   if(message.value != ""){
    message_err.innerHTML = ""
    message.style.border = "1px solid #F4F4F4"
   }
 }

 yourname.addEventListener('blur',valid )
 email.addEventListener('blur',valid )
 subject.addEventListener('blur',valid )
 message.addEventListener('blur',valid )

 // ========from ===================
 function cli(){
  if(yourname.value == ""){
    label_up.innerHTML = "Name"
    return false
  }
  if(email.value == ""){
    label_em.innerHTML = "Email"
    return false
  }
  if(subject.value == ""){
    label_sub.innerHTML = "Subject"
    return false
  }
  if(message.value == ""){
    label_mess.innerHTML = "Message"
    return false
  }
 }
 $(function() {  
  $(".nicesceoll_wrepper").niceScroll(
    {
      cursorcolor: "#18A7B9",
    }
  );
});

