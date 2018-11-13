/**
  mousecase - The computer mouse is not used much. Mouse Case is a utility to support no-mouse like horizontal scrolling with a mouse!
  @version v0.0.1
  @link https://github.com/yowainwright/mousecase#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.MouseCase = factory());
}(this, (function () { 'use strict';

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  var debug = function debug(msg) {
    return console.warn('%c MouseCase 🐹:', 'background-color: #FFB6C1; color: white', " " + msg);
  };
  var events = ['mousemove', 'mousedown', 'mouseleave', 'mouseup', 'mousemove'];

  var MouseCase =
  /*#__PURE__*/
  function () {
    function MouseCase(target, props) {
      if (props === void 0) {
        props = {
          cssClass: 'js-mousecase',
          debug: false,
          rule: null
        };
      }

      this.state = {
        mouseIsDown: false,
        startx: null,
        scrollLeft: null
      };
      var el = typeof target === 'string' ? document.querySelector(target) : target;

      if (!el) {
        if (props.debug) debug('no target element is defined');
        return;
      } else if (document.querySelectorAll(target).length > 1) {
        if (props.debug) debug('MouseCase does not support multiple items, see docs for work arounds');
        return;
      } else if (!props.rule && props.rule === false) {
        if (props.debug) debug(props.rule + " boolean is false; MouseCase is not running");
        return;
      }

      this.props = _extends({
        el: el
      }, props);
      this.props.el.classList.add("props.cssClass");
      this.manageMouseCaseState();
      return this;
    }
    /**
     * manageState 👩🏽‍🎨
     * @returns this
     */


    var _proto = MouseCase.prototype;

    _proto.manageMouseCaseState = function manageMouseCaseState() {
      var _this = this;

      var _this$props = this.props,
          cssClass = _this$props.cssClass,
          el = _this$props.el;
      var mouseCaseIsActiveCssClass = cssClass + "--is-active";
      events.map(function (e) {
        el.addEventListener(e, function () {
          if (_this.props.debug) debug(e + " is invoked");

          if (e === 'mousedown') {
            el.classList.add(mouseCaseIsActiveCssClass);
            _this.state.startx = _this.state.startx - el.offsetLeft;
            _this.state.scrollLeft = el.scrollLeft;
          } else {
            el.classList.remove(mouseCaseIsActiveCssClass);
          }
        });
      });
      if (this.props.debug) debug("exciting manageMouseCaseState; state: " + this.state + ", props: " + this.props);
      return this;
    };

    return MouseCase;
  }();

  return MouseCase;

})));
