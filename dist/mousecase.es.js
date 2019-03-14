/**
  mousecase - The computer mouse is not used much. Mouse Case is a utility to support no-mouse like horizontal scrolling with a mouse!
  @version v0.0.8
  @link https://github.com/yowainwright/mousecase#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/
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

    this.state = {
      isDown: false,
      startx: null,
      scrollLeft: null
    };
    this.props = {
      el: el,
      cssClass: props.cssClass || 'js-mousecase',
      debug: props.debug || false,
      rule: props.rule || true
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
    var el = this.props.el;
    this.state.isDown = true;
    el.classList.add('active');
    this.state.startX = e.pageX - el.offsetLeft;
    this.state.scrollLeft = el.scrollLeft;
    return this;
  };

  _proto.mouseNotDown = function mouseNotDown() {
    if (this.state) this.state.isDown = false;

    if (this.props && this.props.debug) {
      debug("state: " + objectToString(this.state) + ", props: " + objectToString(this.props));
    }

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

export default MouseCase;
