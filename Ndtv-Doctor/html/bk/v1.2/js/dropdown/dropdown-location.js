(function () {
  //---- a. Dropdown Mobile ----//

  // Select all elements with class '.JS-LctDD .drp-lnk'
  var dropdownLinks = document.querySelectorAll('.JS-LctDD .drp-lnk');

  // Convert NodeList to Array and attach event listener to each element
  Array.prototype.slice.call(dropdownLinks).forEach(function (el) {
    el.addEventListener('click', onClick, false);
  });

  function onClick(e) {
    var el = this.parentNode;
    if (el.classList.contains('js-drp-open')) {
      hideSubMenu(el);
    } else {
      showSubMenu(el);
    }
  }

  function showSubMenu(el) {
    el.classList.add('js-drp-open');

    function onDocClick(e) {
      if (el.contains(e.target)) {
        return;
      }
      document.removeEventListener('click', onDocClick);
      hideSubMenu(el);
    }

    document.addEventListener('click', onDocClick);
  }

  function hideSubMenu(el) {
    el.classList.remove('js-drp-open');
  }

  // Clear input
  var closeIcons = document.querySelectorAll('.LctDD_frm-icn-cls');
  Array.prototype.slice.call(closeIcons).forEach(function (icon) {
    icon.addEventListener('click', function () {
      var inputWrapper = this.closest('.LctDD_inp-wrp');
      var inputField = inputWrapper.querySelector('.LctDD_inp');
      inputField.value = "";
    });
  });

  // Get currency value
  var currencyLinks = document.querySelectorAll('.LctDD_li-lk');
  Array.prototype.slice.call(currencyLinks).forEach(function (link) {
    link.addEventListener('click', function () {
      var landCrnVal = this.textContent;
      console.log(landCrnVal);
      var wrapper = this.closest('.LctDD_wr');
      var selectedTextElement = wrapper.querySelector('.LctDD_slc-txt');
      selectedTextElement.textContent = landCrnVal;
    });
  });
})();