/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_ie_fix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/ie-fix */ "./js/utils/ie-fix.js");
/* harmony import */ var _utils_ios_vh_fix__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/ios-vh-fix */ "./js/utils/ios-vh-fix.js");
/* harmony import */ var _modules_init_modals__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/init-modals */ "./js/modules/init-modals.js");
/* harmony import */ var _modules_init_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/init-menu */ "./js/modules/init-menu.js");
/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/accordion */ "./js/modules/accordion.js");
/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/slider */ "./js/modules/slider.js");





 // Utils
// ---------------------------------

Object(_utils_ie_fix__WEBPACK_IMPORTED_MODULE_0__["ieFix"])();
Object(_utils_ios_vh_fix__WEBPACK_IMPORTED_MODULE_1__["iosVhFix"])(); // Modules
// ---------------------------------

Object(_modules_init_modals__WEBPACK_IMPORTED_MODULE_2__["initModalFilter"])();
Object(_modules_init_modals__WEBPACK_IMPORTED_MODULE_2__["initModalCard"])();
Object(_modules_init_modals__WEBPACK_IMPORTED_MODULE_2__["initModalLogin"])();
Object(_modules_init_menu__WEBPACK_IMPORTED_MODULE_3__["initMenu"])();
Object(_modules_accordion__WEBPACK_IMPORTED_MODULE_4__["initAccordionFaq"])();
Object(_modules_accordion__WEBPACK_IMPORTED_MODULE_4__["initAccordionFilter"])();
Object(_modules_accordion__WEBPACK_IMPORTED_MODULE_4__["initAccordionModalFilter"])();
Object(_modules_slider__WEBPACK_IMPORTED_MODULE_5__["slider"])();
Object(_modules_slider__WEBPACK_IMPORTED_MODULE_5__["sliderCard"])();

/***/ }),

/***/ "./js/modules/accordion.js":
/*!*********************************!*\
  !*** ./js/modules/accordion.js ***!
  \*********************************/
/*! exports provided: initAccordionFaq, initAccordionFilter, initAccordionModalFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAccordionFaq", function() { return initAccordionFaq; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAccordionFilter", function() { return initAccordionFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initAccordionModalFilter", function() { return initAccordionModalFilter; });
var togglesQuestion = document.querySelectorAll('.faq__toggle');
var blocksAnswer = document.querySelectorAll('.faq__answer');
var togglesFilter = document.querySelectorAll('.cards__toggle');
var blocksFilter = document.querySelectorAll('.cards__options');
var togglesModalFilter = document.querySelectorAll('.modal-filter__toggle');
var blocksModalFilter = document.querySelectorAll('.modal-filter__options');

var closeLists = function closeLists(blocks) {
  blocks.forEach(function (element) {
    element.classList.add('close');
    element.style.maxHeight = 0;
  });
};

var deactivateToggles = function deactivateToggles(toggles) {
  toggles.forEach(function (element) {
    element.classList.remove('active');
  });
};

var toggleBlock = function toggleBlock(block, toggle) {
  block.classList.toggle('close');
  toggle.classList.toggle('active');
};

var initAccordionFaq = function initAccordionFaq() {
  closeLists(blocksAnswer);
  deactivateToggles(togglesQuestion);
  togglesQuestion.forEach(function (btn, index) {
    btn.classList.remove('no-js');
    btn.addEventListener('click', function (evt) {
      evt.preventDefault();

      if (btn.classList.contains('active')) {
        toggleBlock(blocksAnswer[index], btn);
      } else {
        closeLists(blocksAnswer);
        deactivateToggles(togglesQuestion);
        var maxHeight = blocksAnswer[index].style.maxHeight;
        blocksAnswer[index].style.maxHeight = maxHeight ? null : blocksAnswer[index].scrollHeight + 'px';
        toggleBlock(blocksAnswer[index], btn);
      }
    });
  });
};

var initAccordionFilter = function initAccordionFilter() {
  closeLists(blocksFilter);
  deactivateToggles(togglesFilter);
  togglesFilter.forEach(function (btn, index) {
    btn.classList.remove('no-js');
    btn.addEventListener('click', function (evt) {
      evt.preventDefault();
      var maxHeight = blocksFilter[index].style.maxHeight;
      blocksFilter[index].style.maxHeight = maxHeight ? null : blocksFilter[index].scrollHeight + 'px';
      toggleBlock(blocksFilter[index], btn);
    });
  });
};

var initAccordionModalFilter = function initAccordionModalFilter() {
  closeLists(blocksModalFilter);
  deactivateToggles(togglesModalFilter);
  togglesModalFilter.forEach(function (btn, index) {
    btn.classList.remove('no-js');
    btn.addEventListener('click', function (evt) {
      evt.preventDefault();
      var maxHeight = blocksModalFilter[index].style.maxHeight;
      blocksModalFilter[index].style.maxHeight = maxHeight ? null : blocksModalFilter[index].scrollHeight + 'px';
      toggleBlock(blocksModalFilter[index], btn);
    });
  });
};



/***/ }),

/***/ "./js/modules/init-menu.js":
/*!*********************************!*\
  !*** ./js/modules/init-menu.js ***!
  \*********************************/
/*! exports provided: initMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMenu", function() { return initMenu; });
/* harmony import */ var _utils_scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/scroll-lock */ "./js/utils/scroll-lock.js");

var body = document.querySelector('body');
var nav = document.querySelector('.header');
var wrapper = document.querySelector('.header__wrapper');
var navToggle = document.querySelector('.header__toggle');
var breakpointLg = window.matchMedia('(max-width: 1024px)');

var initMenu = function initMenu() {
  if (nav && navToggle) {
    nav.classList.remove('no-js');
    navToggle.addEventListener('click', function (e) {
      e.preventDefault();
      body.classList.toggle('scroll-lock');
      nav.classList.toggle('open');
      wrapper.classList.toggle('open');
    });
  }

  if (breakpointLg.matches) {
    window.addEventListener('orientationchange', function () {
      nav.classList.remove('open');
      wrapper.classList.remove('open');
      Object(_utils_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["enableScrolling"])();
    });
  }
};



/***/ }),

/***/ "./js/modules/init-modals.js":
/*!***********************************!*\
  !*** ./js/modules/init-modals.js ***!
  \***********************************/
/*! exports provided: initModalFilter, initModalCard, initModalLogin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initModalFilter", function() { return initModalFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initModalCard", function() { return initModalCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initModalLogin", function() { return initModalLogin; });
/* harmony import */ var _utils_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/modal */ "./js/utils/modal.js");

var modalFilter = document.querySelector('.modal-filter');
var modalFilterButtons = document.querySelectorAll('.open-modal-filter');
var modalCard = document.querySelector('.modal-card');
var modalCardButtons = document.querySelectorAll('.open-modal-card');
var modalLogin = document.querySelector('.modal-login');
var modalLoginButtons = document.querySelectorAll('.open-modal-login');
var emailInput = document.querySelector('.modal-login__content input[type="email"]');
var isStorageSupport = true;
var storageEmailUser = '';

var focusTextInput = function focusTextInput() {
  if (emailInput) {
    setTimeout(function () {
      emailInput.focus();
      storageEmailUser = localStorage.setItem('user-email', emailInput.value);

      try {
        storageEmailUser = localStorage.getItem('user-email');
      } catch (err) {
        isStorageSupport = false;
      }

      if (isStorageSupport) {
        storageEmailUser = localStorage.getItem('user-email');
        emailInput.value = storageEmailUser;
      }
    }, 100);
  }
};

var initModalLogin = function initModalLogin() {
  if (modalLogin && modalLoginButtons.length) {
    Object(_utils_modal__WEBPACK_IMPORTED_MODULE_0__["setupModal"])(modalLogin, false, modalLoginButtons, focusTextInput, false, false);
  }
};

var initModalFilter = function initModalFilter() {
  if (modalFilter && modalFilterButtons.length) {
    Object(_utils_modal__WEBPACK_IMPORTED_MODULE_0__["setupModal"])(modalFilter, false, modalFilterButtons, false, false, false);
  }
};

var initModalCard = function initModalCard() {
  if (modalCardButtons.length) {
    modalCardButtons.forEach(function (element) {
      element.removeAttribute('href');
      element.setAttribute('tabindex', '0');
    });

    if (modalCard) {
      Object(_utils_modal__WEBPACK_IMPORTED_MODULE_0__["setupModal"])(modalCard, false, modalCardButtons, false, true, false);
      modalCardButtons.forEach(function (btn) {
        btn.addEventListener('keyup', function (e) {
          if (e.keyCode === 13) {
            Object(_utils_modal__WEBPACK_IMPORTED_MODULE_0__["openModal"])(modalCard, false, false);
          }
        });
      });
    }
  }
};



/***/ }),

/***/ "./js/modules/slider.js":
/*!******************************!*\
  !*** ./js/modules/slider.js ***!
  \******************************/
/*! exports provided: slider, sliderCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slider", function() { return slider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sliderCard", function() { return sliderCard; });
var breakpointMd = window.matchMedia('(max-width: 767px)');

var slider = function slider() {
  // eslint-disable-next-line no-undef
  return new Swiper('.new-in__swiper-container', {
    speed: 500,
    spaceBetween: 30,
    navigation: {
      nextEl: '.new-in__arrow-right',
      prevEl: '.new-in__arrow-left'
    },
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: '.new-in__pagination',
          type: 'fraction',
          renderFraction: function renderFraction(currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' + ' <span>of</span> ' + '<span class="' + totalClass + '"></span>';
          }
        }
      },
      768: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        pagination: {
          el: '.new-in__pagination',
          clickable: true,
          renderBullet: function renderBullet(index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          }
        }
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        pagination: {
          el: '.new-in__pagination',
          clickable: true,
          renderBullet: function renderBullet(index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
          }
        }
      }
    }
  });
}; // eslint-disable-next-line consistent-return


var sliderCard = function sliderCard() {
  if (breakpointMd.matches) {
    // eslint-disable-next-line no-undef
    return new Swiper('.gallery__swiper-container', {
      speed: 500,
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
      pagination: {
        el: '.gallery__pagination',
        type: 'fraction',
        renderFraction: function renderFraction(currentClass, totalClass) {
          return '<span class="' + currentClass + '"></span>' + ' <span>of</span> ' + '<span class="' + totalClass + '"></span>';
        }
      }
    });
  }
};



/***/ }),

/***/ "./js/utils/ie-fix.js":
/*!****************************!*\
  !*** ./js/utils/ie-fix.js ***!
  \****************************/
/*! exports provided: ieFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ieFix", function() { return ieFix; });
/* eslint-disable */
var ieFix = function ieFix() {
  // Polyfills
  //---------------------------------
  // forEach
  // CustomEvent
  // includes
  // matches
  // closest
  // prepend
  // append
  // before
  // remove
  // startsWith
  // forEach
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function (callback, thisArg) {
      thisArg = thisArg || window;

      for (var i = 0; i < this.length; i++) {
        callback.call(thisArg, this[i], i, this);
      }
    };
  } // CustomEvent


  (function () {
    if (typeof window.CustomEvent === 'function') return false;

    function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    }

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  })(); // includes


  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, 'includes', {
      value: function value(searchElement, fromIndex) {
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }

        var o = Object(this);
        var len = o.length >>> 0;

        if (len === 0) {
          return false;
        }

        var n = fromIndex | 0;
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

        function sameValueZero(x, y) {
          return x === y || typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y);
        }

        while (k < len) {
          if (sameValueZero(o[k], searchElement)) {
            return true;
          }

          k++;
        }

        return false;
      }
    });
  } // matches


  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
      var matches = (this.document || this.ownerDocument).querySelectorAll(s);
      var i = matches.length; // eslint-disable-next-line no-empty

      while (--i >= 0 && matches.item(i) !== this) {}

      return i > -1;
    };
  } // closest


  if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  }

  if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
      var el = this;

      do {
        if (el.matches(s)) {
          return el;
        }

        el = el.parentElement || el.parentNode;
      } while (el !== null && el.nodeType === 1);

      return null;
    };
  } // prepend


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("prepend")) {
        return;
      }

      Object.defineProperty(item, "prepend", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function prepend() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.insertBefore(docFrag, this.firstChild);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]); // append


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("append")) {
        return;
      }

      Object.defineProperty(item, "append", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function append() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.appendChild(docFrag);
        }
      });
    });
  })([Element.prototype, Document.prototype, DocumentFragment.prototype]); // before


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("before")) {
        return;
      }

      Object.defineProperty(item, "before", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function before() {
          // eslint-disable-next-line prefer-rest-params
          var argArr = Array.prototype.slice.call(arguments);
          var docFrag = document.createDocumentFragment();
          argArr.forEach(function (argItem) {
            var isNode = argItem instanceof Node;
            docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
          });
          this.parentNode.insertBefore(docFrag, this);
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]); // remove


  (function (arr) {
    arr.forEach(function (item) {
      if (item.hasOwnProperty("remove")) {
        return;
      }

      Object.defineProperty(item, "remove", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: function remove() {
          if (this.parentNode !== null) {
            this.parentNode.removeChild(this);
          }
        }
      });
    });
  })([Element.prototype, CharacterData.prototype, DocumentType.prototype]); // startsWith


  if (!String.prototype.startsWith) {
    // eslint-disable-next-line no-extend-native
    Object.defineProperty(String.prototype, "startsWith", {
      value: function value(search, rawPos) {
        var pos = rawPos > 0 ? rawPos | 0 : 0;
        return this.substring(pos, pos + search.length) === search;
      }
    });
  } // Fixes
  //---------------------------------
  // ie download


  var ie11Download = function ie11Download(el) {
    if (el.href === "") {
      throw Error("The element has no href value.");
    }

    var filename = el.getAttribute("download");

    if (filename === null || filename === "") {
      var tmp = el.href.split("/");
      filename = tmp[tmp.length - 1];
    }

    el.addEventListener("click", function (evt) {
      evt.preventDefault();
      var xhr = new XMLHttpRequest();

      xhr.onloadstart = function () {
        xhr.responseType = "blob";
      };

      xhr.onload = function () {
        navigator.msSaveOrOpenBlob(xhr.response, filename);
      };

      xhr.open("GET", el.href, true);
      xhr.send();
    });
  };

  if (window.navigator.msSaveBlob) {
    var downloadLinks = document.querySelectorAll("a[download]");

    if (downloadLinks.length) {
      downloadLinks.forEach(function (el) {
        ie11Download(el);
      });
    }
  } // ie svg focus fix


  var unfocusableSvg = function unfocusableSvg() {
    if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
      return;
    }

    var svg = document.querySelectorAll('svg');
    svg.forEach(function (el) {
      el.setAttribute('focusable', 'false');
    });
  };

  unfocusableSvg(); //ie footer nailing

  var ieFooterNailing = function ieFooterNailing() {
    var main = document.querySelector('main');
    var header = document.querySelector('.header');
    var footer = document.querySelector('.footer');
    var headerH;
    var footerH;
    var mainHMin;

    if (!main || !(!!window.MSInputMethodContext && !!document.documentMode)) {
      return;
    }

    var mainHeight = function mainHeight() {
      // eslint-disable-next-line no-unused-expressions
      header ? headerH = header.getBoundingClientRect().height : headerH = 0; // eslint-disable-next-line no-unused-expressions

      footer ? footerH = footer.getBoundingClientRect().height : footerH = 0;
      mainHMin = window.innerHeight;
      main.style.minHeight = mainHMin - (headerH + footerH) + 'px';
    };

    document.addEventListener('loadDOMContentLoaded', mainHeight());
    window.addEventListener('resize', mainHeight);
  };

  ieFooterNailing();
};



/***/ }),

/***/ "./js/utils/ios-vh-fix.js":
/*!********************************!*\
  !*** ./js/utils/ios-vh-fix.js ***!
  \********************************/
/*! exports provided: iosVhFix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iosVhFix", function() { return iosVhFix; });
var isIos = function isIos() {
  return ['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(navigator.platform) // iPad on iOS 13 detection
  || navigator.userAgent.includes('Mac') && 'ontouchend' in document;
};

var iosVhFix = function iosVhFix() {
  if (!(!!window.MSInputMethodContext && !!document.documentMode)) {
    if (isIos()) {
      var vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
      window.addEventListener('resize', function () {
        vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
      });
    }
  }
};



/***/ }),

/***/ "./js/utils/modal.js":
/*!***************************!*\
  !*** ./js/utils/modal.js ***!
  \***************************/
/*! exports provided: setupModal, openModal, closeModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupModal", function() { return setupModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openModal", function() { return openModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeModal", function() { return closeModal; });
/* harmony import */ var _scroll_lock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scroll-lock */ "./js/utils/scroll-lock.js");


var openModal = function openModal(modal, callback, preventScrollLock) {
  modal.classList.add('modal--active');

  if (callback) {
    callback();
  }

  if (!preventScrollLock) {
    Object(_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["disableScrolling"])();
  }
};

var closeModal = function closeModal(modal, callback, preventScrollLock) {
  modal.classList.remove('modal--active');

  if (callback) {
    callback();
  }

  if (!preventScrollLock) {
    setTimeout(_scroll_lock__WEBPACK_IMPORTED_MODULE_0__["enableScrolling"], 300);
  }
};

var onEscPress = function onEscPress(evt, modal, callback) {
  var isEscKey = evt.key === 'Escape' || evt.key === 'Esc';

  if (isEscKey && modal.classList.contains('modal--active')) {
    evt.preventDefault();
    closeModal(modal, callback);
  }
};

var setModalListeners = function setModalListeners(modal, closeCallback, preventScrollLock) {
  var overlay = modal.querySelector('.modal__overlay');
  var closeBtn = modal.querySelector('.modal__close-btn');
  closeBtn.addEventListener('click', function () {
    closeModal(modal, closeCallback, preventScrollLock);
  });
  overlay.addEventListener('click', function () {
    closeModal(modal, closeCallback, preventScrollLock);
  });
  document.addEventListener('keydown', function (evt) {
    onEscPress(evt, modal, closeCallback, preventScrollLock);
  });
};

var setupModal = function setupModal(modal, closeCallback, modalBtns, openCallback, noPrevDefault, preventScrollLock) {
  if (modalBtns) {
    modalBtns.forEach(function (btn) {
      btn.addEventListener('click', function (evt) {
        if (!noPrevDefault) {
          evt.preventDefault();
        }

        openModal(modal, openCallback, preventScrollLock);
      });
    });
  }

  setModalListeners(modal, closeCallback, preventScrollLock);
};



/***/ }),

/***/ "./js/utils/scroll-lock.js":
/*!*********************************!*\
  !*** ./js/utils/scroll-lock.js ***!
  \*********************************/
/*! exports provided: disableScrolling, enableScrolling */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableScrolling", function() { return disableScrolling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableScrolling", function() { return enableScrolling; });
var body = document.querySelector('body'); // eslint-disable-next-line consistent-return

var getScrollbarWidth = function getScrollbarWidth() {
  var outer = document.createElement('div');
  outer.style.visibility = 'hidden';
  outer.style.overflow = 'scroll';
  outer.style.msOverflowStyle = 'scrollbar';
  body.appendChild(outer);
  var inner = document.createElement('div');
  outer.appendChild(inner);
  var scrollbarWidth = outer.offsetWidth - inner.offsetWidth;
  outer.parentNode.removeChild(outer);

  if (body.offsetHeight > window.innerHeight) {
    return scrollbarWidth;
  }
};

var getBodyScrollTop = function getBodyScrollTop() {
  return self.pageYOffset || document.documentElement && document.documentElement.ScrollTop || body && body.scrollTop;
};

var disableScrolling = function disableScrolling(noScrollbar) {
  if (!noScrollbar) {
    var scrollWidth = getScrollbarWidth();
    body.setAttribute('style', "padding-right: ".concat(scrollWidth, "px;"));
  }

  body.dataset.scrollY = "".concat(getBodyScrollTop());
  body.style.top = "-".concat(body.dataset.scrollY, "px");
  body.classList.add('scroll-lock');
};

var enableScrolling = function enableScrolling() {
  body.removeAttribute('style');
  body.classList.remove('scroll-lock');
  window.scrollTo(0, +body.dataset.scrollY);
};



/***/ })

/******/ });
//# sourceMappingURL=main.js.map