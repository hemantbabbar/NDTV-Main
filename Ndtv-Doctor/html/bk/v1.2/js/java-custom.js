// Helper function to add or remove classes
function toggleClass(element, className, add) {
  if (element) {
    if (add) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }
}

// Attach event listeners to elements
function attachEventListeners(selector, event, callback) {
  document.querySelectorAll(selector).forEach(function(element) {
    element.addEventListener(event, callback);
  });
}

// Click event handler for trigger elements
function triggerElementClickHandler() {
  toggleClass(
    document.querySelector(this.getAttribute('data-trigger')),
    this.getAttribute('data-class'),
    true
  );
}

attachEventListeners('.side-nav-trigger, .search-trigger, .drp-trigger, .match-trigger, .lst-trg', 'click', triggerElementClickHandler);

// Click event handler for search icon
function searchIconClickHandler() {
  toggleClass(document.body, 'js_ser-nav', true);
  var searchInput = document.querySelector('.srh_inp');
  if (searchInput) {
    searchInput.focus();
  }
}

var searchIcon = document.querySelector('.t-icn-sr');
if (searchIcon) {
  searchIcon.addEventListener('click', searchIconClickHandler);
}

// Click event handler for removing classes
function removeClassesClickHandler() {
  var classesToRemove = [
    'js_sid-nav', 'js_ser-nav', 'js-SrcDr_tp', 'js_fltr-nav', 'js_SchLng',
    'js_ftr-sts-nav', 'js_pin-up', 'js-npop-frm', 'js_drp-nav',
    'js-res-bt_sub-nav', 'js_MtcNoti_nav', 'js_AutPup_nav', 'SUpNv-on'
  ];
  classesToRemove.forEach(function(className) {
    document.body.classList.remove(className);
  });
}

attachEventListeners(".overlay__side-nav, .sid-nav-cls, .SchLng_cn-icn, .nav-cls", 'click', removeClassesClickHandler);

// Setting Day & Night
function dayNightClickHandler() {
  toggleClass(document.body, 'day_night', !document.body.classList.contains('day_night'));
}

function dayNightInputChangeHandler() {
  toggleClass(document.body, 'day_night', this.checked);
}

attachEventListeners('.day_night-wrp, .fts_drp-drk', 'click', dayNightClickHandler);
attachEventListeners('.day_Night input', 'change', dayNightInputChangeHandler);

// Scroll settings
var offset = 60,
    offset_opacity = 900;

// Function to handle the scroll event
function handleScroll() {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  var backToTopElement = document.querySelector('.back-to-top');

  if (scrollTop > offset) {
    toggleClass(backToTopElement, 'js-back-to-top', true);
  } else {
    toggleClass(backToTopElement, 'js-back-to-top', false);
  }

  if (scrollTop > offset_opacity) {
    toggleClass(backToTopElement, 'js-bkt-out', true);
  } else {
    toggleClass(backToTopElement, 'js-bkt-out', false);
  }
}

// Function to handle smooth scroll to top
function scrollToTop() {
  var scrollToTopButton = document.querySelector(".back-to-top, .fltr_nav-src");
  
  if (scrollToTopButton) {
    scrollToTopButton.addEventListener("click", function () {
      var scrollToTop = window.setInterval(function () {
        var pos = window.pageYOffset;
        if (pos > 0) {
          window.scrollTo(0, pos - 20); // Scroll 20px at a time
        } else {
          window.clearInterval(scrollToTop);
        }
      }, 5); // Scroll every 5ms
    });
  }
}

// Call the function to attach the click event handler
scrollToTop();







const accordionBtns = document.querySelectorAll(".Faq1_tl-wr");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("Faq1_tl-act");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //this is if the accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is currently closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});





// Attach scroll event listener
window.addEventListener('scroll', handleScroll);
