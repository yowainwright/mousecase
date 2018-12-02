/**
  mousecase - The computer mouse is not used much. Mouse Case is a utility to support no-mouse like horizontal scrolling with a mouse!
  @version v0.0.1
  @link https://github.com/yowainwright/mousecase#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/
var debug = function debug(msg) {
  return console.warn('%c MouseCase 🐹:', 'background-color: #FFB6C1; color: white', " " + msg);
};

var objectToString = function objectToString(o) {
  return JSON.stringify(o);
};

var events = ['mousemove', 'mousedown', 'mouseleave', 'mouseup', 'mousemove'];

var MouseCase =
/*#__PURE__*/
function () {
  function MouseCase(target, props) {
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

    this.props = {
      el: el,
      debug: props.debug || false,
      cssClass: props.cssClass || 'js-mousecase',
      rule: props.rule || null
    };
    this.props.el.classList.add(this.props.cssClass);
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
        if (e === 'mousedown') {
          el.classList.add(mouseCaseIsActiveCssClass);
          _this.state.startx = _this.state.startx - el.offsetLeft;
          _this.state.scrollLeft = el.scrollLeft;
        } else {
          el.classList.remove(mouseCaseIsActiveCssClass);
        }

        if (_this.props.debug) debug(e + " is invoked; state: " + objectToString(_this.state) + ", props: " + objectToString(_this.props));
      });
    });
    return this;
  };

  return MouseCase;
}();

export default MouseCase;
