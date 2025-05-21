$(document).ready(function () {
  "use strict";
  //------ 1. Left Side Navigation Trigger START	
  $('.side-nv-log-trigger, .side-nav-trigger, .search-trigger, .drp-trigger, .match-trigger, .lst-trg').on('click', function () {

    var target = $(this).data('trigger');
    var toggleClass = $(this).data('class');

    $(target).toggleClass(toggleClass);
  });

//  $(".t-icn-sr").click(function () {
//    $('body').addClass('js_ser-nav');
//    $('.srh_inp').focus();
//  });

  $(".overlay__side-nav, .sid-nav-cls, .SrcDr_cls, .nav-cls").click(function () {
    $('body').removeClass('js_sid-nav');
    $('body').removeClass('js_sid-nav-right');
    $('body').removeClass('js_sid-nav-right1');
    $('body').removeClass('js_sid-nav-right2');
    $('body').removeClass('js_sid-nav-right3');
    $('body').removeClass('js_sid-nav');
    $('body').removeClass('js_ser-nav');
    $('body').removeClass('js-SrcDr_tp');
    $('body').removeClass('js_fltr-nav');
    $('body').removeClass('js_ftr-sts-nav');
    $('body').removeClass('js_pin-up');
    $('body').removeClass('js-npop-frm');
    $('body').removeClass('js_drp-nav');
    $('body').removeClass('res-bt_sub-nav');
    $('body').removeClass('SUpNv-on')
  });

  $(".regst").click(function () {
    $('body').removeClass('js_sid-nav-right2');
  });


  //------ Left Side Navigation Trigger END


});


//------====== 2. Search  ======------//
$('.control').click(function () {
  $('body').addClass('search-active');
  $('.input-search').focus();
  $(".ovl").fadeIn(0).addClass("js-ovl");
});

$('.icon-close').click(function () {
  $('body').removeClass("search-active");

});
$('.ovl').click(function () {
  setTimeout(function () {
    $('body').removeClass("search-active");
  }, 0);

});


//------====== 3. Add class on scroll  ======------//
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 500) {
    $(".nav-trigger").addClass("nav_stk");
  } else {
    $(".nav-trigger").removeClass("nav_stk");
  }
});


//------====== 4. Dropdown  ======------//

//$('.drp-trigger').click(function(){
//$(this).toggleClass('js-drp-open');
//});

//---- a. Dropdown Mobile ----//
$(document).ready(function () {
  [].slice.call(document.querySelectorAll('.drp-trigger .drp-lnk')).forEach(function (el) {
    el.addEventListener('click', onClick, false);
  });

  function onClick(e) {
    //e.preventDefault();
    var el = this.parentNode;
    el.classList.contains('js-drp-open') ? hideSubMenu(el) : showSubMenu(el);
  }

  function showSubMenu(el) {
    el.classList.add('js-drp-open');
    document.addEventListener('click', function onDocClick(e) {
      //e.preventDefault();
      if (el.contains(e.target)) {
        return;
      }
      document.removeEventListener('click', onDocClick);
      hideSubMenu(el);
    });
  }

  function hideSubMenu(el) {
    el.classList.remove('js-drp-open');
  }

});


//---- b. Responsive Only for Mobile ----//

if ($(window).width() <= 768) {


  //--======== Dropdown Mobile
  $(document).ready(function () {

        [].slice.call(document.querySelectorAll('.m-nv_li .res_sub-nav_pop')).forEach(function (el) {
            el.addEventListener('click', onClick, false);
        });

        function onClick(e) {
            //e.preventDefault();
            var el = this.parentNode;
            (el.classList.contains('res-bt_sub-nav') || el.classList.contains('srs_drp') || el.classList.contains('sub-nav_vis'))  ? hideSubMenu(el) : showSubMenu(el);
        }

        function showSubMenu(el) {
            document.body.classList.add('srs_drp');
            el.classList.add('res-bt_sub-nav');
            $('.sub-nav_hr-scr').addClass('sub-nav_vis');
            document.addEventListener('click', function onDocClick(e) {
                //e.preventDefault();
                if (el.contains(e.target)) {
                    return;
                }
                document.removeEventListener('click', onDocClick);
                hideSubMenu(el);
            });
        }

        function hideSubMenu(el) {
            document.body.classList.remove('srs_drp');
            el.classList.remove('res-bt_sub-nav');
            $('.sub-nav_hr-scr').removeClass('sub-nav_vis');
        }
    });






}


//---- Social Native ----//
$('.crd_shr').on('click', function () {
  if (navigator.share !== undefined) {
    navigator.share({
      title: "NDTV Sports",
      url: "https://ndtv.com"
    });
  }
})





//------====== 5. Sticky  ======------//
$(document).ready(function () {

	"use strict";


	
	//------ Sticky Navigation
        if ($(window).width() <= 1199) {
	$(function () {
		var sc_up = $(document).scrollTop();
		var header_height = $('.sticky').outerHeight();

		$(window).scroll(function () {
			var sc_dn = $(document).scrollTop();

			if (sc_dn > header_height) {
				$('.sticky').addClass('js-stuck-down');
			} else {
				$('.sticky').removeClass('js-stuck-down');
			}

			if (sc_dn > sc_up) {
				$('.sticky').removeClass('js-stuck-up');
			} else {
				$('.sticky').addClass('js-stuck-up');
			}

			sc_up = $(document).scrollTop();
		});
	});

}


	
	});









//------====== 8. Setting Day & Night  ======------//

$('.day_night-wrp, .fts_drp-drk').click(function () {
  $('body').toggleClass("day_night");
  $('.day_Night input').is(':checked');
});
$('.day_Night input').change(function () {
  $('body').toggleClass('day_night', $(this).is(':checked'))
});




//--======== 10. Notification toggle button ========--//

$('.scr_swt-inp').click(function () {
    var swtToggle = $(this).parent('.scr_swt-tgl');
    if ($(swtToggle).find('input.scr_swt-inp').is(':checked')) {
      $(swtToggle).addClass('js-scr_swt-act');
    } else {
      $(swtToggle).removeClass('js-scr_swt-act');
    }
  })



//------====== 12. Trigger Class ======------//
$('.trigger').on('click', function () {

  var target = $(this).data('trigger');
  var toggleClass = $(this).data('class');

  $(target).toggleClass(toggleClass);
});



//------====== 14. Back to top ======------//

// browser window scroll (in pixels) after which the "back to top" link is shown
var offset = 60,
  //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
  offset_opacity = 400,
  //duration of the top scrolling animation (in ms)
  scroll_top_duration = 600,
  //grab the "back to top" link
  $back_to_top = $('.back-to-top');

//hide or show the "back to top" link
$(window).scroll(function () {
  ($(this).scrollTop() > offset) ? $back_to_top.addClass('js-back-to-top'): $back_to_top.removeClass('js-bkt-visible js-bkt-out');
  if ($(this).scrollTop() > offset_opacity) {
    $back_to_top.addClass('js-bkt-out');
  }
});

//------ Back to top Button
$(".back-to-top, .fltr_nav-src").click(function () {
  $("html, body").animate({
    scrollTop: 0
  }, 400);
});

// Initialize Sticky Sidebar




