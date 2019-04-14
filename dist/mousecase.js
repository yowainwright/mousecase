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
  var canUseMouseCase = function canUseMouseCase(target, _ref) {
    var debug = _ref.debug,
        rule = _ref.rule;

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
  };
  /**
   * MouseCase
   * @param {target} string ||  node
   * @param {props} object
   * @param {props.debug} boolean
   * @param {props.cssClass} string
   * @param {props.rule} boolean
   */

  var MouseCase =
  /*#__PURE__*/
  function () {
    function MouseCase(target, props) {
      if (props === void 0) {
        props = {};
      }

      this.props = {
        el: typeof target === 'string' ? document.querySelector(target) : target,
        cssClass: props.cssClass || 'js-mousecase',
        debug: props.debug || false,
        rule: props.rule || true
      };
      if (canUseMouseCase(target, this.props)) return;
      this.state = {
        isDown: false,
        startx: null,
        scrollLeft: null
      };
      this.props.activeClass = this.props.cssClass + "--is-active";
      this.props.el.classList.add(this.props.cssClass);
      if (this.props.rule) this.manageState();
      return this;
    }

    var _proto = MouseCase.prototype;

    _proto.mouseMove = function mouseMove(e) {
      if (!this.state.isDown) return this;
      var el = this.props.el;
      e.preventDefault();
      var initial = e.pageX - el.offsetLeft;
      var distance = (initial - this.state.startX) * 3;
      el.scrollLeft = this.state.scrollLeft - distance;
      return this;
    };

    _proto.mouseDown = function mouseDown(e) {
      var _this$props = this.props,
          activeClass = _this$props.activeClass,
          el = _this$props.el;
      this.state.isDown = true;
      el.classList.add(activeClass);
      this.state.startX = e.pageX - el.offsetLeft;
      this.state.scrollLeft = el.scrollLeft;
      return this;
    };

    _proto.mouseNotDown = function mouseNotDown() {
      var _this$props2 = this.props,
          activeClass = _this$props2.activeClass,
          el = _this$props2.el,
          debug = _this$props2.debug;

      if (this.state.isDown) {
        this.state.isDown = false;
        el.classList.remove(activeClass);
      }

      if (debug) debug("state: " + objectToString(this.state) + ", props: " + objectToString(this.props));
      return this;
    };

    _proto.manageState = function manageState() {
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
    };

    return MouseCase;
  }();

  return MouseCase;

}));
