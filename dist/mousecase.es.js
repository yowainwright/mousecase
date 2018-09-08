/**
  mousecase - The computer mouse is not used much. Mouse Case is a utility to support no-mouse like horizontal scrolling with a mouse!
  @version v0.0.1
  @link https://github.com/yowainwright/mousecase#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/
/**
 * events 🚩
 */
var events = ['mousemove', 'mousedown', 'mouseleave', 'mouseup', 'mousemove'];
/**
 * MouseCase  Class
 * uses a class to manage context
 */

var MouseCase =
/*#__PURE__*/
function () {
  function MouseCase(selector, state, props) {
    if (state === void 0) {
      state = {
        mouseIsDown: false,
        startx: null,
        scrollLeft: null
      };
    }

    if (props === void 0) {
      props = {
        cssClass: 'js-pulley-is-active',
        debug: false,
        mouseIsDown: false,
        rule: null,
        startx: null,
        scrollLeft: null
      };
    }

    this.selector = selector;
    this.state = state;
    this.props = props;
    this.init(this.selector, this.props);
  }
  /**
   * CHECK ✅
   * ====
   * - takes in a `rule` and returns true or false
   * - exmaple of a `rule`:
   * - window.location.href === 'https://jeffry.in'
   * - or like, const isJeffryIn = window.location.href === 'https://jeffry.in'
   */


  var _proto = MouseCase.prototype;

  _proto.check = function check() {
    return !!this.props.rule;
  };
  /**
   * INIT 🌻
   * ====
   * - initialize dopeness
   * - checks that pulley.js is ready to rock
   * - rocks
   * - or, logs not rocking (if debug is true)
   */


  _proto.init = function init() {
    var selector = this.selector;
    if (!this.check() || !selector) return;
    this.pull(selector);
  };
  /**
   * MANAGESTATE 👩🏽‍🎨
   * ====
   * - update state
   * - based on
   * - if the mouse is down
   * - startx
   * - scrollLeft
   */


  _proto.manageState = function manageState(item) {
    var el = item.el,
        props = item.props,
        state = item.state;
    var cssClass = props.cssClass;
    events.map(function (event) {
      el.addEventListner(event, function () {
        switch (true) {
          case event === 'mousedown':
            state.mouseIsDown = true;
            el.classList.add(cssClass);
            state.startx = state.pagex - el.offsetLeft;
            state.scrollLeft = el.scrollLeft;
            break;

          default:
            state.mouseIsDown = false;
            el.classList.remove(cssClass);
        }
      });
    });
    return item;
  };
  /**
   * ADDINSTANCE ➕
   * ====
   * - add anin
   */


  _proto.addInstance = function addInstance(el) {
    var props = this.props;
    var state = this.state;
    var item = {
      el: el,
      props: props,
      state: state
    };
    this.manageState(item);
    return item;
  };
  /**
   *  SETUP 👩🏽‍🍴
   * ====
   * - map elements to be worked on
   */


  _proto.setup = function setup() {
    var _this = this;

    var els = [].slice.call(document.querySelectorAll(this.selector));
    this.instances = [];
    els.forEach(function (el) {
      var instance = _this.addIstance(el);

      _this.instances.push(instance);
    });
  };

  return MouseCase;
}();

export default MouseCase;
