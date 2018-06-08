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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "../";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

const updateHash = location => {
  if (window.history && window.history.replaceState) {
    if (window.location.hash === location) return

    history.replaceState({}, document.title, location)
  }
}

const updateActive = hash => {
  const element = document.querySelector(`a[href="${hash}"]`)

  if (!element || element.classList.contains('active')) return

  Array.from(document.querySelectorAll('#menu ul li.active')).forEach(current => {
    current.classList.remove('active')
    current.parentNode.classList.remove('active')
  })
  element.parentNode.classList.add('active')
  element.parentNode.parentNode.classList.add('active')
}

document.addEventListener('DOMContentLoaded', event => {
  const header = document.querySelector('#header > .b-nav')
  const body = document.querySelector('body')

  const handleHeader = scrollPosition => {
    if (scrollPosition === 0) {
      if (!body.classList.contains('header--fixed')) {
        body.classList.add('header--fixed')
      }
    } else {
      if (body.classList.contains('header--fixed')) {
        body.classList.remove('header--fixed')
      }
    }
  }

  handleHeader(document.documentElement.scrollTop)
  updateActive(window.location.hash)
  window.addEventListener(
    'hashchange',
    e => {
      e.preventDefault()
      updateActive(window.location.hash)
    },
    false
  )
  const elements = document.querySelectorAll('#menu ul li a')
  const mapping = Array.from(elements).map(elem => {
    const section = document.querySelector(elem.getAttribute('href'))
    return {
      position: section.offsetTop - 5,
      element: elem,
      container: section
    }
  })

  document.addEventListener('scroll', event => {
    handleHeader(document.documentElement.scrollTop)

    const scrollPosition = document.documentElement.scrollTop

    mapping.forEach((section, index) => {
      if (
        section.position < scrollPosition &&
        mapping[index + 1] &&
        mapping[index + 1].position > scrollPosition &&
        window.location.hash !== section.element.getAttribute('href')
      ) {
        keepScroll = scrollPosition
        updateHash(section.element.getAttribute('href'))
        updateActive(window.location.hash)
      }
    })
  })
})


/***/ })
/******/ ]);