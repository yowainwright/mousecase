/**
  mousecase - The computer mouse is not used much. Mouse Case is a utility to support no-mouse like horizontal scrolling with a mouse!
  @version v0.0.9
  @link https://github.com/yowainwright/mousecase#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.MouseCase = factory());
}(this, function () { 'use strict';

  /**
   * debug
   * @param {msg} string
   * provides useful mousecase messaging
   */
  /**
   * objectToString
   * @param {o} object
   * turns object into string for easier debugging
   */

  var objectToString = function objectToString(o) {
    return JSON.stringify(o);
  };
  /**
   * mouseCase
   * @param {target} string ||  node
   * @param {props} object
   * @param {props.debug} boolean
   * @param {props.cssClass} string
   * @param {props.rule} boolean
   */

  var mouseCase = function mouseCase(target, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$cssClass = _ref.cssClass,
        cssClass = _ref$cssClass === void 0 ? 'js-mousecase' : _ref$cssClass,
        _ref$debug = _ref.debug,
        debug = _ref$debug === void 0 ? false : _ref$debug,
        _ref$rule = _ref.rule,
        rule = _ref$rule === void 0 ? true : _ref$rule;

    return {
      props: {
        el: typeof target === 'string' ? document.querySelector(target) : target,
        cssClass: cssClass,
        debug: debug,
        rule: rule,
        activeClass: cssClass + "--is-active"
      },
      state: {
        isDown: false,
        startx: null,
        scrollLeft: null
      },
      __proto__: {
        canUseMouseCase: function canUseMouseCase(target) {
          var _this$props = this.props,
              debug = _this$props.debug,
              rule = _this$props.rule;

          if (!target) {
            if (debug) debug('no target element is defined');
            return false;
          } else if (document.querySelectorAll(target).length > 1) {
            if (debug) debug('MouseCase does not support multiple items, see docs for work arounds');
            return false;
          } else if (!rule && rule === false) {
            if (debug) debug(rule + " boolean is false; MouseCase is not running");
            return false;
          } else {
            return true;
          }
        },
        mouseMove: function mouseMove(e) {
          if (!this.state.isDown) return this;
          var el = this.props.el;
          e.preventDefault();
          var initial = e.pageX - el.offsetLeft;
          var distance = (initial - this.state.startX) * 3;
          el.scrollLeft = this.state.scrollLeft - distance;
          return this;
        },
        mouseDown: function mouseDown(e) {
          var _this$props2 = this.props,
              activeClass = _this$props2.activeClass,
              el = _this$props2.el;
          this.state.isDown = true;
          el.classList.add(activeClass);
          this.state.startX = e.pageX - el.offsetLeft;
          this.state.scrollLeft = el.scrollLeft;
          return this;
        },
        mouseNotDown: function mouseNotDown() {
          var _this$props3 = this.props,
              activeClass = _this$props3.activeClass,
              el = _this$props3.el,
              debug = _this$props3.debug;

          if (this.state.isDown) {
            this.state.isDown = false;
            el.classList.remove(activeClass);
          }

          if (debug) debug("state: " + objectToString(this.state) + ", props: " + objectToString(this.props));
          return this;
        },
        manageState: function manageState() {
          var _this = this;

          var el = this.props.el;
          el.addEventListener('mousemove', function (e) {
            return _this.mouseMove(e);
          });
          el.addEventListener('mousedown', function (e) {
            return _this.mouseDown(e);
          });
          el.addEventListener('mouseleave', function (e) {
            return _this.mouseNotDown(e);
          });
          el.addEventListener('mouseup', function (e) {
            return _this.mouseNotDown(e);
          });
          return this;
        },
        init: function init() {
          if (this.canUseMouseCase(this.target, this.props) || !this.props.rule) return;
          this.manageState();
        }
      }
    };
  };
  var MouseCase = mouseCase.init();

  return MouseCase;

}));
