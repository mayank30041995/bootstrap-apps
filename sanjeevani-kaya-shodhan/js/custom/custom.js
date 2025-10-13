/*========================================== MASTER JAVASCRIPT ===================================================================

	Project     :   HEALTH TEMPLATES
	Version     :	1.0
	Last Change : 	07/09/2018 
	Primary Use :   HEALTH TEMPLATES

=================================================================================================================================*/

$(document).ready(function () {
  $('#owl-demo3').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    smartSpeed: 1000,
    items: 5,
    slideBy: 1,
    responsive: {
      0: {
        // from 0px up
        items: 1, // 1 slide on mobile
        slideBy: 1,
      },
      576: {
        // from 576px up (small devices)
        items: 2, // optional: 2 slides on small tablets
        slideBy: 1,
      },
      768: {
        // from 768px up (tablets)
        items: 3,
        slideBy: 1,
      },
      992: {
        // from 992px up (desktop)
        items: 5,
        slideBy: 1,
      },
    },
  })
})

$(document).ready(function () {
  $('#owl-demo5').owlCarousel({
    loop: true,
    margin: 10,
    dots: true,
    nav: false,
    autoplay: true,
    autoplayTimeout: 2000, // move every 2 seconds
    autoplayHoverPause: true,
    smartSpeed: 1000, // smooth slide transition
    items: 2, // display 5 slides
    slideBy: 1, // move 1 slide at a time
    responsive: {
      0: {
        // from 0px up
        items: 1, // 1 slide on mobile
        slideBy: 1,
      },
      576: {
        // from 576px up (small devices)
        items: 2, // optional: 2 slides on small tablets
        slideBy: 1,
      },
      768: {
        // from 768px up (tablets)
        items: 2,
        slideBy: 1,
      },
      992: {
        // from 992px up (desktop)
        items: 2,
        slideBy: 1,
      },
    },
  })
})

$(document).on('ready', function () {
  'use strict' //Start of Use Strict
  var menu_li = $('.navbar-nav li a')
  var collapse = $('.navbar-collapse')
  var top_nav = $('#top-nav')

  //MENU SCROLL
  if (top_nav.length) {
    var x = top_nav.offset().top
    if (x > 50) {
      top_nav.fadeIn()
    } else {
      top_nav.fadeOut()
    }
    $(document).on('scroll', function () {
      var y = $(this).scrollTop()
      if (y > 50) {
        top_nav.fadeIn()
      } else {
        top_nav.fadeOut()
      }
    })
  }

  //RESPONSIVE MENU SHOW AND HIDE FUNCTION
  if (menu_li.length) {
    menu_li.on('click', function (event) {
      var disp = $('.navbar-toggler').css('display')
      if (!$('.navbar-toggler').hasClass('collapsed')) {
        if (collapse.hasClass('show')) {
          collapse.removeClass('show').slideUp('slow')
        }
      }
    })
  }

  //MENU BAR SMOOTH SCROLLING FUNCTION
  var menu_list = $('.navbar-nav')
  if (menu_list.length) {
    menu_list.on('click', '.pagescroll', function (event) {
      event.stopPropagation()
      event.preventDefault()
      var hash_tag = $(this).attr('href')
      if ($(hash_tag).length) {
        $('html, body').animate(
          {
            scrollTop: $(hash_tag).offset().top - 0,
          },
          2000
        )
      }
      return false
    })
  }

  // ===== Scroll to Top ====
  $(window).on('scroll', function () {
    if ($(this).scrollTop() >= 50) {
      // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200) // Fade in the arrow
    } else {
      $('#return-to-top').fadeOut(200) // Else fade out the arrow
    }
  })
  $('#return-to-top').on('click', function () {
    // When arrow is clicked
    $('body,html').animate(
      {
        scrollTop: 0, // Scroll to top of body
      },
      500
    )
  })

  //CLINIC HTML - GALLERY POPUP
  var gallery = $('.popup-gallery')
  if (gallery.length) {
    $('.popup-gallery').magnificPopup({
      delegate: 'a',
      type: 'image',
      tLoading: 'Loading image #%curr%...',
      mainClass: 'mfp-img-mobile',
      gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1], // Will preload 0 - before current, and 1 after the current image
      },
      image: {
        tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
        titleSrc: function (item) {
          return item.el.attr('title') + '<small>by Marsel Van Oosten</small>'
        },
      },
    })
  }

  //CLINIC HTML - DATEPICKER//
  var datepicker = $('.datepicker')
  if (datepicker.length) {
    $('.datepicker')
      .datepicker({
        autoclose: true,
        format: 'dd/mm/yyyy',
        todayHighlight: true,
      })
      .datepicker()

    $(document).on('change', '.datepicker', function (event) {
      event.preventDefault()
      $(this).find('.form-input').removeClass('error')
      $(this).find('label.error').css('display', 'none')
    })
  }

  //PREGNANCY HTML - FAQ ACCORDION
  var accordion = $('.faq-accord, .faq-accord-1')
  if (accordion.length) {
    accordion.each(function () {
      var all_panels = $(this).find('.faq-ans').hide()
      var all_titles = $(this).find('.faq-ques')
      $(this).find('.faq-ans.active').slideDown()

      all_titles.on('click', function () {
        var acc_title = $(this)
        var acc_inner = acc_title.next()

        if (!acc_inner.hasClass('active')) {
          all_panels.removeClass('active').slideUp()
          acc_inner.addClass('active').slideDown()
          all_titles.removeClass('active')
          acc_title.addClass('active')
        } else {
          all_panels.removeClass('active').slideUp()
          all_titles.removeClass('active')
        }
      })
    })
    $(
      '.faq-accord > div:first-child .faq-ans, .faq-accord-1 > div:first-child .faq-ans'
    ).slideDown()
  }

  //CONTACT FORM VALIDATION
  if ($('.book-form, .header-form').length) {
    $('.book-form, .header-form').each(function () {
      $(this).validate({
        errorClass: 'error',
        submitHandler: function (form) {
          $.ajax({
            type: 'POST',
            url: 'mail/mail.php',
            data: $(form).serialize(),
            success: function (data) {
              if (data) {
                $('.sucessMessage').html('Mail Sent Successfully!!!')
                $('.sucessMessage').show()
                $('.sucessMessage').delay(3000).fadeOut()
              } else {
                $('.failMessage').html(data)
                $('.failMessage').show()
                $('.failMessage').delay(3000).fadeOut()
              }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {
              $('.failMessage').html(textStatus)
              $('.failMessage').show()
              $('.failMessage').delay(3000).fadeOut()
            },
          })
        },
      })
    })
  }

  return false
  // End of use strict
})
