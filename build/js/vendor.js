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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/vendor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/webpack/buildin/amd-options.js":
/*!******************************************************!*\
  !*** ../node_modules/webpack/buildin/amd-options.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "../node_modules/webpack/buildin/harmony-module.js":
/*!*********************************************************!*\
  !*** ../node_modules/webpack/buildin/harmony-module.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if (!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./js/vendor.js":
/*!**********************!*\
  !*** ./js/vendor.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vendor_swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vendor/swiper */ "./js/vendor/swiper.js");
/* harmony import */ var _vendor_nouislider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vendor/nouislider */ "./js/vendor/nouislider.js");
/* harmony import */ var _vendor_wNumb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vendor/wNumb */ "./js/vendor/wNumb.js");




/***/ }),

/***/ "./js/vendor/nouislider.js":
/*!*********************************!*\
  !*** ./js/vendor/nouislider.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var noUiSlider = function noUiSlider() {
  (function (factory) {
    if (typeof define === "function" && __webpack_require__(/*! !webpack amd options */ "../node_modules/webpack/buildin/amd-options.js")) {
      define([], factory);
    } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object") {
      module.exports = factory();
    } else {
      window.noUiSlider = factory();
    }
  })(function () {
    "use strict";

    var VERSION = "14.7.0"; //region Helper Methods

    function isValidFormatter(entry) {
      return _typeof(entry) === "object" && typeof entry.to === "function" && typeof entry.from === "function";
    }

    function removeElement(el) {
      el.parentElement.removeChild(el);
    }

    function isSet(value) {
      return value !== null && value !== undefined;
    } // Bindable version


    function preventDefault(e) {
      e.preventDefault();
    } // Removes duplicates from an array.


    function unique(array) {
      return array.filter(function (a) {
        return !this[a] ? this[a] = true : false;
      }, {});
    } // Round a value to the closest 'to'.


    function closest(value, to) {
      return Math.round(value / to) * to;
    } // Current position of an element relative to the document.


    function offset(elem, orientation) {
      var rect = elem.getBoundingClientRect();
      var doc = elem.ownerDocument;
      var docElem = doc.documentElement;
      var pageOffset = getPageOffset(doc); // getBoundingClientRect contains left scroll in Chrome on Android.
      // I haven't found a feature detection that proves this. Worst case
      // scenario on mis-match: the 'tap' feature on horizontal sliders breaks.

      if (/webkit.*Chrome.*Mobile/i.test(navigator.userAgent)) {
        pageOffset.x = 0;
      }

      return orientation ? rect.top + pageOffset.y - docElem.clientTop : rect.left + pageOffset.x - docElem.clientLeft;
    } // Checks whether a value is numerical.


    function isNumeric(a) {
      return typeof a === "number" && !isNaN(a) && isFinite(a);
    } // Sets a class and removes it after [duration] ms.


    function addClassFor(element, className, duration) {
      if (duration > 0) {
        addClass(element, className);
        setTimeout(function () {
          removeClass(element, className);
        }, duration);
      }
    } // Limits a value to 0 - 100


    function limit(a) {
      return Math.max(Math.min(a, 100), 0);
    } // Wraps a variable as an array, if it isn't one yet.
    // Note that an input array is returned by reference!


    function asArray(a) {
      return Array.isArray(a) ? a : [a];
    } // Counts decimals


    function countDecimals(numStr) {
      numStr = String(numStr);
      var pieces = numStr.split(".");
      return pieces.length > 1 ? pieces[1].length : 0;
    } // http://youmightnotneedjquery.com/#add_class


    function addClass(el, className) {
      if (el.classList && !/\s/.test(className)) {
        el.classList.add(className);
      } else {
        el.className += " " + className;
      }
    } // http://youmightnotneedjquery.com/#remove_class


    function removeClass(el, className) {
      if (el.classList && !/\s/.test(className)) {
        el.classList.remove(className);
      } else {
        el.className = el.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
      }
    } // https://plainjs.com/javascript/attributes/adding-removing-and-testing-for-classes-9/


    function hasClass(el, className) {
      return el.classList ? el.classList.contains(className) : new RegExp("\\b" + className + "\\b").test(el.className);
    } // https://developer.mozilla.org/en-US/docs/Web/API/Window/scrollY#Notes


    function getPageOffset(doc) {
      var supportPageOffset = window.pageXOffset !== undefined;
      var isCSS1Compat = (doc.compatMode || "") === "CSS1Compat";
      var x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? doc.documentElement.scrollLeft : doc.body.scrollLeft;
      var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? doc.documentElement.scrollTop : doc.body.scrollTop;
      return {
        x: x,
        y: y
      };
    } // we provide a function to compute constants instead
    // of accessing window.* as soon as the module needs it
    // so that we do not compute anything if not needed


    function getActions() {
      // Determine the events to bind. IE11 implements pointerEvents without
      // a prefix, which breaks compatibility with the IE10 implementation.
      return window.navigator.pointerEnabled ? {
        start: "pointerdown",
        move: "pointermove",
        end: "pointerup"
      } : window.navigator.msPointerEnabled ? {
        start: "MSPointerDown",
        move: "MSPointerMove",
        end: "MSPointerUp"
      } : {
        start: "mousedown touchstart",
        move: "mousemove touchmove",
        end: "mouseup touchend"
      };
    } // https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
    // Issue #785


    function getSupportsPassive() {
      var supportsPassive = false;
      /* eslint-disable */

      try {
        var opts = Object.defineProperty({}, "passive", {
          get: function get() {
            supportsPassive = true;
          }
        });
        window.addEventListener("test", null, opts);
      } catch (e) {}
      /* eslint-enable */


      return supportsPassive;
    }

    function getSupportsTouchActionNone() {
      return window.CSS && CSS.supports && CSS.supports("touch-action", "none");
    } //endregion
    //region Range Calculation
    // Determine the size of a sub-range in relation to a full range.


    function subRangeRatio(pa, pb) {
      return 100 / (pb - pa);
    } // (percentage) How many percent is this value of this range?


    function fromPercentage(range, value, startRange) {
      return value * 100 / (range[startRange + 1] - range[startRange]);
    } // (percentage) Where is this value on this range?


    function toPercentage(range, value) {
      return fromPercentage(range, range[0] < 0 ? value + Math.abs(range[0]) : value - range[0], 0);
    } // (value) How much is this percentage on this range?


    function isPercentage(range, value) {
      return value * (range[1] - range[0]) / 100 + range[0];
    }

    function getJ(value, arr) {
      var j = 1;

      while (value >= arr[j]) {
        j += 1;
      }

      return j;
    } // (percentage) Input a value, find where, on a scale of 0-100, it applies.


    function toStepping(xVal, xPct, value) {
      if (value >= xVal.slice(-1)[0]) {
        return 100;
      }

      var j = getJ(value, xVal);
      var va = xVal[j - 1];
      var vb = xVal[j];
      var pa = xPct[j - 1];
      var pb = xPct[j];
      return pa + toPercentage([va, vb], value) / subRangeRatio(pa, pb);
    } // (value) Input a percentage, find where it is on the specified range.


    function fromStepping(xVal, xPct, value) {
      // There is no range group that fits 100
      if (value >= 100) {
        return xVal.slice(-1)[0];
      }

      var j = getJ(value, xPct);
      var va = xVal[j - 1];
      var vb = xVal[j];
      var pa = xPct[j - 1];
      var pb = xPct[j];
      return isPercentage([va, vb], (value - pa) * subRangeRatio(pa, pb));
    } // (percentage) Get the step that applies at a certain value.


    function getStep(xPct, xSteps, snap, value) {
      if (value === 100) {
        return value;
      }

      var j = getJ(value, xPct);
      var a = xPct[j - 1];
      var b = xPct[j]; // If 'snap' is set, steps are used as fixed points on the slider.

      if (snap) {
        // Find the closest position, a or b.
        if (value - a > (b - a) / 2) {
          return b;
        }

        return a;
      }

      if (!xSteps[j - 1]) {
        return value;
      }

      return xPct[j - 1] + closest(value - xPct[j - 1], xSteps[j - 1]);
    }

    function handleEntryPoint(index, value, that) {
      var percentage; // Wrap numerical input in an array.

      if (typeof value === "number") {
        value = [value];
      } // Reject any invalid input, by testing whether value is an array.


      if (!Array.isArray(value)) {
        throw new Error("noUiSlider (" + VERSION + "): 'range' contains invalid value.");
      } // Covert min/max syntax to 0 and 100.


      if (index === "min") {
        percentage = 0;
      } else if (index === "max") {
        percentage = 100;
      } else {
        percentage = parseFloat(index);
      } // Check for correct input.


      if (!isNumeric(percentage) || !isNumeric(value[0])) {
        throw new Error("noUiSlider (" + VERSION + "): 'range' value isn't numeric.");
      } // Store values.


      that.xPct.push(percentage);
      that.xVal.push(value[0]); // NaN will evaluate to false too, but to keep
      // logging clear, set step explicitly. Make sure
      // not to override the 'step' setting with false.

      if (!percentage) {
        if (!isNaN(value[1])) {
          that.xSteps[0] = value[1];
        }
      } else {
        that.xSteps.push(isNaN(value[1]) ? false : value[1]);
      }

      that.xHighestCompleteStep.push(0);
    }

    function handleStepPoint(i, n, that) {
      // Ignore 'false' stepping.
      if (!n) {
        return;
      } // Step over zero-length ranges (#948);


      if (that.xVal[i] === that.xVal[i + 1]) {
        that.xSteps[i] = that.xHighestCompleteStep[i] = that.xVal[i];
        return;
      } // Factor to range ratio


      that.xSteps[i] = fromPercentage([that.xVal[i], that.xVal[i + 1]], n, 0) / subRangeRatio(that.xPct[i], that.xPct[i + 1]);
      var totalSteps = (that.xVal[i + 1] - that.xVal[i]) / that.xNumSteps[i];
      var highestStep = Math.ceil(Number(totalSteps.toFixed(3)) - 1);
      var step = that.xVal[i] + that.xNumSteps[i] * highestStep;
      that.xHighestCompleteStep[i] = step;
    } //endregion
    //region Spectrum


    function Spectrum(entry, snap, singleStep) {
      this.xPct = [];
      this.xVal = [];
      this.xSteps = [singleStep || false];
      this.xNumSteps = [false];
      this.xHighestCompleteStep = [];
      this.snap = snap;
      var index;
      var ordered = []; // [0, 'min'], [1, '50%'], [2, 'max']
      // Map the object keys to an array.

      for (index in entry) {
        if (entry.hasOwnProperty(index)) {
          ordered.push([entry[index], index]);
        }
      } // Sort all entries by value (numeric sort).


      if (ordered.length && _typeof(ordered[0][0]) === "object") {
        ordered.sort(function (a, b) {
          return a[0][0] - b[0][0];
        });
      } else {
        ordered.sort(function (a, b) {
          return a[0] - b[0];
        });
      } // Convert all entries to subranges.


      for (index = 0; index < ordered.length; index++) {
        handleEntryPoint(ordered[index][1], ordered[index][0], this);
      } // Store the actual step values.
      // xSteps is sorted in the same order as xPct and xVal.


      this.xNumSteps = this.xSteps.slice(0); // Convert all numeric steps to the percentage of the subrange they represent.

      for (index = 0; index < this.xNumSteps.length; index++) {
        handleStepPoint(index, this.xNumSteps[index], this);
      }
    }

    Spectrum.prototype.getDistance = function (value) {
      var index;
      var distances = [];

      for (index = 0; index < this.xNumSteps.length - 1; index++) {
        // last "range" can't contain step size as it is purely an endpoint.
        var step = this.xNumSteps[index];

        if (step && value / step % 1 !== 0) {
          throw new Error("noUiSlider (" + VERSION + "): 'limit', 'margin' and 'padding' of " + this.xPct[index] + "% range must be divisible by step.");
        } // Calculate percentual distance in current range of limit, margin or padding


        distances[index] = fromPercentage(this.xVal, value, index);
      }

      return distances;
    }; // Calculate the percentual distance over the whole scale of ranges.
    // direction: 0 = backwards / 1 = forwards


    Spectrum.prototype.getAbsoluteDistance = function (value, distances, direction) {
      var xPct_index = 0; // Calculate range where to start calculation

      if (value < this.xPct[this.xPct.length - 1]) {
        while (value > this.xPct[xPct_index + 1]) {
          xPct_index++;
        }
      } else if (value === this.xPct[this.xPct.length - 1]) {
        xPct_index = this.xPct.length - 2;
      } // If looking backwards and the value is exactly at a range separator then look one range further


      if (!direction && value === this.xPct[xPct_index + 1]) {
        xPct_index++;
      }

      var start_factor;
      var rest_factor = 1;
      var rest_rel_distance = distances[xPct_index];
      var range_pct = 0;
      var rel_range_distance = 0;
      var abs_distance_counter = 0;
      var range_counter = 0; // Calculate what part of the start range the value is

      if (direction) {
        start_factor = (value - this.xPct[xPct_index]) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
      } else {
        start_factor = (this.xPct[xPct_index + 1] - value) / (this.xPct[xPct_index + 1] - this.xPct[xPct_index]);
      } // Do until the complete distance across ranges is calculated


      while (rest_rel_distance > 0) {
        // Calculate the percentage of total range
        range_pct = this.xPct[xPct_index + 1 + range_counter] - this.xPct[xPct_index + range_counter]; // Detect if the margin, padding or limit is larger then the current range and calculate

        if (distances[xPct_index + range_counter] * rest_factor + 100 - start_factor * 100 > 100) {
          // If larger then take the percentual distance of the whole range
          rel_range_distance = range_pct * start_factor; // Rest factor of relative percentual distance still to be calculated

          rest_factor = (rest_rel_distance - 100 * start_factor) / distances[xPct_index + range_counter]; // Set start factor to 1 as for next range it does not apply.

          start_factor = 1;
        } else {
          // If smaller or equal then take the percentual distance of the calculate percentual part of that range
          rel_range_distance = distances[xPct_index + range_counter] * range_pct / 100 * rest_factor; // No rest left as the rest fits in current range

          rest_factor = 0;
        }

        if (direction) {
          abs_distance_counter = abs_distance_counter - rel_range_distance; // Limit range to first range when distance becomes outside of minimum range

          if (this.xPct.length + range_counter >= 1) {
            range_counter--;
          }
        } else {
          abs_distance_counter = abs_distance_counter + rel_range_distance; // Limit range to last range when distance becomes outside of maximum range

          if (this.xPct.length - range_counter >= 1) {
            range_counter++;
          }
        } // Rest of relative percentual distance still to be calculated


        rest_rel_distance = distances[xPct_index + range_counter] * rest_factor;
      }

      return value + abs_distance_counter;
    };

    Spectrum.prototype.toStepping = function (value) {
      value = toStepping(this.xVal, this.xPct, value);
      return value;
    };

    Spectrum.prototype.fromStepping = function (value) {
      return fromStepping(this.xVal, this.xPct, value);
    };

    Spectrum.prototype.getStep = function (value) {
      value = getStep(this.xPct, this.xSteps, this.snap, value);
      return value;
    };

    Spectrum.prototype.getDefaultStep = function (value, isDown, size) {
      var j = getJ(value, this.xPct); // When at the top or stepping down, look at the previous sub-range

      if (value === 100 || isDown && value === this.xPct[j - 1]) {
        j = Math.max(j - 1, 1);
      }

      return (this.xVal[j] - this.xVal[j - 1]) / size;
    };

    Spectrum.prototype.getNearbySteps = function (value) {
      var j = getJ(value, this.xPct);
      return {
        stepBefore: {
          startValue: this.xVal[j - 2],
          step: this.xNumSteps[j - 2],
          highestStep: this.xHighestCompleteStep[j - 2]
        },
        thisStep: {
          startValue: this.xVal[j - 1],
          step: this.xNumSteps[j - 1],
          highestStep: this.xHighestCompleteStep[j - 1]
        },
        stepAfter: {
          startValue: this.xVal[j],
          step: this.xNumSteps[j],
          highestStep: this.xHighestCompleteStep[j]
        }
      };
    };

    Spectrum.prototype.countStepDecimals = function () {
      var stepDecimals = this.xNumSteps.map(countDecimals);
      return Math.max.apply(null, stepDecimals);
    }; // Outside testing


    Spectrum.prototype.convert = function (value) {
      return this.getStep(this.toStepping(value));
    }; //endregion
    //region Options

    /*	Every input option is tested and parsed. This'll prevent
        endless validation in internal methods. These tests are
        structured with an item for every option available. An
        option can be marked as required by setting the 'r' flag.
        The testing function is provided with three arguments:
            - The provided value for the option;
            - A reference to the options object;
            - The name for the option;
         The testing function returns false when an error is detected,
        or true when everything is OK. It can also modify the option
        object, to make sure all values can be correctly looped elsewhere. */
    //region Defaults


    var defaultFormatter = {
      to: function to(value) {
        return value !== undefined && value.toFixed(2);
      },
      from: Number
    };
    var cssClasses = {
      target: "target",
      base: "base",
      origin: "origin",
      handle: "handle",
      handleLower: "handle-lower",
      handleUpper: "handle-upper",
      touchArea: "touch-area",
      horizontal: "horizontal",
      vertical: "vertical",
      background: "background",
      connect: "connect",
      connects: "connects",
      ltr: "ltr",
      rtl: "rtl",
      textDirectionLtr: "txt-dir-ltr",
      textDirectionRtl: "txt-dir-rtl",
      draggable: "draggable",
      drag: "state-drag",
      tap: "state-tap",
      active: "active",
      tooltip: "tooltip",
      pips: "pips",
      pipsHorizontal: "pips-horizontal",
      pipsVertical: "pips-vertical",
      marker: "marker",
      markerHorizontal: "marker-horizontal",
      markerVertical: "marker-vertical",
      markerNormal: "marker-normal",
      markerLarge: "marker-large",
      markerSub: "marker-sub",
      value: "value",
      valueHorizontal: "value-horizontal",
      valueVertical: "value-vertical",
      valueNormal: "value-normal",
      valueLarge: "value-large",
      valueSub: "value-sub"
    }; // Namespaces of internal event listeners

    var INTERNAL_EVENT_NS = {
      tooltips: ".__tooltips",
      aria: ".__aria"
    }; //endregion

    function validateFormat(entry) {
      // Any object with a to and from method is supported.
      if (isValidFormatter(entry)) {
        return true;
      }

      throw new Error("noUiSlider (" + VERSION + "): 'format' requires 'to' and 'from' methods.");
    }

    function testStep(parsed, entry) {
      if (!isNumeric(entry)) {
        throw new Error("noUiSlider (" + VERSION + "): 'step' is not numeric.");
      } // The step option can still be used to set stepping
      // for linear sliders. Overwritten if set in 'range'.


      parsed.singleStep = entry;
    }

    function testKeyboardPageMultiplier(parsed, entry) {
      if (!isNumeric(entry)) {
        throw new Error("noUiSlider (" + VERSION + "): 'keyboardPageMultiplier' is not numeric.");
      }

      parsed.keyboardPageMultiplier = entry;
    }

    function testKeyboardDefaultStep(parsed, entry) {
      if (!isNumeric(entry)) {
        throw new Error("noUiSlider (" + VERSION + "): 'keyboardDefaultStep' is not numeric.");
      }

      parsed.keyboardDefaultStep = entry;
    }

    function testRange(parsed, entry) {
      // Filter incorrect input.
      if (_typeof(entry) !== "object" || Array.isArray(entry)) {
        throw new Error("noUiSlider (" + VERSION + "): 'range' is not an object.");
      } // Catch missing start or end.


      if (entry.min === undefined || entry.max === undefined) {
        throw new Error("noUiSlider (" + VERSION + "): Missing 'min' or 'max' in 'range'.");
      } // Catch equal start or end.


      if (entry.min === entry.max) {
        throw new Error("noUiSlider (" + VERSION + "): 'range' 'min' and 'max' cannot be equal.");
      }

      parsed.spectrum = new Spectrum(entry, parsed.snap, parsed.singleStep);
    }

    function testStart(parsed, entry) {
      entry = asArray(entry); // Validate input. Values aren't tested, as the public .val method
      // will always provide a valid location.

      if (!Array.isArray(entry) || !entry.length) {
        throw new Error("noUiSlider (" + VERSION + "): 'start' option is incorrect.");
      } // Store the number of handles.


      parsed.handles = entry.length; // When the slider is initialized, the .val method will
      // be called with the start options.

      parsed.start = entry;
    }

    function testSnap(parsed, entry) {
      // Enforce 100% stepping within subranges.
      parsed.snap = entry;

      if (typeof entry !== "boolean") {
        throw new Error("noUiSlider (" + VERSION + "): 'snap' option must be a boolean.");
      }
    }

    function testAnimate(parsed, entry) {
      // Enforce 100% stepping within subranges.
      parsed.animate = entry;

      if (typeof entry !== "boolean") {
        throw new Error("noUiSlider (" + VERSION + "): 'animate' option must be a boolean.");
      }
    }

    function testAnimationDuration(parsed, entry) {
      parsed.animationDuration = entry;

      if (typeof entry !== "number") {
        throw new Error("noUiSlider (" + VERSION + "): 'animationDuration' option must be a number.");
      }
    }

    function testConnect(parsed, entry) {
      var connect = [false];
      var i; // Map legacy options

      if (entry === "lower") {
        entry = [true, false];
      } else if (entry === "upper") {
        entry = [false, true];
      } // Handle boolean options


      if (entry === true || entry === false) {
        for (i = 1; i < parsed.handles; i++) {
          connect.push(entry);
        }

        connect.push(false);
      } // Reject invalid input
      else if (!Array.isArray(entry) || !entry.length || entry.length !== parsed.handles + 1) {
          throw new Error("noUiSlider (" + VERSION + "): 'connect' option doesn't match handle count.");
        } else {
          connect = entry;
        }

      parsed.connect = connect;
    }

    function testOrientation(parsed, entry) {
      // Set orientation to an a numerical value for easy
      // array selection.
      switch (entry) {
        case "horizontal":
          parsed.ort = 0;
          break;

        case "vertical":
          parsed.ort = 1;
          break;

        default:
          throw new Error("noUiSlider (" + VERSION + "): 'orientation' option is invalid.");
      }
    }

    function testMargin(parsed, entry) {
      if (!isNumeric(entry)) {
        throw new Error("noUiSlider (" + VERSION + "): 'margin' option must be numeric.");
      } // Issue #582


      if (entry === 0) {
        return;
      }

      parsed.margin = parsed.spectrum.getDistance(entry);
    }

    function testLimit(parsed, entry) {
      if (!isNumeric(entry)) {
        throw new Error("noUiSlider (" + VERSION + "): 'limit' option must be numeric.");
      }

      parsed.limit = parsed.spectrum.getDistance(entry);

      if (!parsed.limit || parsed.handles < 2) {
        throw new Error("noUiSlider (" + VERSION + "): 'limit' option is only supported on linear sliders with 2 or more handles.");
      }
    }

    function testPadding(parsed, entry) {
      var index;

      if (!isNumeric(entry) && !Array.isArray(entry)) {
        throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers.");
      }

      if (Array.isArray(entry) && !(entry.length === 2 || isNumeric(entry[0]) || isNumeric(entry[1]))) {
        throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be numeric or array of exactly 2 numbers.");
      }

      if (entry === 0) {
        return;
      }

      if (!Array.isArray(entry)) {
        entry = [entry, entry];
      } // 'getDistance' returns false for invalid values.


      parsed.padding = [parsed.spectrum.getDistance(entry[0]), parsed.spectrum.getDistance(entry[1])];

      for (index = 0; index < parsed.spectrum.xNumSteps.length - 1; index++) {
        // last "range" can't contain step size as it is purely an endpoint.
        if (parsed.padding[0][index] < 0 || parsed.padding[1][index] < 0) {
          throw new Error("noUiSlider (" + VERSION + "): 'padding' option must be a positive number(s).");
        }
      }

      var totalPadding = entry[0] + entry[1];
      var firstValue = parsed.spectrum.xVal[0];
      var lastValue = parsed.spectrum.xVal[parsed.spectrum.xVal.length - 1];

      if (totalPadding / (lastValue - firstValue) > 1) {
        throw new Error("noUiSlider (" + VERSION + "): 'padding' option must not exceed 100% of the range.");
      }
    }

    function testDirection(parsed, entry) {
      // Set direction as a numerical value for easy parsing.
      // Invert connection for RTL sliders, so that the proper
      // handles get the connect/background classes.
      switch (entry) {
        case "ltr":
          parsed.dir = 0;
          break;

        case "rtl":
          parsed.dir = 1;
          break;

        default:
          throw new Error("noUiSlider (" + VERSION + "): 'direction' option was not recognized.");
      }
    }

    function testBehaviour(parsed, entry) {
      // Make sure the input is a string.
      if (typeof entry !== "string") {
        throw new Error("noUiSlider (" + VERSION + "): 'behaviour' must be a string containing options.");
      } // Check if the string contains any keywords.
      // None are required.


      var tap = entry.indexOf("tap") >= 0;
      var drag = entry.indexOf("drag") >= 0;
      var fixed = entry.indexOf("fixed") >= 0;
      var snap = entry.indexOf("snap") >= 0;
      var hover = entry.indexOf("hover") >= 0;
      var unconstrained = entry.indexOf("unconstrained") >= 0;

      if (fixed) {
        if (parsed.handles !== 2) {
          throw new Error("noUiSlider (" + VERSION + "): 'fixed' behaviour must be used with 2 handles");
        } // Use margin to enforce fixed state


        testMargin(parsed, parsed.start[1] - parsed.start[0]);
      }

      if (unconstrained && (parsed.margin || parsed.limit)) {
        throw new Error("noUiSlider (" + VERSION + "): 'unconstrained' behaviour cannot be used with margin or limit");
      }

      parsed.events = {
        tap: tap || snap,
        drag: drag,
        fixed: fixed,
        snap: snap,
        hover: hover,
        unconstrained: unconstrained
      };
    }

    function testTooltips(parsed, entry) {
      if (entry === false) {
        return;
      }

      if (entry === true) {
        parsed.tooltips = [];

        for (var i = 0; i < parsed.handles; i++) {
          parsed.tooltips.push(true);
        }
      } else {
        parsed.tooltips = asArray(entry);

        if (parsed.tooltips.length !== parsed.handles) {
          throw new Error("noUiSlider (" + VERSION + "): must pass a formatter for all handles.");
        }

        parsed.tooltips.forEach(function (formatter) {
          if (typeof formatter !== "boolean" && (_typeof(formatter) !== "object" || typeof formatter.to !== "function")) {
            throw new Error("noUiSlider (" + VERSION + "): 'tooltips' must be passed a formatter or 'false'.");
          }
        });
      }
    }

    function testAriaFormat(parsed, entry) {
      parsed.ariaFormat = entry;
      validateFormat(entry);
    }

    function testFormat(parsed, entry) {
      parsed.format = entry;
      validateFormat(entry);
    }

    function testKeyboardSupport(parsed, entry) {
      parsed.keyboardSupport = entry;

      if (typeof entry !== "boolean") {
        throw new Error("noUiSlider (" + VERSION + "): 'keyboardSupport' option must be a boolean.");
      }
    }

    function testDocumentElement(parsed, entry) {
      // This is an advanced option. Passed values are used without validation.
      parsed.documentElement = entry;
    }

    function testCssPrefix(parsed, entry) {
      if (typeof entry !== "string" && entry !== false) {
        throw new Error("noUiSlider (" + VERSION + "): 'cssPrefix' must be a string or `false`.");
      }

      parsed.cssPrefix = entry;
    }

    function testCssClasses(parsed, entry) {
      if (_typeof(entry) !== "object") {
        throw new Error("noUiSlider (" + VERSION + "): 'cssClasses' must be an object.");
      }

      if (typeof parsed.cssPrefix === "string") {
        parsed.cssClasses = {};

        for (var key in entry) {
          if (!entry.hasOwnProperty(key)) {
            continue;
          }

          parsed.cssClasses[key] = parsed.cssPrefix + entry[key];
        }
      } else {
        parsed.cssClasses = entry;
      }
    } // Test all developer settings and parse to assumption-safe values.


    function testOptions(options) {
      // To prove a fix for #537, freeze options here.
      // If the object is modified, an error will be thrown.
      // Object.freeze(options);
      var parsed = {
        margin: 0,
        limit: 0,
        padding: 0,
        animate: true,
        animationDuration: 300,
        ariaFormat: defaultFormatter,
        format: defaultFormatter
      }; // Tests are executed in the order they are presented here.

      var tests = {
        step: {
          r: false,
          t: testStep
        },
        keyboardPageMultiplier: {
          r: false,
          t: testKeyboardPageMultiplier
        },
        keyboardDefaultStep: {
          r: false,
          t: testKeyboardDefaultStep
        },
        start: {
          r: true,
          t: testStart
        },
        connect: {
          r: true,
          t: testConnect
        },
        direction: {
          r: true,
          t: testDirection
        },
        snap: {
          r: false,
          t: testSnap
        },
        animate: {
          r: false,
          t: testAnimate
        },
        animationDuration: {
          r: false,
          t: testAnimationDuration
        },
        range: {
          r: true,
          t: testRange
        },
        orientation: {
          r: false,
          t: testOrientation
        },
        margin: {
          r: false,
          t: testMargin
        },
        limit: {
          r: false,
          t: testLimit
        },
        padding: {
          r: false,
          t: testPadding
        },
        behaviour: {
          r: true,
          t: testBehaviour
        },
        ariaFormat: {
          r: false,
          t: testAriaFormat
        },
        format: {
          r: false,
          t: testFormat
        },
        tooltips: {
          r: false,
          t: testTooltips
        },
        keyboardSupport: {
          r: true,
          t: testKeyboardSupport
        },
        documentElement: {
          r: false,
          t: testDocumentElement
        },
        cssPrefix: {
          r: true,
          t: testCssPrefix
        },
        cssClasses: {
          r: true,
          t: testCssClasses
        }
      };
      var defaults = {
        connect: false,
        direction: "ltr",
        behaviour: "tap",
        orientation: "horizontal",
        keyboardSupport: true,
        cssPrefix: "noUi-",
        cssClasses: cssClasses,
        keyboardPageMultiplier: 5,
        keyboardDefaultStep: 10
      }; // AriaFormat defaults to regular format, if any.

      if (options.format && !options.ariaFormat) {
        options.ariaFormat = options.format;
      } // Run all options through a testing mechanism to ensure correct
      // input. It should be noted that options might get modified to
      // be handled properly. E.g. wrapping integers in arrays.


      Object.keys(tests).forEach(function (name) {
        // If the option isn't set, but it is required, throw an error.
        if (!isSet(options[name]) && defaults[name] === undefined) {
          if (tests[name].r) {
            throw new Error("noUiSlider (" + VERSION + "): '" + name + "' is required.");
          }

          return true;
        }

        tests[name].t(parsed, !isSet(options[name]) ? defaults[name] : options[name]);
      }); // Forward pips options

      parsed.pips = options.pips; // All recent browsers accept unprefixed transform.
      // We need -ms- for IE9 and -webkit- for older Android;
      // Assume use of -webkit- if unprefixed and -ms- are not supported.
      // https://caniuse.com/#feat=transforms2d

      var d = document.createElement("div");
      var msPrefix = d.style.msTransform !== undefined;
      var noPrefix = d.style.transform !== undefined;
      parsed.transformRule = noPrefix ? "transform" : msPrefix ? "msTransform" : "webkitTransform"; // Pips don't move, so we can place them using left/top.

      var styles = [["left", "top"], ["right", "bottom"]];
      parsed.style = styles[parsed.dir][parsed.ort];
      return parsed;
    } //endregion


    function scope(target, options, originalOptions) {
      var actions = getActions();
      var supportsTouchActionNone = getSupportsTouchActionNone();
      var supportsPassive = supportsTouchActionNone && getSupportsPassive(); // All variables local to 'scope' are prefixed with 'scope_'
      // Slider DOM Nodes

      var scope_Target = target;
      var scope_Base;
      var scope_Handles;
      var scope_Connects;
      var scope_Pips;
      var scope_Tooltips; // Slider state values

      var scope_Spectrum = options.spectrum;
      var scope_Values = [];
      var scope_Locations = [];
      var scope_HandleNumbers = [];
      var scope_ActiveHandlesCount = 0;
      var scope_Events = {}; // Exposed API

      var scope_Self; // Document Nodes

      var scope_Document = target.ownerDocument;
      var scope_DocumentElement = options.documentElement || scope_Document.documentElement;
      var scope_Body = scope_Document.body; // Pips constants

      var PIPS_NONE = -1;
      var PIPS_NO_VALUE = 0;
      var PIPS_LARGE_VALUE = 1;
      var PIPS_SMALL_VALUE = 2; // For horizontal sliders in standard ltr documents,
      // make .noUi-origin overflow to the left so the document doesn't scroll.

      var scope_DirOffset = scope_Document.dir === "rtl" || options.ort === 1 ? 0 : 100; // Creates a node, adds it to target, returns the new node.

      function addNodeTo(addTarget, className) {
        var div = scope_Document.createElement("div");

        if (className) {
          addClass(div, className);
        }

        addTarget.appendChild(div);
        return div;
      } // Append a origin to the base


      function addOrigin(base, handleNumber) {
        var origin = addNodeTo(base, options.cssClasses.origin);
        var handle = addNodeTo(origin, options.cssClasses.handle);
        addNodeTo(handle, options.cssClasses.touchArea);
        handle.setAttribute("data-handle", handleNumber);

        if (options.keyboardSupport) {
          // https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex
          // 0 = focusable and reachable
          handle.setAttribute("tabindex", "0");
          handle.addEventListener("keydown", function (event) {
            return eventKeydown(event, handleNumber);
          });
        }

        handle.setAttribute("role", "slider");
        handle.setAttribute("aria-orientation", options.ort ? "vertical" : "horizontal");

        if (handleNumber === 0) {
          addClass(handle, options.cssClasses.handleLower);
        } else if (handleNumber === options.handles - 1) {
          addClass(handle, options.cssClasses.handleUpper);
        }

        return origin;
      } // Insert nodes for connect elements


      function addConnect(base, add) {
        if (!add) {
          return false;
        }

        return addNodeTo(base, options.cssClasses.connect);
      } // Add handles to the slider base.


      function addElements(connectOptions, base) {
        var connectBase = addNodeTo(base, options.cssClasses.connects);
        scope_Handles = [];
        scope_Connects = [];
        scope_Connects.push(addConnect(connectBase, connectOptions[0])); // [::::O====O====O====]
        // connectOptions = [0, 1, 1, 1]

        for (var i = 0; i < options.handles; i++) {
          // Keep a list of all added handles.
          scope_Handles.push(addOrigin(base, i));
          scope_HandleNumbers[i] = i;
          scope_Connects.push(addConnect(connectBase, connectOptions[i + 1]));
        }
      } // Initialize a single slider.


      function addSlider(addTarget) {
        // Apply classes and data to the target.
        addClass(addTarget, options.cssClasses.target);

        if (options.dir === 0) {
          addClass(addTarget, options.cssClasses.ltr);
        } else {
          addClass(addTarget, options.cssClasses.rtl);
        }

        if (options.ort === 0) {
          addClass(addTarget, options.cssClasses.horizontal);
        } else {
          addClass(addTarget, options.cssClasses.vertical);
        }

        var textDirection = getComputedStyle(addTarget).direction;

        if (textDirection === "rtl") {
          addClass(addTarget, options.cssClasses.textDirectionRtl);
        } else {
          addClass(addTarget, options.cssClasses.textDirectionLtr);
        }

        return addNodeTo(addTarget, options.cssClasses.base);
      }

      function addTooltip(handle, handleNumber) {
        if (!options.tooltips[handleNumber]) {
          return false;
        }

        return addNodeTo(handle.firstChild, options.cssClasses.tooltip);
      }

      function isSliderDisabled() {
        return scope_Target.hasAttribute("disabled");
      } // Disable the slider dragging if any handle is disabled


      function isHandleDisabled(handleNumber) {
        var handleOrigin = scope_Handles[handleNumber];
        return handleOrigin.hasAttribute("disabled");
      }

      function removeTooltips() {
        if (scope_Tooltips) {
          removeEvent("update" + INTERNAL_EVENT_NS.tooltips);
          scope_Tooltips.forEach(function (tooltip) {
            if (tooltip) {
              removeElement(tooltip);
            }
          });
          scope_Tooltips = null;
        }
      } // The tooltips option is a shorthand for using the 'update' event.


      function tooltips() {
        removeTooltips(); // Tooltips are added with options.tooltips in original order.

        scope_Tooltips = scope_Handles.map(addTooltip);
        bindEvent("update" + INTERNAL_EVENT_NS.tooltips, function (values, handleNumber, unencoded) {
          if (!scope_Tooltips[handleNumber]) {
            return;
          }

          var formattedValue = values[handleNumber];

          if (options.tooltips[handleNumber] !== true) {
            formattedValue = options.tooltips[handleNumber].to(unencoded[handleNumber]);
          }

          scope_Tooltips[handleNumber].innerHTML = formattedValue;
        });
      }

      function aria() {
        removeEvent("update" + INTERNAL_EVENT_NS.aria);
        bindEvent("update" + INTERNAL_EVENT_NS.aria, function (values, handleNumber, unencoded, tap, positions) {
          // Update Aria Values for all handles, as a change in one changes min and max values for the next.
          scope_HandleNumbers.forEach(function (index) {
            var handle = scope_Handles[index];
            var min = checkHandlePosition(scope_Locations, index, 0, true, true, true);
            var max = checkHandlePosition(scope_Locations, index, 100, true, true, true);
            var now = positions[index]; // Formatted value for display

            var text = options.ariaFormat.to(unencoded[index]); // Map to slider range values

            min = scope_Spectrum.fromStepping(min).toFixed(1);
            max = scope_Spectrum.fromStepping(max).toFixed(1);
            now = scope_Spectrum.fromStepping(now).toFixed(1);
            handle.children[0].setAttribute("aria-valuemin", min);
            handle.children[0].setAttribute("aria-valuemax", max);
            handle.children[0].setAttribute("aria-valuenow", now);
            handle.children[0].setAttribute("aria-valuetext", text);
          });
        });
      }

      function getGroup(mode, values, stepped) {
        // Use the range.
        if (mode === "range" || mode === "steps") {
          return scope_Spectrum.xVal;
        }

        if (mode === "count") {
          if (values < 2) {
            throw new Error("noUiSlider (" + VERSION + "): 'values' (>= 2) required for mode 'count'.");
          } // Divide 0 - 100 in 'count' parts.


          var interval = values - 1;
          var spread = 100 / interval;
          values = []; // List these parts and have them handled as 'positions'.

          while (interval--) {
            values[interval] = interval * spread;
          }

          values.push(100);
          mode = "positions";
        }

        if (mode === "positions") {
          // Map all percentages to on-range values.
          return values.map(function (value) {
            return scope_Spectrum.fromStepping(stepped ? scope_Spectrum.getStep(value) : value);
          });
        }

        if (mode === "values") {
          // If the value must be stepped, it needs to be converted to a percentage first.
          if (stepped) {
            return values.map(function (value) {
              // Convert to percentage, apply step, return to value.
              return scope_Spectrum.fromStepping(scope_Spectrum.getStep(scope_Spectrum.toStepping(value)));
            });
          } // Otherwise, we can simply use the values.


          return values;
        }
      }

      function generateSpread(density, mode, group) {
        function safeIncrement(value, increment) {
          // Avoid floating point variance by dropping the smallest decimal places.
          return (value + increment).toFixed(7) / 1;
        }

        var indexes = {};
        var firstInRange = scope_Spectrum.xVal[0];
        var lastInRange = scope_Spectrum.xVal[scope_Spectrum.xVal.length - 1];
        var ignoreFirst = false;
        var ignoreLast = false;
        var prevPct = 0; // Create a copy of the group, sort it and filter away all duplicates.

        group = unique(group.slice().sort(function (a, b) {
          return a - b;
        })); // Make sure the range starts with the first element.

        if (group[0] !== firstInRange) {
          group.unshift(firstInRange);
          ignoreFirst = true;
        } // Likewise for the last one.


        if (group[group.length - 1] !== lastInRange) {
          group.push(lastInRange);
          ignoreLast = true;
        }

        group.forEach(function (current, index) {
          // Get the current step and the lower + upper positions.
          var step;
          var i;
          var q;
          var low = current;
          var high = group[index + 1];
          var newPct;
          var pctDifference;
          var pctPos;
          var type;
          var steps;
          var realSteps;
          var stepSize;
          var isSteps = mode === "steps"; // When using 'steps' mode, use the provided steps.
          // Otherwise, we'll step on to the next subrange.

          if (isSteps) {
            step = scope_Spectrum.xNumSteps[index];
          } // Default to a 'full' step.


          if (!step) {
            step = high - low;
          } // Low can be 0, so test for false. Index 0 is already handled.


          if (low === false) {
            return;
          } // If high is undefined we are at the last subrange. Make sure it iterates once (#1088)


          if (high === undefined) {
            high = low;
          } // Make sure step isn't 0, which would cause an infinite loop (#654)


          step = Math.max(step, 0.0000001); // Find all steps in the subrange.

          for (i = low; i <= high; i = safeIncrement(i, step)) {
            // Get the percentage value for the current step,
            // calculate the size for the subrange.
            newPct = scope_Spectrum.toStepping(i);
            pctDifference = newPct - prevPct;
            steps = pctDifference / density;
            realSteps = Math.round(steps); // This ratio represents the amount of percentage-space a point indicates.
            // For a density 1 the points/percentage = 1. For density 2, that percentage needs to be re-divided.
            // Round the percentage offset to an even number, then divide by two
            // to spread the offset on both sides of the range.

            stepSize = pctDifference / realSteps; // Divide all points evenly, adding the correct number to this subrange.
            // Run up to <= so that 100% gets a point, event if ignoreLast is set.

            for (q = 1; q <= realSteps; q += 1) {
              // The ratio between the rounded value and the actual size might be ~1% off.
              // Correct the percentage offset by the number of points
              // per subrange. density = 1 will result in 100 points on the
              // full range, 2 for 50, 4 for 25, etc.
              pctPos = prevPct + q * stepSize;
              indexes[pctPos.toFixed(5)] = [scope_Spectrum.fromStepping(pctPos), 0];
            } // Determine the point type.


            type = group.indexOf(i) > -1 ? PIPS_LARGE_VALUE : isSteps ? PIPS_SMALL_VALUE : PIPS_NO_VALUE; // Enforce the 'ignoreFirst' option by overwriting the type for 0.

            if (!index && ignoreFirst && i !== high) {
              type = 0;
            }

            if (!(i === high && ignoreLast)) {
              // Mark the 'type' of this point. 0 = plain, 1 = real value, 2 = step value.
              indexes[newPct.toFixed(5)] = [i, type];
            } // Update the percentage count.


            prevPct = newPct;
          }
        });
        return indexes;
      }

      function addMarking(spread, filterFunc, formatter) {
        var element = scope_Document.createElement("div");
        var valueSizeClasses = [];
        valueSizeClasses[PIPS_NO_VALUE] = options.cssClasses.valueNormal;
        valueSizeClasses[PIPS_LARGE_VALUE] = options.cssClasses.valueLarge;
        valueSizeClasses[PIPS_SMALL_VALUE] = options.cssClasses.valueSub;
        var markerSizeClasses = [];
        markerSizeClasses[PIPS_NO_VALUE] = options.cssClasses.markerNormal;
        markerSizeClasses[PIPS_LARGE_VALUE] = options.cssClasses.markerLarge;
        markerSizeClasses[PIPS_SMALL_VALUE] = options.cssClasses.markerSub;
        var valueOrientationClasses = [options.cssClasses.valueHorizontal, options.cssClasses.valueVertical];
        var markerOrientationClasses = [options.cssClasses.markerHorizontal, options.cssClasses.markerVertical];
        addClass(element, options.cssClasses.pips);
        addClass(element, options.ort === 0 ? options.cssClasses.pipsHorizontal : options.cssClasses.pipsVertical);

        function getClasses(type, source) {
          var a = source === options.cssClasses.value;
          var orientationClasses = a ? valueOrientationClasses : markerOrientationClasses;
          var sizeClasses = a ? valueSizeClasses : markerSizeClasses;
          return source + " " + orientationClasses[options.ort] + " " + sizeClasses[type];
        }

        function addSpread(offset, value, type) {
          // Apply the filter function, if it is set.
          type = filterFunc ? filterFunc(value, type) : type;

          if (type === PIPS_NONE) {
            return;
          } // Add a marker for every point


          var node = addNodeTo(element, false);
          node.className = getClasses(type, options.cssClasses.marker);
          node.style[options.style] = offset + "%"; // Values are only appended for points marked '1' or '2'.

          if (type > PIPS_NO_VALUE) {
            node = addNodeTo(element, false);
            node.className = getClasses(type, options.cssClasses.value);
            node.setAttribute("data-value", value);
            node.style[options.style] = offset + "%";
            node.innerHTML = formatter.to(value);
          }
        } // Append all points.


        Object.keys(spread).forEach(function (offset) {
          addSpread(offset, spread[offset][0], spread[offset][1]);
        });
        return element;
      }

      function removePips() {
        if (scope_Pips) {
          removeElement(scope_Pips);
          scope_Pips = null;
        }
      }

      function pips(grid) {
        // Fix #669
        removePips();
        var mode = grid.mode;
        var density = grid.density || 1;
        var filter = grid.filter || false;
        var values = grid.values || false;
        var stepped = grid.stepped || false;
        var group = getGroup(mode, values, stepped);
        var spread = generateSpread(density, mode, group);
        var format = grid.format || {
          to: Math.round
        };
        scope_Pips = scope_Target.appendChild(addMarking(spread, filter, format));
        return scope_Pips;
      } // Shorthand for base dimensions.


      function baseSize() {
        var rect = scope_Base.getBoundingClientRect();
        var alt = "offset" + ["Width", "Height"][options.ort];
        return options.ort === 0 ? rect.width || scope_Base[alt] : rect.height || scope_Base[alt];
      } // Handler for attaching events trough a proxy.


      function attachEvent(events, element, callback, data) {
        // This function can be used to 'filter' events to the slider.
        // element is a node, not a nodeList
        var method = function method(e) {
          e = fixEvent(e, data.pageOffset, data.target || element); // fixEvent returns false if this event has a different target
          // when handling (multi-) touch events;

          if (!e) {
            return false;
          } // doNotReject is passed by all end events to make sure released touches
          // are not rejected, leaving the slider "stuck" to the cursor;


          if (isSliderDisabled() && !data.doNotReject) {
            return false;
          } // Stop if an active 'tap' transition is taking place.


          if (hasClass(scope_Target, options.cssClasses.tap) && !data.doNotReject) {
            return false;
          } // Ignore right or middle clicks on start #454


          if (events === actions.start && e.buttons !== undefined && e.buttons > 1) {
            return false;
          } // Ignore right or middle clicks on start #454


          if (data.hover && e.buttons) {
            return false;
          } // 'supportsPassive' is only true if a browser also supports touch-action: none in CSS.
          // iOS safari does not, so it doesn't get to benefit from passive scrolling. iOS does support
          // touch-action: manipulation, but that allows panning, which breaks
          // sliders after zooming/on non-responsive pages.
          // See: https://bugs.webkit.org/show_bug.cgi?id=133112


          if (!supportsPassive) {
            e.preventDefault();
          }

          e.calcPoint = e.points[options.ort]; // Call the event handler with the event [ and additional data ].

          callback(e, data);
        };

        var methods = []; // Bind a closure on the target for every event type.

        events.split(" ").forEach(function (eventName) {
          element.addEventListener(eventName, method, supportsPassive ? {
            passive: true
          } : false);
          methods.push([eventName, method]);
        });
        return methods;
      } // Provide a clean event with standardized offset values.


      function fixEvent(e, pageOffset, eventTarget) {
        // Filter the event to register the type, which can be
        // touch, mouse or pointer. Offset changes need to be
        // made on an event specific basis.
        var touch = e.type.indexOf("touch") === 0;
        var mouse = e.type.indexOf("mouse") === 0;
        var pointer = e.type.indexOf("pointer") === 0;
        var x;
        var y; // IE10 implemented pointer events with a prefix;

        if (e.type.indexOf("MSPointer") === 0) {
          pointer = true;
        } // Erroneous events seem to be passed in occasionally on iOS/iPadOS after user finishes interacting with
        // the slider. They appear to be of type MouseEvent, yet they don't have usual properties set. Ignore
        // events that have no touches or buttons associated with them. (#1057, #1079, #1095)


        if (e.type === "mousedown" && !e.buttons && !e.touches) {
          return false;
        } // The only thing one handle should be concerned about is the touches that originated on top of it.


        if (touch) {
          // Returns true if a touch originated on the target.
          var isTouchOnTarget = function isTouchOnTarget(checkTouch) {
            return checkTouch.target === eventTarget || eventTarget.contains(checkTouch.target) || checkTouch.target.shadowRoot && checkTouch.target.shadowRoot.contains(eventTarget);
          }; // In the case of touchstart events, we need to make sure there is still no more than one
          // touch on the target so we look amongst all touches.


          if (e.type === "touchstart") {
            var targetTouches = Array.prototype.filter.call(e.touches, isTouchOnTarget); // Do not support more than one touch per handle.

            if (targetTouches.length > 1) {
              return false;
            }

            x = targetTouches[0].pageX;
            y = targetTouches[0].pageY;
          } else {
            // In the other cases, find on changedTouches is enough.
            var targetTouch = Array.prototype.find.call(e.changedTouches, isTouchOnTarget); // Cancel if the target touch has not moved.

            if (!targetTouch) {
              return false;
            }

            x = targetTouch.pageX;
            y = targetTouch.pageY;
          }
        }

        pageOffset = pageOffset || getPageOffset(scope_Document);

        if (mouse || pointer) {
          x = e.clientX + pageOffset.x;
          y = e.clientY + pageOffset.y;
        }

        e.pageOffset = pageOffset;
        e.points = [x, y];
        e.cursor = mouse || pointer; // Fix #435

        return e;
      } // Translate a coordinate in the document to a percentage on the slider


      function calcPointToPercentage(calcPoint) {
        var location = calcPoint - offset(scope_Base, options.ort);
        var proposal = location * 100 / baseSize(); // Clamp proposal between 0% and 100%
        // Out-of-bound coordinates may occur when .noUi-base pseudo-elements
        // are used (e.g. contained handles feature)

        proposal = limit(proposal);
        return options.dir ? 100 - proposal : proposal;
      } // Find handle closest to a certain percentage on the slider


      function getClosestHandle(clickedPosition) {
        var smallestDifference = 100;
        var handleNumber = false;
        scope_Handles.forEach(function (handle, index) {
          // Disabled handles are ignored
          if (isHandleDisabled(index)) {
            return;
          }

          var handlePosition = scope_Locations[index];
          var differenceWithThisHandle = Math.abs(handlePosition - clickedPosition); // Initial state

          var clickAtEdge = differenceWithThisHandle === 100 && smallestDifference === 100; // Difference with this handle is smaller than the previously checked handle

          var isCloser = differenceWithThisHandle < smallestDifference;
          var isCloserAfter = differenceWithThisHandle <= smallestDifference && clickedPosition > handlePosition;

          if (isCloser || isCloserAfter || clickAtEdge) {
            handleNumber = index;
            smallestDifference = differenceWithThisHandle;
          }
        });
        return handleNumber;
      } // Fire 'end' when a mouse or pen leaves the document.


      function documentLeave(event, data) {
        if (event.type === "mouseout" && event.target.nodeName === "HTML" && event.relatedTarget === null) {
          eventEnd(event, data);
        }
      } // Handle movement on document for handle and range drag.


      function eventMove(event, data) {
        // Fix #498
        // Check value of .buttons in 'start' to work around a bug in IE10 mobile (data.buttonsProperty).
        // https://connect.microsoft.com/IE/feedback/details/927005/mobile-ie10-windows-phone-buttons-property-of-pointermove-event-always-zero
        // IE9 has .buttons and .which zero on mousemove.
        // Firefox breaks the spec MDN defines.
        if (navigator.appVersion.indexOf("MSIE 9") === -1 && event.buttons === 0 && data.buttonsProperty !== 0) {
          return eventEnd(event, data);
        } // Check if we are moving up or down


        var movement = (options.dir ? -1 : 1) * (event.calcPoint - data.startCalcPoint); // Convert the movement into a percentage of the slider width/height

        var proposal = movement * 100 / data.baseSize;
        moveHandles(movement > 0, proposal, data.locations, data.handleNumbers);
      } // Unbind move events on document, call callbacks.


      function eventEnd(event, data) {
        // The handle is no longer active, so remove the class.
        if (data.handle) {
          removeClass(data.handle, options.cssClasses.active);
          scope_ActiveHandlesCount -= 1;
        } // Unbind the move and end events, which are added on 'start'.


        data.listeners.forEach(function (c) {
          scope_DocumentElement.removeEventListener(c[0], c[1]);
        });

        if (scope_ActiveHandlesCount === 0) {
          // Remove dragging class.
          removeClass(scope_Target, options.cssClasses.drag);
          setZindex(); // Remove cursor styles and text-selection events bound to the body.

          if (event.cursor) {
            scope_Body.style.cursor = "";
            scope_Body.removeEventListener("selectstart", preventDefault);
          }
        }

        data.handleNumbers.forEach(function (handleNumber) {
          fireEvent("change", handleNumber);
          fireEvent("set", handleNumber);
          fireEvent("end", handleNumber);
        });
      } // Bind move events on document.


      function eventStart(event, data) {
        // Ignore event if any handle is disabled
        if (data.handleNumbers.some(isHandleDisabled)) {
          return false;
        }

        var handle;

        if (data.handleNumbers.length === 1) {
          var handleOrigin = scope_Handles[data.handleNumbers[0]];
          handle = handleOrigin.children[0];
          scope_ActiveHandlesCount += 1; // Mark the handle as 'active' so it can be styled.

          addClass(handle, options.cssClasses.active);
        } // A drag should never propagate up to the 'tap' event.


        event.stopPropagation(); // Record the event listeners.

        var listeners = []; // Attach the move and end events.

        var moveEvent = attachEvent(actions.move, scope_DocumentElement, eventMove, {
          // The event target has changed so we need to propagate the original one so that we keep
          // relying on it to extract target touches.
          target: event.target,
          handle: handle,
          listeners: listeners,
          startCalcPoint: event.calcPoint,
          baseSize: baseSize(),
          pageOffset: event.pageOffset,
          handleNumbers: data.handleNumbers,
          buttonsProperty: event.buttons,
          locations: scope_Locations.slice()
        });
        var endEvent = attachEvent(actions.end, scope_DocumentElement, eventEnd, {
          target: event.target,
          handle: handle,
          listeners: listeners,
          doNotReject: true,
          handleNumbers: data.handleNumbers
        });
        var outEvent = attachEvent("mouseout", scope_DocumentElement, documentLeave, {
          target: event.target,
          handle: handle,
          listeners: listeners,
          doNotReject: true,
          handleNumbers: data.handleNumbers
        }); // We want to make sure we pushed the listeners in the listener list rather than creating
        // a new one as it has already been passed to the event handlers.

        listeners.push.apply(listeners, moveEvent.concat(endEvent, outEvent)); // Text selection isn't an issue on touch devices,
        // so adding cursor styles can be skipped.

        if (event.cursor) {
          // Prevent the 'I' cursor and extend the range-drag cursor.
          scope_Body.style.cursor = getComputedStyle(event.target).cursor; // Mark the target with a dragging state.

          if (scope_Handles.length > 1) {
            addClass(scope_Target, options.cssClasses.drag);
          } // Prevent text selection when dragging the handles.
          // In noUiSlider <= 9.2.0, this was handled by calling preventDefault on mouse/touch start/move,
          // which is scroll blocking. The selectstart event is supported by FireFox starting from version 52,
          // meaning the only holdout is iOS Safari. This doesn't matter: text selection isn't triggered there.
          // The 'cursor' flag is false.
          // See: http://caniuse.com/#search=selectstart


          scope_Body.addEventListener("selectstart", preventDefault, false);
        }

        data.handleNumbers.forEach(function (handleNumber) {
          fireEvent("start", handleNumber);
        });
      } // Move closest handle to tapped location.


      function eventTap(event) {
        // The tap event shouldn't propagate up
        event.stopPropagation();
        var proposal = calcPointToPercentage(event.calcPoint);
        var handleNumber = getClosestHandle(proposal); // Tackle the case that all handles are 'disabled'.

        if (handleNumber === false) {
          return false;
        } // Flag the slider as it is now in a transitional state.
        // Transition takes a configurable amount of ms (default 300). Re-enable the slider after that.


        if (!options.events.snap) {
          addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
        }

        setHandle(handleNumber, proposal, true, true);
        setZindex();
        fireEvent("slide", handleNumber, true);
        fireEvent("update", handleNumber, true);
        fireEvent("change", handleNumber, true);
        fireEvent("set", handleNumber, true);

        if (options.events.snap) {
          eventStart(event, {
            handleNumbers: [handleNumber]
          });
        }
      } // Fires a 'hover' event for a hovered mouse/pen position.


      function eventHover(event) {
        var proposal = calcPointToPercentage(event.calcPoint);
        var to = scope_Spectrum.getStep(proposal);
        var value = scope_Spectrum.fromStepping(to);
        Object.keys(scope_Events).forEach(function (targetEvent) {
          if ("hover" === targetEvent.split(".")[0]) {
            scope_Events[targetEvent].forEach(function (callback) {
              callback.call(scope_Self, value);
            });
          }
        });
      } // Handles keydown on focused handles
      // Don't move the document when pressing arrow keys on focused handles


      function eventKeydown(event, handleNumber) {
        if (isSliderDisabled() || isHandleDisabled(handleNumber)) {
          return false;
        }

        var horizontalKeys = ["Left", "Right"];
        var verticalKeys = ["Down", "Up"];
        var largeStepKeys = ["PageDown", "PageUp"];
        var edgeKeys = ["Home", "End"];

        if (options.dir && !options.ort) {
          // On an right-to-left slider, the left and right keys act inverted
          horizontalKeys.reverse();
        } else if (options.ort && !options.dir) {
          // On a top-to-bottom slider, the up and down keys act inverted
          verticalKeys.reverse();
          largeStepKeys.reverse();
        } // Strip "Arrow" for IE compatibility. https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key


        var key = event.key.replace("Arrow", "");
        var isLargeDown = key === largeStepKeys[0];
        var isLargeUp = key === largeStepKeys[1];
        var isDown = key === verticalKeys[0] || key === horizontalKeys[0] || isLargeDown;
        var isUp = key === verticalKeys[1] || key === horizontalKeys[1] || isLargeUp;
        var isMin = key === edgeKeys[0];
        var isMax = key === edgeKeys[1];

        if (!isDown && !isUp && !isMin && !isMax) {
          return true;
        }

        event.preventDefault();
        var to;

        if (isUp || isDown) {
          var multiplier = options.keyboardPageMultiplier;
          var direction = isDown ? 0 : 1;
          var steps = getNextStepsForHandle(handleNumber);
          var step = steps[direction]; // At the edge of a slider, do nothing

          if (step === null) {
            return false;
          } // No step set, use the default of 10% of the sub-range


          if (step === false) {
            step = scope_Spectrum.getDefaultStep(scope_Locations[handleNumber], isDown, options.keyboardDefaultStep);
          }

          if (isLargeUp || isLargeDown) {
            step *= multiplier;
          } // Step over zero-length ranges (#948);


          step = Math.max(step, 0.0000001); // Decrement for down steps

          step = (isDown ? -1 : 1) * step;
          to = scope_Values[handleNumber] + step;
        } else if (isMax) {
          // End key
          to = options.spectrum.xVal[options.spectrum.xVal.length - 1];
        } else {
          // Home key
          to = options.spectrum.xVal[0];
        }

        setHandle(handleNumber, scope_Spectrum.toStepping(to), true, true);
        fireEvent("slide", handleNumber);
        fireEvent("update", handleNumber);
        fireEvent("change", handleNumber);
        fireEvent("set", handleNumber);
        return false;
      } // Attach events to several slider parts.


      function bindSliderEvents(behaviour) {
        // Attach the standard drag event to the handles.
        if (!behaviour.fixed) {
          scope_Handles.forEach(function (handle, index) {
            // These events are only bound to the visual handle
            // element, not the 'real' origin element.
            attachEvent(actions.start, handle.children[0], eventStart, {
              handleNumbers: [index]
            });
          });
        } // Attach the tap event to the slider base.


        if (behaviour.tap) {
          attachEvent(actions.start, scope_Base, eventTap, {});
        } // Fire hover events


        if (behaviour.hover) {
          attachEvent(actions.move, scope_Base, eventHover, {
            hover: true
          });
        } // Make the range draggable.


        if (behaviour.drag) {
          scope_Connects.forEach(function (connect, index) {
            if (connect === false || index === 0 || index === scope_Connects.length - 1) {
              return;
            }

            var handleBefore = scope_Handles[index - 1];
            var handleAfter = scope_Handles[index];
            var eventHolders = [connect];
            addClass(connect, options.cssClasses.draggable); // When the range is fixed, the entire range can
            // be dragged by the handles. The handle in the first
            // origin will propagate the start event upward,
            // but it needs to be bound manually on the other.

            if (behaviour.fixed) {
              eventHolders.push(handleBefore.children[0]);
              eventHolders.push(handleAfter.children[0]);
            }

            eventHolders.forEach(function (eventHolder) {
              attachEvent(actions.start, eventHolder, eventStart, {
                handles: [handleBefore, handleAfter],
                handleNumbers: [index - 1, index]
              });
            });
          });
        }
      } // Attach an event to this slider, possibly including a namespace


      function bindEvent(namespacedEvent, callback) {
        scope_Events[namespacedEvent] = scope_Events[namespacedEvent] || [];
        scope_Events[namespacedEvent].push(callback); // If the event bound is 'update,' fire it immediately for all handles.

        if (namespacedEvent.split(".")[0] === "update") {
          scope_Handles.forEach(function (a, index) {
            fireEvent("update", index);
          });
        }
      }

      function isInternalNamespace(namespace) {
        return namespace === INTERNAL_EVENT_NS.aria || namespace === INTERNAL_EVENT_NS.tooltips;
      } // Undo attachment of event


      function removeEvent(namespacedEvent) {
        var event = namespacedEvent && namespacedEvent.split(".")[0];
        var namespace = event ? namespacedEvent.substring(event.length) : namespacedEvent;
        Object.keys(scope_Events).forEach(function (bind) {
          var tEvent = bind.split(".")[0];
          var tNamespace = bind.substring(tEvent.length);

          if ((!event || event === tEvent) && (!namespace || namespace === tNamespace)) {
            // only delete protected internal event if intentional
            if (!isInternalNamespace(tNamespace) || namespace === tNamespace) {
              delete scope_Events[bind];
            }
          }
        });
      } // External event handling


      function fireEvent(eventName, handleNumber, tap) {
        Object.keys(scope_Events).forEach(function (targetEvent) {
          var eventType = targetEvent.split(".")[0];

          if (eventName === eventType) {
            scope_Events[targetEvent].forEach(function (callback) {
              callback.call( // Use the slider public API as the scope ('this')
              scope_Self, // Return values as array, so arg_1[arg_2] is always valid.
              scope_Values.map(options.format.to), // Handle index, 0 or 1
              handleNumber, // Un-formatted slider values
              scope_Values.slice(), // Event is fired by tap, true or false
              tap || false, // Left offset of the handle, in relation to the slider
              scope_Locations.slice(), // add the slider public API to an accessible parameter when this is unavailable
              scope_Self);
            });
          }
        });
      } // Split out the handle positioning logic so the Move event can use it, too


      function checkHandlePosition(reference, handleNumber, to, lookBackward, lookForward, getValue) {
        var distance; // For sliders with multiple handles, limit movement to the other handle.
        // Apply the margin option by adding it to the handle positions.

        if (scope_Handles.length > 1 && !options.events.unconstrained) {
          if (lookBackward && handleNumber > 0) {
            distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.margin, 0);
            to = Math.max(to, distance);
          }

          if (lookForward && handleNumber < scope_Handles.length - 1) {
            distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.margin, 1);
            to = Math.min(to, distance);
          }
        } // The limit option has the opposite effect, limiting handles to a
        // maximum distance from another. Limit must be > 0, as otherwise
        // handles would be unmovable.


        if (scope_Handles.length > 1 && options.limit) {
          if (lookBackward && handleNumber > 0) {
            distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber - 1], options.limit, 0);
            to = Math.min(to, distance);
          }

          if (lookForward && handleNumber < scope_Handles.length - 1) {
            distance = scope_Spectrum.getAbsoluteDistance(reference[handleNumber + 1], options.limit, 1);
            to = Math.max(to, distance);
          }
        } // The padding option keeps the handles a certain distance from the
        // edges of the slider. Padding must be > 0.


        if (options.padding) {
          if (handleNumber === 0) {
            distance = scope_Spectrum.getAbsoluteDistance(0, options.padding[0], 0);
            to = Math.max(to, distance);
          }

          if (handleNumber === scope_Handles.length - 1) {
            distance = scope_Spectrum.getAbsoluteDistance(100, options.padding[1], 1);
            to = Math.min(to, distance);
          }
        }

        to = scope_Spectrum.getStep(to); // Limit percentage to the 0 - 100 range

        to = limit(to); // Return false if handle can't move

        if (to === reference[handleNumber] && !getValue) {
          return false;
        }

        return to;
      } // Uses slider orientation to create CSS rules. a = base value;


      function inRuleOrder(v, a) {
        var o = options.ort;
        return (o ? a : v) + ", " + (o ? v : a);
      } // Moves handle(s) by a percentage
      // (bool, % to move, [% where handle started, ...], [index in scope_Handles, ...])


      function moveHandles(upward, proposal, locations, handleNumbers) {
        var proposals = locations.slice();
        var b = [!upward, upward];
        var f = [upward, !upward]; // Copy handleNumbers so we don't change the dataset

        handleNumbers = handleNumbers.slice(); // Check to see which handle is 'leading'.
        // If that one can't move the second can't either.

        if (upward) {
          handleNumbers.reverse();
        } // Step 1: get the maximum percentage that any of the handles can move


        if (handleNumbers.length > 1) {
          handleNumbers.forEach(function (handleNumber, o) {
            var to = checkHandlePosition(proposals, handleNumber, proposals[handleNumber] + proposal, b[o], f[o], false); // Stop if one of the handles can't move.

            if (to === false) {
              proposal = 0;
            } else {
              proposal = to - proposals[handleNumber];
              proposals[handleNumber] = to;
            }
          });
        } // If using one handle, check backward AND forward
        else {
            b = f = [true];
          }

        var state = false; // Step 2: Try to set the handles with the found percentage

        handleNumbers.forEach(function (handleNumber, o) {
          state = setHandle(handleNumber, locations[handleNumber] + proposal, b[o], f[o]) || state;
        }); // Step 3: If a handle moved, fire events

        if (state) {
          handleNumbers.forEach(function (handleNumber) {
            fireEvent("update", handleNumber);
            fireEvent("slide", handleNumber);
          });
        }
      } // Takes a base value and an offset. This offset is used for the connect bar size.
      // In the initial design for this feature, the origin element was 1% wide.
      // Unfortunately, a rounding bug in Chrome makes it impossible to implement this feature
      // in this manner: https://bugs.chromium.org/p/chromium/issues/detail?id=798223


      function transformDirection(a, b) {
        return options.dir ? 100 - a - b : a;
      } // Updates scope_Locations and scope_Values, updates visual state


      function updateHandlePosition(handleNumber, to) {
        // Update locations.
        scope_Locations[handleNumber] = to; // Convert the value to the slider stepping/range.

        scope_Values[handleNumber] = scope_Spectrum.fromStepping(to);
        var translation = 10 * (transformDirection(to, 0) - scope_DirOffset);
        var translateRule = "translate(" + inRuleOrder(translation + "%", "0") + ")";
        scope_Handles[handleNumber].style[options.transformRule] = translateRule;
        updateConnect(handleNumber);
        updateConnect(handleNumber + 1);
      } // Handles before the slider middle are stacked later = higher,
      // Handles after the middle later is lower
      // [[7] [8] .......... | .......... [5] [4]


      function setZindex() {
        scope_HandleNumbers.forEach(function (handleNumber) {
          var dir = scope_Locations[handleNumber] > 50 ? -1 : 1;
          var zIndex = 3 + (scope_Handles.length + dir * handleNumber);
          scope_Handles[handleNumber].style.zIndex = zIndex;
        });
      } // Test suggested values and apply margin, step.
      // if exactInput is true, don't run checkHandlePosition, then the handle can be placed in between steps (#436)


      function setHandle(handleNumber, to, lookBackward, lookForward, exactInput) {
        if (!exactInput) {
          to = checkHandlePosition(scope_Locations, handleNumber, to, lookBackward, lookForward, false);
        }

        if (to === false) {
          return false;
        }

        updateHandlePosition(handleNumber, to);
        return true;
      } // Updates style attribute for connect nodes


      function updateConnect(index) {
        // Skip connects set to false
        if (!scope_Connects[index]) {
          return;
        }

        var l = 0;
        var h = 100;

        if (index !== 0) {
          l = scope_Locations[index - 1];
        }

        if (index !== scope_Connects.length - 1) {
          h = scope_Locations[index];
        } // We use two rules:
        // 'translate' to change the left/top offset;
        // 'scale' to change the width of the element;
        // As the element has a width of 100%, a translation of 100% is equal to 100% of the parent (.noUi-base)


        var connectWidth = h - l;
        var translateRule = "translate(" + inRuleOrder(transformDirection(l, connectWidth) + "%", "0") + ")";
        var scaleRule = "scale(" + inRuleOrder(connectWidth / 100, "1") + ")";
        scope_Connects[index].style[options.transformRule] = translateRule + " " + scaleRule;
      } // Parses value passed to .set method. Returns current value if not parse-able.


      function resolveToValue(to, handleNumber) {
        // Setting with null indicates an 'ignore'.
        // Inputting 'false' is invalid.
        if (to === null || to === false || to === undefined) {
          return scope_Locations[handleNumber];
        } // If a formatted number was passed, attempt to decode it.


        if (typeof to === "number") {
          to = String(to);
        }

        to = options.format.from(to);
        to = scope_Spectrum.toStepping(to); // If parsing the number failed, use the current value.

        if (to === false || isNaN(to)) {
          return scope_Locations[handleNumber];
        }

        return to;
      } // Set the slider value.


      function valueSet(input, fireSetEvent, exactInput) {
        var values = asArray(input);
        var isInit = scope_Locations[0] === undefined; // Event fires by default

        fireSetEvent = fireSetEvent === undefined ? true : !!fireSetEvent; // Animation is optional.
        // Make sure the initial values were set before using animated placement.

        if (options.animate && !isInit) {
          addClassFor(scope_Target, options.cssClasses.tap, options.animationDuration);
        } // First pass, without lookAhead but with lookBackward. Values are set from left to right.


        scope_HandleNumbers.forEach(function (handleNumber) {
          setHandle(handleNumber, resolveToValue(values[handleNumber], handleNumber), true, false, exactInput);
        });
        var i = scope_HandleNumbers.length === 1 ? 0 : 1; // Secondary passes. Now that all base values are set, apply constraints.
        // Iterate all handles to ensure constraints are applied for the entire slider (Issue #1009)

        for (; i < scope_HandleNumbers.length; ++i) {
          scope_HandleNumbers.forEach(function (handleNumber) {
            setHandle(handleNumber, scope_Locations[handleNumber], true, true, exactInput);
          });
        }

        setZindex();
        scope_HandleNumbers.forEach(function (handleNumber) {
          fireEvent("update", handleNumber); // Fire the event only for handles that received a new value, as per #579

          if (values[handleNumber] !== null && fireSetEvent) {
            fireEvent("set", handleNumber);
          }
        });
      } // Reset slider to initial values


      function valueReset(fireSetEvent) {
        valueSet(options.start, fireSetEvent);
      } // Set value for a single handle


      function valueSetHandle(handleNumber, value, fireSetEvent, exactInput) {
        // Ensure numeric input
        handleNumber = Number(handleNumber);

        if (!(handleNumber >= 0 && handleNumber < scope_HandleNumbers.length)) {
          throw new Error("noUiSlider (" + VERSION + "): invalid handle number, got: " + handleNumber);
        } // Look both backward and forward, since we don't want this handle to "push" other handles (#960);
        // The exactInput argument can be used to ignore slider stepping (#436)


        setHandle(handleNumber, resolveToValue(value, handleNumber), true, true, exactInput);
        fireEvent("update", handleNumber);

        if (fireSetEvent) {
          fireEvent("set", handleNumber);
        }
      } // Get the slider value.


      function valueGet() {
        var values = scope_Values.map(options.format.to); // If only one handle is used, return a single value.

        if (values.length === 1) {
          return values[0];
        }

        return values;
      } // Removes classes from the root and empties it.


      function destroy() {
        // remove protected internal listeners
        removeEvent(INTERNAL_EVENT_NS.aria);
        removeEvent(INTERNAL_EVENT_NS.tooltips);

        for (var key in options.cssClasses) {
          if (!options.cssClasses.hasOwnProperty(key)) {
            continue;
          }

          removeClass(scope_Target, options.cssClasses[key]);
        }

        while (scope_Target.firstChild) {
          scope_Target.removeChild(scope_Target.firstChild);
        }

        delete scope_Target.noUiSlider;
      }

      function getNextStepsForHandle(handleNumber) {
        var location = scope_Locations[handleNumber];
        var nearbySteps = scope_Spectrum.getNearbySteps(location);
        var value = scope_Values[handleNumber];
        var increment = nearbySteps.thisStep.step;
        var decrement = null; // If snapped, directly use defined step value

        if (options.snap) {
          return [value - nearbySteps.stepBefore.startValue || null, nearbySteps.stepAfter.startValue - value || null];
        } // If the next value in this step moves into the next step,
        // the increment is the start of the next step - the current value


        if (increment !== false) {
          if (value + increment > nearbySteps.stepAfter.startValue) {
            increment = nearbySteps.stepAfter.startValue - value;
          }
        } // If the value is beyond the starting point


        if (value > nearbySteps.thisStep.startValue) {
          decrement = nearbySteps.thisStep.step;
        } else if (nearbySteps.stepBefore.step === false) {
          decrement = false;
        } // If a handle is at the start of a step, it always steps back into the previous step first
        else {
            decrement = value - nearbySteps.stepBefore.highestStep;
          } // Now, if at the slider edges, there is no in/decrement


        if (location === 100) {
          increment = null;
        } else if (location === 0) {
          decrement = null;
        } // As per #391, the comparison for the decrement step can have some rounding issues.


        var stepDecimals = scope_Spectrum.countStepDecimals(); // Round per #391

        if (increment !== null && increment !== false) {
          increment = Number(increment.toFixed(stepDecimals));
        }

        if (decrement !== null && decrement !== false) {
          decrement = Number(decrement.toFixed(stepDecimals));
        }

        return [decrement, increment];
      } // Get the current step size for the slider.


      function getNextSteps() {
        return scope_HandleNumbers.map(getNextStepsForHandle);
      } // Updateable: margin, limit, padding, step, range, animate, snap


      function updateOptions(optionsToUpdate, fireSetEvent) {
        // Spectrum is created using the range, snap, direction and step options.
        // 'snap' and 'step' can be updated.
        // If 'snap' and 'step' are not passed, they should remain unchanged.
        var v = valueGet();
        var updateAble = ["margin", "limit", "padding", "range", "animate", "snap", "step", "format", "pips", "tooltips"]; // Only change options that we're actually passed to update.

        updateAble.forEach(function (name) {
          // Check for undefined. null removes the value.
          if (optionsToUpdate[name] !== undefined) {
            originalOptions[name] = optionsToUpdate[name];
          }
        });
        var newOptions = testOptions(originalOptions); // Load new options into the slider state

        updateAble.forEach(function (name) {
          if (optionsToUpdate[name] !== undefined) {
            options[name] = newOptions[name];
          }
        });
        scope_Spectrum = newOptions.spectrum; // Limit, margin and padding depend on the spectrum but are stored outside of it. (#677)

        options.margin = newOptions.margin;
        options.limit = newOptions.limit;
        options.padding = newOptions.padding; // Update pips, removes existing.

        if (options.pips) {
          pips(options.pips);
        } else {
          removePips();
        } // Update tooltips, removes existing.


        if (options.tooltips) {
          tooltips();
        } else {
          removeTooltips();
        } // Invalidate the current positioning so valueSet forces an update.


        scope_Locations = [];
        valueSet(isSet(optionsToUpdate.start) ? optionsToUpdate.start : v, fireSetEvent);
      } // Initialization steps


      function setupSlider() {
        // Create the base element, initialize HTML and set classes.
        // Add handles and connect elements.
        scope_Base = addSlider(scope_Target);
        addElements(options.connect, scope_Base); // Attach user events.

        bindSliderEvents(options.events); // Use the public value method to set the start values.

        valueSet(options.start);

        if (options.pips) {
          pips(options.pips);
        }

        if (options.tooltips) {
          tooltips();
        }

        aria();
      }

      setupSlider(); // noinspection JSUnusedGlobalSymbols

      scope_Self = {
        destroy: destroy,
        steps: getNextSteps,
        on: bindEvent,
        off: removeEvent,
        get: valueGet,
        set: valueSet,
        setHandle: valueSetHandle,
        reset: valueReset,
        // Exposed for unit testing, don't use this in your application.
        __moveHandles: function __moveHandles(a, b, c) {
          moveHandles(a, b, scope_Locations, c);
        },
        options: originalOptions,
        updateOptions: updateOptions,
        target: scope_Target,
        removePips: removePips,
        removeTooltips: removeTooltips,
        getTooltips: function getTooltips() {
          return scope_Tooltips;
        },
        getOrigins: function getOrigins() {
          return scope_Handles;
        },
        pips: pips // Issue #594

      };
      return scope_Self;
    } // Run the standard initializer


    function initialize(target, originalOptions) {
      if (!target || !target.nodeName) {
        throw new Error("noUiSlider (" + VERSION + "): create requires a single element, got: " + target);
      } // Throw an error if the slider was already initialized.


      if (target.noUiSlider) {
        throw new Error("noUiSlider (" + VERSION + "): Slider was already initialized.");
      } // Test the options and create the slider environment;


      var options = testOptions(originalOptions);
      var api = scope(target, options, originalOptions);
      target.noUiSlider = api;
      return api;
    } // Use an object instead of a function for future expandability;


    return {
      // Exposed for unit testing, don't use this in your application.
      __spectrum: Spectrum,
      version: VERSION,
      // A reference to the default classes, allows global changes.
      // Use the cssClasses option for changes to one slider.
      cssClasses: cssClasses,
      create: initialize
    };
  });
};

/* harmony default export */ __webpack_exports__["default"] = (noUiSlider());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./js/vendor/swiper.js":
/*!*****************************!*\
  !*** ./js/vendor/swiper.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {var _this = undefined;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var swiper = function swiper() {
  /**
   * Swiper 5.3.6
   * Most modern mobile touch slider and framework with hardware accelerated transitions
   * http://swiperjs.com
   *
   * Copyright 2014-2020 Vladimir Kharlampidi
   *
   * Released under the MIT License
   *
   * Released on: February 29, 2020
   */
  (function (global, factory) {
    (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && __webpack_require__(/*! !webpack amd options */ "../node_modules/webpack/buildin/amd-options.js") ? define(factory) : (global = global || self, global.Swiper = factory());
  })(_this, function () {
    'use strict';
    /**
     * SSR Window 1.0.1
     * Better handling for window object in SSR environment
     * https://github.com/nolimits4web/ssr-window
     *
     * Copyright 2018, Vladimir Kharlampidi
     *
     * Licensed under MIT
     *
     * Released on: July 18, 2018
     */

    var doc = typeof document === 'undefined' ? {
      body: {},
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {},
      activeElement: {
        blur: function blur() {},
        nodeName: ''
      },
      querySelector: function querySelector() {
        return null;
      },
      querySelectorAll: function querySelectorAll() {
        return [];
      },
      getElementById: function getElementById() {
        return null;
      },
      createEvent: function createEvent() {
        return {
          initEvent: function initEvent() {}
        };
      },
      createElement: function createElement() {
        return {
          children: [],
          childNodes: [],
          style: {},
          setAttribute: function setAttribute() {},
          getElementsByTagName: function getElementsByTagName() {
            return [];
          }
        };
      },
      location: {
        hash: ''
      }
    } : document; // eslint-disable-line

    var win = typeof window === 'undefined' ? {
      document: doc,
      navigator: {
        userAgent: ''
      },
      location: {},
      history: {},
      CustomEvent: function CustomEvent() {
        return this;
      },
      addEventListener: function addEventListener() {},
      removeEventListener: function removeEventListener() {},
      getComputedStyle: function getComputedStyle() {
        return {
          getPropertyValue: function getPropertyValue() {
            return '';
          }
        };
      },
      Image: function Image() {},
      Date: function Date() {},
      screen: {},
      setTimeout: function setTimeout() {},
      clearTimeout: function clearTimeout() {}
    } : window; // eslint-disable-line

    /**
     * Dom7 2.1.3
     * Minimalistic JavaScript library for DOM manipulation, with a jQuery-compatible API
     * http://framework7.io/docs/dom.html
     *
     * Copyright 2019, Vladimir Kharlampidi
     * The iDangero.us
     * http://www.idangero.us/
     *
     * Licensed under MIT
     *
     * Released on: February 11, 2019
     */

    var Dom7 = function Dom7(arr) {
      var self = this; // Create array-like object

      for (var i = 0; i < arr.length; i += 1) {
        self[i] = arr[i];
      }

      self.length = arr.length; // Return collection with methods

      return this;
    };

    function $(selector, context) {
      var arr = [];
      var i = 0;

      if (selector && !context) {
        if (selector instanceof Dom7) {
          return selector;
        }
      }

      if (selector) {
        // String
        if (typeof selector === 'string') {
          var els;
          var tempParent;
          var html = selector.trim();

          if (html.indexOf('<') >= 0 && html.indexOf('>') >= 0) {
            var toCreate = 'div';

            if (html.indexOf('<li') === 0) {
              toCreate = 'ul';
            }

            if (html.indexOf('<tr') === 0) {
              toCreate = 'tbody';
            }

            if (html.indexOf('<td') === 0 || html.indexOf('<th') === 0) {
              toCreate = 'tr';
            }

            if (html.indexOf('<tbody') === 0) {
              toCreate = 'table';
            }

            if (html.indexOf('<option') === 0) {
              toCreate = 'select';
            }

            tempParent = doc.createElement(toCreate);
            tempParent.innerHTML = html;

            for (i = 0; i < tempParent.childNodes.length; i += 1) {
              arr.push(tempParent.childNodes[i]);
            }
          } else {
            if (!context && selector[0] === '#' && !selector.match(/[ .<>:~]/)) {
              // Pure ID selector
              els = [doc.getElementById(selector.trim().split('#')[1])];
            } else {
              // Other selectors
              els = (context || doc).querySelectorAll(selector.trim());
            }

            for (i = 0; i < els.length; i += 1) {
              if (els[i]) {
                arr.push(els[i]);
              }
            }
          }
        } else if (selector.nodeType || selector === win || selector === doc) {
          // Node/element
          arr.push(selector);
        } else if (selector.length > 0 && selector[0].nodeType) {
          // Array of elements or instance of Dom
          for (i = 0; i < selector.length; i += 1) {
            arr.push(selector[i]);
          }
        }
      }

      return new Dom7(arr);
    }

    $.fn = Dom7.prototype;
    $.Class = Dom7;
    $.Dom7 = Dom7;

    function unique(arr) {
      var uniqueArray = [];

      for (var i = 0; i < arr.length; i += 1) {
        if (uniqueArray.indexOf(arr[i]) === -1) {
          uniqueArray.push(arr[i]);
        }
      }

      return uniqueArray;
    } // Classes and attributes


    function addClass(className) {
      if (typeof className === 'undefined') {
        return this;
      }

      var classes = className.split(' ');

      for (var i = 0; i < classes.length; i += 1) {
        for (var j = 0; j < this.length; j += 1) {
          if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') {
            this[j].classList.add(classes[i]);
          }
        }
      }

      return this;
    }

    function removeClass(className) {
      var classes = className.split(' ');

      for (var i = 0; i < classes.length; i += 1) {
        for (var j = 0; j < this.length; j += 1) {
          if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') {
            this[j].classList.remove(classes[i]);
          }
        }
      }

      return this;
    }

    function hasClass(className) {
      if (!this[0]) {
        return false;
      }

      return this[0].classList.contains(className);
    }

    function toggleClass(className) {
      var classes = className.split(' ');

      for (var i = 0; i < classes.length; i += 1) {
        for (var j = 0; j < this.length; j += 1) {
          if (typeof this[j] !== 'undefined' && typeof this[j].classList !== 'undefined') {
            this[j].classList.toggle(classes[i]);
          }
        }
      }

      return this;
    }

    function attr(attrs, value) {
      var arguments$1 = arguments;

      if (arguments.length === 1 && typeof attrs === 'string') {
        // Get attr
        if (this[0]) {
          return this[0].getAttribute(attrs);
        }

        return undefined;
      } // Set attrs


      for (var i = 0; i < this.length; i += 1) {
        if (arguments$1.length === 2) {
          // String
          this[i].setAttribute(attrs, value);
        } else {
          // Object
          // eslint-disable-next-line
          for (var attrName in attrs) {
            this[i][attrName] = attrs[attrName];
            this[i].setAttribute(attrName, attrs[attrName]);
          }
        }
      }

      return this;
    } // eslint-disable-next-line


    function removeAttr(attr) {
      for (var i = 0; i < this.length; i += 1) {
        this[i].removeAttribute(attr);
      }

      return this;
    }

    function data(key, value) {
      var el;

      if (typeof value === 'undefined') {
        el = this[0]; // Get value

        if (el) {
          if (el.dom7ElementDataStorage && key in el.dom7ElementDataStorage) {
            return el.dom7ElementDataStorage[key];
          }

          var dataKey = el.getAttribute("data-" + key);

          if (dataKey) {
            return dataKey;
          }

          return undefined;
        }

        return undefined;
      } // Set value


      for (var i = 0; i < this.length; i += 1) {
        el = this[i];

        if (!el.dom7ElementDataStorage) {
          el.dom7ElementDataStorage = {};
        }

        el.dom7ElementDataStorage[key] = value;
      }

      return this;
    } // Transforms
    // eslint-disable-next-line


    function transform(transform) {
      for (var i = 0; i < this.length; i += 1) {
        var elStyle = this[i].style;
        elStyle.webkitTransform = transform;
        elStyle.transform = transform;
      }

      return this;
    }

    function transition(duration) {
      if (typeof duration !== 'string') {
        duration = duration + "ms"; // eslint-disable-line
      }

      for (var i = 0; i < this.length; i += 1) {
        var elStyle = this[i].style;
        elStyle.webkitTransitionDuration = duration;
        elStyle.transitionDuration = duration;
      }

      return this;
    } // Events


    function on() {
      var assign;
      var args = [],
          len = arguments.length;

      while (len--) {
        args[len] = arguments[len];
      }

      var eventType = args[0];
      var targetSelector = args[1];
      var listener = args[2];
      var capture = args[3];

      if (typeof args[1] === 'function') {
        assign = args, eventType = assign[0], listener = assign[1], capture = assign[2];
        targetSelector = undefined;
      }

      if (!capture) {
        capture = false;
      }

      function handleLiveEvent(e) {
        var target = e.target;

        if (!target) {
          return;
        }

        var eventData = e.target.dom7EventData || [];

        if (eventData.indexOf(e) < 0) {
          eventData.unshift(e);
        }

        if ($(target).is(targetSelector)) {
          listener.apply(target, eventData);
        } else {
          var parents = $(target).parents(); // eslint-disable-line

          for (var k = 0; k < parents.length; k += 1) {
            if ($(parents[k]).is(targetSelector)) {
              listener.apply(parents[k], eventData);
            }
          }
        }
      }

      function handleEvent(e) {
        var eventData = e && e.target ? e.target.dom7EventData || [] : [];

        if (eventData.indexOf(e) < 0) {
          eventData.unshift(e);
        }

        listener.apply(this, eventData);
      }

      var events = eventType.split(' ');
      var j;

      for (var i = 0; i < this.length; i += 1) {
        var el = this[i];

        if (!targetSelector) {
          for (j = 0; j < events.length; j += 1) {
            var event = events[j];

            if (!el.dom7Listeners) {
              el.dom7Listeners = {};
            }

            if (!el.dom7Listeners[event]) {
              el.dom7Listeners[event] = [];
            }

            el.dom7Listeners[event].push({
              listener: listener,
              proxyListener: handleEvent
            });
            el.addEventListener(event, handleEvent, capture);
          }
        } else {
          // Live events
          for (j = 0; j < events.length; j += 1) {
            var event$1 = events[j];

            if (!el.dom7LiveListeners) {
              el.dom7LiveListeners = {};
            }

            if (!el.dom7LiveListeners[event$1]) {
              el.dom7LiveListeners[event$1] = [];
            }

            el.dom7LiveListeners[event$1].push({
              listener: listener,
              proxyListener: handleLiveEvent
            });
            el.addEventListener(event$1, handleLiveEvent, capture);
          }
        }
      }

      return this;
    }

    function off() {
      var assign;
      var args = [],
          len = arguments.length;

      while (len--) {
        args[len] = arguments[len];
      }

      var eventType = args[0];
      var targetSelector = args[1];
      var listener = args[2];
      var capture = args[3];

      if (typeof args[1] === 'function') {
        assign = args, eventType = assign[0], listener = assign[1], capture = assign[2];
        targetSelector = undefined;
      }

      if (!capture) {
        capture = false;
      }

      var events = eventType.split(' ');

      for (var i = 0; i < events.length; i += 1) {
        var event = events[i];

        for (var j = 0; j < this.length; j += 1) {
          var el = this[j];
          var handlers = void 0;

          if (!targetSelector && el.dom7Listeners) {
            handlers = el.dom7Listeners[event];
          } else if (targetSelector && el.dom7LiveListeners) {
            handlers = el.dom7LiveListeners[event];
          }

          if (handlers && handlers.length) {
            for (var k = handlers.length - 1; k >= 0; k -= 1) {
              var handler = handlers[k];

              if (listener && handler.listener === listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              } else if (listener && handler.listener && handler.listener.dom7proxy && handler.listener.dom7proxy === listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              } else if (!listener) {
                el.removeEventListener(event, handler.proxyListener, capture);
                handlers.splice(k, 1);
              }
            }
          }
        }
      }

      return this;
    }

    function trigger() {
      var args = [],
          len = arguments.length;

      while (len--) {
        args[len] = arguments[len];
      }

      var events = args[0].split(' ');
      var eventData = args[1];

      for (var i = 0; i < events.length; i += 1) {
        var event = events[i];

        for (var j = 0; j < this.length; j += 1) {
          var el = this[j];
          var evt = void 0;

          try {
            evt = new win.CustomEvent(event, {
              detail: eventData,
              bubbles: true,
              cancelable: true
            });
          } catch (e) {
            evt = doc.createEvent('Event');
            evt.initEvent(event, true, true);
            evt.detail = eventData;
          } // eslint-disable-next-line


          el.dom7EventData = args.filter(function (data, dataIndex) {
            return dataIndex > 0;
          });
          el.dispatchEvent(evt);
          el.dom7EventData = [];
          delete el.dom7EventData;
        }
      }

      return this;
    }

    function transitionEnd(callback) {
      var events = ['webkitTransitionEnd', 'transitionend'];
      var dom = this;
      var i;

      function fireCallBack(e) {
        /* jshint validthis:true */
        if (e.target !== this) {
          return;
        }

        callback.call(this, e);

        for (i = 0; i < events.length; i += 1) {
          dom.off(events[i], fireCallBack);
        }
      }

      if (callback) {
        for (i = 0; i < events.length; i += 1) {
          dom.on(events[i], fireCallBack);
        }
      }

      return this;
    }

    function outerWidth(includeMargins) {
      if (this.length > 0) {
        if (includeMargins) {
          // eslint-disable-next-line
          var styles = this.styles();
          return this[0].offsetWidth + parseFloat(styles.getPropertyValue('margin-right')) + parseFloat(styles.getPropertyValue('margin-left'));
        }

        return this[0].offsetWidth;
      }

      return null;
    }

    function outerHeight(includeMargins) {
      if (this.length > 0) {
        if (includeMargins) {
          // eslint-disable-next-line
          var styles = this.styles();
          return this[0].offsetHeight + parseFloat(styles.getPropertyValue('margin-top')) + parseFloat(styles.getPropertyValue('margin-bottom'));
        }

        return this[0].offsetHeight;
      }

      return null;
    }

    function offset() {
      if (this.length > 0) {
        var el = this[0];
        var box = el.getBoundingClientRect();
        var body = doc.body;
        var clientTop = el.clientTop || body.clientTop || 0;
        var clientLeft = el.clientLeft || body.clientLeft || 0;
        var scrollTop = el === win ? win.scrollY : el.scrollTop;
        var scrollLeft = el === win ? win.scrollX : el.scrollLeft;
        return {
          top: box.top + scrollTop - clientTop,
          left: box.left + scrollLeft - clientLeft
        };
      }

      return null;
    }

    function styles() {
      if (this[0]) {
        return win.getComputedStyle(this[0], null);
      }

      return {};
    }

    function css(props, value) {
      var i;

      if (arguments.length === 1) {
        if (typeof props === 'string') {
          if (this[0]) {
            return win.getComputedStyle(this[0], null).getPropertyValue(props);
          }
        } else {
          for (i = 0; i < this.length; i += 1) {
            // eslint-disable-next-line
            for (var prop in props) {
              this[i].style[prop] = props[prop];
            }
          }

          return this;
        }
      }

      if (arguments.length === 2 && typeof props === 'string') {
        for (i = 0; i < this.length; i += 1) {
          this[i].style[props] = value;
        }

        return this;
      }

      return this;
    } // Iterate over the collection passing elements to `callback`


    function each(callback) {
      // Don't bother continuing without a callback
      if (!callback) {
        return this;
      } // Iterate over the current collection


      for (var i = 0; i < this.length; i += 1) {
        // If the callback returns false
        if (callback.call(this[i], i, this[i]) === false) {
          // End the loop early
          return this;
        }
      } // Return `this` to allow chained DOM operations


      return this;
    }

    function filter(callback) {
      var matchedItems = [];
      var dom = this;

      for (var i = 0; i < dom.length; i += 1) {
        if (callback.call(dom[i], i, dom[i])) {
          matchedItems.push(dom[i]);
        }
      }

      return new Dom7(matchedItems);
    } // eslint-disable-next-line


    function html(html) {
      if (typeof html === 'undefined') {
        return this[0] ? this[0].innerHTML : undefined;
      }

      for (var i = 0; i < this.length; i += 1) {
        this[i].innerHTML = html;
      }

      return this;
    } // eslint-disable-next-line


    function text(text) {
      if (typeof text === 'undefined') {
        if (this[0]) {
          return this[0].textContent.trim();
        }

        return null;
      }

      for (var i = 0; i < this.length; i += 1) {
        this[i].textContent = text;
      }

      return this;
    }

    function is(selector) {
      var el = this[0];
      var compareWith;
      var i;

      if (!el || typeof selector === 'undefined') {
        return false;
      }

      if (typeof selector === 'string') {
        if (el.matches) {
          return el.matches(selector);
        } else if (el.webkitMatchesSelector) {
          return el.webkitMatchesSelector(selector);
        } else if (el.msMatchesSelector) {
          return el.msMatchesSelector(selector);
        }

        compareWith = $(selector);

        for (i = 0; i < compareWith.length; i += 1) {
          if (compareWith[i] === el) {
            return true;
          }
        }

        return false;
      } else if (selector === doc) {
        return el === doc;
      } else if (selector === win) {
        return el === win;
      }

      if (selector.nodeType || selector instanceof Dom7) {
        compareWith = selector.nodeType ? [selector] : selector;

        for (i = 0; i < compareWith.length; i += 1) {
          if (compareWith[i] === el) {
            return true;
          }
        }

        return false;
      }

      return false;
    }

    function index() {
      var child = this[0];
      var i;

      if (child) {
        i = 0; // eslint-disable-next-line

        while ((child = child.previousSibling) !== null) {
          if (child.nodeType === 1) {
            i += 1;
          }
        }

        return i;
      }

      return undefined;
    } // eslint-disable-next-line


    function eq(index) {
      if (typeof index === 'undefined') {
        return this;
      }

      var length = this.length;
      var returnIndex;

      if (index > length - 1) {
        return new Dom7([]);
      }

      if (index < 0) {
        returnIndex = length + index;

        if (returnIndex < 0) {
          return new Dom7([]);
        }

        return new Dom7([this[returnIndex]]);
      }

      return new Dom7([this[index]]);
    }

    function append() {
      var args = [],
          len = arguments.length;

      while (len--) {
        args[len] = arguments[len];
      }

      var newChild;

      for (var k = 0; k < args.length; k += 1) {
        newChild = args[k];

        for (var i = 0; i < this.length; i += 1) {
          if (typeof newChild === 'string') {
            var tempDiv = doc.createElement('div');
            tempDiv.innerHTML = newChild;

            while (tempDiv.firstChild) {
              this[i].appendChild(tempDiv.firstChild);
            }
          } else if (newChild instanceof Dom7) {
            for (var j = 0; j < newChild.length; j += 1) {
              this[i].appendChild(newChild[j]);
            }
          } else {
            this[i].appendChild(newChild);
          }
        }
      }

      return this;
    }

    function prepend(newChild) {
      var i;
      var j;

      for (i = 0; i < this.length; i += 1) {
        if (typeof newChild === 'string') {
          var tempDiv = doc.createElement('div');
          tempDiv.innerHTML = newChild;

          for (j = tempDiv.childNodes.length - 1; j >= 0; j -= 1) {
            this[i].insertBefore(tempDiv.childNodes[j], this[i].childNodes[0]);
          }
        } else if (newChild instanceof Dom7) {
          for (j = 0; j < newChild.length; j += 1) {
            this[i].insertBefore(newChild[j], this[i].childNodes[0]);
          }
        } else {
          this[i].insertBefore(newChild, this[i].childNodes[0]);
        }
      }

      return this;
    }

    function next(selector) {
      if (this.length > 0) {
        if (selector) {
          if (this[0].nextElementSibling && $(this[0].nextElementSibling).is(selector)) {
            return new Dom7([this[0].nextElementSibling]);
          }

          return new Dom7([]);
        }

        if (this[0].nextElementSibling) {
          return new Dom7([this[0].nextElementSibling]);
        }

        return new Dom7([]);
      }

      return new Dom7([]);
    }

    function nextAll(selector) {
      var nextEls = [];
      var el = this[0];

      if (!el) {
        return new Dom7([]);
      }

      while (el.nextElementSibling) {
        var next = el.nextElementSibling; // eslint-disable-line

        if (selector) {
          if ($(next).is(selector)) {
            nextEls.push(next);
          }
        } else {
          nextEls.push(next);
        }

        el = next;
      }

      return new Dom7(nextEls);
    }

    function prev(selector) {
      if (this.length > 0) {
        var el = this[0];

        if (selector) {
          if (el.previousElementSibling && $(el.previousElementSibling).is(selector)) {
            return new Dom7([el.previousElementSibling]);
          }

          return new Dom7([]);
        }

        if (el.previousElementSibling) {
          return new Dom7([el.previousElementSibling]);
        }

        return new Dom7([]);
      }

      return new Dom7([]);
    }

    function prevAll(selector) {
      var prevEls = [];
      var el = this[0];

      if (!el) {
        return new Dom7([]);
      }

      while (el.previousElementSibling) {
        var prev = el.previousElementSibling; // eslint-disable-line

        if (selector) {
          if ($(prev).is(selector)) {
            prevEls.push(prev);
          }
        } else {
          prevEls.push(prev);
        }

        el = prev;
      }

      return new Dom7(prevEls);
    }

    function parent(selector) {
      var parents = []; // eslint-disable-line

      for (var i = 0; i < this.length; i += 1) {
        if (this[i].parentNode !== null) {
          if (selector) {
            if ($(this[i].parentNode).is(selector)) {
              parents.push(this[i].parentNode);
            }
          } else {
            parents.push(this[i].parentNode);
          }
        }
      }

      return $(unique(parents));
    }

    function parents(selector) {
      var parents = []; // eslint-disable-line

      for (var i = 0; i < this.length; i += 1) {
        var parent = this[i].parentNode; // eslint-disable-line

        while (parent) {
          if (selector) {
            if ($(parent).is(selector)) {
              parents.push(parent);
            }
          } else {
            parents.push(parent);
          }

          parent = parent.parentNode;
        }
      }

      return $(unique(parents));
    }

    function closest(selector) {
      var closest = this; // eslint-disable-line

      if (typeof selector === 'undefined') {
        return new Dom7([]);
      }

      if (!closest.is(selector)) {
        closest = closest.parents(selector).eq(0);
      }

      return closest;
    }

    function find(selector) {
      var foundElements = [];

      for (var i = 0; i < this.length; i += 1) {
        var found = this[i].querySelectorAll(selector);

        for (var j = 0; j < found.length; j += 1) {
          foundElements.push(found[j]);
        }
      }

      return new Dom7(foundElements);
    }

    function children(selector) {
      var children = []; // eslint-disable-line

      for (var i = 0; i < this.length; i += 1) {
        var childNodes = this[i].childNodes;

        for (var j = 0; j < childNodes.length; j += 1) {
          if (!selector) {
            if (childNodes[j].nodeType === 1) {
              children.push(childNodes[j]);
            }
          } else if (childNodes[j].nodeType === 1 && $(childNodes[j]).is(selector)) {
            children.push(childNodes[j]);
          }
        }
      }

      return new Dom7(unique(children));
    }

    function remove() {
      for (var i = 0; i < this.length; i += 1) {
        if (this[i].parentNode) {
          this[i].parentNode.removeChild(this[i]);
        }
      }

      return this;
    }

    function add() {
      var args = [],
          len = arguments.length;

      while (len--) {
        args[len] = arguments[len];
      }

      var dom = this;
      var i;
      var j;

      for (i = 0; i < args.length; i += 1) {
        var toAdd = $(args[i]);

        for (j = 0; j < toAdd.length; j += 1) {
          dom[dom.length] = toAdd[j];
          dom.length += 1;
        }
      }

      return dom;
    }

    var Methods = {
      addClass: addClass,
      removeClass: removeClass,
      hasClass: hasClass,
      toggleClass: toggleClass,
      attr: attr,
      removeAttr: removeAttr,
      data: data,
      transform: transform,
      transition: transition,
      on: on,
      off: off,
      trigger: trigger,
      transitionEnd: transitionEnd,
      outerWidth: outerWidth,
      outerHeight: outerHeight,
      offset: offset,
      css: css,
      each: each,
      html: html,
      text: text,
      is: is,
      index: index,
      eq: eq,
      append: append,
      prepend: prepend,
      next: next,
      nextAll: nextAll,
      prev: prev,
      prevAll: prevAll,
      parent: parent,
      parents: parents,
      closest: closest,
      find: find,
      children: children,
      filter: filter,
      remove: remove,
      add: add,
      styles: styles
    };
    Object.keys(Methods).forEach(function (methodName) {
      $.fn[methodName] = $.fn[methodName] || Methods[methodName];
    });
    var Utils = {
      deleteProps: function deleteProps(obj) {
        var object = obj;
        Object.keys(object).forEach(function (key) {
          try {
            object[key] = null;
          } catch (e) {// no getter for object
          }

          try {
            delete object[key];
          } catch (e) {// something got wrong
          }
        });
      },
      nextTick: function nextTick(callback, delay) {
        if (delay === void 0) delay = 0;
        return setTimeout(callback, delay);
      },
      now: function now() {
        return Date.now();
      },
      getTranslate: function getTranslate(el, axis) {
        if (axis === void 0) axis = 'x';
        var matrix;
        var curTransform;
        var transformMatrix;
        var curStyle = win.getComputedStyle(el, null);

        if (win.WebKitCSSMatrix) {
          curTransform = curStyle.transform || curStyle.webkitTransform;

          if (curTransform.split(',').length > 6) {
            curTransform = curTransform.split(', ').map(function (a) {
              return a.replace(',', '.');
            }).join(', ');
          } // Some old versions of Webkit choke when 'none' is passed; pass
          // empty string instead in this case


          transformMatrix = new win.WebKitCSSMatrix(curTransform === 'none' ? '' : curTransform);
        } else {
          transformMatrix = curStyle.MozTransform || curStyle.OTransform || curStyle.MsTransform || curStyle.msTransform || curStyle.transform || curStyle.getPropertyValue('transform').replace('translate(', 'matrix(1, 0, 0, 1,');
          matrix = transformMatrix.toString().split(',');
        }

        if (axis === 'x') {
          // Latest Chrome and webkits Fix
          if (win.WebKitCSSMatrix) {
            curTransform = transformMatrix.m41;
          } // Crazy IE10 Matrix
          else if (matrix.length === 16) {
              curTransform = parseFloat(matrix[12]);
            } // Normal Browsers
            else {
                curTransform = parseFloat(matrix[4]);
              }
        }

        if (axis === 'y') {
          // Latest Chrome and webkits Fix
          if (win.WebKitCSSMatrix) {
            curTransform = transformMatrix.m42;
          } // Crazy IE10 Matrix
          else if (matrix.length === 16) {
              curTransform = parseFloat(matrix[13]);
            } // Normal Browsers
            else {
                curTransform = parseFloat(matrix[5]);
              }
        }

        return curTransform || 0;
      },
      parseUrlQuery: function parseUrlQuery(url) {
        var query = {};
        var urlToParse = url || win.location.href;
        var i;
        var params;
        var param;
        var length;

        if (typeof urlToParse === 'string' && urlToParse.length) {
          urlToParse = urlToParse.indexOf('?') > -1 ? urlToParse.replace(/\S*\?/, '') : '';
          params = urlToParse.split('&').filter(function (paramsPart) {
            return paramsPart !== '';
          });
          length = params.length;

          for (i = 0; i < length; i += 1) {
            param = params[i].replace(/#\S+/g, '').split('=');
            query[decodeURIComponent(param[0])] = typeof param[1] === 'undefined' ? undefined : decodeURIComponent(param[1]) || '';
          }
        }

        return query;
      },
      isObject: function isObject(o) {
        return _typeof(o) === 'object' && o !== null && o.constructor && o.constructor === Object;
      },
      extend: function extend() {
        var args = [],
            len$1 = arguments.length;

        while (len$1--) {
          args[len$1] = arguments[len$1];
        }

        var to = Object(args[0]);

        for (var i = 1; i < args.length; i += 1) {
          var nextSource = args[i];

          if (nextSource !== undefined && nextSource !== null) {
            var keysArray = Object.keys(Object(nextSource));

            for (var nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
              var nextKey = keysArray[nextIndex];
              var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

              if (desc !== undefined && desc.enumerable) {
                if (Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                  Utils.extend(to[nextKey], nextSource[nextKey]);
                } else if (!Utils.isObject(to[nextKey]) && Utils.isObject(nextSource[nextKey])) {
                  to[nextKey] = {};
                  Utils.extend(to[nextKey], nextSource[nextKey]);
                } else {
                  to[nextKey] = nextSource[nextKey];
                }
              }
            }
          }
        }

        return to;
      }
    };

    var Support = function Support() {
      return {
        touch: win.Modernizr && win.Modernizr.touch === true || function checkTouch() {
          return !!(win.navigator.maxTouchPoints > 0 || 'ontouchstart' in win || win.DocumentTouch && doc instanceof win.DocumentTouch);
        }(),
        pointerEvents: !!win.PointerEvent && 'maxTouchPoints' in win.navigator && win.navigator.maxTouchPoints > 0,
        observer: function checkObserver() {
          return 'MutationObserver' in win || 'WebkitMutationObserver' in win;
        }(),
        passiveListener: function checkPassiveListener() {
          var supportsPassive = false;

          try {
            var opts = Object.defineProperty({}, 'passive', {
              // eslint-disable-next-line
              get: function get() {
                supportsPassive = true;
              }
            });
            win.addEventListener('testPassiveListener', null, opts);
          } catch (e) {// No support
          }

          return supportsPassive;
        }(),
        gestures: function checkGestures() {
          return 'ongesturestart' in win;
        }()
      };
    }();

    var SwiperClass = function SwiperClass(params) {
      if (params === void 0) params = {};
      var self = this;
      self.params = params; // Events

      self.eventsListeners = {};

      if (self.params && self.params.on) {
        Object.keys(self.params.on).forEach(function (eventName) {
          self.on(eventName, self.params.on[eventName]);
        });
      }
    };

    var staticAccessors = {
      components: {
        configurable: true
      }
    };

    SwiperClass.prototype.on = function on(events, handler, priority) {
      var self = this;

      if (typeof handler !== 'function') {
        return self;
      }

      var method = priority ? 'unshift' : 'push';
      events.split(' ').forEach(function (event) {
        if (!self.eventsListeners[event]) {
          self.eventsListeners[event] = [];
        }

        self.eventsListeners[event][method](handler);
      });
      return self;
    };

    SwiperClass.prototype.once = function once(events, handler, priority) {
      var self = this;

      if (typeof handler !== 'function') {
        return self;
      }

      function onceHandler() {
        var args = [],
            len = arguments.length;

        while (len--) {
          args[len] = arguments[len];
        }

        self.off(events, onceHandler);

        if (onceHandler.f7proxy) {
          delete onceHandler.f7proxy;
        }

        handler.apply(self, args);
      }

      onceHandler.f7proxy = handler;
      return self.on(events, onceHandler, priority);
    };

    SwiperClass.prototype.off = function off(events, handler) {
      var self = this;

      if (!self.eventsListeners) {
        return self;
      }

      events.split(' ').forEach(function (event) {
        if (typeof handler === 'undefined') {
          self.eventsListeners[event] = [];
        } else if (self.eventsListeners[event] && self.eventsListeners[event].length) {
          self.eventsListeners[event].forEach(function (eventHandler, index) {
            if (eventHandler === handler || eventHandler.f7proxy && eventHandler.f7proxy === handler) {
              self.eventsListeners[event].splice(index, 1);
            }
          });
        }
      });
      return self;
    };

    SwiperClass.prototype.emit = function emit() {
      var args = [],
          len = arguments.length;

      while (len--) {
        args[len] = arguments[len];
      }

      var self = this;

      if (!self.eventsListeners) {
        return self;
      }

      var events;
      var data;
      var context;

      if (typeof args[0] === 'string' || Array.isArray(args[0])) {
        events = args[0];
        data = args.slice(1, args.length);
        context = self;
      } else {
        events = args[0].events;
        data = args[0].data;
        context = args[0].context || self;
      }

      var eventsArray = Array.isArray(events) ? events : events.split(' ');
      eventsArray.forEach(function (event) {
        if (self.eventsListeners && self.eventsListeners[event]) {
          var handlers = [];
          self.eventsListeners[event].forEach(function (eventHandler) {
            handlers.push(eventHandler);
          });
          handlers.forEach(function (eventHandler) {
            eventHandler.apply(context, data);
          });
        }
      });
      return self;
    };

    SwiperClass.prototype.useModulesParams = function useModulesParams(instanceParams) {
      var instance = this;

      if (!instance.modules) {
        return;
      }

      Object.keys(instance.modules).forEach(function (moduleName) {
        var module = instance.modules[moduleName]; // Extend params

        if (module.params) {
          Utils.extend(instanceParams, module.params);
        }
      });
    };

    SwiperClass.prototype.useModules = function useModules(modulesParams) {
      if (modulesParams === void 0) modulesParams = {};
      var instance = this;

      if (!instance.modules) {
        return;
      }

      Object.keys(instance.modules).forEach(function (moduleName) {
        var module = instance.modules[moduleName];
        var moduleParams = modulesParams[moduleName] || {}; // Extend instance methods and props

        if (module.instance) {
          Object.keys(module.instance).forEach(function (modulePropName) {
            var moduleProp = module.instance[modulePropName];

            if (typeof moduleProp === 'function') {
              instance[modulePropName] = moduleProp.bind(instance);
            } else {
              instance[modulePropName] = moduleProp;
            }
          });
        } // Add event listeners


        if (module.on && instance.on) {
          Object.keys(module.on).forEach(function (moduleEventName) {
            instance.on(moduleEventName, module.on[moduleEventName]);
          });
        } // Module create callback


        if (module.create) {
          module.create.bind(instance)(moduleParams);
        }
      });
    };

    staticAccessors.components.set = function (components) {
      var Class = this;

      if (!Class.use) {
        return;
      }

      Class.use(components);
    };

    SwiperClass.installModule = function installModule(module) {
      var params = [],
          len = arguments.length - 1;

      while (len-- > 0) {
        params[len] = arguments[len + 1];
      }

      var Class = this;

      if (!Class.prototype.modules) {
        Class.prototype.modules = {};
      }

      var name = module.name || Object.keys(Class.prototype.modules).length + "_" + Utils.now();
      Class.prototype.modules[name] = module; // Prototype

      if (module.proto) {
        Object.keys(module.proto).forEach(function (key) {
          Class.prototype[key] = module.proto[key];
        });
      } // Class


      if (module.static) {
        Object.keys(module.static).forEach(function (key) {
          Class[key] = module.static[key];
        });
      } // Callback


      if (module.install) {
        module.install.apply(Class, params);
      }

      return Class;
    };

    SwiperClass.use = function use(module) {
      var params = [],
          len = arguments.length - 1;

      while (len-- > 0) {
        params[len] = arguments[len + 1];
      }

      var Class = this;

      if (Array.isArray(module)) {
        module.forEach(function (m) {
          return Class.installModule(m);
        });
        return Class;
      }

      return Class.installModule.apply(Class, [module].concat(params));
    };

    Object.defineProperties(SwiperClass, staticAccessors);

    function updateSize() {
      var swiper = this;
      var width;
      var height;
      var $el = swiper.$el;

      if (typeof swiper.params.width !== 'undefined') {
        width = swiper.params.width;
      } else {
        width = $el[0].clientWidth;
      }

      if (typeof swiper.params.height !== 'undefined') {
        height = swiper.params.height;
      } else {
        height = $el[0].clientHeight;
      }

      if (width === 0 && swiper.isHorizontal() || height === 0 && swiper.isVertical()) {
        return;
      } // Subtract paddings


      width = width - parseInt($el.css('padding-left'), 10) - parseInt($el.css('padding-right'), 10);
      height = height - parseInt($el.css('padding-top'), 10) - parseInt($el.css('padding-bottom'), 10);
      Utils.extend(swiper, {
        width: width,
        height: height,
        size: swiper.isHorizontal() ? width : height
      });
    }

    function updateSlides() {
      var swiper = this;
      var params = swiper.params;
      var $wrapperEl = swiper.$wrapperEl;
      var swiperSize = swiper.size;
      var rtl = swiper.rtlTranslate;
      var wrongRTL = swiper.wrongRTL;
      var isVirtual = swiper.virtual && params.virtual.enabled;
      var previousSlidesLength = isVirtual ? swiper.virtual.slides.length : swiper.slides.length;
      var slides = $wrapperEl.children("." + swiper.params.slideClass);
      var slidesLength = isVirtual ? swiper.virtual.slides.length : slides.length;
      var snapGrid = [];
      var slidesGrid = [];
      var slidesSizesGrid = [];

      function slidesForMargin(slideIndex) {
        if (!params.cssMode) {
          return true;
        }

        if (slideIndex === slides.length - 1) {
          return false;
        }

        return true;
      }

      var offsetBefore = params.slidesOffsetBefore;

      if (typeof offsetBefore === 'function') {
        offsetBefore = params.slidesOffsetBefore.call(swiper);
      }

      var offsetAfter = params.slidesOffsetAfter;

      if (typeof offsetAfter === 'function') {
        offsetAfter = params.slidesOffsetAfter.call(swiper);
      }

      var previousSnapGridLength = swiper.snapGrid.length;
      var previousSlidesGridLength = swiper.snapGrid.length;
      var spaceBetween = params.spaceBetween;
      var slidePosition = -offsetBefore;
      var prevSlideSize = 0;
      var index = 0;

      if (typeof swiperSize === 'undefined') {
        return;
      }

      if (typeof spaceBetween === 'string' && spaceBetween.indexOf('%') >= 0) {
        spaceBetween = parseFloat(spaceBetween.replace('%', '')) / 100 * swiperSize;
      }

      swiper.virtualSize = -spaceBetween; // reset margins

      if (rtl) {
        slides.css({
          marginLeft: '',
          marginTop: ''
        });
      } else {
        slides.css({
          marginRight: '',
          marginBottom: ''
        });
      }

      var slidesNumberEvenToRows;

      if (params.slidesPerColumn > 1) {
        if (Math.floor(slidesLength / params.slidesPerColumn) === slidesLength / swiper.params.slidesPerColumn) {
          slidesNumberEvenToRows = slidesLength;
        } else {
          slidesNumberEvenToRows = Math.ceil(slidesLength / params.slidesPerColumn) * params.slidesPerColumn;
        }

        if (params.slidesPerView !== 'auto' && params.slidesPerColumnFill === 'row') {
          slidesNumberEvenToRows = Math.max(slidesNumberEvenToRows, params.slidesPerView * params.slidesPerColumn);
        }
      } // Calc slides


      var slideSize;
      var slidesPerColumn = params.slidesPerColumn;
      var slidesPerRow = slidesNumberEvenToRows / slidesPerColumn;
      var numFullColumns = Math.floor(slidesLength / params.slidesPerColumn);

      for (var i = 0; i < slidesLength; i += 1) {
        slideSize = 0;
        var slide = slides.eq(i);

        if (params.slidesPerColumn > 1) {
          // Set slides order
          var newSlideOrderIndex = void 0;
          var column = void 0;
          var row = void 0;

          if (params.slidesPerColumnFill === 'row' && params.slidesPerGroup > 1) {
            var groupIndex = Math.floor(i / (params.slidesPerGroup * params.slidesPerColumn));
            var slideIndexInGroup = i - params.slidesPerColumn * params.slidesPerGroup * groupIndex;
            var columnsInGroup = groupIndex === 0 ? params.slidesPerGroup : Math.min(Math.ceil((slidesLength - groupIndex * slidesPerColumn * params.slidesPerGroup) / slidesPerColumn), params.slidesPerGroup);
            row = Math.floor(slideIndexInGroup / columnsInGroup);
            column = slideIndexInGroup - row * columnsInGroup + groupIndex * params.slidesPerGroup;
            newSlideOrderIndex = column + row * slidesNumberEvenToRows / slidesPerColumn;
            slide.css({
              '-webkit-box-ordinal-group': newSlideOrderIndex,
              '-moz-box-ordinal-group': newSlideOrderIndex,
              '-ms-flex-order': newSlideOrderIndex,
              '-webkit-order': newSlideOrderIndex,
              order: newSlideOrderIndex
            });
          } else if (params.slidesPerColumnFill === 'column') {
            column = Math.floor(i / slidesPerColumn);
            row = i - column * slidesPerColumn;

            if (column > numFullColumns || column === numFullColumns && row === slidesPerColumn - 1) {
              row += 1;

              if (row >= slidesPerColumn) {
                row = 0;
                column += 1;
              }
            }
          } else {
            row = Math.floor(i / slidesPerRow);
            column = i - row * slidesPerRow;
          }

          slide.css("margin-" + (swiper.isHorizontal() ? 'top' : 'left'), row !== 0 && params.spaceBetween && params.spaceBetween + "px");
        }

        if (slide.css('display') === 'none') {
          continue;
        } // eslint-disable-line


        if (params.slidesPerView === 'auto') {
          var slideStyles = win.getComputedStyle(slide[0], null);
          var currentTransform = slide[0].style.transform;
          var currentWebKitTransform = slide[0].style.webkitTransform;

          if (currentTransform) {
            slide[0].style.transform = 'none';
          }

          if (currentWebKitTransform) {
            slide[0].style.webkitTransform = 'none';
          }

          if (params.roundLengths) {
            slideSize = swiper.isHorizontal() ? slide.outerWidth(true) : slide.outerHeight(true);
          } else {
            // eslint-disable-next-line
            if (swiper.isHorizontal()) {
              var width = parseFloat(slideStyles.getPropertyValue('width'));
              var paddingLeft = parseFloat(slideStyles.getPropertyValue('padding-left'));
              var paddingRight = parseFloat(slideStyles.getPropertyValue('padding-right'));
              var marginLeft = parseFloat(slideStyles.getPropertyValue('margin-left'));
              var marginRight = parseFloat(slideStyles.getPropertyValue('margin-right'));
              var boxSizing = slideStyles.getPropertyValue('box-sizing');

              if (boxSizing && boxSizing === 'border-box') {
                slideSize = width + marginLeft + marginRight;
              } else {
                slideSize = width + paddingLeft + paddingRight + marginLeft + marginRight;
              }
            } else {
              var height = parseFloat(slideStyles.getPropertyValue('height'));
              var paddingTop = parseFloat(slideStyles.getPropertyValue('padding-top'));
              var paddingBottom = parseFloat(slideStyles.getPropertyValue('padding-bottom'));
              var marginTop = parseFloat(slideStyles.getPropertyValue('margin-top'));
              var marginBottom = parseFloat(slideStyles.getPropertyValue('margin-bottom'));
              var boxSizing$1 = slideStyles.getPropertyValue('box-sizing');

              if (boxSizing$1 && boxSizing$1 === 'border-box') {
                slideSize = height + marginTop + marginBottom;
              } else {
                slideSize = height + paddingTop + paddingBottom + marginTop + marginBottom;
              }
            }
          }

          if (currentTransform) {
            slide[0].style.transform = currentTransform;
          }

          if (currentWebKitTransform) {
            slide[0].style.webkitTransform = currentWebKitTransform;
          }

          if (params.roundLengths) {
            slideSize = Math.floor(slideSize);
          }
        } else {
          slideSize = (swiperSize - (params.slidesPerView - 1) * spaceBetween) / params.slidesPerView;

          if (params.roundLengths) {
            slideSize = Math.floor(slideSize);
          }

          if (slides[i]) {
            if (swiper.isHorizontal()) {
              slides[i].style.width = slideSize + "px";
            } else {
              slides[i].style.height = slideSize + "px";
            }
          }
        }

        if (slides[i]) {
          slides[i].swiperSlideSize = slideSize;
        }

        slidesSizesGrid.push(slideSize);

        if (params.centeredSlides) {
          slidePosition = slidePosition + slideSize / 2 + prevSlideSize / 2 + spaceBetween;

          if (prevSlideSize === 0 && i !== 0) {
            slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
          }

          if (i === 0) {
            slidePosition = slidePosition - swiperSize / 2 - spaceBetween;
          }

          if (Math.abs(slidePosition) < 1 / 1000) {
            slidePosition = 0;
          }

          if (params.roundLengths) {
            slidePosition = Math.floor(slidePosition);
          }

          if (index % params.slidesPerGroup === 0) {
            snapGrid.push(slidePosition);
          }

          slidesGrid.push(slidePosition);
        } else {
          if (params.roundLengths) {
            slidePosition = Math.floor(slidePosition);
          }

          if ((index - Math.min(swiper.params.slidesPerGroupSkip, index)) % swiper.params.slidesPerGroup === 0) {
            snapGrid.push(slidePosition);
          }

          slidesGrid.push(slidePosition);
          slidePosition = slidePosition + slideSize + spaceBetween;
        }

        swiper.virtualSize += slideSize + spaceBetween;
        prevSlideSize = slideSize;
        index += 1;
      }

      swiper.virtualSize = Math.max(swiper.virtualSize, swiperSize) + offsetAfter;
      var newSlidesGrid;

      if (rtl && wrongRTL && (params.effect === 'slide' || params.effect === 'coverflow')) {
        $wrapperEl.css({
          width: swiper.virtualSize + params.spaceBetween + "px"
        });
      }

      if (params.setWrapperSize) {
        if (swiper.isHorizontal()) {
          $wrapperEl.css({
            width: swiper.virtualSize + params.spaceBetween + "px"
          });
        } else {
          $wrapperEl.css({
            height: swiper.virtualSize + params.spaceBetween + "px"
          });
        }
      }

      if (params.slidesPerColumn > 1) {
        swiper.virtualSize = (slideSize + params.spaceBetween) * slidesNumberEvenToRows;
        swiper.virtualSize = Math.ceil(swiper.virtualSize / params.slidesPerColumn) - params.spaceBetween;

        if (swiper.isHorizontal()) {
          $wrapperEl.css({
            width: swiper.virtualSize + params.spaceBetween + "px"
          });
        } else {
          $wrapperEl.css({
            height: swiper.virtualSize + params.spaceBetween + "px"
          });
        }

        if (params.centeredSlides) {
          newSlidesGrid = [];

          for (var i$1 = 0; i$1 < snapGrid.length; i$1 += 1) {
            var slidesGridItem = snapGrid[i$1];

            if (params.roundLengths) {
              slidesGridItem = Math.floor(slidesGridItem);
            }

            if (snapGrid[i$1] < swiper.virtualSize + snapGrid[0]) {
              newSlidesGrid.push(slidesGridItem);
            }
          }

          snapGrid = newSlidesGrid;
        }
      } // Remove last grid elements depending on width


      if (!params.centeredSlides) {
        newSlidesGrid = [];

        for (var i$2 = 0; i$2 < snapGrid.length; i$2 += 1) {
          var slidesGridItem$1 = snapGrid[i$2];

          if (params.roundLengths) {
            slidesGridItem$1 = Math.floor(slidesGridItem$1);
          }

          if (snapGrid[i$2] <= swiper.virtualSize - swiperSize) {
            newSlidesGrid.push(slidesGridItem$1);
          }
        }

        snapGrid = newSlidesGrid;

        if (Math.floor(swiper.virtualSize - swiperSize) - Math.floor(snapGrid[snapGrid.length - 1]) > 1) {
          snapGrid.push(swiper.virtualSize - swiperSize);
        }
      }

      if (snapGrid.length === 0) {
        snapGrid = [0];
      }

      if (params.spaceBetween !== 0) {
        if (swiper.isHorizontal()) {
          if (rtl) {
            slides.filter(slidesForMargin).css({
              marginLeft: spaceBetween + "px"
            });
          } else {
            slides.filter(slidesForMargin).css({
              marginRight: spaceBetween + "px"
            });
          }
        } else {
          slides.filter(slidesForMargin).css({
            marginBottom: spaceBetween + "px"
          });
        }
      }

      if (params.centeredSlides && params.centeredSlidesBounds) {
        var allSlidesSize = 0;
        slidesSizesGrid.forEach(function (slideSizeValue) {
          allSlidesSize += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize -= params.spaceBetween;
        var maxSnap = allSlidesSize - swiperSize;
        snapGrid = snapGrid.map(function (snap) {
          if (snap < 0) {
            return -offsetBefore;
          }

          if (snap > maxSnap) {
            return maxSnap + offsetAfter;
          }

          return snap;
        });
      }

      if (params.centerInsufficientSlides) {
        var allSlidesSize$1 = 0;
        slidesSizesGrid.forEach(function (slideSizeValue) {
          allSlidesSize$1 += slideSizeValue + (params.spaceBetween ? params.spaceBetween : 0);
        });
        allSlidesSize$1 -= params.spaceBetween;

        if (allSlidesSize$1 < swiperSize) {
          var allSlidesOffset = (swiperSize - allSlidesSize$1) / 2;
          snapGrid.forEach(function (snap, snapIndex) {
            snapGrid[snapIndex] = snap - allSlidesOffset;
          });
          slidesGrid.forEach(function (snap, snapIndex) {
            slidesGrid[snapIndex] = snap + allSlidesOffset;
          });
        }
      }

      Utils.extend(swiper, {
        slides: slides,
        snapGrid: snapGrid,
        slidesGrid: slidesGrid,
        slidesSizesGrid: slidesSizesGrid
      });

      if (slidesLength !== previousSlidesLength) {
        swiper.emit('slidesLengthChange');
      }

      if (snapGrid.length !== previousSnapGridLength) {
        if (swiper.params.watchOverflow) {
          swiper.checkOverflow();
        }

        swiper.emit('snapGridLengthChange');
      }

      if (slidesGrid.length !== previousSlidesGridLength) {
        swiper.emit('slidesGridLengthChange');
      }

      if (params.watchSlidesProgress || params.watchSlidesVisibility) {
        swiper.updateSlidesOffset();
      }
    }

    function updateAutoHeight(speed) {
      var swiper = this;
      var activeSlides = [];
      var newHeight = 0;
      var i;

      if (typeof speed === 'number') {
        swiper.setTransition(speed);
      } else if (speed === true) {
        swiper.setTransition(swiper.params.speed);
      } // Find slides currently in view


      if (swiper.params.slidesPerView !== 'auto' && swiper.params.slidesPerView > 1) {
        if (swiper.params.centeredSlides) {
          activeSlides.push.apply(activeSlides, swiper.visibleSlides);
        } else {
          for (i = 0; i < Math.ceil(swiper.params.slidesPerView); i += 1) {
            var index = swiper.activeIndex + i;

            if (index > swiper.slides.length) {
              break;
            }

            activeSlides.push(swiper.slides.eq(index)[0]);
          }
        }
      } else {
        activeSlides.push(swiper.slides.eq(swiper.activeIndex)[0]);
      } // Find new height from highest slide in view


      for (i = 0; i < activeSlides.length; i += 1) {
        if (typeof activeSlides[i] !== 'undefined') {
          var height = activeSlides[i].offsetHeight;
          newHeight = height > newHeight ? height : newHeight;
        }
      } // Update Height


      if (newHeight) {
        swiper.$wrapperEl.css('height', newHeight + "px");
      }
    }

    function updateSlidesOffset() {
      var swiper = this;
      var slides = swiper.slides;

      for (var i = 0; i < slides.length; i += 1) {
        slides[i].swiperSlideOffset = swiper.isHorizontal() ? slides[i].offsetLeft : slides[i].offsetTop;
      }
    }

    function updateSlidesProgress(translate) {
      if (translate === void 0) translate = this && this.translate || 0;
      var swiper = this;
      var params = swiper.params;
      var slides = swiper.slides;
      var rtl = swiper.rtlTranslate;

      if (slides.length === 0) {
        return;
      }

      if (typeof slides[0].swiperSlideOffset === 'undefined') {
        swiper.updateSlidesOffset();
      }

      var offsetCenter = -translate;

      if (rtl) {
        offsetCenter = translate;
      } // Visible Slides


      slides.removeClass(params.slideVisibleClass);
      swiper.visibleSlidesIndexes = [];
      swiper.visibleSlides = [];

      for (var i = 0; i < slides.length; i += 1) {
        var slide = slides[i];
        var slideProgress = (offsetCenter + (params.centeredSlides ? swiper.minTranslate() : 0) - slide.swiperSlideOffset) / (slide.swiperSlideSize + params.spaceBetween);

        if (params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
          var slideBefore = -(offsetCenter - slide.swiperSlideOffset);
          var slideAfter = slideBefore + swiper.slidesSizesGrid[i];
          var isVisible = slideBefore >= 0 && slideBefore < swiper.size - 1 || slideAfter > 1 && slideAfter <= swiper.size || slideBefore <= 0 && slideAfter >= swiper.size;

          if (isVisible) {
            swiper.visibleSlides.push(slide);
            swiper.visibleSlidesIndexes.push(i);
            slides.eq(i).addClass(params.slideVisibleClass);
          }
        }

        slide.progress = rtl ? -slideProgress : slideProgress;
      }

      swiper.visibleSlides = $(swiper.visibleSlides);
    }

    function updateProgress(translate) {
      var swiper = this;

      if (typeof translate === 'undefined') {
        var multiplier = swiper.rtlTranslate ? -1 : 1; // eslint-disable-next-line

        translate = swiper && swiper.translate && swiper.translate * multiplier || 0;
      }

      var params = swiper.params;
      var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();
      var progress = swiper.progress;
      var isBeginning = swiper.isBeginning;
      var isEnd = swiper.isEnd;
      var wasBeginning = isBeginning;
      var wasEnd = isEnd;

      if (translatesDiff === 0) {
        progress = 0;
        isBeginning = true;
        isEnd = true;
      } else {
        progress = (translate - swiper.minTranslate()) / translatesDiff;
        isBeginning = progress <= 0;
        isEnd = progress >= 1;
      }

      Utils.extend(swiper, {
        progress: progress,
        isBeginning: isBeginning,
        isEnd: isEnd
      });

      if (params.watchSlidesProgress || params.watchSlidesVisibility || params.centeredSlides && params.autoHeight) {
        swiper.updateSlidesProgress(translate);
      }

      if (isBeginning && !wasBeginning) {
        swiper.emit('reachBeginning toEdge');
      }

      if (isEnd && !wasEnd) {
        swiper.emit('reachEnd toEdge');
      }

      if (wasBeginning && !isBeginning || wasEnd && !isEnd) {
        swiper.emit('fromEdge');
      }

      swiper.emit('progress', progress);
    }

    function updateSlidesClasses() {
      var swiper = this;
      var slides = swiper.slides;
      var params = swiper.params;
      var $wrapperEl = swiper.$wrapperEl;
      var activeIndex = swiper.activeIndex;
      var realIndex = swiper.realIndex;
      var isVirtual = swiper.virtual && params.virtual.enabled;
      slides.removeClass(params.slideActiveClass + " " + params.slideNextClass + " " + params.slidePrevClass + " " + params.slideDuplicateActiveClass + " " + params.slideDuplicateNextClass + " " + params.slideDuplicatePrevClass);
      var activeSlide;

      if (isVirtual) {
        activeSlide = swiper.$wrapperEl.find("." + params.slideClass + "[data-swiper-slide-index=\"" + activeIndex + "\"]");
      } else {
        activeSlide = slides.eq(activeIndex);
      } // Active classes


      activeSlide.addClass(params.slideActiveClass);

      if (params.loop) {
        // Duplicate to all looped slides
        if (activeSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
        } else {
          $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + realIndex + "\"]").addClass(params.slideDuplicateActiveClass);
        }
      } // Next Slide


      var nextSlide = activeSlide.nextAll("." + params.slideClass).eq(0).addClass(params.slideNextClass);

      if (params.loop && nextSlide.length === 0) {
        nextSlide = slides.eq(0);
        nextSlide.addClass(params.slideNextClass);
      } // Prev Slide


      var prevSlide = activeSlide.prevAll("." + params.slideClass).eq(0).addClass(params.slidePrevClass);

      if (params.loop && prevSlide.length === 0) {
        prevSlide = slides.eq(-1);
        prevSlide.addClass(params.slidePrevClass);
      }

      if (params.loop) {
        // Duplicate to all looped slides
        if (nextSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
        } else {
          $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + nextSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicateNextClass);
        }

        if (prevSlide.hasClass(params.slideDuplicateClass)) {
          $wrapperEl.children("." + params.slideClass + ":not(." + params.slideDuplicateClass + ")[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
        } else {
          $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + "[data-swiper-slide-index=\"" + prevSlide.attr('data-swiper-slide-index') + "\"]").addClass(params.slideDuplicatePrevClass);
        }
      }
    }

    function updateActiveIndex(newActiveIndex) {
      var swiper = this;
      var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;
      var slidesGrid = swiper.slidesGrid;
      var snapGrid = swiper.snapGrid;
      var params = swiper.params;
      var previousIndex = swiper.activeIndex;
      var previousRealIndex = swiper.realIndex;
      var previousSnapIndex = swiper.snapIndex;
      var activeIndex = newActiveIndex;
      var snapIndex;

      if (typeof activeIndex === 'undefined') {
        for (var i = 0; i < slidesGrid.length; i += 1) {
          if (typeof slidesGrid[i + 1] !== 'undefined') {
            if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1] - (slidesGrid[i + 1] - slidesGrid[i]) / 2) {
              activeIndex = i;
            } else if (translate >= slidesGrid[i] && translate < slidesGrid[i + 1]) {
              activeIndex = i + 1;
            }
          } else if (translate >= slidesGrid[i]) {
            activeIndex = i;
          }
        } // Normalize slideIndex


        if (params.normalizeSlideIndex) {
          if (activeIndex < 0 || typeof activeIndex === 'undefined') {
            activeIndex = 0;
          }
        }
      }

      if (snapGrid.indexOf(translate) >= 0) {
        snapIndex = snapGrid.indexOf(translate);
      } else {
        var skip = Math.min(params.slidesPerGroupSkip, activeIndex);
        snapIndex = skip + Math.floor((activeIndex - skip) / params.slidesPerGroup);
      }

      if (snapIndex >= snapGrid.length) {
        snapIndex = snapGrid.length - 1;
      }

      if (activeIndex === previousIndex) {
        if (snapIndex !== previousSnapIndex) {
          swiper.snapIndex = snapIndex;
          swiper.emit('snapIndexChange');
        }

        return;
      } // Get real index


      var realIndex = parseInt(swiper.slides.eq(activeIndex).attr('data-swiper-slide-index') || activeIndex, 10);
      Utils.extend(swiper, {
        snapIndex: snapIndex,
        realIndex: realIndex,
        previousIndex: previousIndex,
        activeIndex: activeIndex
      });
      swiper.emit('activeIndexChange');
      swiper.emit('snapIndexChange');

      if (previousRealIndex !== realIndex) {
        swiper.emit('realIndexChange');
      }

      if (swiper.initialized || swiper.runCallbacksOnInit) {
        swiper.emit('slideChange');
      }
    }

    function updateClickedSlide(e) {
      var swiper = this;
      var params = swiper.params;
      var slide = $(e.target).closest("." + params.slideClass)[0];
      var slideFound = false;

      if (slide) {
        for (var i = 0; i < swiper.slides.length; i += 1) {
          if (swiper.slides[i] === slide) {
            slideFound = true;
          }
        }
      }

      if (slide && slideFound) {
        swiper.clickedSlide = slide;

        if (swiper.virtual && swiper.params.virtual.enabled) {
          swiper.clickedIndex = parseInt($(slide).attr('data-swiper-slide-index'), 10);
        } else {
          swiper.clickedIndex = $(slide).index();
        }
      } else {
        swiper.clickedSlide = undefined;
        swiper.clickedIndex = undefined;
        return;
      }

      if (params.slideToClickedSlide && swiper.clickedIndex !== undefined && swiper.clickedIndex !== swiper.activeIndex) {
        swiper.slideToClickedSlide();
      }
    }

    var update = {
      updateSize: updateSize,
      updateSlides: updateSlides,
      updateAutoHeight: updateAutoHeight,
      updateSlidesOffset: updateSlidesOffset,
      updateSlidesProgress: updateSlidesProgress,
      updateProgress: updateProgress,
      updateSlidesClasses: updateSlidesClasses,
      updateActiveIndex: updateActiveIndex,
      updateClickedSlide: updateClickedSlide
    };

    function getTranslate(axis) {
      if (axis === void 0) axis = this.isHorizontal() ? 'x' : 'y';
      var swiper = this;
      var params = swiper.params;
      var rtl = swiper.rtlTranslate;
      var translate = swiper.translate;
      var $wrapperEl = swiper.$wrapperEl;

      if (params.virtualTranslate) {
        return rtl ? -translate : translate;
      }

      if (params.cssMode) {
        return translate;
      }

      var currentTranslate = Utils.getTranslate($wrapperEl[0], axis);

      if (rtl) {
        currentTranslate = -currentTranslate;
      }

      return currentTranslate || 0;
    }

    function setTranslate(translate, byController) {
      var swiper = this;
      var rtl = swiper.rtlTranslate;
      var params = swiper.params;
      var $wrapperEl = swiper.$wrapperEl;
      var wrapperEl = swiper.wrapperEl;
      var progress = swiper.progress;
      var x = 0;
      var y = 0;
      var z = 0;

      if (swiper.isHorizontal()) {
        x = rtl ? -translate : translate;
      } else {
        y = translate;
      }

      if (params.roundLengths) {
        x = Math.floor(x);
        y = Math.floor(y);
      }

      if (params.cssMode) {
        wrapperEl[swiper.isHorizontal() ? 'scrollLeft' : 'scrollTop'] = swiper.isHorizontal() ? -x : -y;
      } else if (!params.virtualTranslate) {
        $wrapperEl.transform("translate3d(" + x + "px, " + y + "px, " + z + "px)");
      }

      swiper.previousTranslate = swiper.translate;
      swiper.translate = swiper.isHorizontal() ? x : y; // Check if we need to update progress

      var newProgress;
      var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

      if (translatesDiff === 0) {
        newProgress = 0;
      } else {
        newProgress = (translate - swiper.minTranslate()) / translatesDiff;
      }

      if (newProgress !== progress) {
        swiper.updateProgress(translate);
      }

      swiper.emit('setTranslate', swiper.translate, byController);
    }

    function minTranslate() {
      return -this.snapGrid[0];
    }

    function maxTranslate() {
      return -this.snapGrid[this.snapGrid.length - 1];
    }

    function translateTo(translate, speed, runCallbacks, translateBounds, internal) {
      var obj;
      if (translate === void 0) translate = 0;
      if (speed === void 0) speed = this.params.speed;
      if (runCallbacks === void 0) runCallbacks = true;
      if (translateBounds === void 0) translateBounds = true;
      var swiper = this;
      var params = swiper.params;
      var wrapperEl = swiper.wrapperEl;

      if (swiper.animating && params.preventInteractionOnTransition) {
        return false;
      }

      var minTranslate = swiper.minTranslate();
      var maxTranslate = swiper.maxTranslate();
      var newTranslate;

      if (translateBounds && translate > minTranslate) {
        newTranslate = minTranslate;
      } else if (translateBounds && translate < maxTranslate) {
        newTranslate = maxTranslate;
      } else {
        newTranslate = translate;
      } // Update progress


      swiper.updateProgress(newTranslate);

      if (params.cssMode) {
        var isH = swiper.isHorizontal();

        if (speed === 0) {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
        } else {
          // eslint-disable-next-line
          if (wrapperEl.scrollTo) {
            wrapperEl.scrollTo((obj = {}, obj[isH ? 'left' : 'top'] = -newTranslate, obj.behavior = 'smooth', obj));
          } else {
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -newTranslate;
          }
        }

        return true;
      }

      if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(newTranslate);

        if (runCallbacks) {
          swiper.emit('beforeTransitionStart', speed, internal);
          swiper.emit('transitionEnd');
        }
      } else {
        swiper.setTransition(speed);
        swiper.setTranslate(newTranslate);

        if (runCallbacks) {
          swiper.emit('beforeTransitionStart', speed, internal);
          swiper.emit('transitionStart');
        }

        if (!swiper.animating) {
          swiper.animating = true;

          if (!swiper.onTranslateToWrapperTransitionEnd) {
            swiper.onTranslateToWrapperTransitionEnd = function transitionEnd(e) {
              if (!swiper || swiper.destroyed) {
                return;
              }

              if (e.target !== this) {
                return;
              }

              swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
              swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
              swiper.onTranslateToWrapperTransitionEnd = null;
              delete swiper.onTranslateToWrapperTransitionEnd;

              if (runCallbacks) {
                swiper.emit('transitionEnd');
              }
            };
          }

          swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onTranslateToWrapperTransitionEnd);
          swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onTranslateToWrapperTransitionEnd);
        }
      }

      return true;
    }

    var translate = {
      getTranslate: getTranslate,
      setTranslate: setTranslate,
      minTranslate: minTranslate,
      maxTranslate: maxTranslate,
      translateTo: translateTo
    };

    function setTransition(duration, byController) {
      var swiper = this;

      if (!swiper.params.cssMode) {
        swiper.$wrapperEl.transition(duration);
      }

      swiper.emit('setTransition', duration, byController);
    }

    function transitionStart(runCallbacks, direction) {
      if (runCallbacks === void 0) runCallbacks = true;
      var swiper = this;
      var activeIndex = swiper.activeIndex;
      var params = swiper.params;
      var previousIndex = swiper.previousIndex;

      if (params.cssMode) {
        return;
      }

      if (params.autoHeight) {
        swiper.updateAutoHeight();
      }

      var dir = direction;

      if (!dir) {
        if (activeIndex > previousIndex) {
          dir = 'next';
        } else if (activeIndex < previousIndex) {
          dir = 'prev';
        } else {
          dir = 'reset';
        }
      }

      swiper.emit('transitionStart');

      if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === 'reset') {
          swiper.emit('slideResetTransitionStart');
          return;
        }

        swiper.emit('slideChangeTransitionStart');

        if (dir === 'next') {
          swiper.emit('slideNextTransitionStart');
        } else {
          swiper.emit('slidePrevTransitionStart');
        }
      }
    }

    function transitionEnd$1(runCallbacks, direction) {
      if (runCallbacks === void 0) runCallbacks = true;
      var swiper = this;
      var activeIndex = swiper.activeIndex;
      var previousIndex = swiper.previousIndex;
      var params = swiper.params;
      swiper.animating = false;

      if (params.cssMode) {
        return;
      }

      swiper.setTransition(0);
      var dir = direction;

      if (!dir) {
        if (activeIndex > previousIndex) {
          dir = 'next';
        } else if (activeIndex < previousIndex) {
          dir = 'prev';
        } else {
          dir = 'reset';
        }
      }

      swiper.emit('transitionEnd');

      if (runCallbacks && activeIndex !== previousIndex) {
        if (dir === 'reset') {
          swiper.emit('slideResetTransitionEnd');
          return;
        }

        swiper.emit('slideChangeTransitionEnd');

        if (dir === 'next') {
          swiper.emit('slideNextTransitionEnd');
        } else {
          swiper.emit('slidePrevTransitionEnd');
        }
      }
    }

    var transition$1 = {
      setTransition: setTransition,
      transitionStart: transitionStart,
      transitionEnd: transitionEnd$1
    };

    function slideTo(index, speed, runCallbacks, internal) {
      var obj;
      if (index === void 0) index = 0;
      if (speed === void 0) speed = this.params.speed;
      if (runCallbacks === void 0) runCallbacks = true;
      var swiper = this;
      var slideIndex = index;

      if (slideIndex < 0) {
        slideIndex = 0;
      }

      var params = swiper.params;
      var snapGrid = swiper.snapGrid;
      var slidesGrid = swiper.slidesGrid;
      var previousIndex = swiper.previousIndex;
      var activeIndex = swiper.activeIndex;
      var rtl = swiper.rtlTranslate;
      var wrapperEl = swiper.wrapperEl;

      if (swiper.animating && params.preventInteractionOnTransition) {
        return false;
      }

      var skip = Math.min(swiper.params.slidesPerGroupSkip, slideIndex);
      var snapIndex = skip + Math.floor((slideIndex - skip) / swiper.params.slidesPerGroup);

      if (snapIndex >= snapGrid.length) {
        snapIndex = snapGrid.length - 1;
      }

      if ((activeIndex || params.initialSlide || 0) === (previousIndex || 0) && runCallbacks) {
        swiper.emit('beforeSlideChangeStart');
      }

      var translate = -snapGrid[snapIndex]; // Update progress

      swiper.updateProgress(translate); // Normalize slideIndex

      if (params.normalizeSlideIndex) {
        for (var i = 0; i < slidesGrid.length; i += 1) {
          if (-Math.floor(translate * 100) >= Math.floor(slidesGrid[i] * 100)) {
            slideIndex = i;
          }
        }
      } // Directions locks


      if (swiper.initialized && slideIndex !== activeIndex) {
        if (!swiper.allowSlideNext && translate < swiper.translate && translate < swiper.minTranslate()) {
          return false;
        }

        if (!swiper.allowSlidePrev && translate > swiper.translate && translate > swiper.maxTranslate()) {
          if ((activeIndex || 0) !== slideIndex) {
            return false;
          }
        }
      }

      var direction;

      if (slideIndex > activeIndex) {
        direction = 'next';
      } else if (slideIndex < activeIndex) {
        direction = 'prev';
      } else {
        direction = 'reset';
      } // Update Index


      if (rtl && -translate === swiper.translate || !rtl && translate === swiper.translate) {
        swiper.updateActiveIndex(slideIndex); // Update Height

        if (params.autoHeight) {
          swiper.updateAutoHeight();
        }

        swiper.updateSlidesClasses();

        if (params.effect !== 'slide') {
          swiper.setTranslate(translate);
        }

        if (direction !== 'reset') {
          swiper.transitionStart(runCallbacks, direction);
          swiper.transitionEnd(runCallbacks, direction);
        }

        return false;
      }

      if (params.cssMode) {
        var isH = swiper.isHorizontal();

        if (speed === 0) {
          wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -translate;
        } else {
          // eslint-disable-next-line
          if (wrapperEl.scrollTo) {
            wrapperEl.scrollTo((obj = {}, obj[isH ? 'left' : 'top'] = -translate, obj.behavior = 'smooth', obj));
          } else {
            wrapperEl[isH ? 'scrollLeft' : 'scrollTop'] = -translate;
          }
        }

        return true;
      }

      if (speed === 0) {
        swiper.setTransition(0);
        swiper.setTranslate(translate);
        swiper.updateActiveIndex(slideIndex);
        swiper.updateSlidesClasses();
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.transitionStart(runCallbacks, direction);
        swiper.transitionEnd(runCallbacks, direction);
      } else {
        swiper.setTransition(speed);
        swiper.setTranslate(translate);
        swiper.updateActiveIndex(slideIndex);
        swiper.updateSlidesClasses();
        swiper.emit('beforeTransitionStart', speed, internal);
        swiper.transitionStart(runCallbacks, direction);

        if (!swiper.animating) {
          swiper.animating = true;

          if (!swiper.onSlideToWrapperTransitionEnd) {
            swiper.onSlideToWrapperTransitionEnd = function transitionEnd(e) {
              if (!swiper || swiper.destroyed) {
                return;
              }

              if (e.target !== this) {
                return;
              }

              swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
              swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
              swiper.onSlideToWrapperTransitionEnd = null;
              delete swiper.onSlideToWrapperTransitionEnd;
              swiper.transitionEnd(runCallbacks, direction);
            };
          }

          swiper.$wrapperEl[0].addEventListener('transitionend', swiper.onSlideToWrapperTransitionEnd);
          swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.onSlideToWrapperTransitionEnd);
        }
      }

      return true;
    }

    function slideToLoop(index, speed, runCallbacks, internal) {
      if (index === void 0) index = 0;
      if (speed === void 0) speed = this.params.speed;
      if (runCallbacks === void 0) runCallbacks = true;
      var swiper = this;
      var newIndex = index;

      if (swiper.params.loop) {
        newIndex += swiper.loopedSlides;
      }

      return swiper.slideTo(newIndex, speed, runCallbacks, internal);
    }
    /* eslint no-unused-vars: "off" */


    function slideNext(speed, runCallbacks, internal) {
      if (speed === void 0) speed = this.params.speed;
      if (runCallbacks === void 0) runCallbacks = true;
      var swiper = this;
      var params = swiper.params;
      var animating = swiper.animating;
      var increment = swiper.activeIndex < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup;

      if (params.loop) {
        if (animating) {
          return false;
        }

        swiper.loopFix(); // eslint-disable-next-line

        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      }

      return swiper.slideTo(swiper.activeIndex + increment, speed, runCallbacks, internal);
    }
    /* eslint no-unused-vars: "off" */


    function slidePrev(speed, runCallbacks, internal) {
      if (speed === void 0) speed = this.params.speed;
      if (runCallbacks === void 0) runCallbacks = true;
      var swiper = this;
      var params = swiper.params;
      var animating = swiper.animating;
      var snapGrid = swiper.snapGrid;
      var slidesGrid = swiper.slidesGrid;
      var rtlTranslate = swiper.rtlTranslate;

      if (params.loop) {
        if (animating) {
          return false;
        }

        swiper.loopFix(); // eslint-disable-next-line

        swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
      }

      var translate = rtlTranslate ? swiper.translate : -swiper.translate;

      function normalize(val) {
        if (val < 0) {
          return -Math.floor(Math.abs(val));
        }

        return Math.floor(val);
      }

      var normalizedTranslate = normalize(translate);
      var normalizedSnapGrid = snapGrid.map(function (val) {
        return normalize(val);
      });
      var normalizedSlidesGrid = slidesGrid.map(function (val) {
        return normalize(val);
      });
      var currentSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate)];
      var prevSnap = snapGrid[normalizedSnapGrid.indexOf(normalizedTranslate) - 1];

      if (typeof prevSnap === 'undefined' && params.cssMode) {
        snapGrid.forEach(function (snap) {
          if (!prevSnap && normalizedTranslate >= snap) {
            prevSnap = snap;
          }
        });
      }

      var prevIndex;

      if (typeof prevSnap !== 'undefined') {
        prevIndex = slidesGrid.indexOf(prevSnap);

        if (prevIndex < 0) {
          prevIndex = swiper.activeIndex - 1;
        }
      }

      return swiper.slideTo(prevIndex, speed, runCallbacks, internal);
    }
    /* eslint no-unused-vars: "off" */


    function slideReset(speed, runCallbacks, internal) {
      if (speed === void 0) speed = this.params.speed;
      if (runCallbacks === void 0) runCallbacks = true;
      var swiper = this;
      return swiper.slideTo(swiper.activeIndex, speed, runCallbacks, internal);
    }
    /* eslint no-unused-vars: "off" */


    function slideToClosest(speed, runCallbacks, internal, threshold) {
      if (speed === void 0) speed = this.params.speed;
      if (runCallbacks === void 0) runCallbacks = true;
      if (threshold === void 0) threshold = 0.5;
      var swiper = this;
      var index = swiper.activeIndex;
      var skip = Math.min(swiper.params.slidesPerGroupSkip, index);
      var snapIndex = skip + Math.floor((index - skip) / swiper.params.slidesPerGroup);
      var translate = swiper.rtlTranslate ? swiper.translate : -swiper.translate;

      if (translate >= swiper.snapGrid[snapIndex]) {
        // The current translate is on or after the current snap index, so the choice
        // is between the current index and the one after it.
        var currentSnap = swiper.snapGrid[snapIndex];
        var nextSnap = swiper.snapGrid[snapIndex + 1];

        if (translate - currentSnap > (nextSnap - currentSnap) * threshold) {
          index += swiper.params.slidesPerGroup;
        }
      } else {
        // The current translate is before the current snap index, so the choice
        // is between the current index and the one before it.
        var prevSnap = swiper.snapGrid[snapIndex - 1];
        var currentSnap$1 = swiper.snapGrid[snapIndex];

        if (translate - prevSnap <= (currentSnap$1 - prevSnap) * threshold) {
          index -= swiper.params.slidesPerGroup;
        }
      }

      index = Math.max(index, 0);
      index = Math.min(index, swiper.slidesGrid.length - 1);
      return swiper.slideTo(index, speed, runCallbacks, internal);
    }

    function slideToClickedSlide() {
      var swiper = this;
      var params = swiper.params;
      var $wrapperEl = swiper.$wrapperEl;
      var slidesPerView = params.slidesPerView === 'auto' ? swiper.slidesPerViewDynamic() : params.slidesPerView;
      var slideToIndex = swiper.clickedIndex;
      var realIndex;

      if (params.loop) {
        if (swiper.animating) {
          return;
        }

        realIndex = parseInt($(swiper.clickedSlide).attr('data-swiper-slide-index'), 10);

        if (params.centeredSlides) {
          if (slideToIndex < swiper.loopedSlides - slidesPerView / 2 || slideToIndex > swiper.slides.length - swiper.loopedSlides + slidesPerView / 2) {
            swiper.loopFix();
            slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
            Utils.nextTick(function () {
              swiper.slideTo(slideToIndex);
            });
          } else {
            swiper.slideTo(slideToIndex);
          }
        } else if (slideToIndex > swiper.slides.length - slidesPerView) {
          swiper.loopFix();
          slideToIndex = $wrapperEl.children("." + params.slideClass + "[data-swiper-slide-index=\"" + realIndex + "\"]:not(." + params.slideDuplicateClass + ")").eq(0).index();
          Utils.nextTick(function () {
            swiper.slideTo(slideToIndex);
          });
        } else {
          swiper.slideTo(slideToIndex);
        }
      } else {
        swiper.slideTo(slideToIndex);
      }
    }

    var slide = {
      slideTo: slideTo,
      slideToLoop: slideToLoop,
      slideNext: slideNext,
      slidePrev: slidePrev,
      slideReset: slideReset,
      slideToClosest: slideToClosest,
      slideToClickedSlide: slideToClickedSlide
    };

    function loopCreate() {
      var swiper = this;
      var params = swiper.params;
      var $wrapperEl = swiper.$wrapperEl; // Remove duplicated slides

      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass).remove();
      var slides = $wrapperEl.children("." + params.slideClass);

      if (params.loopFillGroupWithBlank) {
        var blankSlidesNum = params.slidesPerGroup - slides.length % params.slidesPerGroup;

        if (blankSlidesNum !== params.slidesPerGroup) {
          for (var i = 0; i < blankSlidesNum; i += 1) {
            var blankNode = $(doc.createElement('div')).addClass(params.slideClass + " " + params.slideBlankClass);
            $wrapperEl.append(blankNode);
          }

          slides = $wrapperEl.children("." + params.slideClass);
        }
      }

      if (params.slidesPerView === 'auto' && !params.loopedSlides) {
        params.loopedSlides = slides.length;
      }

      swiper.loopedSlides = Math.ceil(parseFloat(params.loopedSlides || params.slidesPerView, 10));
      swiper.loopedSlides += params.loopAdditionalSlides;

      if (swiper.loopedSlides > slides.length) {
        swiper.loopedSlides = slides.length;
      }

      var prependSlides = [];
      var appendSlides = [];
      slides.each(function (index, el) {
        var slide = $(el);

        if (index < swiper.loopedSlides) {
          appendSlides.push(el);
        }

        if (index < slides.length && index >= slides.length - swiper.loopedSlides) {
          prependSlides.push(el);
        }

        slide.attr('data-swiper-slide-index', index);
      });

      for (var i$1 = 0; i$1 < appendSlides.length; i$1 += 1) {
        $wrapperEl.append($(appendSlides[i$1].cloneNode(true)).addClass(params.slideDuplicateClass));
      }

      for (var i$2 = prependSlides.length - 1; i$2 >= 0; i$2 -= 1) {
        $wrapperEl.prepend($(prependSlides[i$2].cloneNode(true)).addClass(params.slideDuplicateClass));
      }
    }

    function loopFix() {
      var swiper = this;
      swiper.emit('beforeLoopFix');
      var activeIndex = swiper.activeIndex;
      var slides = swiper.slides;
      var loopedSlides = swiper.loopedSlides;
      var allowSlidePrev = swiper.allowSlidePrev;
      var allowSlideNext = swiper.allowSlideNext;
      var snapGrid = swiper.snapGrid;
      var rtl = swiper.rtlTranslate;
      var newIndex;
      swiper.allowSlidePrev = true;
      swiper.allowSlideNext = true;
      var snapTranslate = -snapGrid[activeIndex];
      var diff = snapTranslate - swiper.getTranslate(); // Fix For Negative Oversliding

      if (activeIndex < loopedSlides) {
        newIndex = slides.length - loopedSlides * 3 + activeIndex;
        newIndex += loopedSlides;
        var slideChanged = swiper.slideTo(newIndex, 0, false, true);

        if (slideChanged && diff !== 0) {
          swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
        }
      } else if (activeIndex >= slides.length - loopedSlides) {
        // Fix For Positive Oversliding
        newIndex = -slides.length + activeIndex + loopedSlides;
        newIndex += loopedSlides;
        var slideChanged$1 = swiper.slideTo(newIndex, 0, false, true);

        if (slideChanged$1 && diff !== 0) {
          swiper.setTranslate((rtl ? -swiper.translate : swiper.translate) - diff);
        }
      }

      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;
      swiper.emit('loopFix');
    }

    function loopDestroy() {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl;
      var params = swiper.params;
      var slides = swiper.slides;
      $wrapperEl.children("." + params.slideClass + "." + params.slideDuplicateClass + ",." + params.slideClass + "." + params.slideBlankClass).remove();
      slides.removeAttr('data-swiper-slide-index');
    }

    var loop = {
      loopCreate: loopCreate,
      loopFix: loopFix,
      loopDestroy: loopDestroy
    };

    function setGrabCursor(moving) {
      var swiper = this;

      if (Support.touch || !swiper.params.simulateTouch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
        return;
      }

      var el = swiper.el;
      el.style.cursor = 'move';
      el.style.cursor = moving ? '-webkit-grabbing' : '-webkit-grab';
      el.style.cursor = moving ? '-moz-grabbin' : '-moz-grab';
      el.style.cursor = moving ? 'grabbing' : 'grab';
    }

    function unsetGrabCursor() {
      var swiper = this;

      if (Support.touch || swiper.params.watchOverflow && swiper.isLocked || swiper.params.cssMode) {
        return;
      }

      swiper.el.style.cursor = '';
    }

    var grabCursor = {
      setGrabCursor: setGrabCursor,
      unsetGrabCursor: unsetGrabCursor
    };

    function appendSlide(slides) {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl;
      var params = swiper.params;

      if (params.loop) {
        swiper.loopDestroy();
      }

      if (_typeof(slides) === 'object' && 'length' in slides) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) {
            $wrapperEl.append(slides[i]);
          }
        }
      } else {
        $wrapperEl.append(slides);
      }

      if (params.loop) {
        swiper.loopCreate();
      }

      if (!(params.observer && Support.observer)) {
        swiper.update();
      }
    }

    function prependSlide(slides) {
      var swiper = this;
      var params = swiper.params;
      var $wrapperEl = swiper.$wrapperEl;
      var activeIndex = swiper.activeIndex;

      if (params.loop) {
        swiper.loopDestroy();
      }

      var newActiveIndex = activeIndex + 1;

      if (_typeof(slides) === 'object' && 'length' in slides) {
        for (var i = 0; i < slides.length; i += 1) {
          if (slides[i]) {
            $wrapperEl.prepend(slides[i]);
          }
        }

        newActiveIndex = activeIndex + slides.length;
      } else {
        $wrapperEl.prepend(slides);
      }

      if (params.loop) {
        swiper.loopCreate();
      }

      if (!(params.observer && Support.observer)) {
        swiper.update();
      }

      swiper.slideTo(newActiveIndex, 0, false);
    }

    function addSlide(index, slides) {
      var swiper = this;
      var $wrapperEl = swiper.$wrapperEl;
      var params = swiper.params;
      var activeIndex = swiper.activeIndex;
      var activeIndexBuffer = activeIndex;

      if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children("." + params.slideClass);
      }

      var baseLength = swiper.slides.length;

      if (index <= 0) {
        swiper.prependSlide(slides);
        return;
      }

      if (index >= baseLength) {
        swiper.appendSlide(slides);
        return;
      }

      var newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + 1 : activeIndexBuffer;
      var slidesBuffer = [];

      for (var i = baseLength - 1; i >= index; i -= 1) {
        var currentSlide = swiper.slides.eq(i);
        currentSlide.remove();
        slidesBuffer.unshift(currentSlide);
      }

      if (_typeof(slides) === 'object' && 'length' in slides) {
        for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
          if (slides[i$1]) {
            $wrapperEl.append(slides[i$1]);
          }
        }

        newActiveIndex = activeIndexBuffer > index ? activeIndexBuffer + slides.length : activeIndexBuffer;
      } else {
        $wrapperEl.append(slides);
      }

      for (var i$2 = 0; i$2 < slidesBuffer.length; i$2 += 1) {
        $wrapperEl.append(slidesBuffer[i$2]);
      }

      if (params.loop) {
        swiper.loopCreate();
      }

      if (!(params.observer && Support.observer)) {
        swiper.update();
      }

      if (params.loop) {
        swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
      } else {
        swiper.slideTo(newActiveIndex, 0, false);
      }
    }

    function removeSlide(slidesIndexes) {
      var swiper = this;
      var params = swiper.params;
      var $wrapperEl = swiper.$wrapperEl;
      var activeIndex = swiper.activeIndex;
      var activeIndexBuffer = activeIndex;

      if (params.loop) {
        activeIndexBuffer -= swiper.loopedSlides;
        swiper.loopDestroy();
        swiper.slides = $wrapperEl.children("." + params.slideClass);
      }

      var newActiveIndex = activeIndexBuffer;
      var indexToRemove;

      if (_typeof(slidesIndexes) === 'object' && 'length' in slidesIndexes) {
        for (var i = 0; i < slidesIndexes.length; i += 1) {
          indexToRemove = slidesIndexes[i];

          if (swiper.slides[indexToRemove]) {
            swiper.slides.eq(indexToRemove).remove();
          }

          if (indexToRemove < newActiveIndex) {
            newActiveIndex -= 1;
          }
        }

        newActiveIndex = Math.max(newActiveIndex, 0);
      } else {
        indexToRemove = slidesIndexes;

        if (swiper.slides[indexToRemove]) {
          swiper.slides.eq(indexToRemove).remove();
        }

        if (indexToRemove < newActiveIndex) {
          newActiveIndex -= 1;
        }

        newActiveIndex = Math.max(newActiveIndex, 0);
      }

      if (params.loop) {
        swiper.loopCreate();
      }

      if (!(params.observer && Support.observer)) {
        swiper.update();
      }

      if (params.loop) {
        swiper.slideTo(newActiveIndex + swiper.loopedSlides, 0, false);
      } else {
        swiper.slideTo(newActiveIndex, 0, false);
      }
    }

    function removeAllSlides() {
      var swiper = this;
      var slidesIndexes = [];

      for (var i = 0; i < swiper.slides.length; i += 1) {
        slidesIndexes.push(i);
      }

      swiper.removeSlide(slidesIndexes);
    }

    var manipulation = {
      appendSlide: appendSlide,
      prependSlide: prependSlide,
      addSlide: addSlide,
      removeSlide: removeSlide,
      removeAllSlides: removeAllSlides
    };

    var Device = function Device() {
      var platform = win.navigator.platform;
      var ua = win.navigator.userAgent;
      var device = {
        ios: false,
        android: false,
        androidChrome: false,
        desktop: false,
        iphone: false,
        ipod: false,
        ipad: false,
        edge: false,
        ie: false,
        firefox: false,
        macos: false,
        windows: false,
        cordova: !!(win.cordova || win.phonegap),
        phonegap: !!(win.cordova || win.phonegap),
        electron: false
      };
      var screenWidth = win.screen.width;
      var screenHeight = win.screen.height;
      var android = ua.match(/(Android);?[\s\/]+([\d.]+)?/); // eslint-disable-line

      var ipad = ua.match(/(iPad).*OS\s([\d_]+)/);
      var ipod = ua.match(/(iPod)(.*OS\s([\d_]+))?/);
      var iphone = !ipad && ua.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
      var ie = ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
      var edge = ua.indexOf('Edge/') >= 0;
      var firefox = ua.indexOf('Gecko/') >= 0 && ua.indexOf('Firefox/') >= 0;
      var windows = platform === 'Win32';
      var electron = ua.toLowerCase().indexOf('electron') >= 0;
      var macos = platform === 'MacIntel'; // iPadOs 13 fix

      if (!ipad && macos && Support.touch && (screenWidth === 1024 && screenHeight === 1366 || // Pro 12.9
      screenWidth === 834 && screenHeight === 1194 // Pro 11
      || screenWidth === 834 && screenHeight === 1112 // Pro 10.5
      || screenWidth === 768 && screenHeight === 1024 // other
      )) {
        ipad = ua.match(/(Version)\/([\d.]+)/);
        macos = false;
      }

      device.ie = ie;
      device.edge = edge;
      device.firefox = firefox; // Android

      if (android && !windows) {
        device.os = 'android';
        device.osVersion = android[2];
        device.android = true;
        device.androidChrome = ua.toLowerCase().indexOf('chrome') >= 0;
      }

      if (ipad || iphone || ipod) {
        device.os = 'ios';
        device.ios = true;
      } // iOS


      if (iphone && !ipod) {
        device.osVersion = iphone[2].replace(/_/g, '.');
        device.iphone = true;
      }

      if (ipad) {
        device.osVersion = ipad[2].replace(/_/g, '.');
        device.ipad = true;
      }

      if (ipod) {
        device.osVersion = ipod[3] ? ipod[3].replace(/_/g, '.') : null;
        device.ipod = true;
      } // iOS 8+ changed UA


      if (device.ios && device.osVersion && ua.indexOf('Version/') >= 0) {
        if (device.osVersion.split('.')[0] === '10') {
          device.osVersion = ua.toLowerCase().split('version/')[1].split(' ')[0];
        }
      } // Webview


      device.webView = !!((iphone || ipad || ipod) && (ua.match(/.*AppleWebKit(?!.*Safari)/i) || win.navigator.standalone)) || win.matchMedia && win.matchMedia('(display-mode: standalone)').matches;
      device.webview = device.webView;
      device.standalone = device.webView; // Desktop

      device.desktop = !(device.ios || device.android) || electron;

      if (device.desktop) {
        device.electron = electron;
        device.macos = macos;
        device.windows = windows;

        if (device.macos) {
          device.os = 'macos';
        }

        if (device.windows) {
          device.os = 'windows';
        }
      } // Pixel Ratio


      device.pixelRatio = win.devicePixelRatio || 1; // Export object

      return device;
    }();

    function onTouchStart(event) {
      var swiper = this;
      var data = swiper.touchEventsData;
      var params = swiper.params;
      var touches = swiper.touches;

      if (swiper.animating && params.preventInteractionOnTransition) {
        return;
      }

      var e = event;

      if (e.originalEvent) {
        e = e.originalEvent;
      }

      var $targetEl = $(e.target);

      if (params.touchEventsTarget === 'wrapper') {
        if (!$targetEl.closest(swiper.wrapperEl).length) {
          return;
        }
      }

      data.isTouchEvent = e.type === 'touchstart';

      if (!data.isTouchEvent && 'which' in e && e.which === 3) {
        return;
      }

      if (!data.isTouchEvent && 'button' in e && e.button > 0) {
        return;
      }

      if (data.isTouched && data.isMoved) {
        return;
      }

      if (params.noSwiping && $targetEl.closest(params.noSwipingSelector ? params.noSwipingSelector : "." + params.noSwipingClass)[0]) {
        swiper.allowClick = true;
        return;
      }

      if (params.swipeHandler) {
        if (!$targetEl.closest(params.swipeHandler)[0]) {
          return;
        }
      }

      touches.currentX = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
      touches.currentY = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
      var startX = touches.currentX;
      var startY = touches.currentY; // Do NOT start if iOS edge swipe is detected. Otherwise iOS app (UIWebView) cannot swipe-to-go-back anymore

      var edgeSwipeDetection = params.edgeSwipeDetection || params.iOSEdgeSwipeDetection;
      var edgeSwipeThreshold = params.edgeSwipeThreshold || params.iOSEdgeSwipeThreshold;

      if (edgeSwipeDetection && (startX <= edgeSwipeThreshold || startX >= win.screen.width - edgeSwipeThreshold)) {
        return;
      }

      Utils.extend(data, {
        isTouched: true,
        isMoved: false,
        allowTouchCallbacks: true,
        isScrolling: undefined,
        startMoving: undefined
      });
      touches.startX = startX;
      touches.startY = startY;
      data.touchStartTime = Utils.now();
      swiper.allowClick = true;
      swiper.updateSize();
      swiper.swipeDirection = undefined;

      if (params.threshold > 0) {
        data.allowThresholdMove = false;
      }

      if (e.type !== 'touchstart') {
        var preventDefault = true;

        if ($targetEl.is(data.formElements)) {
          preventDefault = false;
        }

        if (doc.activeElement && $(doc.activeElement).is(data.formElements) && doc.activeElement !== $targetEl[0]) {
          doc.activeElement.blur();
        }

        var shouldPreventDefault = preventDefault && swiper.allowTouchMove && params.touchStartPreventDefault;

        if (params.touchStartForcePreventDefault || shouldPreventDefault) {
          e.preventDefault();
        }
      }

      swiper.emit('touchStart', e);
    }

    function onTouchMove(event) {
      var swiper = this;
      var data = swiper.touchEventsData;
      var params = swiper.params;
      var touches = swiper.touches;
      var rtl = swiper.rtlTranslate;
      var e = event;

      if (e.originalEvent) {
        e = e.originalEvent;
      }

      if (!data.isTouched) {
        if (data.startMoving && data.isScrolling) {
          swiper.emit('touchMoveOpposite', e);
        }

        return;
      }

      if (data.isTouchEvent && e.type === 'mousemove') {
        return;
      }

      var targetTouch = e.type === 'touchmove' && e.targetTouches && (e.targetTouches[0] || e.changedTouches[0]);
      var pageX = e.type === 'touchmove' ? targetTouch.pageX : e.pageX;
      var pageY = e.type === 'touchmove' ? targetTouch.pageY : e.pageY;

      if (e.preventedByNestedSwiper) {
        touches.startX = pageX;
        touches.startY = pageY;
        return;
      }

      if (!swiper.allowTouchMove) {
        // isMoved = true;
        swiper.allowClick = false;

        if (data.isTouched) {
          Utils.extend(touches, {
            startX: pageX,
            startY: pageY,
            currentX: pageX,
            currentY: pageY
          });
          data.touchStartTime = Utils.now();
        }

        return;
      }

      if (data.isTouchEvent && params.touchReleaseOnEdges && !params.loop) {
        if (swiper.isVertical()) {
          // Vertical
          if (pageY < touches.startY && swiper.translate <= swiper.maxTranslate() || pageY > touches.startY && swiper.translate >= swiper.minTranslate()) {
            data.isTouched = false;
            data.isMoved = false;
            return;
          }
        } else if (pageX < touches.startX && swiper.translate <= swiper.maxTranslate() || pageX > touches.startX && swiper.translate >= swiper.minTranslate()) {
          return;
        }
      }

      if (data.isTouchEvent && doc.activeElement) {
        if (e.target === doc.activeElement && $(e.target).is(data.formElements)) {
          data.isMoved = true;
          swiper.allowClick = false;
          return;
        }
      }

      if (data.allowTouchCallbacks) {
        swiper.emit('touchMove', e);
      }

      if (e.targetTouches && e.targetTouches.length > 1) {
        return;
      }

      touches.currentX = pageX;
      touches.currentY = pageY;
      var diffX = touches.currentX - touches.startX;
      var diffY = touches.currentY - touches.startY;

      if (swiper.params.threshold && Math.sqrt(Math.pow(diffX, 2) + Math.pow(diffY, 2)) < swiper.params.threshold) {
        return;
      }

      if (typeof data.isScrolling === 'undefined') {
        var touchAngle;

        if (swiper.isHorizontal() && touches.currentY === touches.startY || swiper.isVertical() && touches.currentX === touches.startX) {
          data.isScrolling = false;
        } else {
          // eslint-disable-next-line
          if (diffX * diffX + diffY * diffY >= 25) {
            touchAngle = Math.atan2(Math.abs(diffY), Math.abs(diffX)) * 180 / Math.PI;
            data.isScrolling = swiper.isHorizontal() ? touchAngle > params.touchAngle : 90 - touchAngle > params.touchAngle;
          }
        }
      }

      if (data.isScrolling) {
        swiper.emit('touchMoveOpposite', e);
      }

      if (typeof data.startMoving === 'undefined') {
        if (touches.currentX !== touches.startX || touches.currentY !== touches.startY) {
          data.startMoving = true;
        }
      }

      if (data.isScrolling) {
        data.isTouched = false;
        return;
      }

      if (!data.startMoving) {
        return;
      }

      swiper.allowClick = false;

      if (!params.cssMode) {
        e.preventDefault();
      }

      if (params.touchMoveStopPropagation && !params.nested) {
        e.stopPropagation();
      }

      if (!data.isMoved) {
        if (params.loop) {
          swiper.loopFix();
        }

        data.startTranslate = swiper.getTranslate();
        swiper.setTransition(0);

        if (swiper.animating) {
          swiper.$wrapperEl.trigger('webkitTransitionEnd transitionend');
        }

        data.allowMomentumBounce = false; // Grab Cursor

        if (params.grabCursor && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
          swiper.setGrabCursor(true);
        }

        swiper.emit('sliderFirstMove', e);
      }

      swiper.emit('sliderMove', e);
      data.isMoved = true;
      var diff = swiper.isHorizontal() ? diffX : diffY;
      touches.diff = diff;
      diff *= params.touchRatio;

      if (rtl) {
        diff = -diff;
      }

      swiper.swipeDirection = diff > 0 ? 'prev' : 'next';
      data.currentTranslate = diff + data.startTranslate;
      var disableParentSwiper = true;
      var resistanceRatio = params.resistanceRatio;

      if (params.touchReleaseOnEdges) {
        resistanceRatio = 0;
      }

      if (diff > 0 && data.currentTranslate > swiper.minTranslate()) {
        disableParentSwiper = false;

        if (params.resistance) {
          data.currentTranslate = swiper.minTranslate() - 1 + Math.pow(-swiper.minTranslate() + data.startTranslate + diff, resistanceRatio);
        }
      } else if (diff < 0 && data.currentTranslate < swiper.maxTranslate()) {
        disableParentSwiper = false;

        if (params.resistance) {
          data.currentTranslate = swiper.maxTranslate() + 1 - Math.pow(swiper.maxTranslate() - data.startTranslate - diff, resistanceRatio);
        }
      }

      if (disableParentSwiper) {
        e.preventedByNestedSwiper = true;
      } // Directions locks


      if (!swiper.allowSlideNext && swiper.swipeDirection === 'next' && data.currentTranslate < data.startTranslate) {
        data.currentTranslate = data.startTranslate;
      }

      if (!swiper.allowSlidePrev && swiper.swipeDirection === 'prev' && data.currentTranslate > data.startTranslate) {
        data.currentTranslate = data.startTranslate;
      } // Threshold


      if (params.threshold > 0) {
        if (Math.abs(diff) > params.threshold || data.allowThresholdMove) {
          if (!data.allowThresholdMove) {
            data.allowThresholdMove = true;
            touches.startX = touches.currentX;
            touches.startY = touches.currentY;
            data.currentTranslate = data.startTranslate;
            touches.diff = swiper.isHorizontal() ? touches.currentX - touches.startX : touches.currentY - touches.startY;
            return;
          }
        } else {
          data.currentTranslate = data.startTranslate;
          return;
        }
      }

      if (!params.followFinger || params.cssMode) {
        return;
      } // Update active index in free mode


      if (params.freeMode || params.watchSlidesProgress || params.watchSlidesVisibility) {
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      }

      if (params.freeMode) {
        // Velocity
        if (data.velocities.length === 0) {
          data.velocities.push({
            position: touches[swiper.isHorizontal() ? 'startX' : 'startY'],
            time: data.touchStartTime
          });
        }

        data.velocities.push({
          position: touches[swiper.isHorizontal() ? 'currentX' : 'currentY'],
          time: Utils.now()
        });
      } // Update progress


      swiper.updateProgress(data.currentTranslate); // Update translate

      swiper.setTranslate(data.currentTranslate);
    }

    function onTouchEnd(event) {
      var swiper = this;
      var data = swiper.touchEventsData;
      var params = swiper.params;
      var touches = swiper.touches;
      var rtl = swiper.rtlTranslate;
      var $wrapperEl = swiper.$wrapperEl;
      var slidesGrid = swiper.slidesGrid;
      var snapGrid = swiper.snapGrid;
      var e = event;

      if (e.originalEvent) {
        e = e.originalEvent;
      }

      if (data.allowTouchCallbacks) {
        swiper.emit('touchEnd', e);
      }

      data.allowTouchCallbacks = false;

      if (!data.isTouched) {
        if (data.isMoved && params.grabCursor) {
          swiper.setGrabCursor(false);
        }

        data.isMoved = false;
        data.startMoving = false;
        return;
      } // Return Grab Cursor


      if (params.grabCursor && data.isMoved && data.isTouched && (swiper.allowSlideNext === true || swiper.allowSlidePrev === true)) {
        swiper.setGrabCursor(false);
      } // Time diff


      var touchEndTime = Utils.now();
      var timeDiff = touchEndTime - data.touchStartTime; // Tap, doubleTap, Click

      if (swiper.allowClick) {
        swiper.updateClickedSlide(e);
        swiper.emit('tap click', e);

        if (timeDiff < 300 && touchEndTime - data.lastClickTime < 300) {
          swiper.emit('doubleTap doubleClick', e);
        }
      }

      data.lastClickTime = Utils.now();
      Utils.nextTick(function () {
        if (!swiper.destroyed) {
          swiper.allowClick = true;
        }
      });

      if (!data.isTouched || !data.isMoved || !swiper.swipeDirection || touches.diff === 0 || data.currentTranslate === data.startTranslate) {
        data.isTouched = false;
        data.isMoved = false;
        data.startMoving = false;
        return;
      }

      data.isTouched = false;
      data.isMoved = false;
      data.startMoving = false;
      var currentPos;

      if (params.followFinger) {
        currentPos = rtl ? swiper.translate : -swiper.translate;
      } else {
        currentPos = -data.currentTranslate;
      }

      if (params.cssMode) {
        return;
      }

      if (params.freeMode) {
        if (currentPos < -swiper.minTranslate()) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }

        if (currentPos > -swiper.maxTranslate()) {
          if (swiper.slides.length < snapGrid.length) {
            swiper.slideTo(snapGrid.length - 1);
          } else {
            swiper.slideTo(swiper.slides.length - 1);
          }

          return;
        }

        if (params.freeModeMomentum) {
          if (data.velocities.length > 1) {
            var lastMoveEvent = data.velocities.pop();
            var velocityEvent = data.velocities.pop();
            var distance = lastMoveEvent.position - velocityEvent.position;
            var time = lastMoveEvent.time - velocityEvent.time;
            swiper.velocity = distance / time;
            swiper.velocity /= 2;

            if (Math.abs(swiper.velocity) < params.freeModeMinimumVelocity) {
              swiper.velocity = 0;
            } // this implies that the user stopped moving a finger then released.
            // There would be no events with distance zero, so the last event is stale.


            if (time > 150 || Utils.now() - lastMoveEvent.time > 300) {
              swiper.velocity = 0;
            }
          } else {
            swiper.velocity = 0;
          }

          swiper.velocity *= params.freeModeMomentumVelocityRatio;
          data.velocities.length = 0;
          var momentumDuration = 1000 * params.freeModeMomentumRatio;
          var momentumDistance = swiper.velocity * momentumDuration;
          var newPosition = swiper.translate + momentumDistance;

          if (rtl) {
            newPosition = -newPosition;
          }

          var doBounce = false;
          var afterBouncePosition;
          var bounceAmount = Math.abs(swiper.velocity) * 20 * params.freeModeMomentumBounceRatio;
          var needsLoopFix;

          if (newPosition < swiper.maxTranslate()) {
            if (params.freeModeMomentumBounce) {
              if (newPosition + swiper.maxTranslate() < -bounceAmount) {
                newPosition = swiper.maxTranslate() - bounceAmount;
              }

              afterBouncePosition = swiper.maxTranslate();
              doBounce = true;
              data.allowMomentumBounce = true;
            } else {
              newPosition = swiper.maxTranslate();
            }

            if (params.loop && params.centeredSlides) {
              needsLoopFix = true;
            }
          } else if (newPosition > swiper.minTranslate()) {
            if (params.freeModeMomentumBounce) {
              if (newPosition - swiper.minTranslate() > bounceAmount) {
                newPosition = swiper.minTranslate() + bounceAmount;
              }

              afterBouncePosition = swiper.minTranslate();
              doBounce = true;
              data.allowMomentumBounce = true;
            } else {
              newPosition = swiper.minTranslate();
            }

            if (params.loop && params.centeredSlides) {
              needsLoopFix = true;
            }
          } else if (params.freeModeSticky) {
            var nextSlide;

            for (var j = 0; j < snapGrid.length; j += 1) {
              if (snapGrid[j] > -newPosition) {
                nextSlide = j;
                break;
              }
            }

            if (Math.abs(snapGrid[nextSlide] - newPosition) < Math.abs(snapGrid[nextSlide - 1] - newPosition) || swiper.swipeDirection === 'next') {
              newPosition = snapGrid[nextSlide];
            } else {
              newPosition = snapGrid[nextSlide - 1];
            }

            newPosition = -newPosition;
          }

          if (needsLoopFix) {
            swiper.once('transitionEnd', function () {
              swiper.loopFix();
            });
          } // Fix duration


          if (swiper.velocity !== 0) {
            if (rtl) {
              momentumDuration = Math.abs((-newPosition - swiper.translate) / swiper.velocity);
            } else {
              momentumDuration = Math.abs((newPosition - swiper.translate) / swiper.velocity);
            }

            if (params.freeModeSticky) {
              // If freeModeSticky is active and the user ends a swipe with a slow-velocity
              // event, then durations can be 20+ seconds to slide one (or zero!) slides.
              // It's easy to see this when simulating touch with mouse events. To fix this,
              // limit single-slide swipes to the default slide duration. This also has the
              // nice side effect of matching slide speed if the user stopped moving before
              // lifting finger or mouse vs. moving slowly before lifting the finger/mouse.
              // For faster swipes, also apply limits (albeit higher ones).
              var moveDistance = Math.abs((rtl ? -newPosition : newPosition) - swiper.translate);
              var currentSlideSize = swiper.slidesSizesGrid[swiper.activeIndex];

              if (moveDistance < currentSlideSize) {
                momentumDuration = params.speed;
              } else if (moveDistance < 2 * currentSlideSize) {
                momentumDuration = params.speed * 1.5;
              } else {
                momentumDuration = params.speed * 2.5;
              }
            }
          } else if (params.freeModeSticky) {
            swiper.slideToClosest();
            return;
          }

          if (params.freeModeMomentumBounce && doBounce) {
            swiper.updateProgress(afterBouncePosition);
            swiper.setTransition(momentumDuration);
            swiper.setTranslate(newPosition);
            swiper.transitionStart(true, swiper.swipeDirection);
            swiper.animating = true;
            $wrapperEl.transitionEnd(function () {
              if (!swiper || swiper.destroyed || !data.allowMomentumBounce) {
                return;
              }

              swiper.emit('momentumBounce');
              swiper.setTransition(params.speed);
              swiper.setTranslate(afterBouncePosition);
              $wrapperEl.transitionEnd(function () {
                if (!swiper || swiper.destroyed) {
                  return;
                }

                swiper.transitionEnd();
              });
            });
          } else if (swiper.velocity) {
            swiper.updateProgress(newPosition);
            swiper.setTransition(momentumDuration);
            swiper.setTranslate(newPosition);
            swiper.transitionStart(true, swiper.swipeDirection);

            if (!swiper.animating) {
              swiper.animating = true;
              $wrapperEl.transitionEnd(function () {
                if (!swiper || swiper.destroyed) {
                  return;
                }

                swiper.transitionEnd();
              });
            }
          } else {
            swiper.updateProgress(newPosition);
          }

          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        } else if (params.freeModeSticky) {
          swiper.slideToClosest();
          return;
        }

        if (!params.freeModeMomentum || timeDiff >= params.longSwipesMs) {
          swiper.updateProgress();
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        }

        return;
      } // Find current slide


      var stopIndex = 0;
      var groupSize = swiper.slidesSizesGrid[0];

      for (var i = 0; i < slidesGrid.length; i += i < params.slidesPerGroupSkip ? 1 : params.slidesPerGroup) {
        var increment$1 = i < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

        if (typeof slidesGrid[i + increment$1] !== 'undefined') {
          if (currentPos >= slidesGrid[i] && currentPos < slidesGrid[i + increment$1]) {
            stopIndex = i;
            groupSize = slidesGrid[i + increment$1] - slidesGrid[i];
          }
        } else if (currentPos >= slidesGrid[i]) {
          stopIndex = i;
          groupSize = slidesGrid[slidesGrid.length - 1] - slidesGrid[slidesGrid.length - 2];
        }
      } // Find current slide size


      var ratio = (currentPos - slidesGrid[stopIndex]) / groupSize;
      var increment = stopIndex < params.slidesPerGroupSkip - 1 ? 1 : params.slidesPerGroup;

      if (timeDiff > params.longSwipesMs) {
        // Long touches
        if (!params.longSwipes) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }

        if (swiper.swipeDirection === 'next') {
          if (ratio >= params.longSwipesRatio) {
            swiper.slideTo(stopIndex + increment);
          } else {
            swiper.slideTo(stopIndex);
          }
        }

        if (swiper.swipeDirection === 'prev') {
          if (ratio > 1 - params.longSwipesRatio) {
            swiper.slideTo(stopIndex + increment);
          } else {
            swiper.slideTo(stopIndex);
          }
        }
      } else {
        // Short swipes
        if (!params.shortSwipes) {
          swiper.slideTo(swiper.activeIndex);
          return;
        }

        var isNavButtonTarget = swiper.navigation && (e.target === swiper.navigation.nextEl || e.target === swiper.navigation.prevEl);

        if (!isNavButtonTarget) {
          if (swiper.swipeDirection === 'next') {
            swiper.slideTo(stopIndex + increment);
          }

          if (swiper.swipeDirection === 'prev') {
            swiper.slideTo(stopIndex);
          }
        } else if (e.target === swiper.navigation.nextEl) {
          swiper.slideTo(stopIndex + increment);
        } else {
          swiper.slideTo(stopIndex);
        }
      }
    }

    function onResize() {
      var swiper = this;
      var params = swiper.params;
      var el = swiper.el;

      if (el && el.offsetWidth === 0) {
        return;
      } // Breakpoints


      if (params.breakpoints) {
        swiper.setBreakpoint();
      } // Save locks


      var allowSlideNext = swiper.allowSlideNext;
      var allowSlidePrev = swiper.allowSlidePrev;
      var snapGrid = swiper.snapGrid; // Disable locks on resize

      swiper.allowSlideNext = true;
      swiper.allowSlidePrev = true;
      swiper.updateSize();
      swiper.updateSlides();
      swiper.updateSlidesClasses();

      if ((params.slidesPerView === 'auto' || params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
        swiper.slideTo(swiper.slides.length - 1, 0, false, true);
      } else {
        swiper.slideTo(swiper.activeIndex, 0, false, true);
      }

      if (swiper.autoplay && swiper.autoplay.running && swiper.autoplay.paused) {
        swiper.autoplay.run();
      } // Return locks after resize


      swiper.allowSlidePrev = allowSlidePrev;
      swiper.allowSlideNext = allowSlideNext;

      if (swiper.params.watchOverflow && snapGrid !== swiper.snapGrid) {
        swiper.checkOverflow();
      }
    }

    function onClick(e) {
      var swiper = this;

      if (!swiper.allowClick) {
        if (swiper.params.preventClicks) {
          e.preventDefault();
        }

        if (swiper.params.preventClicksPropagation && swiper.animating) {
          e.stopPropagation();
          e.stopImmediatePropagation();
        }
      }
    }

    function onScroll() {
      var swiper = this;
      var wrapperEl = swiper.wrapperEl;
      swiper.previousTranslate = swiper.translate;
      swiper.translate = swiper.isHorizontal() ? -wrapperEl.scrollLeft : -wrapperEl.scrollTop; // eslint-disable-next-line

      if (swiper.translate === -0) {
        swiper.translate = 0;
      }

      swiper.updateActiveIndex();
      swiper.updateSlidesClasses();
      var newProgress;
      var translatesDiff = swiper.maxTranslate() - swiper.minTranslate();

      if (translatesDiff === 0) {
        newProgress = 0;
      } else {
        newProgress = (swiper.translate - swiper.minTranslate()) / translatesDiff;
      }

      if (newProgress !== swiper.progress) {
        swiper.updateProgress(swiper.translate);
      }

      swiper.emit('setTranslate', swiper.translate, false);
    }

    var dummyEventAttached = false;

    function dummyEventListener() {}

    function attachEvents() {
      var swiper = this;
      var params = swiper.params;
      var touchEvents = swiper.touchEvents;
      var el = swiper.el;
      var wrapperEl = swiper.wrapperEl;
      swiper.onTouchStart = onTouchStart.bind(swiper);
      swiper.onTouchMove = onTouchMove.bind(swiper);
      swiper.onTouchEnd = onTouchEnd.bind(swiper);

      if (params.cssMode) {
        swiper.onScroll = onScroll.bind(swiper);
      }

      swiper.onClick = onClick.bind(swiper);
      var capture = !!params.nested; // Touch Events

      if (!Support.touch && Support.pointerEvents) {
        el.addEventListener(touchEvents.start, swiper.onTouchStart, false);
        doc.addEventListener(touchEvents.move, swiper.onTouchMove, capture);
        doc.addEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (Support.touch) {
          var passiveListener = touchEvents.start === 'touchstart' && Support.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
          } : false;
          el.addEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          el.addEventListener(touchEvents.move, swiper.onTouchMove, Support.passiveListener ? {
            passive: false,
            capture: capture
          } : capture);
          el.addEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

          if (touchEvents.cancel) {
            el.addEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
          }

          if (!dummyEventAttached) {
            doc.addEventListener('touchstart', dummyEventListener);
            dummyEventAttached = true;
          }
        }

        if (params.simulateTouch && !Device.ios && !Device.android || params.simulateTouch && !Support.touch && Device.ios) {
          el.addEventListener('mousedown', swiper.onTouchStart, false);
          doc.addEventListener('mousemove', swiper.onTouchMove, capture);
          doc.addEventListener('mouseup', swiper.onTouchEnd, false);
        }
      } // Prevent Links Clicks


      if (params.preventClicks || params.preventClicksPropagation) {
        el.addEventListener('click', swiper.onClick, true);
      }

      if (params.cssMode) {
        wrapperEl.addEventListener('scroll', swiper.onScroll);
      } // Resize handler


      if (params.updateOnWindowResize) {
        swiper.on(Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize, true);
      } else {
        swiper.on('observerUpdate', onResize, true);
      }
    }

    function detachEvents() {
      var swiper = this;
      var params = swiper.params;
      var touchEvents = swiper.touchEvents;
      var el = swiper.el;
      var wrapperEl = swiper.wrapperEl;
      var capture = !!params.nested; // Touch Events

      if (!Support.touch && Support.pointerEvents) {
        el.removeEventListener(touchEvents.start, swiper.onTouchStart, false);
        doc.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
        doc.removeEventListener(touchEvents.end, swiper.onTouchEnd, false);
      } else {
        if (Support.touch) {
          var passiveListener = touchEvents.start === 'onTouchStart' && Support.passiveListener && params.passiveListeners ? {
            passive: true,
            capture: false
          } : false;
          el.removeEventListener(touchEvents.start, swiper.onTouchStart, passiveListener);
          el.removeEventListener(touchEvents.move, swiper.onTouchMove, capture);
          el.removeEventListener(touchEvents.end, swiper.onTouchEnd, passiveListener);

          if (touchEvents.cancel) {
            el.removeEventListener(touchEvents.cancel, swiper.onTouchEnd, passiveListener);
          }
        }

        if (params.simulateTouch && !Device.ios && !Device.android || params.simulateTouch && !Support.touch && Device.ios) {
          el.removeEventListener('mousedown', swiper.onTouchStart, false);
          doc.removeEventListener('mousemove', swiper.onTouchMove, capture);
          doc.removeEventListener('mouseup', swiper.onTouchEnd, false);
        }
      } // Prevent Links Clicks


      if (params.preventClicks || params.preventClicksPropagation) {
        el.removeEventListener('click', swiper.onClick, true);
      }

      if (params.cssMode) {
        wrapperEl.removeEventListener('scroll', swiper.onScroll);
      } // Resize handler


      swiper.off(Device.ios || Device.android ? 'resize orientationchange observerUpdate' : 'resize observerUpdate', onResize);
    }

    var events = {
      attachEvents: attachEvents,
      detachEvents: detachEvents
    };

    function setBreakpoint() {
      var swiper = this;
      var activeIndex = swiper.activeIndex;
      var initialized = swiper.initialized;
      var loopedSlides = swiper.loopedSlides;
      if (loopedSlides === void 0) loopedSlides = 0;
      var params = swiper.params;
      var $el = swiper.$el;
      var breakpoints = params.breakpoints;

      if (!breakpoints || breakpoints && Object.keys(breakpoints).length === 0) {
        return;
      } // Get breakpoint for window width and update parameters


      var breakpoint = swiper.getBreakpoint(breakpoints);

      if (breakpoint && swiper.currentBreakpoint !== breakpoint) {
        var breakpointOnlyParams = breakpoint in breakpoints ? breakpoints[breakpoint] : undefined;

        if (breakpointOnlyParams) {
          ['slidesPerView', 'spaceBetween', 'slidesPerGroup', 'slidesPerGroupSkip', 'slidesPerColumn'].forEach(function (param) {
            var paramValue = breakpointOnlyParams[param];

            if (typeof paramValue === 'undefined') {
              return;
            }

            if (param === 'slidesPerView' && (paramValue === 'AUTO' || paramValue === 'auto')) {
              breakpointOnlyParams[param] = 'auto';
            } else if (param === 'slidesPerView') {
              breakpointOnlyParams[param] = parseFloat(paramValue);
            } else {
              breakpointOnlyParams[param] = parseInt(paramValue, 10);
            }
          });
        }

        var breakpointParams = breakpointOnlyParams || swiper.originalParams;
        var wasMultiRow = params.slidesPerColumn > 1;
        var isMultiRow = breakpointParams.slidesPerColumn > 1;

        if (wasMultiRow && !isMultiRow) {
          $el.removeClass(params.containerModifierClass + "multirow " + params.containerModifierClass + "multirow-column");
        } else if (!wasMultiRow && isMultiRow) {
          $el.addClass(params.containerModifierClass + "multirow");

          if (breakpointParams.slidesPerColumnFill === 'column') {
            $el.addClass(params.containerModifierClass + "multirow-column");
          }
        }

        var directionChanged = breakpointParams.direction && breakpointParams.direction !== params.direction;
        var needsReLoop = params.loop && (breakpointParams.slidesPerView !== params.slidesPerView || directionChanged);

        if (directionChanged && initialized) {
          swiper.changeDirection();
        }

        Utils.extend(swiper.params, breakpointParams);
        Utils.extend(swiper, {
          allowTouchMove: swiper.params.allowTouchMove,
          allowSlideNext: swiper.params.allowSlideNext,
          allowSlidePrev: swiper.params.allowSlidePrev
        });
        swiper.currentBreakpoint = breakpoint;

        if (needsReLoop && initialized) {
          swiper.loopDestroy();
          swiper.loopCreate();
          swiper.updateSlides();
          swiper.slideTo(activeIndex - loopedSlides + swiper.loopedSlides, 0, false);
        }

        swiper.emit('breakpoint', breakpointParams);
      }
    }

    function getBreakpoint(breakpoints) {
      // Get breakpoint for window width
      if (!breakpoints) {
        return undefined;
      }

      var breakpoint = false;
      var points = Object.keys(breakpoints).map(function (point) {
        if (typeof point === 'string' && point.indexOf('@') === 0) {
          var minRatio = parseFloat(point.substr(1));
          var value = win.innerHeight * minRatio;
          return {
            value: value,
            point: point
          };
        }

        return {
          value: point,
          point: point
        };
      });
      points.sort(function (a, b) {
        return parseInt(a.value, 10) - parseInt(b.value, 10);
      });

      for (var i = 0; i < points.length; i += 1) {
        var ref = points[i];
        var point = ref.point;
        var value = ref.value;

        if (value <= win.innerWidth) {
          breakpoint = point;
        }
      }

      return breakpoint || 'max';
    }

    var breakpoints = {
      setBreakpoint: setBreakpoint,
      getBreakpoint: getBreakpoint
    };

    function addClasses() {
      var swiper = this;
      var classNames = swiper.classNames;
      var params = swiper.params;
      var rtl = swiper.rtl;
      var $el = swiper.$el;
      var suffixes = [];
      suffixes.push('initialized');
      suffixes.push(params.direction);

      if (params.freeMode) {
        suffixes.push('free-mode');
      }

      if (params.autoHeight) {
        suffixes.push('autoheight');
      }

      if (rtl) {
        suffixes.push('rtl');
      }

      if (params.slidesPerColumn > 1) {
        suffixes.push('multirow');

        if (params.slidesPerColumnFill === 'column') {
          suffixes.push('multirow-column');
        }
      }

      if (Device.android) {
        suffixes.push('android');
      }

      if (Device.ios) {
        suffixes.push('ios');
      }

      if (params.cssMode) {
        suffixes.push('css-mode');
      }

      suffixes.forEach(function (suffix) {
        classNames.push(params.containerModifierClass + suffix);
      });
      $el.addClass(classNames.join(' '));
    }

    function removeClasses() {
      var swiper = this;
      var $el = swiper.$el;
      var classNames = swiper.classNames;
      $el.removeClass(classNames.join(' '));
    }

    var classes = {
      addClasses: addClasses,
      removeClasses: removeClasses
    };

    function loadImage(imageEl, src, srcset, sizes, checkForComplete, callback) {
      var image;

      function onReady() {
        if (callback) {
          callback();
        }
      }

      if (!imageEl.complete || !checkForComplete) {
        if (src) {
          image = new win.Image();
          image.onload = onReady;
          image.onerror = onReady;

          if (sizes) {
            image.sizes = sizes;
          }

          if (srcset) {
            image.srcset = srcset;
          }

          if (src) {
            image.src = src;
          }
        } else {
          onReady();
        }
      } else {
        // image already loaded...
        onReady();
      }
    }

    function preloadImages() {
      var swiper = this;
      swiper.imagesToLoad = swiper.$el.find('img');

      function onReady() {
        if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper.destroyed) {
          return;
        }

        if (swiper.imagesLoaded !== undefined) {
          swiper.imagesLoaded += 1;
        }

        if (swiper.imagesLoaded === swiper.imagesToLoad.length) {
          if (swiper.params.updateOnImagesReady) {
            swiper.update();
          }

          swiper.emit('imagesReady');
        }
      }

      for (var i = 0; i < swiper.imagesToLoad.length; i += 1) {
        var imageEl = swiper.imagesToLoad[i];
        swiper.loadImage(imageEl, imageEl.currentSrc || imageEl.getAttribute('src'), imageEl.srcset || imageEl.getAttribute('srcset'), imageEl.sizes || imageEl.getAttribute('sizes'), true, onReady);
      }
    }

    var images = {
      loadImage: loadImage,
      preloadImages: preloadImages
    };

    function checkOverflow() {
      var swiper = this;
      var params = swiper.params;
      var wasLocked = swiper.isLocked;
      var lastSlidePosition = swiper.slides.length > 0 && params.slidesOffsetBefore + params.spaceBetween * (swiper.slides.length - 1) + swiper.slides[0].offsetWidth * swiper.slides.length;

      if (params.slidesOffsetBefore && params.slidesOffsetAfter && lastSlidePosition) {
        swiper.isLocked = lastSlidePosition <= swiper.size;
      } else {
        swiper.isLocked = swiper.snapGrid.length === 1;
      }

      swiper.allowSlideNext = !swiper.isLocked;
      swiper.allowSlidePrev = !swiper.isLocked; // events

      if (wasLocked !== swiper.isLocked) {
        swiper.emit(swiper.isLocked ? 'lock' : 'unlock');
      }

      if (wasLocked && wasLocked !== swiper.isLocked) {
        swiper.isEnd = false;
        swiper.navigation.update();
      }
    }

    var checkOverflow$1 = {
      checkOverflow: checkOverflow
    };
    var defaults = {
      init: true,
      direction: 'horizontal',
      touchEventsTarget: 'container',
      initialSlide: 0,
      speed: 300,
      cssMode: false,
      updateOnWindowResize: true,
      //
      preventInteractionOnTransition: false,
      // To support iOS's swipe-to-go-back gesture (when being used in-app, with UIWebView).
      edgeSwipeDetection: false,
      edgeSwipeThreshold: 20,
      // Free mode
      freeMode: false,
      freeModeMomentum: true,
      freeModeMomentumRatio: 1,
      freeModeMomentumBounce: true,
      freeModeMomentumBounceRatio: 1,
      freeModeMomentumVelocityRatio: 1,
      freeModeSticky: false,
      freeModeMinimumVelocity: 0.02,
      // Autoheight
      autoHeight: false,
      // Set wrapper width
      setWrapperSize: false,
      // Virtual Translate
      virtualTranslate: false,
      // Effects
      effect: 'slide',
      // 'slide' or 'fade' or 'cube' or 'coverflow' or 'flip'
      // Breakpoints
      breakpoints: undefined,
      // Slides grid
      spaceBetween: 0,
      slidesPerView: 1,
      slidesPerColumn: 1,
      slidesPerColumnFill: 'column',
      slidesPerGroup: 1,
      slidesPerGroupSkip: 0,
      centeredSlides: false,
      centeredSlidesBounds: false,
      slidesOffsetBefore: 0,
      // in px
      slidesOffsetAfter: 0,
      // in px
      normalizeSlideIndex: true,
      centerInsufficientSlides: false,
      // Disable swiper and hide navigation when container not overflow
      watchOverflow: false,
      // Round length
      roundLengths: false,
      // Touches
      touchRatio: 1,
      touchAngle: 45,
      simulateTouch: true,
      shortSwipes: true,
      longSwipes: true,
      longSwipesRatio: 0.5,
      longSwipesMs: 300,
      followFinger: true,
      allowTouchMove: true,
      threshold: 0,
      touchMoveStopPropagation: false,
      touchStartPreventDefault: true,
      touchStartForcePreventDefault: false,
      touchReleaseOnEdges: false,
      // Unique Navigation Elements
      uniqueNavElements: true,
      // Resistance
      resistance: true,
      resistanceRatio: 0.85,
      // Progress
      watchSlidesProgress: false,
      watchSlidesVisibility: false,
      // Cursor
      grabCursor: false,
      // Clicks
      preventClicks: true,
      preventClicksPropagation: true,
      slideToClickedSlide: false,
      // Images
      preloadImages: true,
      updateOnImagesReady: true,
      // loop
      loop: false,
      loopAdditionalSlides: 0,
      loopedSlides: null,
      loopFillGroupWithBlank: false,
      // Swiping/no swiping
      allowSlidePrev: true,
      allowSlideNext: true,
      swipeHandler: null,
      // '.swipe-handler',
      noSwiping: true,
      noSwipingClass: 'swiper-no-swiping',
      noSwipingSelector: null,
      // Passive Listeners
      passiveListeners: true,
      // NS
      containerModifierClass: 'swiper-container-',
      // NEW
      slideClass: 'swiper-slide',
      slideBlankClass: 'swiper-slide-invisible-blank',
      slideActiveClass: 'swiper-slide-active',
      slideDuplicateActiveClass: 'swiper-slide-duplicate-active',
      slideVisibleClass: 'swiper-slide-visible',
      slideDuplicateClass: 'swiper-slide-duplicate',
      slideNextClass: 'swiper-slide-next',
      slideDuplicateNextClass: 'swiper-slide-duplicate-next',
      slidePrevClass: 'swiper-slide-prev',
      slideDuplicatePrevClass: 'swiper-slide-duplicate-prev',
      wrapperClass: 'swiper-wrapper',
      // Callbacks
      runCallbacksOnInit: true
    };
    /* eslint no-param-reassign: "off" */

    var prototypes = {
      update: update,
      translate: translate,
      transition: transition$1,
      slide: slide,
      loop: loop,
      grabCursor: grabCursor,
      manipulation: manipulation,
      events: events,
      breakpoints: breakpoints,
      checkOverflow: checkOverflow$1,
      classes: classes,
      images: images
    };
    var extendedDefaults = {};

    var Swiper = /*@__PURE__*/function (SwiperClass) {
      function Swiper() {
        var assign;
        var args = [],
            len = arguments.length;

        while (len--) {
          args[len] = arguments[len];
        }

        var el;
        var params;

        if (args.length === 1 && args[0].constructor && args[0].constructor === Object) {
          params = args[0];
        } else {
          assign = args, el = assign[0], params = assign[1];
        }

        if (!params) {
          params = {};
        }

        params = Utils.extend({}, params);

        if (el && !params.el) {
          params.el = el;
        }

        SwiperClass.call(this, params);
        Object.keys(prototypes).forEach(function (prototypeGroup) {
          Object.keys(prototypes[prototypeGroup]).forEach(function (protoMethod) {
            if (!Swiper.prototype[protoMethod]) {
              Swiper.prototype[protoMethod] = prototypes[prototypeGroup][protoMethod];
            }
          });
        }); // Swiper Instance

        var swiper = this;

        if (typeof swiper.modules === 'undefined') {
          swiper.modules = {};
        }

        Object.keys(swiper.modules).forEach(function (moduleName) {
          var module = swiper.modules[moduleName];

          if (module.params) {
            var moduleParamName = Object.keys(module.params)[0];
            var moduleParams = module.params[moduleParamName];

            if (_typeof(moduleParams) !== 'object' || moduleParams === null) {
              return;
            }

            if (!(moduleParamName in params && 'enabled' in moduleParams)) {
              return;
            }

            if (params[moduleParamName] === true) {
              params[moduleParamName] = {
                enabled: true
              };
            }

            if (_typeof(params[moduleParamName]) === 'object' && !('enabled' in params[moduleParamName])) {
              params[moduleParamName].enabled = true;
            }

            if (!params[moduleParamName]) {
              params[moduleParamName] = {
                enabled: false
              };
            }
          }
        }); // Extend defaults with modules params

        var swiperParams = Utils.extend({}, defaults);
        swiper.useModulesParams(swiperParams); // Extend defaults with passed params

        swiper.params = Utils.extend({}, swiperParams, extendedDefaults, params);
        swiper.originalParams = Utils.extend({}, swiper.params);
        swiper.passedParams = Utils.extend({}, params); // Save Dom lib

        swiper.$ = $; // Find el

        var $el = $(swiper.params.el);
        el = $el[0];

        if (!el) {
          return undefined;
        }

        if ($el.length > 1) {
          var swipers = [];
          $el.each(function (index, containerEl) {
            var newParams = Utils.extend({}, params, {
              el: containerEl
            });
            swipers.push(new Swiper(newParams));
          });
          return swipers;
        }

        el.swiper = swiper;
        $el.data('swiper', swiper); // Find Wrapper

        var $wrapperEl;

        if (el && el.shadowRoot && el.shadowRoot.querySelector) {
          $wrapperEl = $(el.shadowRoot.querySelector("." + swiper.params.wrapperClass)); // Children needs to return slot items

          $wrapperEl.children = function (options) {
            return $el.children(options);
          };
        } else {
          $wrapperEl = $el.children("." + swiper.params.wrapperClass);
        } // Extend Swiper


        Utils.extend(swiper, {
          $el: $el,
          el: el,
          $wrapperEl: $wrapperEl,
          wrapperEl: $wrapperEl[0],
          // Classes
          classNames: [],
          // Slides
          slides: $(),
          slidesGrid: [],
          snapGrid: [],
          slidesSizesGrid: [],
          // isDirection
          isHorizontal: function isHorizontal() {
            return swiper.params.direction === 'horizontal';
          },
          isVertical: function isVertical() {
            return swiper.params.direction === 'vertical';
          },
          // RTL
          rtl: el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl',
          rtlTranslate: swiper.params.direction === 'horizontal' && (el.dir.toLowerCase() === 'rtl' || $el.css('direction') === 'rtl'),
          wrongRTL: $wrapperEl.css('display') === '-webkit-box',
          // Indexes
          activeIndex: 0,
          realIndex: 0,
          //
          isBeginning: true,
          isEnd: false,
          // Props
          translate: 0,
          previousTranslate: 0,
          progress: 0,
          velocity: 0,
          animating: false,
          // Locks
          allowSlideNext: swiper.params.allowSlideNext,
          allowSlidePrev: swiper.params.allowSlidePrev,
          // Touch Events
          touchEvents: function touchEvents() {
            var touch = ['touchstart', 'touchmove', 'touchend', 'touchcancel'];
            var desktop = ['mousedown', 'mousemove', 'mouseup'];

            if (Support.pointerEvents) {
              desktop = ['pointerdown', 'pointermove', 'pointerup'];
            }

            swiper.touchEventsTouch = {
              start: touch[0],
              move: touch[1],
              end: touch[2],
              cancel: touch[3]
            };
            swiper.touchEventsDesktop = {
              start: desktop[0],
              move: desktop[1],
              end: desktop[2]
            };
            return Support.touch || !swiper.params.simulateTouch ? swiper.touchEventsTouch : swiper.touchEventsDesktop;
          }(),
          touchEventsData: {
            isTouched: undefined,
            isMoved: undefined,
            allowTouchCallbacks: undefined,
            touchStartTime: undefined,
            isScrolling: undefined,
            currentTranslate: undefined,
            startTranslate: undefined,
            allowThresholdMove: undefined,
            // Form elements to match
            formElements: 'input, select, option, textarea, button, video, label',
            // Last click time
            lastClickTime: Utils.now(),
            clickTimeout: undefined,
            // Velocities
            velocities: [],
            allowMomentumBounce: undefined,
            isTouchEvent: undefined,
            startMoving: undefined
          },
          // Clicks
          allowClick: true,
          // Touches
          allowTouchMove: swiper.params.allowTouchMove,
          touches: {
            startX: 0,
            startY: 0,
            currentX: 0,
            currentY: 0,
            diff: 0
          },
          // Images
          imagesToLoad: [],
          imagesLoaded: 0
        }); // Install Modules

        swiper.useModules(); // Init

        if (swiper.params.init) {
          swiper.init();
        } // Return app instance


        return swiper;
      }

      if (SwiperClass) Swiper.__proto__ = SwiperClass;
      Swiper.prototype = Object.create(SwiperClass && SwiperClass.prototype);
      Swiper.prototype.constructor = Swiper;
      var staticAccessors = {
        extendedDefaults: {
          configurable: true
        },
        defaults: {
          configurable: true
        },
        Class: {
          configurable: true
        },
        $: {
          configurable: true
        }
      };

      Swiper.prototype.slidesPerViewDynamic = function slidesPerViewDynamic() {
        var swiper = this;
        var params = swiper.params;
        var slides = swiper.slides;
        var slidesGrid = swiper.slidesGrid;
        var swiperSize = swiper.size;
        var activeIndex = swiper.activeIndex;
        var spv = 1;

        if (params.centeredSlides) {
          var slideSize = slides[activeIndex].swiperSlideSize;
          var breakLoop;

          for (var i = activeIndex + 1; i < slides.length; i += 1) {
            if (slides[i] && !breakLoop) {
              slideSize += slides[i].swiperSlideSize;
              spv += 1;

              if (slideSize > swiperSize) {
                breakLoop = true;
              }
            }
          }

          for (var i$1 = activeIndex - 1; i$1 >= 0; i$1 -= 1) {
            if (slides[i$1] && !breakLoop) {
              slideSize += slides[i$1].swiperSlideSize;
              spv += 1;

              if (slideSize > swiperSize) {
                breakLoop = true;
              }
            }
          }
        } else {
          for (var i$2 = activeIndex + 1; i$2 < slides.length; i$2 += 1) {
            if (slidesGrid[i$2] - slidesGrid[activeIndex] < swiperSize) {
              spv += 1;
            }
          }
        }

        return spv;
      };

      Swiper.prototype.update = function update() {
        var swiper = this;

        if (!swiper || swiper.destroyed) {
          return;
        }

        var snapGrid = swiper.snapGrid;
        var params = swiper.params; // Breakpoints

        if (params.breakpoints) {
          swiper.setBreakpoint();
        }

        swiper.updateSize();
        swiper.updateSlides();
        swiper.updateProgress();
        swiper.updateSlidesClasses();

        function setTranslate() {
          var translateValue = swiper.rtlTranslate ? swiper.translate * -1 : swiper.translate;
          var newTranslate = Math.min(Math.max(translateValue, swiper.maxTranslate()), swiper.minTranslate());
          swiper.setTranslate(newTranslate);
          swiper.updateActiveIndex();
          swiper.updateSlidesClasses();
        }

        var translated;

        if (swiper.params.freeMode) {
          setTranslate();

          if (swiper.params.autoHeight) {
            swiper.updateAutoHeight();
          }
        } else {
          if ((swiper.params.slidesPerView === 'auto' || swiper.params.slidesPerView > 1) && swiper.isEnd && !swiper.params.centeredSlides) {
            translated = swiper.slideTo(swiper.slides.length - 1, 0, false, true);
          } else {
            translated = swiper.slideTo(swiper.activeIndex, 0, false, true);
          }

          if (!translated) {
            setTranslate();
          }
        }

        if (params.watchOverflow && snapGrid !== swiper.snapGrid) {
          swiper.checkOverflow();
        }

        swiper.emit('update');
      };

      Swiper.prototype.changeDirection = function changeDirection(newDirection, needUpdate) {
        if (needUpdate === void 0) needUpdate = true;
        var swiper = this;
        var currentDirection = swiper.params.direction;

        if (!newDirection) {
          // eslint-disable-next-line
          newDirection = currentDirection === 'horizontal' ? 'vertical' : 'horizontal';
        }

        if (newDirection === currentDirection || newDirection !== 'horizontal' && newDirection !== 'vertical') {
          return swiper;
        }

        swiper.$el.removeClass("" + swiper.params.containerModifierClass + currentDirection).addClass("" + swiper.params.containerModifierClass + newDirection);
        swiper.params.direction = newDirection;
        swiper.slides.each(function (slideIndex, slideEl) {
          if (newDirection === 'vertical') {
            slideEl.style.width = '';
          } else {
            slideEl.style.height = '';
          }
        });
        swiper.emit('changeDirection');

        if (needUpdate) {
          swiper.update();
        }

        return swiper;
      };

      Swiper.prototype.init = function init() {
        var swiper = this;

        if (swiper.initialized) {
          return;
        }

        swiper.emit('beforeInit'); // Set breakpoint

        if (swiper.params.breakpoints) {
          swiper.setBreakpoint();
        } // Add Classes


        swiper.addClasses(); // Create loop

        if (swiper.params.loop) {
          swiper.loopCreate();
        } // Update size


        swiper.updateSize(); // Update slides

        swiper.updateSlides();

        if (swiper.params.watchOverflow) {
          swiper.checkOverflow();
        } // Set Grab Cursor


        if (swiper.params.grabCursor) {
          swiper.setGrabCursor();
        }

        if (swiper.params.preloadImages) {
          swiper.preloadImages();
        } // Slide To Initial Slide


        if (swiper.params.loop) {
          swiper.slideTo(swiper.params.initialSlide + swiper.loopedSlides, 0, swiper.params.runCallbacksOnInit);
        } else {
          swiper.slideTo(swiper.params.initialSlide, 0, swiper.params.runCallbacksOnInit);
        } // Attach events


        swiper.attachEvents(); // Init Flag

        swiper.initialized = true; // Emit

        swiper.emit('init');
      };

      Swiper.prototype.destroy = function destroy(deleteInstance, cleanStyles) {
        if (deleteInstance === void 0) deleteInstance = true;
        if (cleanStyles === void 0) cleanStyles = true;
        var swiper = this;
        var params = swiper.params;
        var $el = swiper.$el;
        var $wrapperEl = swiper.$wrapperEl;
        var slides = swiper.slides;

        if (typeof swiper.params === 'undefined' || swiper.destroyed) {
          return null;
        }

        swiper.emit('beforeDestroy'); // Init Flag

        swiper.initialized = false; // Detach events

        swiper.detachEvents(); // Destroy loop

        if (params.loop) {
          swiper.loopDestroy();
        } // Cleanup styles


        if (cleanStyles) {
          swiper.removeClasses();
          $el.removeAttr('style');
          $wrapperEl.removeAttr('style');

          if (slides && slides.length) {
            slides.removeClass([params.slideVisibleClass, params.slideActiveClass, params.slideNextClass, params.slidePrevClass].join(' ')).removeAttr('style').removeAttr('data-swiper-slide-index');
          }
        }

        swiper.emit('destroy'); // Detach emitter events

        Object.keys(swiper.eventsListeners).forEach(function (eventName) {
          swiper.off(eventName);
        });

        if (deleteInstance !== false) {
          swiper.$el[0].swiper = null;
          swiper.$el.data('swiper', null);
          Utils.deleteProps(swiper);
        }

        swiper.destroyed = true;
        return null;
      };

      Swiper.extendDefaults = function extendDefaults(newDefaults) {
        Utils.extend(extendedDefaults, newDefaults);
      };

      staticAccessors.extendedDefaults.get = function () {
        return extendedDefaults;
      };

      staticAccessors.defaults.get = function () {
        return defaults;
      };

      staticAccessors.Class.get = function () {
        return SwiperClass;
      };

      staticAccessors.$.get = function () {
        return $;
      };

      Object.defineProperties(Swiper, staticAccessors);
      return Swiper;
    }(SwiperClass);

    var Device$1 = {
      name: 'device',
      proto: {
        device: Device
      },
      static: {
        device: Device
      }
    };
    var Support$1 = {
      name: 'support',
      proto: {
        support: Support
      },
      static: {
        support: Support
      }
    };

    var Browser = function Browser() {
      function isSafari() {
        var ua = win.navigator.userAgent.toLowerCase();
        return ua.indexOf('safari') >= 0 && ua.indexOf('chrome') < 0 && ua.indexOf('android') < 0;
      }

      return {
        isEdge: !!win.navigator.userAgent.match(/Edge/g),
        isSafari: isSafari(),
        isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(win.navigator.userAgent)
      };
    }();

    var Browser$1 = {
      name: 'browser',
      proto: {
        browser: Browser
      },
      static: {
        browser: Browser
      }
    };
    var Resize = {
      name: 'resize',
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          resize: {
            resizeHandler: function resizeHandler() {
              if (!swiper || swiper.destroyed || !swiper.initialized) {
                return;
              }

              swiper.emit('beforeResize');
              swiper.emit('resize');
            },
            orientationChangeHandler: function orientationChangeHandler() {
              if (!swiper || swiper.destroyed || !swiper.initialized) {
                return;
              }

              swiper.emit('orientationchange');
            }
          }
        });
      },
      on: {
        init: function init() {
          var swiper = this; // Emit resize

          win.addEventListener('resize', swiper.resize.resizeHandler); // Emit orientationchange

          win.addEventListener('orientationchange', swiper.resize.orientationChangeHandler);
        },
        destroy: function destroy() {
          var swiper = this;
          win.removeEventListener('resize', swiper.resize.resizeHandler);
          win.removeEventListener('orientationchange', swiper.resize.orientationChangeHandler);
        }
      }
    };
    var Observer = {
      func: win.MutationObserver || win.WebkitMutationObserver,
      attach: function attach(target, options) {
        if (options === void 0) options = {};
        var swiper = this;
        var ObserverFunc = Observer.func;
        var observer = new ObserverFunc(function (mutations) {
          // The observerUpdate event should only be triggered
          // once despite the number of mutations.  Additional
          // triggers are redundant and are very costly
          if (mutations.length === 1) {
            swiper.emit('observerUpdate', mutations[0]);
            return;
          }

          var observerUpdate = function observerUpdate() {
            swiper.emit('observerUpdate', mutations[0]);
          };

          if (win.requestAnimationFrame) {
            win.requestAnimationFrame(observerUpdate);
          } else {
            win.setTimeout(observerUpdate, 0);
          }
        });
        observer.observe(target, {
          attributes: typeof options.attributes === 'undefined' ? true : options.attributes,
          childList: typeof options.childList === 'undefined' ? true : options.childList,
          characterData: typeof options.characterData === 'undefined' ? true : options.characterData
        });
        swiper.observer.observers.push(observer);
      },
      init: function init() {
        var swiper = this;

        if (!Support.observer || !swiper.params.observer) {
          return;
        }

        if (swiper.params.observeParents) {
          var containerParents = swiper.$el.parents();

          for (var i = 0; i < containerParents.length; i += 1) {
            swiper.observer.attach(containerParents[i]);
          }
        } // Observe container


        swiper.observer.attach(swiper.$el[0], {
          childList: swiper.params.observeSlideChildren
        }); // Observe wrapper

        swiper.observer.attach(swiper.$wrapperEl[0], {
          attributes: false
        });
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.observer.observers.forEach(function (observer) {
          observer.disconnect();
        });
        swiper.observer.observers = [];
      }
    };
    var Observer$1 = {
      name: 'observer',
      params: {
        observer: false,
        observeParents: false,
        observeSlideChildren: false
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          observer: {
            init: Observer.init.bind(swiper),
            attach: Observer.attach.bind(swiper),
            destroy: Observer.destroy.bind(swiper),
            observers: []
          }
        });
      },
      on: {
        init: function init() {
          var swiper = this;
          swiper.observer.init();
        },
        destroy: function destroy() {
          var swiper = this;
          swiper.observer.destroy();
        }
      }
    };
    var Virtual = {
      update: function update(force) {
        var swiper = this;
        var ref = swiper.params;
        var slidesPerView = ref.slidesPerView;
        var slidesPerGroup = ref.slidesPerGroup;
        var centeredSlides = ref.centeredSlides;
        var ref$1 = swiper.params.virtual;
        var addSlidesBefore = ref$1.addSlidesBefore;
        var addSlidesAfter = ref$1.addSlidesAfter;
        var ref$2 = swiper.virtual;
        var previousFrom = ref$2.from;
        var previousTo = ref$2.to;
        var slides = ref$2.slides;
        var previousSlidesGrid = ref$2.slidesGrid;
        var renderSlide = ref$2.renderSlide;
        var previousOffset = ref$2.offset;
        swiper.updateActiveIndex();
        var activeIndex = swiper.activeIndex || 0;
        var offsetProp;

        if (swiper.rtlTranslate) {
          offsetProp = 'right';
        } else {
          offsetProp = swiper.isHorizontal() ? 'left' : 'top';
        }

        var slidesAfter;
        var slidesBefore;

        if (centeredSlides) {
          slidesAfter = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesBefore;
          slidesBefore = Math.floor(slidesPerView / 2) + slidesPerGroup + addSlidesAfter;
        } else {
          slidesAfter = slidesPerView + (slidesPerGroup - 1) + addSlidesBefore;
          slidesBefore = slidesPerGroup + addSlidesAfter;
        }

        var from = Math.max((activeIndex || 0) - slidesBefore, 0);
        var to = Math.min((activeIndex || 0) + slidesAfter, slides.length - 1);
        var offset = (swiper.slidesGrid[from] || 0) - (swiper.slidesGrid[0] || 0);
        Utils.extend(swiper.virtual, {
          from: from,
          to: to,
          offset: offset,
          slidesGrid: swiper.slidesGrid
        });

        function onRendered() {
          swiper.updateSlides();
          swiper.updateProgress();
          swiper.updateSlidesClasses();

          if (swiper.lazy && swiper.params.lazy.enabled) {
            swiper.lazy.load();
          }
        }

        if (previousFrom === from && previousTo === to && !force) {
          if (swiper.slidesGrid !== previousSlidesGrid && offset !== previousOffset) {
            swiper.slides.css(offsetProp, offset + "px");
          }

          swiper.updateProgress();
          return;
        }

        if (swiper.params.virtual.renderExternal) {
          swiper.params.virtual.renderExternal.call(swiper, {
            offset: offset,
            from: from,
            to: to,
            slides: function getSlides() {
              var slidesToRender = [];

              for (var i = from; i <= to; i += 1) {
                slidesToRender.push(slides[i]);
              }

              return slidesToRender;
            }()
          });
          onRendered();
          return;
        }

        var prependIndexes = [];
        var appendIndexes = [];

        if (force) {
          swiper.$wrapperEl.find("." + swiper.params.slideClass).remove();
        } else {
          for (var i = previousFrom; i <= previousTo; i += 1) {
            if (i < from || i > to) {
              swiper.$wrapperEl.find("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + i + "\"]").remove();
            }
          }
        }

        for (var i$1 = 0; i$1 < slides.length; i$1 += 1) {
          if (i$1 >= from && i$1 <= to) {
            if (typeof previousTo === 'undefined' || force) {
              appendIndexes.push(i$1);
            } else {
              if (i$1 > previousTo) {
                appendIndexes.push(i$1);
              }

              if (i$1 < previousFrom) {
                prependIndexes.push(i$1);
              }
            }
          }
        }

        appendIndexes.forEach(function (index) {
          swiper.$wrapperEl.append(renderSlide(slides[index], index));
        });
        prependIndexes.sort(function (a, b) {
          return b - a;
        }).forEach(function (index) {
          swiper.$wrapperEl.prepend(renderSlide(slides[index], index));
        });
        swiper.$wrapperEl.children('.swiper-slide').css(offsetProp, offset + "px");
        onRendered();
      },
      renderSlide: function renderSlide(slide, index) {
        var swiper = this;
        var params = swiper.params.virtual;

        if (params.cache && swiper.virtual.cache[index]) {
          return swiper.virtual.cache[index];
        }

        var $slideEl = params.renderSlide ? $(params.renderSlide.call(swiper, slide, index)) : $("<div class=\"" + swiper.params.slideClass + "\" data-swiper-slide-index=\"" + index + "\">" + slide + "</div>");

        if (!$slideEl.attr('data-swiper-slide-index')) {
          $slideEl.attr('data-swiper-slide-index', index);
        }

        if (params.cache) {
          swiper.virtual.cache[index] = $slideEl;
        }

        return $slideEl;
      },
      appendSlide: function appendSlide(slides) {
        var swiper = this;

        if (_typeof(slides) === 'object' && 'length' in slides) {
          for (var i = 0; i < slides.length; i += 1) {
            if (slides[i]) {
              swiper.virtual.slides.push(slides[i]);
            }
          }
        } else {
          swiper.virtual.slides.push(slides);
        }

        swiper.virtual.update(true);
      },
      prependSlide: function prependSlide(slides) {
        var swiper = this;
        var activeIndex = swiper.activeIndex;
        var newActiveIndex = activeIndex + 1;
        var numberOfNewSlides = 1;

        if (Array.isArray(slides)) {
          for (var i = 0; i < slides.length; i += 1) {
            if (slides[i]) {
              swiper.virtual.slides.unshift(slides[i]);
            }
          }

          newActiveIndex = activeIndex + slides.length;
          numberOfNewSlides = slides.length;
        } else {
          swiper.virtual.slides.unshift(slides);
        }

        if (swiper.params.virtual.cache) {
          var cache = swiper.virtual.cache;
          var newCache = {};
          Object.keys(cache).forEach(function (cachedIndex) {
            var $cachedEl = cache[cachedIndex];
            var cachedElIndex = $cachedEl.attr('data-swiper-slide-index');

            if (cachedElIndex) {
              $cachedEl.attr('data-swiper-slide-index', parseInt(cachedElIndex, 10) + 1);
            }

            newCache[parseInt(cachedIndex, 10) + numberOfNewSlides] = $cachedEl;
          });
          swiper.virtual.cache = newCache;
        }

        swiper.virtual.update(true);
        swiper.slideTo(newActiveIndex, 0);
      },
      removeSlide: function removeSlide(slidesIndexes) {
        var swiper = this;

        if (typeof slidesIndexes === 'undefined' || slidesIndexes === null) {
          return;
        }

        var activeIndex = swiper.activeIndex;

        if (Array.isArray(slidesIndexes)) {
          for (var i = slidesIndexes.length - 1; i >= 0; i -= 1) {
            swiper.virtual.slides.splice(slidesIndexes[i], 1);

            if (swiper.params.virtual.cache) {
              delete swiper.virtual.cache[slidesIndexes[i]];
            }

            if (slidesIndexes[i] < activeIndex) {
              activeIndex -= 1;
            }

            activeIndex = Math.max(activeIndex, 0);
          }
        } else {
          swiper.virtual.slides.splice(slidesIndexes, 1);

          if (swiper.params.virtual.cache) {
            delete swiper.virtual.cache[slidesIndexes];
          }

          if (slidesIndexes < activeIndex) {
            activeIndex -= 1;
          }

          activeIndex = Math.max(activeIndex, 0);
        }

        swiper.virtual.update(true);
        swiper.slideTo(activeIndex, 0);
      },
      removeAllSlides: function removeAllSlides() {
        var swiper = this;
        swiper.virtual.slides = [];

        if (swiper.params.virtual.cache) {
          swiper.virtual.cache = {};
        }

        swiper.virtual.update(true);
        swiper.slideTo(0, 0);
      }
    };
    var Virtual$1 = {
      name: 'virtual',
      params: {
        virtual: {
          enabled: false,
          slides: [],
          cache: true,
          renderSlide: null,
          renderExternal: null,
          addSlidesBefore: 0,
          addSlidesAfter: 0
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          virtual: {
            update: Virtual.update.bind(swiper),
            appendSlide: Virtual.appendSlide.bind(swiper),
            prependSlide: Virtual.prependSlide.bind(swiper),
            removeSlide: Virtual.removeSlide.bind(swiper),
            removeAllSlides: Virtual.removeAllSlides.bind(swiper),
            renderSlide: Virtual.renderSlide.bind(swiper),
            slides: swiper.params.virtual.slides,
            cache: {}
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var swiper = this;

          if (!swiper.params.virtual.enabled) {
            return;
          }

          swiper.classNames.push(swiper.params.containerModifierClass + "virtual");
          var overwriteParams = {
            watchSlidesProgress: true
          };
          Utils.extend(swiper.params, overwriteParams);
          Utils.extend(swiper.originalParams, overwriteParams);

          if (!swiper.params.initialSlide) {
            swiper.virtual.update();
          }
        },
        setTranslate: function setTranslate() {
          var swiper = this;

          if (!swiper.params.virtual.enabled) {
            return;
          }

          swiper.virtual.update();
        }
      }
    };
    var Keyboard = {
      handle: function handle(event) {
        var swiper = this;
        var rtl = swiper.rtlTranslate;
        var e = event;

        if (e.originalEvent) {
          e = e.originalEvent;
        } // jquery fix


        var kc = e.keyCode || e.charCode; // Directions locks

        if (!swiper.allowSlideNext && (swiper.isHorizontal() && kc === 39 || swiper.isVertical() && kc === 40 || kc === 34)) {
          return false;
        }

        if (!swiper.allowSlidePrev && (swiper.isHorizontal() && kc === 37 || swiper.isVertical() && kc === 38 || kc === 33)) {
          return false;
        }

        if (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey) {
          return undefined;
        }

        if (doc.activeElement && doc.activeElement.nodeName && (doc.activeElement.nodeName.toLowerCase() === 'input' || doc.activeElement.nodeName.toLowerCase() === 'textarea')) {
          return undefined;
        }

        if (swiper.params.keyboard.onlyInViewport && (kc === 33 || kc === 34 || kc === 37 || kc === 39 || kc === 38 || kc === 40)) {
          var inView = false; // Check that swiper should be inside of visible area of window

          if (swiper.$el.parents("." + swiper.params.slideClass).length > 0 && swiper.$el.parents("." + swiper.params.slideActiveClass).length === 0) {
            return undefined;
          }

          var windowWidth = win.innerWidth;
          var windowHeight = win.innerHeight;
          var swiperOffset = swiper.$el.offset();

          if (rtl) {
            swiperOffset.left -= swiper.$el[0].scrollLeft;
          }

          var swiperCoord = [[swiperOffset.left, swiperOffset.top], [swiperOffset.left + swiper.width, swiperOffset.top], [swiperOffset.left, swiperOffset.top + swiper.height], [swiperOffset.left + swiper.width, swiperOffset.top + swiper.height]];

          for (var i = 0; i < swiperCoord.length; i += 1) {
            var point = swiperCoord[i];

            if (point[0] >= 0 && point[0] <= windowWidth && point[1] >= 0 && point[1] <= windowHeight) {
              inView = true;
            }
          }

          if (!inView) {
            return undefined;
          }
        }

        if (swiper.isHorizontal()) {
          if (kc === 33 || kc === 34 || kc === 37 || kc === 39) {
            if (e.preventDefault) {
              e.preventDefault();
            } else {
              e.returnValue = false;
            }
          }

          if ((kc === 34 || kc === 39) && !rtl || (kc === 33 || kc === 37) && rtl) {
            swiper.slideNext();
          }

          if ((kc === 33 || kc === 37) && !rtl || (kc === 34 || kc === 39) && rtl) {
            swiper.slidePrev();
          }
        } else {
          if (kc === 33 || kc === 34 || kc === 38 || kc === 40) {
            if (e.preventDefault) {
              e.preventDefault();
            } else {
              e.returnValue = false;
            }
          }

          if (kc === 34 || kc === 40) {
            swiper.slideNext();
          }

          if (kc === 33 || kc === 38) {
            swiper.slidePrev();
          }
        }

        swiper.emit('keyPress', kc);
        return undefined;
      },
      enable: function enable() {
        var swiper = this;

        if (swiper.keyboard.enabled) {
          return;
        }

        $(doc).on('keydown', swiper.keyboard.handle);
        swiper.keyboard.enabled = true;
      },
      disable: function disable() {
        var swiper = this;

        if (!swiper.keyboard.enabled) {
          return;
        }

        $(doc).off('keydown', swiper.keyboard.handle);
        swiper.keyboard.enabled = false;
      }
    };
    var Keyboard$1 = {
      name: 'keyboard',
      params: {
        keyboard: {
          enabled: false,
          onlyInViewport: true
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          keyboard: {
            enabled: false,
            enable: Keyboard.enable.bind(swiper),
            disable: Keyboard.disable.bind(swiper),
            handle: Keyboard.handle.bind(swiper)
          }
        });
      },
      on: {
        init: function init() {
          var swiper = this;

          if (swiper.params.keyboard.enabled) {
            swiper.keyboard.enable();
          }
        },
        destroy: function destroy() {
          var swiper = this;

          if (swiper.keyboard.enabled) {
            swiper.keyboard.disable();
          }
        }
      }
    };

    function isEventSupported() {
      var eventName = 'onwheel';
      var isSupported = (eventName in doc);

      if (!isSupported) {
        var element = doc.createElement('div');
        element.setAttribute(eventName, 'return;');
        isSupported = typeof element[eventName] === 'function';
      }

      if (!isSupported && doc.implementation && doc.implementation.hasFeature // always returns true in newer browsers as per the standard.
      // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
      && doc.implementation.hasFeature('', '') !== true) {
        // This is the only way to test support for the `wheel` event in IE9+.
        isSupported = doc.implementation.hasFeature('Events.wheel', '3.0');
      }

      return isSupported;
    }

    var Mousewheel = {
      lastScrollTime: Utils.now(),
      lastEventBeforeSnap: undefined,
      recentWheelEvents: [],
      event: function event() {
        if (win.navigator.userAgent.indexOf('firefox') > -1) {
          return 'DOMMouseScroll';
        }

        return isEventSupported() ? 'wheel' : 'mousewheel';
      },
      normalize: function normalize(e) {
        // Reasonable defaults
        var PIXEL_STEP = 10;
        var LINE_HEIGHT = 40;
        var PAGE_HEIGHT = 800;
        var sX = 0;
        var sY = 0; // spinX, spinY

        var pX = 0;
        var pY = 0; // pixelX, pixelY
        // Legacy

        if ('detail' in e) {
          sY = e.detail;
        }

        if ('wheelDelta' in e) {
          sY = -e.wheelDelta / 120;
        }

        if ('wheelDeltaY' in e) {
          sY = -e.wheelDeltaY / 120;
        }

        if ('wheelDeltaX' in e) {
          sX = -e.wheelDeltaX / 120;
        } // side scrolling on FF with DOMMouseScroll


        if ('axis' in e && e.axis === e.HORIZONTAL_AXIS) {
          sX = sY;
          sY = 0;
        }

        pX = sX * PIXEL_STEP;
        pY = sY * PIXEL_STEP;

        if ('deltaY' in e) {
          pY = e.deltaY;
        }

        if ('deltaX' in e) {
          pX = e.deltaX;
        }

        if (e.shiftKey && !pX) {
          // if user scrolls with shift he wants horizontal scroll
          pX = pY;
          pY = 0;
        }

        if ((pX || pY) && e.deltaMode) {
          if (e.deltaMode === 1) {
            // delta in LINE units
            pX *= LINE_HEIGHT;
            pY *= LINE_HEIGHT;
          } else {
            // delta in PAGE units
            pX *= PAGE_HEIGHT;
            pY *= PAGE_HEIGHT;
          }
        } // Fall-back if spin cannot be determined


        if (pX && !sX) {
          sX = pX < 1 ? -1 : 1;
        }

        if (pY && !sY) {
          sY = pY < 1 ? -1 : 1;
        }

        return {
          spinX: sX,
          spinY: sY,
          pixelX: pX,
          pixelY: pY
        };
      },
      handleMouseEnter: function handleMouseEnter() {
        var swiper = this;
        swiper.mouseEntered = true;
      },
      handleMouseLeave: function handleMouseLeave() {
        var swiper = this;
        swiper.mouseEntered = false;
      },
      handle: function handle(event) {
        var e = event;
        var swiper = this;
        var params = swiper.params.mousewheel;

        if (swiper.params.cssMode) {
          e.preventDefault();
        }

        var target = swiper.$el;

        if (swiper.params.mousewheel.eventsTarged !== 'container') {
          target = $(swiper.params.mousewheel.eventsTarged);
        }

        if (!swiper.mouseEntered && !target[0].contains(e.target) && !params.releaseOnEdges) {
          return true;
        }

        if (e.originalEvent) {
          e = e.originalEvent;
        } // jquery fix


        var delta = 0;
        var rtlFactor = swiper.rtlTranslate ? -1 : 1;
        var data = Mousewheel.normalize(e);

        if (params.forceToAxis) {
          if (swiper.isHorizontal()) {
            if (Math.abs(data.pixelX) > Math.abs(data.pixelY)) {
              delta = data.pixelX * rtlFactor;
            } else {
              return true;
            }
          } else if (Math.abs(data.pixelY) > Math.abs(data.pixelX)) {
            delta = data.pixelY;
          } else {
            return true;
          }
        } else {
          delta = Math.abs(data.pixelX) > Math.abs(data.pixelY) ? -data.pixelX * rtlFactor : -data.pixelY;
        }

        if (delta === 0) {
          return true;
        }

        if (params.invert) {
          delta = -delta;
        }

        if (!swiper.params.freeMode) {
          // Register the new event in a variable which stores the relevant data
          var newEvent = {
            time: Utils.now(),
            delta: Math.abs(delta),
            direction: Math.sign(delta),
            raw: event
          }; // Keep the most recent events

          var recentWheelEvents = swiper.mousewheel.recentWheelEvents;

          if (recentWheelEvents.length >= 2) {
            recentWheelEvents.shift(); // only store the last N events
          }

          var prevEvent = recentWheelEvents.length ? recentWheelEvents[recentWheelEvents.length - 1] : undefined;
          recentWheelEvents.push(newEvent); // If there is at least one previous recorded event:
          //   If direction has changed or
          //   if the scroll is quicker than the previous one:
          //     Animate the slider.
          // Else (this is the first time the wheel is moved):
          //     Animate the slider.

          if (prevEvent) {
            if (newEvent.direction !== prevEvent.direction || newEvent.delta > prevEvent.delta) {
              swiper.mousewheel.animateSlider(newEvent);
            }
          } else {
            swiper.mousewheel.animateSlider(newEvent);
          } // If it's time to release the scroll:
          //   Return now so you don't hit the preventDefault.


          if (swiper.mousewheel.releaseScroll(newEvent)) {
            return true;
          }
        } else {
          // Freemode or scrollContainer:
          // If we recently snapped after a momentum scroll, then ignore wheel events
          // to give time for the deceleration to finish. Stop ignoring after 500 msecs
          // or if it's a new scroll (larger delta or inverse sign as last event before
          // an end-of-momentum snap).
          var newEvent$1 = {
            time: Utils.now(),
            delta: Math.abs(delta),
            direction: Math.sign(delta)
          };
          var ref = swiper.mousewheel;
          var lastEventBeforeSnap = ref.lastEventBeforeSnap;
          var ignoreWheelEvents = lastEventBeforeSnap && newEvent$1.time < lastEventBeforeSnap.time + 500 && newEvent$1.delta <= lastEventBeforeSnap.delta && newEvent$1.direction === lastEventBeforeSnap.direction;

          if (!ignoreWheelEvents) {
            swiper.mousewheel.lastEventBeforeSnap = undefined;

            if (swiper.params.loop) {
              swiper.loopFix();
            }

            var position = swiper.getTranslate() + delta * params.sensitivity;
            var wasBeginning = swiper.isBeginning;
            var wasEnd = swiper.isEnd;

            if (position >= swiper.minTranslate()) {
              position = swiper.minTranslate();
            }

            if (position <= swiper.maxTranslate()) {
              position = swiper.maxTranslate();
            }

            swiper.setTransition(0);
            swiper.setTranslate(position);
            swiper.updateProgress();
            swiper.updateActiveIndex();
            swiper.updateSlidesClasses();

            if (!wasBeginning && swiper.isBeginning || !wasEnd && swiper.isEnd) {
              swiper.updateSlidesClasses();
            }

            if (swiper.params.freeModeSticky) {
              // When wheel scrolling starts with sticky (aka snap) enabled, then detect
              // the end of a momentum scroll by storing recent (N=15?) wheel events.
              // 1. do all N events have decreasing or same (absolute value) delta?
              // 2. did all N events arrive in the last M (M=500?) msecs?
              // 3. does the earliest event have an (absolute value) delta that's
              //    at least P (P=1?) larger than the most recent event's delta?
              // 4. does the latest event have a delta that's smaller than Q (Q=6?) pixels?
              // If 1-4 are "yes" then we're near the end of a momuntum scroll deceleration.
              // Snap immediately and ignore remaining wheel events in this scroll.
              // See comment above for "remaining wheel events in this scroll" determination.
              // If 1-4 aren't satisfied, then wait to snap until 500ms after the last event.
              clearTimeout(swiper.mousewheel.timeout);
              swiper.mousewheel.timeout = undefined;
              var recentWheelEvents$1 = swiper.mousewheel.recentWheelEvents;

              if (recentWheelEvents$1.length >= 15) {
                recentWheelEvents$1.shift(); // only store the last N events
              }

              var prevEvent$1 = recentWheelEvents$1.length ? recentWheelEvents$1[recentWheelEvents$1.length - 1] : undefined;
              var firstEvent = recentWheelEvents$1[0];
              recentWheelEvents$1.push(newEvent$1);

              if (prevEvent$1 && (newEvent$1.delta > prevEvent$1.delta || newEvent$1.direction !== prevEvent$1.direction)) {
                // Increasing or reverse-sign delta means the user started scrolling again. Clear the wheel event log.
                recentWheelEvents$1.splice(0);
              } else if (recentWheelEvents$1.length >= 15 && newEvent$1.time - firstEvent.time < 500 && firstEvent.delta - newEvent$1.delta >= 1 && newEvent$1.delta <= 6) {
                // We're at the end of the deceleration of a momentum scroll, so there's no need
                // to wait for more events. Snap ASAP on the next tick.
                // Also, because there's some remaining momentum we'll bias the snap in the
                // direction of the ongoing scroll because it's better UX for the scroll to snap
                // in the same direction as the scroll instead of reversing to snap.  Therefore,
                // if it's already scrolled more than 20% in the current direction, keep going.
                var snapToThreshold = delta > 0 ? 0.8 : 0.2;
                swiper.mousewheel.lastEventBeforeSnap = newEvent$1;
                recentWheelEvents$1.splice(0);
                swiper.mousewheel.timeout = Utils.nextTick(function () {
                  swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                }, 0); // no delay; move on next tick
              }

              if (!swiper.mousewheel.timeout) {
                // if we get here, then we haven't detected the end of a momentum scroll, so
                // we'll consider a scroll "complete" when there haven't been any wheel events
                // for 500ms.
                swiper.mousewheel.timeout = Utils.nextTick(function () {
                  var snapToThreshold = 0.5;
                  swiper.mousewheel.lastEventBeforeSnap = newEvent$1;
                  recentWheelEvents$1.splice(0);
                  swiper.slideToClosest(swiper.params.speed, true, undefined, snapToThreshold);
                }, 500);
              }
            } // Emit event


            if (!ignoreWheelEvents) {
              swiper.emit('scroll', e);
            } // Stop autoplay


            if (swiper.params.autoplay && swiper.params.autoplayDisableOnInteraction) {
              swiper.autoplay.stop();
            } // Return page scroll on edge positions


            if (position === swiper.minTranslate() || position === swiper.maxTranslate()) {
              return true;
            }
          }
        }

        if (e.preventDefault) {
          e.preventDefault();
        } else {
          e.returnValue = false;
        }

        return false;
      },
      animateSlider: function animateSlider(newEvent) {
        var swiper = this; // If the movement is NOT big enough and
        // if the last time the user scrolled was too close to the current one (avoid continuously triggering the slider):
        //   Don't go any further (avoid insignificant scroll movement).

        if (newEvent.delta >= 6 && Utils.now() - swiper.mousewheel.lastScrollTime < 60) {
          // Return false as a default
          return true;
        } // If user is scrolling towards the end:
        //   If the slider hasn't hit the latest slide or
        //   if the slider is a loop and
        //   if the slider isn't moving right now:
        //     Go to next slide and
        //     emit a scroll event.
        // Else (the user is scrolling towards the beginning) and
        // if the slider hasn't hit the first slide or
        // if the slider is a loop and
        // if the slider isn't moving right now:
        //   Go to prev slide and
        //   emit a scroll event.


        if (newEvent.direction < 0) {
          if ((!swiper.isEnd || swiper.params.loop) && !swiper.animating) {
            swiper.slideNext();
            swiper.emit('scroll', newEvent.raw);
          }
        } else if ((!swiper.isBeginning || swiper.params.loop) && !swiper.animating) {
          swiper.slidePrev();
          swiper.emit('scroll', newEvent.raw);
        } // If you got here is because an animation has been triggered so store the current time


        swiper.mousewheel.lastScrollTime = new win.Date().getTime(); // Return false as a default

        return false;
      },
      releaseScroll: function releaseScroll(newEvent) {
        var swiper = this;
        var params = swiper.params.mousewheel;

        if (newEvent.direction < 0) {
          if (swiper.isEnd && !swiper.params.loop && params.releaseOnEdges) {
            // Return true to animate scroll on edges
            return true;
          }
        } else if (swiper.isBeginning && !swiper.params.loop && params.releaseOnEdges) {
          // Return true to animate scroll on edges
          return true;
        }

        return false;
      },
      enable: function enable() {
        var swiper = this;
        var event = Mousewheel.event();

        if (swiper.params.cssMode) {
          swiper.wrapperEl.removeEventListener(event, swiper.mousewheel.handle);
          return true;
        }

        if (!event) {
          return false;
        }

        if (swiper.mousewheel.enabled) {
          return false;
        }

        var target = swiper.$el;

        if (swiper.params.mousewheel.eventsTarged !== 'container') {
          target = $(swiper.params.mousewheel.eventsTarged);
        }

        target.on('mouseenter', swiper.mousewheel.handleMouseEnter);
        target.on('mouseleave', swiper.mousewheel.handleMouseLeave);
        target.on(event, swiper.mousewheel.handle);
        swiper.mousewheel.enabled = true;
        return true;
      },
      disable: function disable() {
        var swiper = this;
        var event = Mousewheel.event();

        if (swiper.params.cssMode) {
          swiper.wrapperEl.addEventListener(event, swiper.mousewheel.handle);
          return true;
        }

        if (!event) {
          return false;
        }

        if (!swiper.mousewheel.enabled) {
          return false;
        }

        var target = swiper.$el;

        if (swiper.params.mousewheel.eventsTarged !== 'container') {
          target = $(swiper.params.mousewheel.eventsTarged);
        }

        target.off(event, swiper.mousewheel.handle);
        swiper.mousewheel.enabled = false;
        return true;
      }
    };
    var Mousewheel$1 = {
      name: 'mousewheel',
      params: {
        mousewheel: {
          enabled: false,
          releaseOnEdges: false,
          invert: false,
          forceToAxis: false,
          sensitivity: 1,
          eventsTarged: 'container'
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          mousewheel: {
            enabled: false,
            enable: Mousewheel.enable.bind(swiper),
            disable: Mousewheel.disable.bind(swiper),
            handle: Mousewheel.handle.bind(swiper),
            handleMouseEnter: Mousewheel.handleMouseEnter.bind(swiper),
            handleMouseLeave: Mousewheel.handleMouseLeave.bind(swiper),
            animateSlider: Mousewheel.animateSlider.bind(swiper),
            releaseScroll: Mousewheel.releaseScroll.bind(swiper),
            lastScrollTime: Utils.now(),
            lastEventBeforeSnap: undefined,
            recentWheelEvents: []
          }
        });
      },
      on: {
        init: function init() {
          var swiper = this;

          if (!swiper.params.mousewheel.enabled && swiper.params.cssMode) {
            swiper.mousewheel.disable();
          }

          if (swiper.params.mousewheel.enabled) {
            swiper.mousewheel.enable();
          }
        },
        destroy: function destroy() {
          var swiper = this;

          if (swiper.params.cssMode) {
            swiper.mousewheel.enable();
          }

          if (swiper.mousewheel.enabled) {
            swiper.mousewheel.disable();
          }
        }
      }
    };
    var Navigation = {
      update: function update() {
        // Update Navigation Buttons
        var swiper = this;
        var params = swiper.params.navigation;

        if (swiper.params.loop) {
          return;
        }

        var ref = swiper.navigation;
        var $nextEl = ref.$nextEl;
        var $prevEl = ref.$prevEl;

        if ($prevEl && $prevEl.length > 0) {
          if (swiper.isBeginning) {
            $prevEl.addClass(params.disabledClass);
          } else {
            $prevEl.removeClass(params.disabledClass);
          }

          $prevEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        }

        if ($nextEl && $nextEl.length > 0) {
          if (swiper.isEnd) {
            $nextEl.addClass(params.disabledClass);
          } else {
            $nextEl.removeClass(params.disabledClass);
          }

          $nextEl[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
        }
      },
      onPrevClick: function onPrevClick(e) {
        var swiper = this;
        e.preventDefault();

        if (swiper.isBeginning && !swiper.params.loop) {
          return;
        }

        swiper.slidePrev();
      },
      onNextClick: function onNextClick(e) {
        var swiper = this;
        e.preventDefault();

        if (swiper.isEnd && !swiper.params.loop) {
          return;
        }

        swiper.slideNext();
      },
      init: function init() {
        var swiper = this;
        var params = swiper.params.navigation;

        if (!(params.nextEl || params.prevEl)) {
          return;
        }

        var $nextEl;
        var $prevEl;

        if (params.nextEl) {
          $nextEl = $(params.nextEl);

          if (swiper.params.uniqueNavElements && typeof params.nextEl === 'string' && $nextEl.length > 1 && swiper.$el.find(params.nextEl).length === 1) {
            $nextEl = swiper.$el.find(params.nextEl);
          }
        }

        if (params.prevEl) {
          $prevEl = $(params.prevEl);

          if (swiper.params.uniqueNavElements && typeof params.prevEl === 'string' && $prevEl.length > 1 && swiper.$el.find(params.prevEl).length === 1) {
            $prevEl = swiper.$el.find(params.prevEl);
          }
        }

        if ($nextEl && $nextEl.length > 0) {
          $nextEl.on('click', swiper.navigation.onNextClick);
        }

        if ($prevEl && $prevEl.length > 0) {
          $prevEl.on('click', swiper.navigation.onPrevClick);
        }

        Utils.extend(swiper.navigation, {
          $nextEl: $nextEl,
          nextEl: $nextEl && $nextEl[0],
          $prevEl: $prevEl,
          prevEl: $prevEl && $prevEl[0]
        });
      },
      destroy: function destroy() {
        var swiper = this;
        var ref = swiper.navigation;
        var $nextEl = ref.$nextEl;
        var $prevEl = ref.$prevEl;

        if ($nextEl && $nextEl.length) {
          $nextEl.off('click', swiper.navigation.onNextClick);
          $nextEl.removeClass(swiper.params.navigation.disabledClass);
        }

        if ($prevEl && $prevEl.length) {
          $prevEl.off('click', swiper.navigation.onPrevClick);
          $prevEl.removeClass(swiper.params.navigation.disabledClass);
        }
      }
    };
    var Navigation$1 = {
      name: 'navigation',
      params: {
        navigation: {
          nextEl: null,
          prevEl: null,
          hideOnClick: false,
          disabledClass: 'swiper-button-disabled',
          hiddenClass: 'swiper-button-hidden',
          lockClass: 'swiper-button-lock'
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          navigation: {
            init: Navigation.init.bind(swiper),
            update: Navigation.update.bind(swiper),
            destroy: Navigation.destroy.bind(swiper),
            onNextClick: Navigation.onNextClick.bind(swiper),
            onPrevClick: Navigation.onPrevClick.bind(swiper)
          }
        });
      },
      on: {
        init: function init() {
          var swiper = this;
          swiper.navigation.init();
          swiper.navigation.update();
        },
        toEdge: function toEdge() {
          var swiper = this;
          swiper.navigation.update();
        },
        fromEdge: function fromEdge() {
          var swiper = this;
          swiper.navigation.update();
        },
        destroy: function destroy() {
          var swiper = this;
          swiper.navigation.destroy();
        },
        click: function click(e) {
          var swiper = this;
          var ref = swiper.navigation;
          var $nextEl = ref.$nextEl;
          var $prevEl = ref.$prevEl;

          if (swiper.params.navigation.hideOnClick && !$(e.target).is($prevEl) && !$(e.target).is($nextEl)) {
            var isHidden;

            if ($nextEl) {
              isHidden = $nextEl.hasClass(swiper.params.navigation.hiddenClass);
            } else if ($prevEl) {
              isHidden = $prevEl.hasClass(swiper.params.navigation.hiddenClass);
            }

            if (isHidden === true) {
              swiper.emit('navigationShow', swiper);
            } else {
              swiper.emit('navigationHide', swiper);
            }

            if ($nextEl) {
              $nextEl.toggleClass(swiper.params.navigation.hiddenClass);
            }

            if ($prevEl) {
              $prevEl.toggleClass(swiper.params.navigation.hiddenClass);
            }
          }
        }
      }
    };
    var Pagination = {
      update: function update() {
        // Render || Update Pagination bullets/items
        var swiper = this;
        var rtl = swiper.rtl;
        var params = swiper.params.pagination;

        if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) {
          return;
        }

        var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        var $el = swiper.pagination.$el; // Current/Total

        var current;
        var total = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

        if (swiper.params.loop) {
          current = Math.ceil((swiper.activeIndex - swiper.loopedSlides) / swiper.params.slidesPerGroup);

          if (current > slidesLength - 1 - swiper.loopedSlides * 2) {
            current -= slidesLength - swiper.loopedSlides * 2;
          }

          if (current > total - 1) {
            current -= total;
          }

          if (current < 0 && swiper.params.paginationType !== 'bullets') {
            current = total + current;
          }
        } else if (typeof swiper.snapIndex !== 'undefined') {
          current = swiper.snapIndex;
        } else {
          current = swiper.activeIndex || 0;
        } // Types


        if (params.type === 'bullets' && swiper.pagination.bullets && swiper.pagination.bullets.length > 0) {
          var bullets = swiper.pagination.bullets;
          var firstIndex;
          var lastIndex;
          var midIndex;

          if (params.dynamicBullets) {
            swiper.pagination.bulletSize = bullets.eq(0)[swiper.isHorizontal() ? 'outerWidth' : 'outerHeight'](true);
            $el.css(swiper.isHorizontal() ? 'width' : 'height', swiper.pagination.bulletSize * (params.dynamicMainBullets + 4) + "px");

            if (params.dynamicMainBullets > 1 && swiper.previousIndex !== undefined) {
              swiper.pagination.dynamicBulletIndex += current - swiper.previousIndex;

              if (swiper.pagination.dynamicBulletIndex > params.dynamicMainBullets - 1) {
                swiper.pagination.dynamicBulletIndex = params.dynamicMainBullets - 1;
              } else if (swiper.pagination.dynamicBulletIndex < 0) {
                swiper.pagination.dynamicBulletIndex = 0;
              }
            }

            firstIndex = current - swiper.pagination.dynamicBulletIndex;
            lastIndex = firstIndex + (Math.min(bullets.length, params.dynamicMainBullets) - 1);
            midIndex = (lastIndex + firstIndex) / 2;
          }

          bullets.removeClass(params.bulletActiveClass + " " + params.bulletActiveClass + "-next " + params.bulletActiveClass + "-next-next " + params.bulletActiveClass + "-prev " + params.bulletActiveClass + "-prev-prev " + params.bulletActiveClass + "-main");

          if ($el.length > 1) {
            bullets.each(function (index, bullet) {
              var $bullet = $(bullet);
              var bulletIndex = $bullet.index();

              if (bulletIndex === current) {
                $bullet.addClass(params.bulletActiveClass);
              }

              if (params.dynamicBullets) {
                if (bulletIndex >= firstIndex && bulletIndex <= lastIndex) {
                  $bullet.addClass(params.bulletActiveClass + "-main");
                }

                if (bulletIndex === firstIndex) {
                  $bullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                }

                if (bulletIndex === lastIndex) {
                  $bullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
                }
              }
            });
          } else {
            var $bullet = bullets.eq(current);
            var bulletIndex = $bullet.index();
            $bullet.addClass(params.bulletActiveClass);

            if (params.dynamicBullets) {
              var $firstDisplayedBullet = bullets.eq(firstIndex);
              var $lastDisplayedBullet = bullets.eq(lastIndex);

              for (var i = firstIndex; i <= lastIndex; i += 1) {
                bullets.eq(i).addClass(params.bulletActiveClass + "-main");
              }

              if (swiper.params.loop) {
                if (bulletIndex >= bullets.length - params.dynamicMainBullets) {
                  for (var i$1 = params.dynamicMainBullets; i$1 >= 0; i$1 -= 1) {
                    bullets.eq(bullets.length - i$1).addClass(params.bulletActiveClass + "-main");
                  }

                  bullets.eq(bullets.length - params.dynamicMainBullets - 1).addClass(params.bulletActiveClass + "-prev");
                } else {
                  $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                  $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
                }
              } else {
                $firstDisplayedBullet.prev().addClass(params.bulletActiveClass + "-prev").prev().addClass(params.bulletActiveClass + "-prev-prev");
                $lastDisplayedBullet.next().addClass(params.bulletActiveClass + "-next").next().addClass(params.bulletActiveClass + "-next-next");
              }
            }
          }

          if (params.dynamicBullets) {
            var dynamicBulletsLength = Math.min(bullets.length, params.dynamicMainBullets + 4);
            var bulletsOffset = (swiper.pagination.bulletSize * dynamicBulletsLength - swiper.pagination.bulletSize) / 2 - midIndex * swiper.pagination.bulletSize;
            var offsetProp = rtl ? 'right' : 'left';
            bullets.css(swiper.isHorizontal() ? offsetProp : 'top', bulletsOffset + "px");
          }
        }

        if (params.type === 'fraction') {
          $el.find("." + params.currentClass).text(params.formatFractionCurrent(current + 1));
          $el.find("." + params.totalClass).text(params.formatFractionTotal(total));
        }

        if (params.type === 'progressbar') {
          var progressbarDirection;

          if (params.progressbarOpposite) {
            progressbarDirection = swiper.isHorizontal() ? 'vertical' : 'horizontal';
          } else {
            progressbarDirection = swiper.isHorizontal() ? 'horizontal' : 'vertical';
          }

          var scale = (current + 1) / total;
          var scaleX = 1;
          var scaleY = 1;

          if (progressbarDirection === 'horizontal') {
            scaleX = scale;
          } else {
            scaleY = scale;
          }

          $el.find("." + params.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + scaleX + ") scaleY(" + scaleY + ")").transition(swiper.params.speed);
        }

        if (params.type === 'custom' && params.renderCustom) {
          $el.html(params.renderCustom(swiper, current + 1, total));
          swiper.emit('paginationRender', swiper, $el[0]);
        } else {
          swiper.emit('paginationUpdate', swiper, $el[0]);
        }

        $el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](params.lockClass);
      },
      render: function render() {
        // Render Container
        var swiper = this;
        var params = swiper.params.pagination;

        if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) {
          return;
        }

        var slidesLength = swiper.virtual && swiper.params.virtual.enabled ? swiper.virtual.slides.length : swiper.slides.length;
        var $el = swiper.pagination.$el;
        var paginationHTML = '';

        if (params.type === 'bullets') {
          var numberOfBullets = swiper.params.loop ? Math.ceil((slidesLength - swiper.loopedSlides * 2) / swiper.params.slidesPerGroup) : swiper.snapGrid.length;

          for (var i = 0; i < numberOfBullets; i += 1) {
            if (params.renderBullet) {
              paginationHTML += params.renderBullet.call(swiper, i, params.bulletClass);
            } else {
              paginationHTML += "<" + params.bulletElement + " class=\"" + params.bulletClass + "\"></" + params.bulletElement + ">";
            }
          }

          $el.html(paginationHTML);
          swiper.pagination.bullets = $el.find("." + params.bulletClass);
        }

        if (params.type === 'fraction') {
          if (params.renderFraction) {
            paginationHTML = params.renderFraction.call(swiper, params.currentClass, params.totalClass);
          } else {
            paginationHTML = "<span class=\"" + params.currentClass + "\"></span>" + ' / ' + "<span class=\"" + params.totalClass + "\"></span>";
          }

          $el.html(paginationHTML);
        }

        if (params.type === 'progressbar') {
          if (params.renderProgressbar) {
            paginationHTML = params.renderProgressbar.call(swiper, params.progressbarFillClass);
          } else {
            paginationHTML = "<span class=\"" + params.progressbarFillClass + "\"></span>";
          }

          $el.html(paginationHTML);
        }

        if (params.type !== 'custom') {
          swiper.emit('paginationRender', swiper.pagination.$el[0]);
        }
      },
      init: function init() {
        var swiper = this;
        var params = swiper.params.pagination;

        if (!params.el) {
          return;
        }

        var $el = $(params.el);

        if ($el.length === 0) {
          return;
        }

        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && swiper.$el.find(params.el).length === 1) {
          $el = swiper.$el.find(params.el);
        }

        if (params.type === 'bullets' && params.clickable) {
          $el.addClass(params.clickableClass);
        }

        $el.addClass(params.modifierClass + params.type);

        if (params.type === 'bullets' && params.dynamicBullets) {
          $el.addClass("" + params.modifierClass + params.type + "-dynamic");
          swiper.pagination.dynamicBulletIndex = 0;

          if (params.dynamicMainBullets < 1) {
            params.dynamicMainBullets = 1;
          }
        }

        if (params.type === 'progressbar' && params.progressbarOpposite) {
          $el.addClass(params.progressbarOppositeClass);
        }

        if (params.clickable) {
          $el.on('click', "." + params.bulletClass, function onClick(e) {
            e.preventDefault();
            var index = $(this).index() * swiper.params.slidesPerGroup;

            if (swiper.params.loop) {
              index += swiper.loopedSlides;
            }

            swiper.slideTo(index);
          });
        }

        Utils.extend(swiper.pagination, {
          $el: $el,
          el: $el[0]
        });
      },
      destroy: function destroy() {
        var swiper = this;
        var params = swiper.params.pagination;

        if (!params.el || !swiper.pagination.el || !swiper.pagination.$el || swiper.pagination.$el.length === 0) {
          return;
        }

        var $el = swiper.pagination.$el;
        $el.removeClass(params.hiddenClass);
        $el.removeClass(params.modifierClass + params.type);

        if (swiper.pagination.bullets) {
          swiper.pagination.bullets.removeClass(params.bulletActiveClass);
        }

        if (params.clickable) {
          $el.off('click', "." + params.bulletClass);
        }
      }
    };
    var Pagination$1 = {
      name: 'pagination',
      params: {
        pagination: {
          el: null,
          bulletElement: 'span',
          clickable: false,
          hideOnClick: false,
          renderBullet: null,
          renderProgressbar: null,
          renderFraction: null,
          renderCustom: null,
          progressbarOpposite: false,
          type: 'bullets',
          // 'bullets' or 'progressbar' or 'fraction' or 'custom'
          dynamicBullets: false,
          dynamicMainBullets: 1,
          formatFractionCurrent: function formatFractionCurrent(number) {
            return number;
          },
          formatFractionTotal: function formatFractionTotal(number) {
            return number;
          },
          bulletClass: 'swiper-pagination-bullet',
          bulletActiveClass: 'swiper-pagination-bullet-active',
          modifierClass: 'swiper-pagination-',
          // NEW
          currentClass: 'swiper-pagination-current',
          totalClass: 'swiper-pagination-total',
          hiddenClass: 'swiper-pagination-hidden',
          progressbarFillClass: 'swiper-pagination-progressbar-fill',
          progressbarOppositeClass: 'swiper-pagination-progressbar-opposite',
          clickableClass: 'swiper-pagination-clickable',
          // NEW
          lockClass: 'swiper-pagination-lock'
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          pagination: {
            init: Pagination.init.bind(swiper),
            render: Pagination.render.bind(swiper),
            update: Pagination.update.bind(swiper),
            destroy: Pagination.destroy.bind(swiper),
            dynamicBulletIndex: 0
          }
        });
      },
      on: {
        init: function init() {
          var swiper = this;
          swiper.pagination.init();
          swiper.pagination.render();
          swiper.pagination.update();
        },
        activeIndexChange: function activeIndexChange() {
          var swiper = this;

          if (swiper.params.loop) {
            swiper.pagination.update();
          } else if (typeof swiper.snapIndex === 'undefined') {
            swiper.pagination.update();
          }
        },
        snapIndexChange: function snapIndexChange() {
          var swiper = this;

          if (!swiper.params.loop) {
            swiper.pagination.update();
          }
        },
        slidesLengthChange: function slidesLengthChange() {
          var swiper = this;

          if (swiper.params.loop) {
            swiper.pagination.render();
            swiper.pagination.update();
          }
        },
        snapGridLengthChange: function snapGridLengthChange() {
          var swiper = this;

          if (!swiper.params.loop) {
            swiper.pagination.render();
            swiper.pagination.update();
          }
        },
        destroy: function destroy() {
          var swiper = this;
          swiper.pagination.destroy();
        },
        click: function click(e) {
          var swiper = this;

          if (swiper.params.pagination.el && swiper.params.pagination.hideOnClick && swiper.pagination.$el.length > 0 && !$(e.target).hasClass(swiper.params.pagination.bulletClass)) {
            var isHidden = swiper.pagination.$el.hasClass(swiper.params.pagination.hiddenClass);

            if (isHidden === true) {
              swiper.emit('paginationShow', swiper);
            } else {
              swiper.emit('paginationHide', swiper);
            }

            swiper.pagination.$el.toggleClass(swiper.params.pagination.hiddenClass);
          }
        }
      }
    };
    var Scrollbar = {
      setTranslate: function setTranslate() {
        var swiper = this;

        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) {
          return;
        }

        var scrollbar = swiper.scrollbar;
        var rtl = swiper.rtlTranslate;
        var progress = swiper.progress;
        var dragSize = scrollbar.dragSize;
        var trackSize = scrollbar.trackSize;
        var $dragEl = scrollbar.$dragEl;
        var $el = scrollbar.$el;
        var params = swiper.params.scrollbar;
        var newSize = dragSize;
        var newPos = (trackSize - dragSize) * progress;

        if (rtl) {
          newPos = -newPos;

          if (newPos > 0) {
            newSize = dragSize - newPos;
            newPos = 0;
          } else if (-newPos + dragSize > trackSize) {
            newSize = trackSize + newPos;
          }
        } else if (newPos < 0) {
          newSize = dragSize + newPos;
          newPos = 0;
        } else if (newPos + dragSize > trackSize) {
          newSize = trackSize - newPos;
        }

        if (swiper.isHorizontal()) {
          $dragEl.transform("translate3d(" + newPos + "px, 0, 0)");
          $dragEl[0].style.width = newSize + "px";
        } else {
          $dragEl.transform("translate3d(0px, " + newPos + "px, 0)");
          $dragEl[0].style.height = newSize + "px";
        }

        if (params.hide) {
          clearTimeout(swiper.scrollbar.timeout);
          $el[0].style.opacity = 1;
          swiper.scrollbar.timeout = setTimeout(function () {
            $el[0].style.opacity = 0;
            $el.transition(400);
          }, 1000);
        }
      },
      setTransition: function setTransition(duration) {
        var swiper = this;

        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) {
          return;
        }

        swiper.scrollbar.$dragEl.transition(duration);
      },
      updateSize: function updateSize() {
        var swiper = this;

        if (!swiper.params.scrollbar.el || !swiper.scrollbar.el) {
          return;
        }

        var scrollbar = swiper.scrollbar;
        var $dragEl = scrollbar.$dragEl;
        var $el = scrollbar.$el;
        $dragEl[0].style.width = '';
        $dragEl[0].style.height = '';
        var trackSize = swiper.isHorizontal() ? $el[0].offsetWidth : $el[0].offsetHeight;
        var divider = swiper.size / swiper.virtualSize;
        var moveDivider = divider * (trackSize / swiper.size);
        var dragSize;

        if (swiper.params.scrollbar.dragSize === 'auto') {
          dragSize = trackSize * divider;
        } else {
          dragSize = parseInt(swiper.params.scrollbar.dragSize, 10);
        }

        if (swiper.isHorizontal()) {
          $dragEl[0].style.width = dragSize + "px";
        } else {
          $dragEl[0].style.height = dragSize + "px";
        }

        if (divider >= 1) {
          $el[0].style.display = 'none';
        } else {
          $el[0].style.display = '';
        }

        if (swiper.params.scrollbar.hide) {
          $el[0].style.opacity = 0;
        }

        Utils.extend(scrollbar, {
          trackSize: trackSize,
          divider: divider,
          moveDivider: moveDivider,
          dragSize: dragSize
        });
        scrollbar.$el[swiper.params.watchOverflow && swiper.isLocked ? 'addClass' : 'removeClass'](swiper.params.scrollbar.lockClass);
      },
      getPointerPosition: function getPointerPosition(e) {
        var swiper = this;

        if (swiper.isHorizontal()) {
          return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientX : e.clientX;
        }

        return e.type === 'touchstart' || e.type === 'touchmove' ? e.targetTouches[0].clientY : e.clientY;
      },
      setDragPosition: function setDragPosition(e) {
        var swiper = this;
        var scrollbar = swiper.scrollbar;
        var rtl = swiper.rtlTranslate;
        var $el = scrollbar.$el;
        var dragSize = scrollbar.dragSize;
        var trackSize = scrollbar.trackSize;
        var dragStartPos = scrollbar.dragStartPos;
        var positionRatio;
        positionRatio = (scrollbar.getPointerPosition(e) - $el.offset()[swiper.isHorizontal() ? 'left' : 'top'] - (dragStartPos !== null ? dragStartPos : dragSize / 2)) / (trackSize - dragSize);
        positionRatio = Math.max(Math.min(positionRatio, 1), 0);

        if (rtl) {
          positionRatio = 1 - positionRatio;
        }

        var position = swiper.minTranslate() + (swiper.maxTranslate() - swiper.minTranslate()) * positionRatio;
        swiper.updateProgress(position);
        swiper.setTranslate(position);
        swiper.updateActiveIndex();
        swiper.updateSlidesClasses();
      },
      onDragStart: function onDragStart(e) {
        var swiper = this;
        var params = swiper.params.scrollbar;
        var scrollbar = swiper.scrollbar;
        var $wrapperEl = swiper.$wrapperEl;
        var $el = scrollbar.$el;
        var $dragEl = scrollbar.$dragEl;
        swiper.scrollbar.isTouched = true;
        swiper.scrollbar.dragStartPos = e.target === $dragEl[0] || e.target === $dragEl ? scrollbar.getPointerPosition(e) - e.target.getBoundingClientRect()[swiper.isHorizontal() ? 'left' : 'top'] : null;
        e.preventDefault();
        e.stopPropagation();
        $wrapperEl.transition(100);
        $dragEl.transition(100);
        scrollbar.setDragPosition(e);
        clearTimeout(swiper.scrollbar.dragTimeout);
        $el.transition(0);

        if (params.hide) {
          $el.css('opacity', 1);
        }

        if (swiper.params.cssMode) {
          swiper.$wrapperEl.css('scroll-snap-type', 'none');
        }

        swiper.emit('scrollbarDragStart', e);
      },
      onDragMove: function onDragMove(e) {
        var swiper = this;
        var scrollbar = swiper.scrollbar;
        var $wrapperEl = swiper.$wrapperEl;
        var $el = scrollbar.$el;
        var $dragEl = scrollbar.$dragEl;

        if (!swiper.scrollbar.isTouched) {
          return;
        }

        if (e.preventDefault) {
          e.preventDefault();
        } else {
          e.returnValue = false;
        }

        scrollbar.setDragPosition(e);
        $wrapperEl.transition(0);
        $el.transition(0);
        $dragEl.transition(0);
        swiper.emit('scrollbarDragMove', e);
      },
      onDragEnd: function onDragEnd(e) {
        var swiper = this;
        var params = swiper.params.scrollbar;
        var scrollbar = swiper.scrollbar;
        var $wrapperEl = swiper.$wrapperEl;
        var $el = scrollbar.$el;

        if (!swiper.scrollbar.isTouched) {
          return;
        }

        swiper.scrollbar.isTouched = false;

        if (swiper.params.cssMode) {
          swiper.$wrapperEl.css('scroll-snap-type', '');
          $wrapperEl.transition('');
        }

        if (params.hide) {
          clearTimeout(swiper.scrollbar.dragTimeout);
          swiper.scrollbar.dragTimeout = Utils.nextTick(function () {
            $el.css('opacity', 0);
            $el.transition(400);
          }, 1000);
        }

        swiper.emit('scrollbarDragEnd', e);

        if (params.snapOnRelease) {
          swiper.slideToClosest();
        }
      },
      enableDraggable: function enableDraggable() {
        var swiper = this;

        if (!swiper.params.scrollbar.el) {
          return;
        }

        var scrollbar = swiper.scrollbar;
        var touchEventsTouch = swiper.touchEventsTouch;
        var touchEventsDesktop = swiper.touchEventsDesktop;
        var params = swiper.params;
        var $el = scrollbar.$el;
        var target = $el[0];
        var activeListener = Support.passiveListener && params.passiveListeners ? {
          passive: false,
          capture: false
        } : false;
        var passiveListener = Support.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;

        if (!Support.touch) {
          target.addEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
          doc.addEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
          doc.addEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
        } else {
          target.addEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
          target.addEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
          target.addEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
        }
      },
      disableDraggable: function disableDraggable() {
        var swiper = this;

        if (!swiper.params.scrollbar.el) {
          return;
        }

        var scrollbar = swiper.scrollbar;
        var touchEventsTouch = swiper.touchEventsTouch;
        var touchEventsDesktop = swiper.touchEventsDesktop;
        var params = swiper.params;
        var $el = scrollbar.$el;
        var target = $el[0];
        var activeListener = Support.passiveListener && params.passiveListeners ? {
          passive: false,
          capture: false
        } : false;
        var passiveListener = Support.passiveListener && params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;

        if (!Support.touch) {
          target.removeEventListener(touchEventsDesktop.start, swiper.scrollbar.onDragStart, activeListener);
          doc.removeEventListener(touchEventsDesktop.move, swiper.scrollbar.onDragMove, activeListener);
          doc.removeEventListener(touchEventsDesktop.end, swiper.scrollbar.onDragEnd, passiveListener);
        } else {
          target.removeEventListener(touchEventsTouch.start, swiper.scrollbar.onDragStart, activeListener);
          target.removeEventListener(touchEventsTouch.move, swiper.scrollbar.onDragMove, activeListener);
          target.removeEventListener(touchEventsTouch.end, swiper.scrollbar.onDragEnd, passiveListener);
        }
      },
      init: function init() {
        var swiper = this;

        if (!swiper.params.scrollbar.el) {
          return;
        }

        var scrollbar = swiper.scrollbar;
        var $swiperEl = swiper.$el;
        var params = swiper.params.scrollbar;
        var $el = $(params.el);

        if (swiper.params.uniqueNavElements && typeof params.el === 'string' && $el.length > 1 && $swiperEl.find(params.el).length === 1) {
          $el = $swiperEl.find(params.el);
        }

        var $dragEl = $el.find("." + swiper.params.scrollbar.dragClass);

        if ($dragEl.length === 0) {
          $dragEl = $("<div class=\"" + swiper.params.scrollbar.dragClass + "\"></div>");
          $el.append($dragEl);
        }

        Utils.extend(scrollbar, {
          $el: $el,
          el: $el[0],
          $dragEl: $dragEl,
          dragEl: $dragEl[0]
        });

        if (params.draggable) {
          scrollbar.enableDraggable();
        }
      },
      destroy: function destroy() {
        var swiper = this;
        swiper.scrollbar.disableDraggable();
      }
    };
    var Scrollbar$1 = {
      name: 'scrollbar',
      params: {
        scrollbar: {
          el: null,
          dragSize: 'auto',
          hide: false,
          draggable: false,
          snapOnRelease: true,
          lockClass: 'swiper-scrollbar-lock',
          dragClass: 'swiper-scrollbar-drag'
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          scrollbar: {
            init: Scrollbar.init.bind(swiper),
            destroy: Scrollbar.destroy.bind(swiper),
            updateSize: Scrollbar.updateSize.bind(swiper),
            setTranslate: Scrollbar.setTranslate.bind(swiper),
            setTransition: Scrollbar.setTransition.bind(swiper),
            enableDraggable: Scrollbar.enableDraggable.bind(swiper),
            disableDraggable: Scrollbar.disableDraggable.bind(swiper),
            setDragPosition: Scrollbar.setDragPosition.bind(swiper),
            getPointerPosition: Scrollbar.getPointerPosition.bind(swiper),
            onDragStart: Scrollbar.onDragStart.bind(swiper),
            onDragMove: Scrollbar.onDragMove.bind(swiper),
            onDragEnd: Scrollbar.onDragEnd.bind(swiper),
            isTouched: false,
            timeout: null,
            dragTimeout: null
          }
        });
      },
      on: {
        init: function init() {
          var swiper = this;
          swiper.scrollbar.init();
          swiper.scrollbar.updateSize();
          swiper.scrollbar.setTranslate();
        },
        update: function update() {
          var swiper = this;
          swiper.scrollbar.updateSize();
        },
        resize: function resize() {
          var swiper = this;
          swiper.scrollbar.updateSize();
        },
        observerUpdate: function observerUpdate() {
          var swiper = this;
          swiper.scrollbar.updateSize();
        },
        setTranslate: function setTranslate() {
          var swiper = this;
          swiper.scrollbar.setTranslate();
        },
        setTransition: function setTransition(duration) {
          var swiper = this;
          swiper.scrollbar.setTransition(duration);
        },
        destroy: function destroy() {
          var swiper = this;
          swiper.scrollbar.destroy();
        }
      }
    };
    var Parallax = {
      setTransform: function setTransform(el, progress) {
        var swiper = this;
        var rtl = swiper.rtl;
        var $el = $(el);
        var rtlFactor = rtl ? -1 : 1;
        var p = $el.attr('data-swiper-parallax') || '0';
        var x = $el.attr('data-swiper-parallax-x');
        var y = $el.attr('data-swiper-parallax-y');
        var scale = $el.attr('data-swiper-parallax-scale');
        var opacity = $el.attr('data-swiper-parallax-opacity');

        if (x || y) {
          x = x || '0';
          y = y || '0';
        } else if (swiper.isHorizontal()) {
          x = p;
          y = '0';
        } else {
          y = p;
          x = '0';
        }

        if (x.indexOf('%') >= 0) {
          x = parseInt(x, 10) * progress * rtlFactor + "%";
        } else {
          x = x * progress * rtlFactor + "px";
        }

        if (y.indexOf('%') >= 0) {
          y = parseInt(y, 10) * progress + "%";
        } else {
          y = y * progress + "px";
        }

        if (typeof opacity !== 'undefined' && opacity !== null) {
          var currentOpacity = opacity - (opacity - 1) * (1 - Math.abs(progress));
          $el[0].style.opacity = currentOpacity;
        }

        if (typeof scale === 'undefined' || scale === null) {
          $el.transform("translate3d(" + x + ", " + y + ", 0px)");
        } else {
          var currentScale = scale - (scale - 1) * (1 - Math.abs(progress));
          $el.transform("translate3d(" + x + ", " + y + ", 0px) scale(" + currentScale + ")");
        }
      },
      setTranslate: function setTranslate() {
        var swiper = this;
        var $el = swiper.$el;
        var slides = swiper.slides;
        var progress = swiper.progress;
        var snapGrid = swiper.snapGrid;
        $el.children('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (index, el) {
          swiper.parallax.setTransform(el, progress);
        });
        slides.each(function (slideIndex, slideEl) {
          var slideProgress = slideEl.progress;

          if (swiper.params.slidesPerGroup > 1 && swiper.params.slidesPerView !== 'auto') {
            slideProgress += Math.ceil(slideIndex / 2) - progress * (snapGrid.length - 1);
          }

          slideProgress = Math.min(Math.max(slideProgress, -1), 1);
          $(slideEl).find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (index, el) {
            swiper.parallax.setTransform(el, slideProgress);
          });
        });
      },
      setTransition: function setTransition(duration) {
        if (duration === void 0) duration = this.params.speed;
        var swiper = this;
        var $el = swiper.$el;
        $el.find('[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]').each(function (index, parallaxEl) {
          var $parallaxEl = $(parallaxEl);
          var parallaxDuration = parseInt($parallaxEl.attr('data-swiper-parallax-duration'), 10) || duration;

          if (duration === 0) {
            parallaxDuration = 0;
          }

          $parallaxEl.transition(parallaxDuration);
        });
      }
    };
    var Parallax$1 = {
      name: 'parallax',
      params: {
        parallax: {
          enabled: false
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          parallax: {
            setTransform: Parallax.setTransform.bind(swiper),
            setTranslate: Parallax.setTranslate.bind(swiper),
            setTransition: Parallax.setTransition.bind(swiper)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var swiper = this;

          if (!swiper.params.parallax.enabled) {
            return;
          }

          swiper.params.watchSlidesProgress = true;
          swiper.originalParams.watchSlidesProgress = true;
        },
        init: function init() {
          var swiper = this;

          if (!swiper.params.parallax.enabled) {
            return;
          }

          swiper.parallax.setTranslate();
        },
        setTranslate: function setTranslate() {
          var swiper = this;

          if (!swiper.params.parallax.enabled) {
            return;
          }

          swiper.parallax.setTranslate();
        },
        setTransition: function setTransition(duration) {
          var swiper = this;

          if (!swiper.params.parallax.enabled) {
            return;
          }

          swiper.parallax.setTransition(duration);
        }
      }
    };
    var Zoom = {
      // Calc Scale From Multi-touches
      getDistanceBetweenTouches: function getDistanceBetweenTouches(e) {
        if (e.targetTouches.length < 2) {
          return 1;
        }

        var x1 = e.targetTouches[0].pageX;
        var y1 = e.targetTouches[0].pageY;
        var x2 = e.targetTouches[1].pageX;
        var y2 = e.targetTouches[1].pageY;
        var distance = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
        return distance;
      },
      // Events
      onGestureStart: function onGestureStart(e) {
        var swiper = this;
        var params = swiper.params.zoom;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;
        zoom.fakeGestureTouched = false;
        zoom.fakeGestureMoved = false;

        if (!Support.gestures) {
          if (e.type !== 'touchstart' || e.type === 'touchstart' && e.targetTouches.length < 2) {
            return;
          }

          zoom.fakeGestureTouched = true;
          gesture.scaleStart = Zoom.getDistanceBetweenTouches(e);
        }

        if (!gesture.$slideEl || !gesture.$slideEl.length) {
          gesture.$slideEl = $(e.target).closest("." + swiper.params.slideClass);

          if (gesture.$slideEl.length === 0) {
            gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
          }

          gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
          gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
          gesture.maxRatio = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

          if (gesture.$imageWrapEl.length === 0) {
            gesture.$imageEl = undefined;
            return;
          }
        }

        gesture.$imageEl.transition(0);
        swiper.zoom.isScaling = true;
      },
      onGestureChange: function onGestureChange(e) {
        var swiper = this;
        var params = swiper.params.zoom;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;

        if (!Support.gestures) {
          if (e.type !== 'touchmove' || e.type === 'touchmove' && e.targetTouches.length < 2) {
            return;
          }

          zoom.fakeGestureMoved = true;
          gesture.scaleMove = Zoom.getDistanceBetweenTouches(e);
        }

        if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
          return;
        }

        if (Support.gestures) {
          zoom.scale = e.scale * zoom.currentScale;
        } else {
          zoom.scale = gesture.scaleMove / gesture.scaleStart * zoom.currentScale;
        }

        if (zoom.scale > gesture.maxRatio) {
          zoom.scale = gesture.maxRatio - 1 + Math.pow(zoom.scale - gesture.maxRatio + 1, 0.5);
        }

        if (zoom.scale < params.minRatio) {
          zoom.scale = params.minRatio + 1 - Math.pow(params.minRatio - zoom.scale + 1, 0.5);
        }

        gesture.$imageEl.transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
      },
      onGestureEnd: function onGestureEnd(e) {
        var swiper = this;
        var params = swiper.params.zoom;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;

        if (!Support.gestures) {
          if (!zoom.fakeGestureTouched || !zoom.fakeGestureMoved) {
            return;
          }

          if (e.type !== 'touchend' || e.type === 'touchend' && e.changedTouches.length < 2 && !Device.android) {
            return;
          }

          zoom.fakeGestureTouched = false;
          zoom.fakeGestureMoved = false;
        }

        if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
          return;
        }

        zoom.scale = Math.max(Math.min(zoom.scale, gesture.maxRatio), params.minRatio);
        gesture.$imageEl.transition(swiper.params.speed).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
        zoom.currentScale = zoom.scale;
        zoom.isScaling = false;

        if (zoom.scale === 1) {
          gesture.$slideEl = undefined;
        }
      },
      onTouchStart: function onTouchStart(e) {
        var swiper = this;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;
        var image = zoom.image;

        if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
          return;
        }

        if (image.isTouched) {
          return;
        }

        if (Device.android) {
          e.preventDefault();
        }

        image.isTouched = true;
        image.touchesStart.x = e.type === 'touchstart' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesStart.y = e.type === 'touchstart' ? e.targetTouches[0].pageY : e.pageY;
      },
      onTouchMove: function onTouchMove(e) {
        var swiper = this;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;
        var image = zoom.image;
        var velocity = zoom.velocity;

        if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
          return;
        }

        swiper.allowClick = false;

        if (!image.isTouched || !gesture.$slideEl) {
          return;
        }

        if (!image.isMoved) {
          image.width = gesture.$imageEl[0].offsetWidth;
          image.height = gesture.$imageEl[0].offsetHeight;
          image.startX = Utils.getTranslate(gesture.$imageWrapEl[0], 'x') || 0;
          image.startY = Utils.getTranslate(gesture.$imageWrapEl[0], 'y') || 0;
          gesture.slideWidth = gesture.$slideEl[0].offsetWidth;
          gesture.slideHeight = gesture.$slideEl[0].offsetHeight;
          gesture.$imageWrapEl.transition(0);

          if (swiper.rtl) {
            image.startX = -image.startX;
            image.startY = -image.startY;
          }
        } // Define if we need image drag


        var scaledWidth = image.width * zoom.scale;
        var scaledHeight = image.height * zoom.scale;

        if (scaledWidth < gesture.slideWidth && scaledHeight < gesture.slideHeight) {
          return;
        }

        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.touchesCurrent.x = e.type === 'touchmove' ? e.targetTouches[0].pageX : e.pageX;
        image.touchesCurrent.y = e.type === 'touchmove' ? e.targetTouches[0].pageY : e.pageY;

        if (!image.isMoved && !zoom.isScaling) {
          if (swiper.isHorizontal() && (Math.floor(image.minX) === Math.floor(image.startX) && image.touchesCurrent.x < image.touchesStart.x || Math.floor(image.maxX) === Math.floor(image.startX) && image.touchesCurrent.x > image.touchesStart.x)) {
            image.isTouched = false;
            return;
          }

          if (!swiper.isHorizontal() && (Math.floor(image.minY) === Math.floor(image.startY) && image.touchesCurrent.y < image.touchesStart.y || Math.floor(image.maxY) === Math.floor(image.startY) && image.touchesCurrent.y > image.touchesStart.y)) {
            image.isTouched = false;
            return;
          }
        }

        e.preventDefault();
        e.stopPropagation();
        image.isMoved = true;
        image.currentX = image.touchesCurrent.x - image.touchesStart.x + image.startX;
        image.currentY = image.touchesCurrent.y - image.touchesStart.y + image.startY;

        if (image.currentX < image.minX) {
          image.currentX = image.minX + 1 - Math.pow(image.minX - image.currentX + 1, 0.8);
        }

        if (image.currentX > image.maxX) {
          image.currentX = image.maxX - 1 + Math.pow(image.currentX - image.maxX + 1, 0.8);
        }

        if (image.currentY < image.minY) {
          image.currentY = image.minY + 1 - Math.pow(image.minY - image.currentY + 1, 0.8);
        }

        if (image.currentY > image.maxY) {
          image.currentY = image.maxY - 1 + Math.pow(image.currentY - image.maxY + 1, 0.8);
        } // Velocity


        if (!velocity.prevPositionX) {
          velocity.prevPositionX = image.touchesCurrent.x;
        }

        if (!velocity.prevPositionY) {
          velocity.prevPositionY = image.touchesCurrent.y;
        }

        if (!velocity.prevTime) {
          velocity.prevTime = Date.now();
        }

        velocity.x = (image.touchesCurrent.x - velocity.prevPositionX) / (Date.now() - velocity.prevTime) / 2;
        velocity.y = (image.touchesCurrent.y - velocity.prevPositionY) / (Date.now() - velocity.prevTime) / 2;

        if (Math.abs(image.touchesCurrent.x - velocity.prevPositionX) < 2) {
          velocity.x = 0;
        }

        if (Math.abs(image.touchesCurrent.y - velocity.prevPositionY) < 2) {
          velocity.y = 0;
        }

        velocity.prevPositionX = image.touchesCurrent.x;
        velocity.prevPositionY = image.touchesCurrent.y;
        velocity.prevTime = Date.now();
        gesture.$imageWrapEl.transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
      },
      onTouchEnd: function onTouchEnd() {
        var swiper = this;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;
        var image = zoom.image;
        var velocity = zoom.velocity;

        if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
          return;
        }

        if (!image.isTouched || !image.isMoved) {
          image.isTouched = false;
          image.isMoved = false;
          return;
        }

        image.isTouched = false;
        image.isMoved = false;
        var momentumDurationX = 300;
        var momentumDurationY = 300;
        var momentumDistanceX = velocity.x * momentumDurationX;
        var newPositionX = image.currentX + momentumDistanceX;
        var momentumDistanceY = velocity.y * momentumDurationY;
        var newPositionY = image.currentY + momentumDistanceY; // Fix duration

        if (velocity.x !== 0) {
          momentumDurationX = Math.abs((newPositionX - image.currentX) / velocity.x);
        }

        if (velocity.y !== 0) {
          momentumDurationY = Math.abs((newPositionY - image.currentY) / velocity.y);
        }

        var momentumDuration = Math.max(momentumDurationX, momentumDurationY);
        image.currentX = newPositionX;
        image.currentY = newPositionY; // Define if we need image drag

        var scaledWidth = image.width * zoom.scale;
        var scaledHeight = image.height * zoom.scale;
        image.minX = Math.min(gesture.slideWidth / 2 - scaledWidth / 2, 0);
        image.maxX = -image.minX;
        image.minY = Math.min(gesture.slideHeight / 2 - scaledHeight / 2, 0);
        image.maxY = -image.minY;
        image.currentX = Math.max(Math.min(image.currentX, image.maxX), image.minX);
        image.currentY = Math.max(Math.min(image.currentY, image.maxY), image.minY);
        gesture.$imageWrapEl.transition(momentumDuration).transform("translate3d(" + image.currentX + "px, " + image.currentY + "px,0)");
      },
      onTransitionEnd: function onTransitionEnd() {
        var swiper = this;
        var zoom = swiper.zoom;
        var gesture = zoom.gesture;

        if (gesture.$slideEl && swiper.previousIndex !== swiper.activeIndex) {
          gesture.$imageEl.transform('translate3d(0,0,0) scale(1)');
          gesture.$imageWrapEl.transform('translate3d(0,0,0)');
          zoom.scale = 1;
          zoom.currentScale = 1;
          gesture.$slideEl = undefined;
          gesture.$imageEl = undefined;
          gesture.$imageWrapEl = undefined;
        }
      },
      // Toggle Zoom
      toggle: function toggle(e) {
        var swiper = this;
        var zoom = swiper.zoom;

        if (zoom.scale && zoom.scale !== 1) {
          // Zoom Out
          zoom.out();
        } else {
          // Zoom In
          zoom.in(e);
        }
      },
      in: function in$1(e) {
        var swiper = this;
        var zoom = swiper.zoom;
        var params = swiper.params.zoom;
        var gesture = zoom.gesture;
        var image = zoom.image;

        if (!gesture.$slideEl) {
          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
          gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
          gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
        }

        if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
          return;
        }

        gesture.$slideEl.addClass("" + params.zoomedSlideClass);
        var touchX;
        var touchY;
        var offsetX;
        var offsetY;
        var diffX;
        var diffY;
        var translateX;
        var translateY;
        var imageWidth;
        var imageHeight;
        var scaledWidth;
        var scaledHeight;
        var translateMinX;
        var translateMinY;
        var translateMaxX;
        var translateMaxY;
        var slideWidth;
        var slideHeight;

        if (typeof image.touchesStart.x === 'undefined' && e) {
          touchX = e.type === 'touchend' ? e.changedTouches[0].pageX : e.pageX;
          touchY = e.type === 'touchend' ? e.changedTouches[0].pageY : e.pageY;
        } else {
          touchX = image.touchesStart.x;
          touchY = image.touchesStart.y;
        }

        zoom.scale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;
        zoom.currentScale = gesture.$imageWrapEl.attr('data-swiper-zoom') || params.maxRatio;

        if (e) {
          slideWidth = gesture.$slideEl[0].offsetWidth;
          slideHeight = gesture.$slideEl[0].offsetHeight;
          offsetX = gesture.$slideEl.offset().left;
          offsetY = gesture.$slideEl.offset().top;
          diffX = offsetX + slideWidth / 2 - touchX;
          diffY = offsetY + slideHeight / 2 - touchY;
          imageWidth = gesture.$imageEl[0].offsetWidth;
          imageHeight = gesture.$imageEl[0].offsetHeight;
          scaledWidth = imageWidth * zoom.scale;
          scaledHeight = imageHeight * zoom.scale;
          translateMinX = Math.min(slideWidth / 2 - scaledWidth / 2, 0);
          translateMinY = Math.min(slideHeight / 2 - scaledHeight / 2, 0);
          translateMaxX = -translateMinX;
          translateMaxY = -translateMinY;
          translateX = diffX * zoom.scale;
          translateY = diffY * zoom.scale;

          if (translateX < translateMinX) {
            translateX = translateMinX;
          }

          if (translateX > translateMaxX) {
            translateX = translateMaxX;
          }

          if (translateY < translateMinY) {
            translateY = translateMinY;
          }

          if (translateY > translateMaxY) {
            translateY = translateMaxY;
          }
        } else {
          translateX = 0;
          translateY = 0;
        }

        gesture.$imageWrapEl.transition(300).transform("translate3d(" + translateX + "px, " + translateY + "px,0)");
        gesture.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + zoom.scale + ")");
      },
      out: function out() {
        var swiper = this;
        var zoom = swiper.zoom;
        var params = swiper.params.zoom;
        var gesture = zoom.gesture;

        if (!gesture.$slideEl) {
          gesture.$slideEl = swiper.slides.eq(swiper.activeIndex);
          gesture.$imageEl = gesture.$slideEl.find('img, svg, canvas, picture, .swiper-zoom-target');
          gesture.$imageWrapEl = gesture.$imageEl.parent("." + params.containerClass);
        }

        if (!gesture.$imageEl || gesture.$imageEl.length === 0) {
          return;
        }

        zoom.scale = 1;
        zoom.currentScale = 1;
        gesture.$imageWrapEl.transition(300).transform('translate3d(0,0,0)');
        gesture.$imageEl.transition(300).transform('translate3d(0,0,0) scale(1)');
        gesture.$slideEl.removeClass("" + params.zoomedSlideClass);
        gesture.$slideEl = undefined;
      },
      // Attach/Detach Events
      enable: function enable() {
        var swiper = this;
        var zoom = swiper.zoom;

        if (zoom.enabled) {
          return;
        }

        zoom.enabled = true;
        var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        var activeListenerWithCapture = Support.passiveListener ? {
          passive: false,
          capture: true
        } : true;
        var slideSelector = "." + swiper.params.slideClass; // Scale image

        if (Support.gestures) {
          swiper.$wrapperEl.on('gesturestart', slideSelector, zoom.onGestureStart, passiveListener);
          swiper.$wrapperEl.on('gesturechange', slideSelector, zoom.onGestureChange, passiveListener);
          swiper.$wrapperEl.on('gestureend', slideSelector, zoom.onGestureEnd, passiveListener);
        } else if (swiper.touchEvents.start === 'touchstart') {
          swiper.$wrapperEl.on(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
          swiper.$wrapperEl.on(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
          swiper.$wrapperEl.on(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);

          if (swiper.touchEvents.cancel) {
            swiper.$wrapperEl.on(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
          }
        } // Move image


        swiper.$wrapperEl.on(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
      },
      disable: function disable() {
        var swiper = this;
        var zoom = swiper.zoom;

        if (!zoom.enabled) {
          return;
        }

        swiper.zoom.enabled = false;
        var passiveListener = swiper.touchEvents.start === 'touchstart' && Support.passiveListener && swiper.params.passiveListeners ? {
          passive: true,
          capture: false
        } : false;
        var activeListenerWithCapture = Support.passiveListener ? {
          passive: false,
          capture: true
        } : true;
        var slideSelector = "." + swiper.params.slideClass; // Scale image

        if (Support.gestures) {
          swiper.$wrapperEl.off('gesturestart', slideSelector, zoom.onGestureStart, passiveListener);
          swiper.$wrapperEl.off('gesturechange', slideSelector, zoom.onGestureChange, passiveListener);
          swiper.$wrapperEl.off('gestureend', slideSelector, zoom.onGestureEnd, passiveListener);
        } else if (swiper.touchEvents.start === 'touchstart') {
          swiper.$wrapperEl.off(swiper.touchEvents.start, slideSelector, zoom.onGestureStart, passiveListener);
          swiper.$wrapperEl.off(swiper.touchEvents.move, slideSelector, zoom.onGestureChange, activeListenerWithCapture);
          swiper.$wrapperEl.off(swiper.touchEvents.end, slideSelector, zoom.onGestureEnd, passiveListener);

          if (swiper.touchEvents.cancel) {
            swiper.$wrapperEl.off(swiper.touchEvents.cancel, slideSelector, zoom.onGestureEnd, passiveListener);
          }
        } // Move image


        swiper.$wrapperEl.off(swiper.touchEvents.move, "." + swiper.params.zoom.containerClass, zoom.onTouchMove, activeListenerWithCapture);
      }
    };
    var Zoom$1 = {
      name: 'zoom',
      params: {
        zoom: {
          enabled: false,
          maxRatio: 3,
          minRatio: 1,
          toggle: true,
          containerClass: 'swiper-zoom-container',
          zoomedSlideClass: 'swiper-slide-zoomed'
        }
      },
      create: function create() {
        var swiper = this;
        var zoom = {
          enabled: false,
          scale: 1,
          currentScale: 1,
          isScaling: false,
          gesture: {
            $slideEl: undefined,
            slideWidth: undefined,
            slideHeight: undefined,
            $imageEl: undefined,
            $imageWrapEl: undefined,
            maxRatio: 3
          },
          image: {
            isTouched: undefined,
            isMoved: undefined,
            currentX: undefined,
            currentY: undefined,
            minX: undefined,
            minY: undefined,
            maxX: undefined,
            maxY: undefined,
            width: undefined,
            height: undefined,
            startX: undefined,
            startY: undefined,
            touchesStart: {},
            touchesCurrent: {}
          },
          velocity: {
            x: undefined,
            y: undefined,
            prevPositionX: undefined,
            prevPositionY: undefined,
            prevTime: undefined
          }
        };
        'onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out'.split(' ').forEach(function (methodName) {
          zoom[methodName] = Zoom[methodName].bind(swiper);
        });
        Utils.extend(swiper, {
          zoom: zoom
        });
        var scale = 1;
        Object.defineProperty(swiper.zoom, 'scale', {
          get: function get() {
            return scale;
          },
          set: function set(value) {
            if (scale !== value) {
              var imageEl = swiper.zoom.gesture.$imageEl ? swiper.zoom.gesture.$imageEl[0] : undefined;
              var slideEl = swiper.zoom.gesture.$slideEl ? swiper.zoom.gesture.$slideEl[0] : undefined;
              swiper.emit('zoomChange', value, imageEl, slideEl);
            }

            scale = value;
          }
        });
      },
      on: {
        init: function init() {
          var swiper = this;

          if (swiper.params.zoom.enabled) {
            swiper.zoom.enable();
          }
        },
        destroy: function destroy() {
          var swiper = this;
          swiper.zoom.disable();
        },
        touchStart: function touchStart(e) {
          var swiper = this;

          if (!swiper.zoom.enabled) {
            return;
          }

          swiper.zoom.onTouchStart(e);
        },
        touchEnd: function touchEnd(e) {
          var swiper = this;

          if (!swiper.zoom.enabled) {
            return;
          }

          swiper.zoom.onTouchEnd(e);
        },
        doubleTap: function doubleTap(e) {
          var swiper = this;

          if (swiper.params.zoom.enabled && swiper.zoom.enabled && swiper.params.zoom.toggle) {
            swiper.zoom.toggle(e);
          }
        },
        transitionEnd: function transitionEnd() {
          var swiper = this;

          if (swiper.zoom.enabled && swiper.params.zoom.enabled) {
            swiper.zoom.onTransitionEnd();
          }
        },
        slideChange: function slideChange() {
          var swiper = this;

          if (swiper.zoom.enabled && swiper.params.zoom.enabled && swiper.params.cssMode) {
            swiper.zoom.onTransitionEnd();
          }
        }
      }
    };
    var Lazy = {
      loadInSlide: function loadInSlide(index, loadInDuplicate) {
        if (loadInDuplicate === void 0) loadInDuplicate = true;
        var swiper = this;
        var params = swiper.params.lazy;

        if (typeof index === 'undefined') {
          return;
        }

        if (swiper.slides.length === 0) {
          return;
        }

        var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        var $slideEl = isVirtual ? swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-swiper-slide-index=\"" + index + "\"]") : swiper.slides.eq(index);
        var $images = $slideEl.find("." + params.elementClass + ":not(." + params.loadedClass + "):not(." + params.loadingClass + ")");

        if ($slideEl.hasClass(params.elementClass) && !$slideEl.hasClass(params.loadedClass) && !$slideEl.hasClass(params.loadingClass)) {
          $images = $images.add($slideEl[0]);
        }

        if ($images.length === 0) {
          return;
        }

        $images.each(function (imageIndex, imageEl) {
          var $imageEl = $(imageEl);
          $imageEl.addClass(params.loadingClass);
          var background = $imageEl.attr('data-background');
          var src = $imageEl.attr('data-src');
          var srcset = $imageEl.attr('data-srcset');
          var sizes = $imageEl.attr('data-sizes');
          swiper.loadImage($imageEl[0], src || background, srcset, sizes, false, function () {
            if (typeof swiper === 'undefined' || swiper === null || !swiper || swiper && !swiper.params || swiper.destroyed) {
              return;
            }

            if (background) {
              $imageEl.css('background-image', "url(\"" + background + "\")");
              $imageEl.removeAttr('data-background');
            } else {
              if (srcset) {
                $imageEl.attr('srcset', srcset);
                $imageEl.removeAttr('data-srcset');
              }

              if (sizes) {
                $imageEl.attr('sizes', sizes);
                $imageEl.removeAttr('data-sizes');
              }

              if (src) {
                $imageEl.attr('src', src);
                $imageEl.removeAttr('data-src');
              }
            }

            $imageEl.addClass(params.loadedClass).removeClass(params.loadingClass);
            $slideEl.find("." + params.preloaderClass).remove();

            if (swiper.params.loop && loadInDuplicate) {
              var slideOriginalIndex = $slideEl.attr('data-swiper-slide-index');

              if ($slideEl.hasClass(swiper.params.slideDuplicateClass)) {
                var originalSlide = swiper.$wrapperEl.children("[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]:not(." + swiper.params.slideDuplicateClass + ")");
                swiper.lazy.loadInSlide(originalSlide.index(), false);
              } else {
                var duplicatedSlide = swiper.$wrapperEl.children("." + swiper.params.slideDuplicateClass + "[data-swiper-slide-index=\"" + slideOriginalIndex + "\"]");
                swiper.lazy.loadInSlide(duplicatedSlide.index(), false);
              }
            }

            swiper.emit('lazyImageReady', $slideEl[0], $imageEl[0]);

            if (swiper.params.autoHeight) {
              swiper.updateAutoHeight();
            }
          });
          swiper.emit('lazyImageLoad', $slideEl[0], $imageEl[0]);
        });
      },
      load: function load() {
        var swiper = this;
        var $wrapperEl = swiper.$wrapperEl;
        var swiperParams = swiper.params;
        var slides = swiper.slides;
        var activeIndex = swiper.activeIndex;
        var isVirtual = swiper.virtual && swiperParams.virtual.enabled;
        var params = swiperParams.lazy;
        var slidesPerView = swiperParams.slidesPerView;

        if (slidesPerView === 'auto') {
          slidesPerView = 0;
        }

        function slideExist(index) {
          if (isVirtual) {
            if ($wrapperEl.children("." + swiperParams.slideClass + "[data-swiper-slide-index=\"" + index + "\"]").length) {
              return true;
            }
          } else if (slides[index]) {
            return true;
          }

          return false;
        }

        function slideIndex(slideEl) {
          if (isVirtual) {
            return $(slideEl).attr('data-swiper-slide-index');
          }

          return $(slideEl).index();
        }

        if (!swiper.lazy.initialImageLoaded) {
          swiper.lazy.initialImageLoaded = true;
        }

        if (swiper.params.watchSlidesVisibility) {
          $wrapperEl.children("." + swiperParams.slideVisibleClass).each(function (elIndex, slideEl) {
            var index = isVirtual ? $(slideEl).attr('data-swiper-slide-index') : $(slideEl).index();
            swiper.lazy.loadInSlide(index);
          });
        } else if (slidesPerView > 1) {
          for (var i = activeIndex; i < activeIndex + slidesPerView; i += 1) {
            if (slideExist(i)) {
              swiper.lazy.loadInSlide(i);
            }
          }
        } else {
          swiper.lazy.loadInSlide(activeIndex);
        }

        if (params.loadPrevNext) {
          if (slidesPerView > 1 || params.loadPrevNextAmount && params.loadPrevNextAmount > 1) {
            var amount = params.loadPrevNextAmount;
            var spv = slidesPerView;
            var maxIndex = Math.min(activeIndex + spv + Math.max(amount, spv), slides.length);
            var minIndex = Math.max(activeIndex - Math.max(spv, amount), 0); // Next Slides

            for (var i$1 = activeIndex + slidesPerView; i$1 < maxIndex; i$1 += 1) {
              if (slideExist(i$1)) {
                swiper.lazy.loadInSlide(i$1);
              }
            } // Prev Slides


            for (var i$2 = minIndex; i$2 < activeIndex; i$2 += 1) {
              if (slideExist(i$2)) {
                swiper.lazy.loadInSlide(i$2);
              }
            }
          } else {
            var nextSlide = $wrapperEl.children("." + swiperParams.slideNextClass);

            if (nextSlide.length > 0) {
              swiper.lazy.loadInSlide(slideIndex(nextSlide));
            }

            var prevSlide = $wrapperEl.children("." + swiperParams.slidePrevClass);

            if (prevSlide.length > 0) {
              swiper.lazy.loadInSlide(slideIndex(prevSlide));
            }
          }
        }
      }
    };
    var Lazy$1 = {
      name: 'lazy',
      params: {
        lazy: {
          enabled: false,
          loadPrevNext: false,
          loadPrevNextAmount: 1,
          loadOnTransitionStart: false,
          elementClass: 'swiper-lazy',
          loadingClass: 'swiper-lazy-loading',
          loadedClass: 'swiper-lazy-loaded',
          preloaderClass: 'swiper-lazy-preloader'
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          lazy: {
            initialImageLoaded: false,
            load: Lazy.load.bind(swiper),
            loadInSlide: Lazy.loadInSlide.bind(swiper)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var swiper = this;

          if (swiper.params.lazy.enabled && swiper.params.preloadImages) {
            swiper.params.preloadImages = false;
          }
        },
        init: function init() {
          var swiper = this;

          if (swiper.params.lazy.enabled && !swiper.params.loop && swiper.params.initialSlide === 0) {
            swiper.lazy.load();
          }
        },
        scroll: function scroll() {
          var swiper = this;

          if (swiper.params.freeMode && !swiper.params.freeModeSticky) {
            swiper.lazy.load();
          }
        },
        resize: function resize() {
          var swiper = this;

          if (swiper.params.lazy.enabled) {
            swiper.lazy.load();
          }
        },
        scrollbarDragMove: function scrollbarDragMove() {
          var swiper = this;

          if (swiper.params.lazy.enabled) {
            swiper.lazy.load();
          }
        },
        transitionStart: function transitionStart() {
          var swiper = this;

          if (swiper.params.lazy.enabled) {
            if (swiper.params.lazy.loadOnTransitionStart || !swiper.params.lazy.loadOnTransitionStart && !swiper.lazy.initialImageLoaded) {
              swiper.lazy.load();
            }
          }
        },
        transitionEnd: function transitionEnd() {
          var swiper = this;

          if (swiper.params.lazy.enabled && !swiper.params.lazy.loadOnTransitionStart) {
            swiper.lazy.load();
          }
        },
        slideChange: function slideChange() {
          var swiper = this;

          if (swiper.params.lazy.enabled && swiper.params.cssMode) {
            swiper.lazy.load();
          }
        }
      }
    };
    /* eslint no-bitwise: ["error", { "allow": [">>"] }] */

    var Controller = {
      LinearSpline: function LinearSpline(x, y) {
        var binarySearch = function search() {
          var maxIndex;
          var minIndex;
          var guess;
          return function (array, val) {
            minIndex = -1;
            maxIndex = array.length;

            while (maxIndex - minIndex > 1) {
              guess = maxIndex + minIndex >> 1;

              if (array[guess] <= val) {
                minIndex = guess;
              } else {
                maxIndex = guess;
              }
            }

            return maxIndex;
          };
        }();

        this.x = x;
        this.y = y;
        this.lastIndex = x.length - 1; // Given an x value (x2), return the expected y2 value:
        // (x1,y1) is the known point before given value,
        // (x3,y3) is the known point after given value.

        var i1;
        var i3;

        this.interpolate = function interpolate(x2) {
          if (!x2) {
            return 0;
          } // Get the indexes of x1 and x3 (the array indexes before and after given x2):


          i3 = binarySearch(this.x, x2);
          i1 = i3 - 1; // We have our indexes i1 & i3, so we can calculate already:
          // y2 := ((x2???x1) ?? (y3???y1)) ?? (x3???x1) + y1

          return (x2 - this.x[i1]) * (this.y[i3] - this.y[i1]) / (this.x[i3] - this.x[i1]) + this.y[i1];
        };

        return this;
      },
      // xxx: for now i will just save one spline function to to
      getInterpolateFunction: function getInterpolateFunction(c) {
        var swiper = this;

        if (!swiper.controller.spline) {
          swiper.controller.spline = swiper.params.loop ? new Controller.LinearSpline(swiper.slidesGrid, c.slidesGrid) : new Controller.LinearSpline(swiper.snapGrid, c.snapGrid);
        }
      },
      setTranslate: function setTranslate(setTranslate$1, byController) {
        var swiper = this;
        var controlled = swiper.controller.control;
        var multiplier;
        var controlledTranslate;

        function setControlledTranslate(c) {
          // this will create an Interpolate function based on the snapGrids
          // x is the Grid of the scrolled scroller and y will be the controlled scroller
          // it makes sense to create this only once and recall it for the interpolation
          // the function does a lot of value caching for performance
          var translate = swiper.rtlTranslate ? -swiper.translate : swiper.translate;

          if (swiper.params.controller.by === 'slide') {
            swiper.controller.getInterpolateFunction(c); // i am not sure why the values have to be multiplicated this way, tried to invert the snapGrid
            // but it did not work out

            controlledTranslate = -swiper.controller.spline.interpolate(-translate);
          }

          if (!controlledTranslate || swiper.params.controller.by === 'container') {
            multiplier = (c.maxTranslate() - c.minTranslate()) / (swiper.maxTranslate() - swiper.minTranslate());
            controlledTranslate = (translate - swiper.minTranslate()) * multiplier + c.minTranslate();
          }

          if (swiper.params.controller.inverse) {
            controlledTranslate = c.maxTranslate() - controlledTranslate;
          }

          c.updateProgress(controlledTranslate);
          c.setTranslate(controlledTranslate, swiper);
          c.updateActiveIndex();
          c.updateSlidesClasses();
        }

        if (Array.isArray(controlled)) {
          for (var i = 0; i < controlled.length; i += 1) {
            if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
              setControlledTranslate(controlled[i]);
            }
          }
        } else if (controlled instanceof Swiper && byController !== controlled) {
          setControlledTranslate(controlled);
        }
      },
      setTransition: function setTransition(duration, byController) {
        var swiper = this;
        var controlled = swiper.controller.control;
        var i;

        function setControlledTransition(c) {
          c.setTransition(duration, swiper);

          if (duration !== 0) {
            c.transitionStart();

            if (c.params.autoHeight) {
              Utils.nextTick(function () {
                c.updateAutoHeight();
              });
            }

            c.$wrapperEl.transitionEnd(function () {
              if (!controlled) {
                return;
              }

              if (c.params.loop && swiper.params.controller.by === 'slide') {
                c.loopFix();
              }

              c.transitionEnd();
            });
          }
        }

        if (Array.isArray(controlled)) {
          for (i = 0; i < controlled.length; i += 1) {
            if (controlled[i] !== byController && controlled[i] instanceof Swiper) {
              setControlledTransition(controlled[i]);
            }
          }
        } else if (controlled instanceof Swiper && byController !== controlled) {
          setControlledTransition(controlled);
        }
      }
    };
    var Controller$1 = {
      name: 'controller',
      params: {
        controller: {
          control: undefined,
          inverse: false,
          by: 'slide' // or 'container'

        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          controller: {
            control: swiper.params.controller.control,
            getInterpolateFunction: Controller.getInterpolateFunction.bind(swiper),
            setTranslate: Controller.setTranslate.bind(swiper),
            setTransition: Controller.setTransition.bind(swiper)
          }
        });
      },
      on: {
        update: function update() {
          var swiper = this;

          if (!swiper.controller.control) {
            return;
          }

          if (swiper.controller.spline) {
            swiper.controller.spline = undefined;
            delete swiper.controller.spline;
          }
        },
        resize: function resize() {
          var swiper = this;

          if (!swiper.controller.control) {
            return;
          }

          if (swiper.controller.spline) {
            swiper.controller.spline = undefined;
            delete swiper.controller.spline;
          }
        },
        observerUpdate: function observerUpdate() {
          var swiper = this;

          if (!swiper.controller.control) {
            return;
          }

          if (swiper.controller.spline) {
            swiper.controller.spline = undefined;
            delete swiper.controller.spline;
          }
        },
        setTranslate: function setTranslate(translate, byController) {
          var swiper = this;

          if (!swiper.controller.control) {
            return;
          }

          swiper.controller.setTranslate(translate, byController);
        },
        setTransition: function setTransition(duration, byController) {
          var swiper = this;

          if (!swiper.controller.control) {
            return;
          }

          swiper.controller.setTransition(duration, byController);
        }
      }
    };
    var a11y = {
      makeElFocusable: function makeElFocusable($el) {
        $el.attr('tabIndex', '0');
        return $el;
      },
      addElRole: function addElRole($el, role) {
        $el.attr('role', role);
        return $el;
      },
      addElLabel: function addElLabel($el, label) {
        $el.attr('aria-label', label);
        return $el;
      },
      disableEl: function disableEl($el) {
        $el.attr('aria-disabled', true);
        return $el;
      },
      enableEl: function enableEl($el) {
        $el.attr('aria-disabled', false);
        return $el;
      },
      onEnterKey: function onEnterKey(e) {
        var swiper = this;
        var params = swiper.params.a11y;

        if (e.keyCode !== 13) {
          return;
        }

        var $targetEl = $(e.target);

        if (swiper.navigation && swiper.navigation.$nextEl && $targetEl.is(swiper.navigation.$nextEl)) {
          if (!(swiper.isEnd && !swiper.params.loop)) {
            swiper.slideNext();
          }

          if (swiper.isEnd) {
            swiper.a11y.notify(params.lastSlideMessage);
          } else {
            swiper.a11y.notify(params.nextSlideMessage);
          }
        }

        if (swiper.navigation && swiper.navigation.$prevEl && $targetEl.is(swiper.navigation.$prevEl)) {
          if (!(swiper.isBeginning && !swiper.params.loop)) {
            swiper.slidePrev();
          }

          if (swiper.isBeginning) {
            swiper.a11y.notify(params.firstSlideMessage);
          } else {
            swiper.a11y.notify(params.prevSlideMessage);
          }
        }

        if (swiper.pagination && $targetEl.is("." + swiper.params.pagination.bulletClass)) {
          $targetEl[0].click();
        }
      },
      notify: function notify(message) {
        var swiper = this;
        var notification = swiper.a11y.liveRegion;

        if (notification.length === 0) {
          return;
        }

        notification.html('');
        notification.html(message);
      },
      updateNavigation: function updateNavigation() {
        var swiper = this;

        if (swiper.params.loop || !swiper.navigation) {
          return;
        }

        var ref = swiper.navigation;
        var $nextEl = ref.$nextEl;
        var $prevEl = ref.$prevEl;

        if ($prevEl && $prevEl.length > 0) {
          if (swiper.isBeginning) {
            swiper.a11y.disableEl($prevEl);
          } else {
            swiper.a11y.enableEl($prevEl);
          }
        }

        if ($nextEl && $nextEl.length > 0) {
          if (swiper.isEnd) {
            swiper.a11y.disableEl($nextEl);
          } else {
            swiper.a11y.enableEl($nextEl);
          }
        }
      },
      updatePagination: function updatePagination() {
        var swiper = this;
        var params = swiper.params.a11y;

        if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
          swiper.pagination.bullets.each(function (bulletIndex, bulletEl) {
            var $bulletEl = $(bulletEl);
            swiper.a11y.makeElFocusable($bulletEl);
            swiper.a11y.addElRole($bulletEl, 'button');
            swiper.a11y.addElLabel($bulletEl, params.paginationBulletMessage.replace(/{{index}}/, $bulletEl.index() + 1));
          });
        }
      },
      init: function init() {
        var swiper = this;
        swiper.$el.append(swiper.a11y.liveRegion); // Navigation

        var params = swiper.params.a11y;
        var $nextEl;
        var $prevEl;

        if (swiper.navigation && swiper.navigation.$nextEl) {
          $nextEl = swiper.navigation.$nextEl;
        }

        if (swiper.navigation && swiper.navigation.$prevEl) {
          $prevEl = swiper.navigation.$prevEl;
        }

        if ($nextEl) {
          swiper.a11y.makeElFocusable($nextEl);
          swiper.a11y.addElRole($nextEl, 'button');
          swiper.a11y.addElLabel($nextEl, params.nextSlideMessage);
          $nextEl.on('keydown', swiper.a11y.onEnterKey);
        }

        if ($prevEl) {
          swiper.a11y.makeElFocusable($prevEl);
          swiper.a11y.addElRole($prevEl, 'button');
          swiper.a11y.addElLabel($prevEl, params.prevSlideMessage);
          $prevEl.on('keydown', swiper.a11y.onEnterKey);
        } // Pagination


        if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
          swiper.pagination.$el.on('keydown', "." + swiper.params.pagination.bulletClass, swiper.a11y.onEnterKey);
        }
      },
      destroy: function destroy() {
        var swiper = this;

        if (swiper.a11y.liveRegion && swiper.a11y.liveRegion.length > 0) {
          swiper.a11y.liveRegion.remove();
        }

        var $nextEl;
        var $prevEl;

        if (swiper.navigation && swiper.navigation.$nextEl) {
          $nextEl = swiper.navigation.$nextEl;
        }

        if (swiper.navigation && swiper.navigation.$prevEl) {
          $prevEl = swiper.navigation.$prevEl;
        }

        if ($nextEl) {
          $nextEl.off('keydown', swiper.a11y.onEnterKey);
        }

        if ($prevEl) {
          $prevEl.off('keydown', swiper.a11y.onEnterKey);
        } // Pagination


        if (swiper.pagination && swiper.params.pagination.clickable && swiper.pagination.bullets && swiper.pagination.bullets.length) {
          swiper.pagination.$el.off('keydown', "." + swiper.params.pagination.bulletClass, swiper.a11y.onEnterKey);
        }
      }
    };
    var A11y = {
      name: 'a11y',
      params: {
        a11y: {
          enabled: true,
          notificationClass: 'swiper-notification',
          prevSlideMessage: 'Previous slide',
          nextSlideMessage: 'Next slide',
          firstSlideMessage: 'This is the first slide',
          lastSlideMessage: 'This is the last slide',
          paginationBulletMessage: 'Go to slide {{index}}'
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          a11y: {
            liveRegion: $("<span class=\"" + swiper.params.a11y.notificationClass + "\" aria-live=\"assertive\" aria-atomic=\"true\"></span>")
          }
        });
        Object.keys(a11y).forEach(function (methodName) {
          swiper.a11y[methodName] = a11y[methodName].bind(swiper);
        });
      },
      on: {
        init: function init() {
          var swiper = this;

          if (!swiper.params.a11y.enabled) {
            return;
          }

          swiper.a11y.init();
          swiper.a11y.updateNavigation();
        },
        toEdge: function toEdge() {
          var swiper = this;

          if (!swiper.params.a11y.enabled) {
            return;
          }

          swiper.a11y.updateNavigation();
        },
        fromEdge: function fromEdge() {
          var swiper = this;

          if (!swiper.params.a11y.enabled) {
            return;
          }

          swiper.a11y.updateNavigation();
        },
        paginationUpdate: function paginationUpdate() {
          var swiper = this;

          if (!swiper.params.a11y.enabled) {
            return;
          }

          swiper.a11y.updatePagination();
        },
        destroy: function destroy() {
          var swiper = this;

          if (!swiper.params.a11y.enabled) {
            return;
          }

          swiper.a11y.destroy();
        }
      }
    };
    var History = {
      init: function init() {
        var swiper = this;

        if (!swiper.params.history) {
          return;
        }

        if (!win.history || !win.history.pushState) {
          swiper.params.history.enabled = false;
          swiper.params.hashNavigation.enabled = true;
          return;
        }

        var history = swiper.history;
        history.initialized = true;
        history.paths = History.getPathValues();

        if (!history.paths.key && !history.paths.value) {
          return;
        }

        history.scrollToSlide(0, history.paths.value, swiper.params.runCallbacksOnInit);

        if (!swiper.params.history.replaceState) {
          win.addEventListener('popstate', swiper.history.setHistoryPopState);
        }
      },
      destroy: function destroy() {
        var swiper = this;

        if (!swiper.params.history.replaceState) {
          win.removeEventListener('popstate', swiper.history.setHistoryPopState);
        }
      },
      setHistoryPopState: function setHistoryPopState() {
        var swiper = this;
        swiper.history.paths = History.getPathValues();
        swiper.history.scrollToSlide(swiper.params.speed, swiper.history.paths.value, false);
      },
      getPathValues: function getPathValues() {
        var pathArray = win.location.pathname.slice(1).split('/').filter(function (part) {
          return part !== '';
        });
        var total = pathArray.length;
        var key = pathArray[total - 2];
        var value = pathArray[total - 1];
        return {
          key: key,
          value: value
        };
      },
      setHistory: function setHistory(key, index) {
        var swiper = this;

        if (!swiper.history.initialized || !swiper.params.history.enabled) {
          return;
        }

        var slide = swiper.slides.eq(index);
        var value = History.slugify(slide.attr('data-history'));

        if (!win.location.pathname.includes(key)) {
          value = key + "/" + value;
        }

        var currentState = win.history.state;

        if (currentState && currentState.value === value) {
          return;
        }

        if (swiper.params.history.replaceState) {
          win.history.replaceState({
            value: value
          }, null, value);
        } else {
          win.history.pushState({
            value: value
          }, null, value);
        }
      },
      slugify: function slugify(text) {
        return text.toString().replace(/\s+/g, '-').replace(/[^\w-]+/g, '').replace(/--+/g, '-').replace(/^-+/, '').replace(/-+$/, '');
      },
      scrollToSlide: function scrollToSlide(speed, value, runCallbacks) {
        var swiper = this;

        if (value) {
          for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
            var slide = swiper.slides.eq(i);
            var slideHistory = History.slugify(slide.attr('data-history'));

            if (slideHistory === value && !slide.hasClass(swiper.params.slideDuplicateClass)) {
              var index = slide.index();
              swiper.slideTo(index, speed, runCallbacks);
            }
          }
        } else {
          swiper.slideTo(0, speed, runCallbacks);
        }
      }
    };
    var History$1 = {
      name: 'history',
      params: {
        history: {
          enabled: false,
          replaceState: false,
          key: 'slides'
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          history: {
            init: History.init.bind(swiper),
            setHistory: History.setHistory.bind(swiper),
            setHistoryPopState: History.setHistoryPopState.bind(swiper),
            scrollToSlide: History.scrollToSlide.bind(swiper),
            destroy: History.destroy.bind(swiper)
          }
        });
      },
      on: {
        init: function init() {
          var swiper = this;

          if (swiper.params.history.enabled) {
            swiper.history.init();
          }
        },
        destroy: function destroy() {
          var swiper = this;

          if (swiper.params.history.enabled) {
            swiper.history.destroy();
          }
        },
        transitionEnd: function transitionEnd() {
          var swiper = this;

          if (swiper.history.initialized) {
            swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
          }
        },
        slideChange: function slideChange() {
          var swiper = this;

          if (swiper.history.initialized && swiper.params.cssMode) {
            swiper.history.setHistory(swiper.params.history.key, swiper.activeIndex);
          }
        }
      }
    };
    var HashNavigation = {
      onHashCange: function onHashCange() {
        var swiper = this;
        var newHash = doc.location.hash.replace('#', '');
        var activeSlideHash = swiper.slides.eq(swiper.activeIndex).attr('data-hash');

        if (newHash !== activeSlideHash) {
          var newIndex = swiper.$wrapperEl.children("." + swiper.params.slideClass + "[data-hash=\"" + newHash + "\"]").index();

          if (typeof newIndex === 'undefined') {
            return;
          }

          swiper.slideTo(newIndex);
        }
      },
      setHash: function setHash() {
        var swiper = this;

        if (!swiper.hashNavigation.initialized || !swiper.params.hashNavigation.enabled) {
          return;
        }

        if (swiper.params.hashNavigation.replaceState && win.history && win.history.replaceState) {
          win.history.replaceState(null, null, "#" + swiper.slides.eq(swiper.activeIndex).attr('data-hash') || false);
        } else {
          var slide = swiper.slides.eq(swiper.activeIndex);
          var hash = slide.attr('data-hash') || slide.attr('data-history');
          doc.location.hash = hash || '';
        }
      },
      init: function init() {
        var swiper = this;

        if (!swiper.params.hashNavigation.enabled || swiper.params.history && swiper.params.history.enabled) {
          return;
        }

        swiper.hashNavigation.initialized = true;
        var hash = doc.location.hash.replace('#', '');

        if (hash) {
          var speed = 0;

          for (var i = 0, length = swiper.slides.length; i < length; i += 1) {
            var slide = swiper.slides.eq(i);
            var slideHash = slide.attr('data-hash') || slide.attr('data-history');

            if (slideHash === hash && !slide.hasClass(swiper.params.slideDuplicateClass)) {
              var index = slide.index();
              swiper.slideTo(index, speed, swiper.params.runCallbacksOnInit, true);
            }
          }
        }

        if (swiper.params.hashNavigation.watchState) {
          $(win).on('hashchange', swiper.hashNavigation.onHashCange);
        }
      },
      destroy: function destroy() {
        var swiper = this;

        if (swiper.params.hashNavigation.watchState) {
          $(win).off('hashchange', swiper.hashNavigation.onHashCange);
        }
      }
    };
    var HashNavigation$1 = {
      name: 'hash-navigation',
      params: {
        hashNavigation: {
          enabled: false,
          replaceState: false,
          watchState: false
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          hashNavigation: {
            initialized: false,
            init: HashNavigation.init.bind(swiper),
            destroy: HashNavigation.destroy.bind(swiper),
            setHash: HashNavigation.setHash.bind(swiper),
            onHashCange: HashNavigation.onHashCange.bind(swiper)
          }
        });
      },
      on: {
        init: function init() {
          var swiper = this;

          if (swiper.params.hashNavigation.enabled) {
            swiper.hashNavigation.init();
          }
        },
        destroy: function destroy() {
          var swiper = this;

          if (swiper.params.hashNavigation.enabled) {
            swiper.hashNavigation.destroy();
          }
        },
        transitionEnd: function transitionEnd() {
          var swiper = this;

          if (swiper.hashNavigation.initialized) {
            swiper.hashNavigation.setHash();
          }
        },
        slideChange: function slideChange() {
          var swiper = this;

          if (swiper.hashNavigation.initialized && swiper.params.cssMode) {
            swiper.hashNavigation.setHash();
          }
        }
      }
    };
    /* eslint no-underscore-dangle: "off" */

    var Autoplay = {
      run: function run() {
        var swiper = this;
        var $activeSlideEl = swiper.slides.eq(swiper.activeIndex);
        var delay = swiper.params.autoplay.delay;

        if ($activeSlideEl.attr('data-swiper-autoplay')) {
          delay = $activeSlideEl.attr('data-swiper-autoplay') || swiper.params.autoplay.delay;
        }

        clearTimeout(swiper.autoplay.timeout);
        swiper.autoplay.timeout = Utils.nextTick(function () {
          if (swiper.params.autoplay.reverseDirection) {
            if (swiper.params.loop) {
              swiper.loopFix();
              swiper.slidePrev(swiper.params.speed, true, true);
              swiper.emit('autoplay');
            } else if (!swiper.isBeginning) {
              swiper.slidePrev(swiper.params.speed, true, true);
              swiper.emit('autoplay');
            } else if (!swiper.params.autoplay.stopOnLastSlide) {
              swiper.slideTo(swiper.slides.length - 1, swiper.params.speed, true, true);
              swiper.emit('autoplay');
            } else {
              swiper.autoplay.stop();
            }
          } else if (swiper.params.loop) {
            swiper.loopFix();
            swiper.slideNext(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.isEnd) {
            swiper.slideNext(swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else if (!swiper.params.autoplay.stopOnLastSlide) {
            swiper.slideTo(0, swiper.params.speed, true, true);
            swiper.emit('autoplay');
          } else {
            swiper.autoplay.stop();
          }

          if (swiper.params.cssMode && swiper.autoplay.running) {
            swiper.autoplay.run();
          }
        }, delay);
      },
      start: function start() {
        var swiper = this;

        if (typeof swiper.autoplay.timeout !== 'undefined') {
          return false;
        }

        if (swiper.autoplay.running) {
          return false;
        }

        swiper.autoplay.running = true;
        swiper.emit('autoplayStart');
        swiper.autoplay.run();
        return true;
      },
      stop: function stop() {
        var swiper = this;

        if (!swiper.autoplay.running) {
          return false;
        }

        if (typeof swiper.autoplay.timeout === 'undefined') {
          return false;
        }

        if (swiper.autoplay.timeout) {
          clearTimeout(swiper.autoplay.timeout);
          swiper.autoplay.timeout = undefined;
        }

        swiper.autoplay.running = false;
        swiper.emit('autoplayStop');
        return true;
      },
      pause: function pause(speed) {
        var swiper = this;

        if (!swiper.autoplay.running) {
          return;
        }

        if (swiper.autoplay.paused) {
          return;
        }

        if (swiper.autoplay.timeout) {
          clearTimeout(swiper.autoplay.timeout);
        }

        swiper.autoplay.paused = true;

        if (speed === 0 || !swiper.params.autoplay.waitForTransition) {
          swiper.autoplay.paused = false;
          swiper.autoplay.run();
        } else {
          swiper.$wrapperEl[0].addEventListener('transitionend', swiper.autoplay.onTransitionEnd);
          swiper.$wrapperEl[0].addEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
        }
      }
    };
    var Autoplay$1 = {
      name: 'autoplay',
      params: {
        autoplay: {
          enabled: false,
          delay: 3000,
          waitForTransition: true,
          disableOnInteraction: true,
          stopOnLastSlide: false,
          reverseDirection: false
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          autoplay: {
            running: false,
            paused: false,
            run: Autoplay.run.bind(swiper),
            start: Autoplay.start.bind(swiper),
            stop: Autoplay.stop.bind(swiper),
            pause: Autoplay.pause.bind(swiper),
            onVisibilityChange: function onVisibilityChange() {
              if (document.visibilityState === 'hidden' && swiper.autoplay.running) {
                swiper.autoplay.pause();
              }

              if (document.visibilityState === 'visible' && swiper.autoplay.paused) {
                swiper.autoplay.run();
                swiper.autoplay.paused = false;
              }
            },
            onTransitionEnd: function onTransitionEnd(e) {
              if (!swiper || swiper.destroyed || !swiper.$wrapperEl) {
                return;
              }

              if (e.target !== this) {
                return;
              }

              swiper.$wrapperEl[0].removeEventListener('transitionend', swiper.autoplay.onTransitionEnd);
              swiper.$wrapperEl[0].removeEventListener('webkitTransitionEnd', swiper.autoplay.onTransitionEnd);
              swiper.autoplay.paused = false;

              if (!swiper.autoplay.running) {
                swiper.autoplay.stop();
              } else {
                swiper.autoplay.run();
              }
            }
          }
        });
      },
      on: {
        init: function init() {
          var swiper = this;

          if (swiper.params.autoplay.enabled) {
            swiper.autoplay.start();
            document.addEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
          }
        },
        beforeTransitionStart: function beforeTransitionStart(speed, internal) {
          var swiper = this;

          if (swiper.autoplay.running) {
            if (internal || !swiper.params.autoplay.disableOnInteraction) {
              swiper.autoplay.pause(speed);
            } else {
              swiper.autoplay.stop();
            }
          }
        },
        sliderFirstMove: function sliderFirstMove() {
          var swiper = this;

          if (swiper.autoplay.running) {
            if (swiper.params.autoplay.disableOnInteraction) {
              swiper.autoplay.stop();
            } else {
              swiper.autoplay.pause();
            }
          }
        },
        touchEnd: function touchEnd() {
          var swiper = this;

          if (swiper.params.cssMode && swiper.autoplay.paused && !swiper.params.autoplay.disableOnInteraction) {
            swiper.autoplay.run();
          }
        },
        destroy: function destroy() {
          var swiper = this;

          if (swiper.autoplay.running) {
            swiper.autoplay.stop();
          }

          document.removeEventListener('visibilitychange', swiper.autoplay.onVisibilityChange);
        }
      }
    };
    var Fade = {
      setTranslate: function setTranslate() {
        var swiper = this;
        var slides = swiper.slides;

        for (var i = 0; i < slides.length; i += 1) {
          var $slideEl = swiper.slides.eq(i);
          var offset = $slideEl[0].swiperSlideOffset;
          var tx = -offset;

          if (!swiper.params.virtualTranslate) {
            tx -= swiper.translate;
          }

          var ty = 0;

          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
          }

          var slideOpacity = swiper.params.fadeEffect.crossFade ? Math.max(1 - Math.abs($slideEl[0].progress), 0) : 1 + Math.min(Math.max($slideEl[0].progress, -1), 0);
          $slideEl.css({
            opacity: slideOpacity
          }).transform("translate3d(" + tx + "px, " + ty + "px, 0px)");
        }
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        var slides = swiper.slides;
        var $wrapperEl = swiper.$wrapperEl;
        slides.transition(duration);

        if (swiper.params.virtualTranslate && duration !== 0) {
          var eventTriggered = false;
          slides.transitionEnd(function () {
            if (eventTriggered) {
              return;
            }

            if (!swiper || swiper.destroyed) {
              return;
            }

            eventTriggered = true;
            swiper.animating = false;
            var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

            for (var i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      }
    };
    var EffectFade = {
      name: 'effect-fade',
      params: {
        fadeEffect: {
          crossFade: false
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          fadeEffect: {
            setTranslate: Fade.setTranslate.bind(swiper),
            setTransition: Fade.setTransition.bind(swiper)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var swiper = this;

          if (swiper.params.effect !== 'fade') {
            return;
          }

          swiper.classNames.push(swiper.params.containerModifierClass + "fade");
          var overwriteParams = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            spaceBetween: 0,
            virtualTranslate: true
          };
          Utils.extend(swiper.params, overwriteParams);
          Utils.extend(swiper.originalParams, overwriteParams);
        },
        setTranslate: function setTranslate() {
          var swiper = this;

          if (swiper.params.effect !== 'fade') {
            return;
          }

          swiper.fadeEffect.setTranslate();
        },
        setTransition: function setTransition(duration) {
          var swiper = this;

          if (swiper.params.effect !== 'fade') {
            return;
          }

          swiper.fadeEffect.setTransition(duration);
        }
      }
    };
    var Cube = {
      setTranslate: function setTranslate() {
        var swiper = this;
        var $el = swiper.$el;
        var $wrapperEl = swiper.$wrapperEl;
        var slides = swiper.slides;
        var swiperWidth = swiper.width;
        var swiperHeight = swiper.height;
        var rtl = swiper.rtlTranslate;
        var swiperSize = swiper.size;
        var params = swiper.params.cubeEffect;
        var isHorizontal = swiper.isHorizontal();
        var isVirtual = swiper.virtual && swiper.params.virtual.enabled;
        var wrapperRotate = 0;
        var $cubeShadowEl;

        if (params.shadow) {
          if (isHorizontal) {
            $cubeShadowEl = $wrapperEl.find('.swiper-cube-shadow');

            if ($cubeShadowEl.length === 0) {
              $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
              $wrapperEl.append($cubeShadowEl);
            }

            $cubeShadowEl.css({
              height: swiperWidth + "px"
            });
          } else {
            $cubeShadowEl = $el.find('.swiper-cube-shadow');

            if ($cubeShadowEl.length === 0) {
              $cubeShadowEl = $('<div class="swiper-cube-shadow"></div>');
              $el.append($cubeShadowEl);
            }
          }
        }

        for (var i = 0; i < slides.length; i += 1) {
          var $slideEl = slides.eq(i);
          var slideIndex = i;

          if (isVirtual) {
            slideIndex = parseInt($slideEl.attr('data-swiper-slide-index'), 10);
          }

          var slideAngle = slideIndex * 90;
          var round = Math.floor(slideAngle / 360);

          if (rtl) {
            slideAngle = -slideAngle;
            round = Math.floor(-slideAngle / 360);
          }

          var progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          var tx = 0;
          var ty = 0;
          var tz = 0;

          if (slideIndex % 4 === 0) {
            tx = -round * 4 * swiperSize;
            tz = 0;
          } else if ((slideIndex - 1) % 4 === 0) {
            tx = 0;
            tz = -round * 4 * swiperSize;
          } else if ((slideIndex - 2) % 4 === 0) {
            tx = swiperSize + round * 4 * swiperSize;
            tz = swiperSize;
          } else if ((slideIndex - 3) % 4 === 0) {
            tx = -swiperSize;
            tz = 3 * swiperSize + swiperSize * 4 * round;
          }

          if (rtl) {
            tx = -tx;
          }

          if (!isHorizontal) {
            ty = tx;
            tx = 0;
          }

          var transform = "rotateX(" + (isHorizontal ? 0 : -slideAngle) + "deg) rotateY(" + (isHorizontal ? slideAngle : 0) + "deg) translate3d(" + tx + "px, " + ty + "px, " + tz + "px)";

          if (progress <= 1 && progress > -1) {
            wrapperRotate = slideIndex * 90 + progress * 90;

            if (rtl) {
              wrapperRotate = -slideIndex * 90 - progress * 90;
            }
          }

          $slideEl.transform(transform);

          if (params.slideShadows) {
            // Set shadows
            var shadowBefore = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            var shadowAfter = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

            if (shadowBefore.length === 0) {
              shadowBefore = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
              $slideEl.append(shadowBefore);
            }

            if (shadowAfter.length === 0) {
              shadowAfter = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
              $slideEl.append(shadowAfter);
            }

            if (shadowBefore.length) {
              shadowBefore[0].style.opacity = Math.max(-progress, 0);
            }

            if (shadowAfter.length) {
              shadowAfter[0].style.opacity = Math.max(progress, 0);
            }
          }
        }

        $wrapperEl.css({
          '-webkit-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
          '-moz-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
          '-ms-transform-origin': "50% 50% -" + swiperSize / 2 + "px",
          'transform-origin': "50% 50% -" + swiperSize / 2 + "px"
        });

        if (params.shadow) {
          if (isHorizontal) {
            $cubeShadowEl.transform("translate3d(0px, " + (swiperWidth / 2 + params.shadowOffset) + "px, " + -swiperWidth / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + params.shadowScale + ")");
          } else {
            var shadowAngle = Math.abs(wrapperRotate) - Math.floor(Math.abs(wrapperRotate) / 90) * 90;
            var multiplier = 1.5 - (Math.sin(shadowAngle * 2 * Math.PI / 360) / 2 + Math.cos(shadowAngle * 2 * Math.PI / 360) / 2);
            var scale1 = params.shadowScale;
            var scale2 = params.shadowScale / multiplier;
            var offset = params.shadowOffset;
            $cubeShadowEl.transform("scale3d(" + scale1 + ", 1, " + scale2 + ") translate3d(0px, " + (swiperHeight / 2 + offset) + "px, " + -swiperHeight / 2 / scale2 + "px) rotateX(-90deg)");
          }
        }

        var zFactor = Browser.isSafari || Browser.isUiWebView ? -swiperSize / 2 : 0;
        $wrapperEl.transform("translate3d(0px,0," + zFactor + "px) rotateX(" + (swiper.isHorizontal() ? 0 : wrapperRotate) + "deg) rotateY(" + (swiper.isHorizontal() ? -wrapperRotate : 0) + "deg)");
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        var $el = swiper.$el;
        var slides = swiper.slides;
        slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

        if (swiper.params.cubeEffect.shadow && !swiper.isHorizontal()) {
          $el.find('.swiper-cube-shadow').transition(duration);
        }
      }
    };
    var EffectCube = {
      name: 'effect-cube',
      params: {
        cubeEffect: {
          slideShadows: true,
          shadow: true,
          shadowOffset: 20,
          shadowScale: 0.94
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          cubeEffect: {
            setTranslate: Cube.setTranslate.bind(swiper),
            setTransition: Cube.setTransition.bind(swiper)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var swiper = this;

          if (swiper.params.effect !== 'cube') {
            return;
          }

          swiper.classNames.push(swiper.params.containerModifierClass + "cube");
          swiper.classNames.push(swiper.params.containerModifierClass + "3d");
          var overwriteParams = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            resistanceRatio: 0,
            spaceBetween: 0,
            centeredSlides: false,
            virtualTranslate: true
          };
          Utils.extend(swiper.params, overwriteParams);
          Utils.extend(swiper.originalParams, overwriteParams);
        },
        setTranslate: function setTranslate() {
          var swiper = this;

          if (swiper.params.effect !== 'cube') {
            return;
          }

          swiper.cubeEffect.setTranslate();
        },
        setTransition: function setTransition(duration) {
          var swiper = this;

          if (swiper.params.effect !== 'cube') {
            return;
          }

          swiper.cubeEffect.setTransition(duration);
        }
      }
    };
    var Flip = {
      setTranslate: function setTranslate() {
        var swiper = this;
        var slides = swiper.slides;
        var rtl = swiper.rtlTranslate;

        for (var i = 0; i < slides.length; i += 1) {
          var $slideEl = slides.eq(i);
          var progress = $slideEl[0].progress;

          if (swiper.params.flipEffect.limitRotation) {
            progress = Math.max(Math.min($slideEl[0].progress, 1), -1);
          }

          var offset = $slideEl[0].swiperSlideOffset;
          var rotate = -180 * progress;
          var rotateY = rotate;
          var rotateX = 0;
          var tx = -offset;
          var ty = 0;

          if (!swiper.isHorizontal()) {
            ty = tx;
            tx = 0;
            rotateX = -rotateY;
            rotateY = 0;
          } else if (rtl) {
            rotateY = -rotateY;
          }

          $slideEl[0].style.zIndex = -Math.abs(Math.round(progress)) + slides.length;

          if (swiper.params.flipEffect.slideShadows) {
            // Set shadows
            var shadowBefore = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            var shadowAfter = swiper.isHorizontal() ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

            if (shadowBefore.length === 0) {
              shadowBefore = $("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'left' : 'top') + "\"></div>");
              $slideEl.append(shadowBefore);
            }

            if (shadowAfter.length === 0) {
              shadowAfter = $("<div class=\"swiper-slide-shadow-" + (swiper.isHorizontal() ? 'right' : 'bottom') + "\"></div>");
              $slideEl.append(shadowAfter);
            }

            if (shadowBefore.length) {
              shadowBefore[0].style.opacity = Math.max(-progress, 0);
            }

            if (shadowAfter.length) {
              shadowAfter[0].style.opacity = Math.max(progress, 0);
            }
          }

          $slideEl.transform("translate3d(" + tx + "px, " + ty + "px, 0px) rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)");
        }
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        var slides = swiper.slides;
        var activeIndex = swiper.activeIndex;
        var $wrapperEl = swiper.$wrapperEl;
        slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);

        if (swiper.params.virtualTranslate && duration !== 0) {
          var eventTriggered = false; // eslint-disable-next-line

          slides.eq(activeIndex).transitionEnd(function onTransitionEnd() {
            if (eventTriggered) {
              return;
            }

            if (!swiper || swiper.destroyed) {
              return;
            } // if (!$(this).hasClass(swiper.params.slideActiveClass)) return;


            eventTriggered = true;
            swiper.animating = false;
            var triggerEvents = ['webkitTransitionEnd', 'transitionend'];

            for (var i = 0; i < triggerEvents.length; i += 1) {
              $wrapperEl.trigger(triggerEvents[i]);
            }
          });
        }
      }
    };
    var EffectFlip = {
      name: 'effect-flip',
      params: {
        flipEffect: {
          slideShadows: true,
          limitRotation: true
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          flipEffect: {
            setTranslate: Flip.setTranslate.bind(swiper),
            setTransition: Flip.setTransition.bind(swiper)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var swiper = this;

          if (swiper.params.effect !== 'flip') {
            return;
          }

          swiper.classNames.push(swiper.params.containerModifierClass + "flip");
          swiper.classNames.push(swiper.params.containerModifierClass + "3d");
          var overwriteParams = {
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerGroup: 1,
            watchSlidesProgress: true,
            spaceBetween: 0,
            virtualTranslate: true
          };
          Utils.extend(swiper.params, overwriteParams);
          Utils.extend(swiper.originalParams, overwriteParams);
        },
        setTranslate: function setTranslate() {
          var swiper = this;

          if (swiper.params.effect !== 'flip') {
            return;
          }

          swiper.flipEffect.setTranslate();
        },
        setTransition: function setTransition(duration) {
          var swiper = this;

          if (swiper.params.effect !== 'flip') {
            return;
          }

          swiper.flipEffect.setTransition(duration);
        }
      }
    };
    var Coverflow = {
      setTranslate: function setTranslate() {
        var swiper = this;
        var swiperWidth = swiper.width;
        var swiperHeight = swiper.height;
        var slides = swiper.slides;
        var $wrapperEl = swiper.$wrapperEl;
        var slidesSizesGrid = swiper.slidesSizesGrid;
        var params = swiper.params.coverflowEffect;
        var isHorizontal = swiper.isHorizontal();
        var transform = swiper.translate;
        var center = isHorizontal ? -transform + swiperWidth / 2 : -transform + swiperHeight / 2;
        var rotate = isHorizontal ? params.rotate : -params.rotate;
        var translate = params.depth; // Each slide offset from center

        for (var i = 0, length = slides.length; i < length; i += 1) {
          var $slideEl = slides.eq(i);
          var slideSize = slidesSizesGrid[i];
          var slideOffset = $slideEl[0].swiperSlideOffset;
          var offsetMultiplier = (center - slideOffset - slideSize / 2) / slideSize * params.modifier;
          var rotateY = isHorizontal ? rotate * offsetMultiplier : 0;
          var rotateX = isHorizontal ? 0 : rotate * offsetMultiplier; // var rotateZ = 0

          var translateZ = -translate * Math.abs(offsetMultiplier);
          var stretch = params.stretch; // Allow percentage to make a relative stretch for responsive sliders

          if (typeof stretch === 'string' && stretch.indexOf('%') !== -1) {
            stretch = parseFloat(params.stretch) / 100 * slideSize;
          }

          var translateY = isHorizontal ? 0 : stretch * offsetMultiplier;
          var translateX = isHorizontal ? stretch * offsetMultiplier : 0; // Fix for ultra small values

          if (Math.abs(translateX) < 0.001) {
            translateX = 0;
          }

          if (Math.abs(translateY) < 0.001) {
            translateY = 0;
          }

          if (Math.abs(translateZ) < 0.001) {
            translateZ = 0;
          }

          if (Math.abs(rotateY) < 0.001) {
            rotateY = 0;
          }

          if (Math.abs(rotateX) < 0.001) {
            rotateX = 0;
          }

          var slideTransform = "translate3d(" + translateX + "px," + translateY + "px," + translateZ + "px)  rotateX(" + rotateX + "deg) rotateY(" + rotateY + "deg)";
          $slideEl.transform(slideTransform);
          $slideEl[0].style.zIndex = -Math.abs(Math.round(offsetMultiplier)) + 1;

          if (params.slideShadows) {
            // Set shadows
            var $shadowBeforeEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-left') : $slideEl.find('.swiper-slide-shadow-top');
            var $shadowAfterEl = isHorizontal ? $slideEl.find('.swiper-slide-shadow-right') : $slideEl.find('.swiper-slide-shadow-bottom');

            if ($shadowBeforeEl.length === 0) {
              $shadowBeforeEl = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'left' : 'top') + "\"></div>");
              $slideEl.append($shadowBeforeEl);
            }

            if ($shadowAfterEl.length === 0) {
              $shadowAfterEl = $("<div class=\"swiper-slide-shadow-" + (isHorizontal ? 'right' : 'bottom') + "\"></div>");
              $slideEl.append($shadowAfterEl);
            }

            if ($shadowBeforeEl.length) {
              $shadowBeforeEl[0].style.opacity = offsetMultiplier > 0 ? offsetMultiplier : 0;
            }

            if ($shadowAfterEl.length) {
              $shadowAfterEl[0].style.opacity = -offsetMultiplier > 0 ? -offsetMultiplier : 0;
            }
          }
        } // Set correct perspective for IE10


        if (Support.pointerEvents || Support.prefixedPointerEvents) {
          var ws = $wrapperEl[0].style;
          ws.perspectiveOrigin = center + "px 50%";
        }
      },
      setTransition: function setTransition(duration) {
        var swiper = this;
        swiper.slides.transition(duration).find('.swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left').transition(duration);
      }
    };
    var EffectCoverflow = {
      name: 'effect-coverflow',
      params: {
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          coverflowEffect: {
            setTranslate: Coverflow.setTranslate.bind(swiper),
            setTransition: Coverflow.setTransition.bind(swiper)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var swiper = this;

          if (swiper.params.effect !== 'coverflow') {
            return;
          }

          swiper.classNames.push(swiper.params.containerModifierClass + "coverflow");
          swiper.classNames.push(swiper.params.containerModifierClass + "3d");
          swiper.params.watchSlidesProgress = true;
          swiper.originalParams.watchSlidesProgress = true;
        },
        setTranslate: function setTranslate() {
          var swiper = this;

          if (swiper.params.effect !== 'coverflow') {
            return;
          }

          swiper.coverflowEffect.setTranslate();
        },
        setTransition: function setTransition(duration) {
          var swiper = this;

          if (swiper.params.effect !== 'coverflow') {
            return;
          }

          swiper.coverflowEffect.setTransition(duration);
        }
      }
    };
    var Thumbs = {
      init: function init() {
        var swiper = this;
        var ref = swiper.params;
        var thumbsParams = ref.thumbs;
        var SwiperClass = swiper.constructor;

        if (thumbsParams.swiper instanceof SwiperClass) {
          swiper.thumbs.swiper = thumbsParams.swiper;
          Utils.extend(swiper.thumbs.swiper.originalParams, {
            watchSlidesProgress: true,
            slideToClickedSlide: false
          });
          Utils.extend(swiper.thumbs.swiper.params, {
            watchSlidesProgress: true,
            slideToClickedSlide: false
          });
        } else if (Utils.isObject(thumbsParams.swiper)) {
          swiper.thumbs.swiper = new SwiperClass(Utils.extend({}, thumbsParams.swiper, {
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            slideToClickedSlide: false
          }));
          swiper.thumbs.swiperCreated = true;
        }

        swiper.thumbs.swiper.$el.addClass(swiper.params.thumbs.thumbsContainerClass);
        swiper.thumbs.swiper.on('tap', swiper.thumbs.onThumbClick);
      },
      onThumbClick: function onThumbClick() {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;

        if (!thumbsSwiper) {
          return;
        }

        var clickedIndex = thumbsSwiper.clickedIndex;
        var clickedSlide = thumbsSwiper.clickedSlide;

        if (clickedSlide && $(clickedSlide).hasClass(swiper.params.thumbs.slideThumbActiveClass)) {
          return;
        }

        if (typeof clickedIndex === 'undefined' || clickedIndex === null) {
          return;
        }

        var slideToIndex;

        if (thumbsSwiper.params.loop) {
          slideToIndex = parseInt($(thumbsSwiper.clickedSlide).attr('data-swiper-slide-index'), 10);
        } else {
          slideToIndex = clickedIndex;
        }

        if (swiper.params.loop) {
          var currentIndex = swiper.activeIndex;

          if (swiper.slides.eq(currentIndex).hasClass(swiper.params.slideDuplicateClass)) {
            swiper.loopFix(); // eslint-disable-next-line

            swiper._clientLeft = swiper.$wrapperEl[0].clientLeft;
            currentIndex = swiper.activeIndex;
          }

          var prevIndex = swiper.slides.eq(currentIndex).prevAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();
          var nextIndex = swiper.slides.eq(currentIndex).nextAll("[data-swiper-slide-index=\"" + slideToIndex + "\"]").eq(0).index();

          if (typeof prevIndex === 'undefined') {
            slideToIndex = nextIndex;
          } else if (typeof nextIndex === 'undefined') {
            slideToIndex = prevIndex;
          } else if (nextIndex - currentIndex < currentIndex - prevIndex) {
            slideToIndex = nextIndex;
          } else {
            slideToIndex = prevIndex;
          }
        }

        swiper.slideTo(slideToIndex);
      },
      update: function update(initial) {
        var swiper = this;
        var thumbsSwiper = swiper.thumbs.swiper;

        if (!thumbsSwiper) {
          return;
        }

        var slidesPerView = thumbsSwiper.params.slidesPerView === 'auto' ? thumbsSwiper.slidesPerViewDynamic() : thumbsSwiper.params.slidesPerView;

        if (swiper.realIndex !== thumbsSwiper.realIndex) {
          var currentThumbsIndex = thumbsSwiper.activeIndex;
          var newThumbsIndex;

          if (thumbsSwiper.params.loop) {
            if (thumbsSwiper.slides.eq(currentThumbsIndex).hasClass(thumbsSwiper.params.slideDuplicateClass)) {
              thumbsSwiper.loopFix(); // eslint-disable-next-line

              thumbsSwiper._clientLeft = thumbsSwiper.$wrapperEl[0].clientLeft;
              currentThumbsIndex = thumbsSwiper.activeIndex;
            } // Find actual thumbs index to slide to


            var prevThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).prevAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();
            var nextThumbsIndex = thumbsSwiper.slides.eq(currentThumbsIndex).nextAll("[data-swiper-slide-index=\"" + swiper.realIndex + "\"]").eq(0).index();

            if (typeof prevThumbsIndex === 'undefined') {
              newThumbsIndex = nextThumbsIndex;
            } else if (typeof nextThumbsIndex === 'undefined') {
              newThumbsIndex = prevThumbsIndex;
            } else if (nextThumbsIndex - currentThumbsIndex === currentThumbsIndex - prevThumbsIndex) {
              newThumbsIndex = currentThumbsIndex;
            } else if (nextThumbsIndex - currentThumbsIndex < currentThumbsIndex - prevThumbsIndex) {
              newThumbsIndex = nextThumbsIndex;
            } else {
              newThumbsIndex = prevThumbsIndex;
            }
          } else {
            newThumbsIndex = swiper.realIndex;
          }

          if (thumbsSwiper.visibleSlidesIndexes && thumbsSwiper.visibleSlidesIndexes.indexOf(newThumbsIndex) < 0) {
            if (thumbsSwiper.params.centeredSlides) {
              if (newThumbsIndex > currentThumbsIndex) {
                newThumbsIndex = newThumbsIndex - Math.floor(slidesPerView / 2) + 1;
              } else {
                newThumbsIndex = newThumbsIndex + Math.floor(slidesPerView / 2) - 1;
              }
            } else if (newThumbsIndex > currentThumbsIndex) {
              newThumbsIndex = newThumbsIndex - slidesPerView + 1;
            }

            thumbsSwiper.slideTo(newThumbsIndex, initial ? 0 : undefined);
          }
        } // Activate thumbs


        var thumbsToActivate = 1;
        var thumbActiveClass = swiper.params.thumbs.slideThumbActiveClass;

        if (swiper.params.slidesPerView > 1 && !swiper.params.centeredSlides) {
          thumbsToActivate = swiper.params.slidesPerView;
        }

        if (!swiper.params.thumbs.multipleActiveThumbs) {
          thumbsToActivate = 1;
        }

        thumbsToActivate = Math.floor(thumbsToActivate);
        thumbsSwiper.slides.removeClass(thumbActiveClass);

        if (thumbsSwiper.params.loop || thumbsSwiper.params.virtual && thumbsSwiper.params.virtual.enabled) {
          for (var i = 0; i < thumbsToActivate; i += 1) {
            thumbsSwiper.$wrapperEl.children("[data-swiper-slide-index=\"" + (swiper.realIndex + i) + "\"]").addClass(thumbActiveClass);
          }
        } else {
          for (var i$1 = 0; i$1 < thumbsToActivate; i$1 += 1) {
            thumbsSwiper.slides.eq(swiper.realIndex + i$1).addClass(thumbActiveClass);
          }
        }
      }
    };
    var Thumbs$1 = {
      name: 'thumbs',
      params: {
        thumbs: {
          multipleActiveThumbs: true,
          swiper: null,
          slideThumbActiveClass: 'swiper-slide-thumb-active',
          thumbsContainerClass: 'swiper-container-thumbs'
        }
      },
      create: function create() {
        var swiper = this;
        Utils.extend(swiper, {
          thumbs: {
            swiper: null,
            init: Thumbs.init.bind(swiper),
            update: Thumbs.update.bind(swiper),
            onThumbClick: Thumbs.onThumbClick.bind(swiper)
          }
        });
      },
      on: {
        beforeInit: function beforeInit() {
          var swiper = this;
          var ref = swiper.params;
          var thumbs = ref.thumbs;

          if (!thumbs || !thumbs.swiper) {
            return;
          }

          swiper.thumbs.init();
          swiper.thumbs.update(true);
        },
        slideChange: function slideChange() {
          var swiper = this;

          if (!swiper.thumbs.swiper) {
            return;
          }

          swiper.thumbs.update();
        },
        update: function update() {
          var swiper = this;

          if (!swiper.thumbs.swiper) {
            return;
          }

          swiper.thumbs.update();
        },
        resize: function resize() {
          var swiper = this;

          if (!swiper.thumbs.swiper) {
            return;
          }

          swiper.thumbs.update();
        },
        observerUpdate: function observerUpdate() {
          var swiper = this;

          if (!swiper.thumbs.swiper) {
            return;
          }

          swiper.thumbs.update();
        },
        setTransition: function setTransition(duration) {
          var swiper = this;
          var thumbsSwiper = swiper.thumbs.swiper;

          if (!thumbsSwiper) {
            return;
          }

          thumbsSwiper.setTransition(duration);
        },
        beforeDestroy: function beforeDestroy() {
          var swiper = this;
          var thumbsSwiper = swiper.thumbs.swiper;

          if (!thumbsSwiper) {
            return;
          }

          if (swiper.thumbs.swiperCreated && thumbsSwiper) {
            thumbsSwiper.destroy();
          }
        }
      }
    }; // Swiper Class

    var components = [Device$1, Support$1, Browser$1, Resize, Observer$1, Virtual$1, Keyboard$1, Mousewheel$1, Navigation$1, Pagination$1, Scrollbar$1, Parallax$1, Zoom$1, Lazy$1, Controller$1, A11y, History$1, HashNavigation$1, Autoplay$1, EffectFade, EffectCube, EffectFlip, EffectCoverflow, Thumbs$1];

    if (typeof Swiper.use === 'undefined') {
      Swiper.use = Swiper.Class.use;
      Swiper.installModule = Swiper.Class.installModule;
    }

    Swiper.use(components);
    return Swiper;
  });
};

/* harmony default export */ __webpack_exports__["default"] = (swiper());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./js/vendor/wNumb.js":
/*!****************************!*\
  !*** ./js/vendor/wNumb.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (factory) {
  if (typeof define === "function" && __webpack_require__(/*! !webpack amd options */ "../node_modules/webpack/buildin/amd-options.js")) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if ((typeof exports === "undefined" ? "undefined" : _typeof(exports)) === "object") {
    // Node/CommonJS
    module.exports = factory();
  } else {
    // Browser globals
    window.wNumb = factory();
  }
})(function () {
  "use strict";

  var FormatOptions = ["decimals", "thousand", "mark", "prefix", "suffix", "encoder", "decoder", "negativeBefore", "negative", "edit", "undo"]; // General
  // Reverse a string

  function strReverse(a) {
    return a.split("").reverse().join("");
  } // Check if a string starts with a specified prefix.


  function strStartsWith(input, match) {
    return input.substring(0, match.length) === match;
  } // Check is a string ends in a specified suffix.


  function strEndsWith(input, match) {
    return input.slice(-1 * match.length) === match;
  } // Throw an error if formatting options are incompatible.


  function throwEqualError(F, a, b) {
    if ((F[a] || F[b]) && F[a] === F[b]) {
      throw new Error(a);
    }
  } // Check if a number is finite and not NaN


  function isValidNumber(input) {
    return typeof input === "number" && isFinite(input);
  } // Provide rounding-accurate toFixed method.
  // Borrowed: http://stackoverflow.com/a/21323330/775265


  function toFixed(value, exp) {
    value = value.toString().split("e");
    value = Math.round(+(value[0] + "e" + (value[1] ? +value[1] + exp : exp)));
    value = value.toString().split("e");
    return (+(value[0] + "e" + (value[1] ? +value[1] - exp : -exp))).toFixed(exp);
  } // Formatting
  // Accept a number as input, output formatted string.


  function formatTo(decimals, thousand, mark, prefix, suffix, encoder, decoder, negativeBefore, negative, edit, undo, input) {
    var originalInput = input,
        inputIsNegative,
        inputPieces,
        inputBase,
        inputDecimals = "",
        output = ""; // Apply user encoder to the input.
    // Expected outcome: number.

    if (encoder) {
      input = encoder(input);
    } // Stop if no valid number was provided, the number is infinite or NaN.


    if (!isValidNumber(input)) {
      return false;
    } // Rounding away decimals might cause a value of -0
    // when using very small ranges. Remove those cases.


    if (decimals !== false && parseFloat(input.toFixed(decimals)) === 0) {
      input = 0;
    } // Formatting is done on absolute numbers,
    // decorated by an optional negative symbol.


    if (input < 0) {
      inputIsNegative = true;
      input = Math.abs(input);
    } // Reduce the number of decimals to the specified option.


    if (decimals !== false) {
      input = toFixed(input, decimals);
    } // Transform the number into a string, so it can be split.


    input = input.toString(); // Break the number on the decimal separator.

    if (input.indexOf(".") !== -1) {
      inputPieces = input.split(".");
      inputBase = inputPieces[0];

      if (mark) {
        inputDecimals = mark + inputPieces[1];
      }
    } else {
      // If it isn't split, the entire number will do.
      inputBase = input;
    } // Group numbers in sets of three.


    if (thousand) {
      inputBase = strReverse(inputBase).match(/.{1,3}/g);
      inputBase = strReverse(inputBase.join(strReverse(thousand)));
    } // If the number is negative, prefix with negation symbol.


    if (inputIsNegative && negativeBefore) {
      output += negativeBefore;
    } // Prefix the number


    if (prefix) {
      output += prefix;
    } // Normal negative option comes after the prefix. Defaults to '-'.


    if (inputIsNegative && negative) {
      output += negative;
    } // Append the actual number.


    output += inputBase;
    output += inputDecimals; // Apply the suffix.

    if (suffix) {
      output += suffix;
    } // Run the output through a user-specified post-formatter.


    if (edit) {
      output = edit(output, originalInput);
    } // All done.


    return output;
  } // Accept a sting as input, output decoded number.


  function formatFrom(decimals, thousand, mark, prefix, suffix, encoder, decoder, negativeBefore, negative, edit, undo, input) {
    var originalInput = input,
        inputIsNegative,
        output = ""; // User defined pre-decoder. Result must be a non empty string.

    if (undo) {
      input = undo(input);
    } // Test the input. Can't be empty.


    if (!input || typeof input !== "string") {
      return false;
    } // If the string starts with the negativeBefore value: remove it.
    // Remember is was there, the number is negative.


    if (negativeBefore && strStartsWith(input, negativeBefore)) {
      input = input.replace(negativeBefore, "");
      inputIsNegative = true;
    } // Repeat the same procedure for the prefix.


    if (prefix && strStartsWith(input, prefix)) {
      input = input.replace(prefix, "");
    } // And again for negative.


    if (negative && strStartsWith(input, negative)) {
      input = input.replace(negative, "");
      inputIsNegative = true;
    } // Remove the suffix.
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice


    if (suffix && strEndsWith(input, suffix)) {
      input = input.slice(0, -1 * suffix.length);
    } // Remove the thousand grouping.


    if (thousand) {
      input = input.split(thousand).join("");
    } // Set the decimal separator back to period.


    if (mark) {
      input = input.replace(mark, ".");
    } // Prepend the negative symbol.


    if (inputIsNegative) {
      output += "-";
    } // Add the number


    output += input; // Trim all non-numeric characters (allow '.' and '-');

    output = output.replace(/[^0-9\.\-.]/g, ""); // The value contains no parse-able number.

    if (output === "") {
      return false;
    } // Covert to number.


    output = Number(output); // Run the user-specified post-decoder.

    if (decoder) {
      output = decoder(output);
    } // Check is the output is valid, otherwise: return false.


    if (!isValidNumber(output)) {
      return false;
    }

    return output;
  } // Framework
  // Validate formatting options


  function validate(inputOptions) {
    var i,
        optionName,
        optionValue,
        filteredOptions = {};

    if (inputOptions["suffix"] === undefined) {
      inputOptions["suffix"] = inputOptions["postfix"];
    }

    for (i = 0; i < FormatOptions.length; i += 1) {
      optionName = FormatOptions[i];
      optionValue = inputOptions[optionName];

      if (optionValue === undefined) {
        // Only default if negativeBefore isn't set.
        if (optionName === "negative" && !filteredOptions.negativeBefore) {
          filteredOptions[optionName] = "-"; // Don't set a default for mark when 'thousand' is set.
        } else if (optionName === "mark" && filteredOptions.thousand !== ".") {
          filteredOptions[optionName] = ".";
        } else {
          filteredOptions[optionName] = false;
        } // Floating points in JS are stable up to 7 decimals.

      } else if (optionName === "decimals") {
        if (optionValue >= 0 && optionValue < 8) {
          filteredOptions[optionName] = optionValue;
        } else {
          throw new Error(optionName);
        } // These options, when provided, must be functions.

      } else if (optionName === "encoder" || optionName === "decoder" || optionName === "edit" || optionName === "undo") {
        if (typeof optionValue === "function") {
          filteredOptions[optionName] = optionValue;
        } else {
          throw new Error(optionName);
        } // Other options are strings.

      } else {
        if (typeof optionValue === "string") {
          filteredOptions[optionName] = optionValue;
        } else {
          throw new Error(optionName);
        }
      }
    } // Some values can't be extracted from a
    // string if certain combinations are present.


    throwEqualError(filteredOptions, "mark", "thousand");
    throwEqualError(filteredOptions, "prefix", "negative");
    throwEqualError(filteredOptions, "prefix", "negativeBefore");
    return filteredOptions;
  } // Pass all options as function arguments


  function passAll(options, method, input) {
    var i,
        args = []; // Add all options in order of FormatOptions

    for (i = 0; i < FormatOptions.length; i += 1) {
      args.push(options[FormatOptions[i]]);
    } // Append the input, then call the method, presenting all
    // options as arguments.


    args.push(input);
    return method.apply("", args);
  }

  function wNumb(options) {
    if (!(this instanceof wNumb)) {
      return new wNumb(options);
    }

    if (_typeof(options) !== "object") {
      return;
    }

    options = validate(options); // Call 'formatTo' with proper arguments.

    this.to = function (input) {
      return passAll(options, formatTo, input);
    }; // Call 'formatFrom' with proper arguments.


    this.from = function (input) {
      return passAll(options, formatFrom, input);
    };
  }

  return wNumb;
});

/* harmony default export */ __webpack_exports__["default"] = (wNumb());
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

/******/ });
//# sourceMappingURL=vendor.js.map