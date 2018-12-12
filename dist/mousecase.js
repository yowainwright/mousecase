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

  /**
   * debug
   * @param {msg} string
   * provides useful mousecase messaging
   */
  var debug = function debug(msg) {
    return console.warn('%c MouseCase 🐹:', 'background-color: #FFB6C1; color: white', " " + msg);
  };
  /**
   * objectToString
   * @param {o} object
   * turns object into string for easier debugging
   */

  var objectToString = function objectToString(o) {
    return JSON.stringify(o);
  };

  var MouseCase =
  /*#__PURE__*/
  function () {
    function MouseCase(target, props) {
      if (props === void 0) {
        props = {};
      }

      /**
       * warnings
       */
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
      /**
       * initial state
       */


      this.state = {
        isDown: false,
        startx: null,
        scrollLeft: null
        /**
         * initial props
         */

      };
      this.props = {
        el: el,
        debug: props.debug || false,
        cssClass: props.cssClass || 'js-mousecase',
        rule: props.rule || true
      };
      this.props.activeClass = this.props.cssClass + "--is-active";
      this.props.el.classList.add(this.props.cssClass);
      if (this.props.rule) this.manageState();
      return this;
    }
    /**
      * MouseDown
      * @param {e} event
      * what happens when the mouse is down
      */


    var _proto = MouseCase.prototype;

    _proto.mouseDown = function mouseDown(e) {
      var el = this.props.el;
      el.classList.add('active');
      this.state.isDown = true;
      this.state.startX = e.pageX - el.offsetLeft;
      this.state.scrollLeft = el.scrollLeft;
      return this;
    };
    /**
      * MouseMove
      * @param {e} event
      * what happens when the mouse moves
      */


    _proto.mouseMove = function mouseMove(e) {
      if (!this.state.isDown) return;
      var el = this.props.el;
      e.preventDefault();
      var initial = e.pageX - el.offsetLeft;
      var distance = (initial - this.state.startX) * 3;
      el.scrollLeft = this.state.scrollLeft - distance;
      return this;
    };

    _proto.mouseNotDown = function mouseNotDown() {
      this.state.isDown = false;
      if (this.props.debug) debug("state: " + objectToString(this.state) + ", props: " + objectToString(this.props));
    };
    /**
      * ManageState
      * manages mouseCase state
      */


    _proto.manageState = function manageState() {
      var _this = this;

      var el = this.props.el;
      el.addEventListener('mousemove', function (e) {
        return _this.mouseMove(e);
      });
      el.addEventListener('mousedown', function (e) {
        return _this.mouseDown(e);
      });
      var notMouseCaseActiveEvts = ['mouseleave', 'mouseup'];
      notMouseCaseActiveEvts.map(function (e) {
        return el.addEventListener(e, function (evt) {
          return _this.mouseNotDown(evt);
        });
      });
      return this;
    };

    return MouseCase;
  }();

  return MouseCase;

})));
