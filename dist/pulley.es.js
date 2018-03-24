/**
  pulley.js - A utility plugin for pulling instead of scrolling with the mouse on desktop 
  @version v0.0.1
  @link https://github.com/yowainwright/pulley.js#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/
// events
var events = ['mousemove', 'mousedown', 'mouseleave', 'mouseup', 'mousemove']; // messsages

var pulleyjs = 'pulley.s--👌:';

var logMsg = function logMsg(msg) {
  if (msg === void 0) {
    msg = 'The is not more information 😭!';
  }

  return console.warn(pulleyjs + "msg:" + msg);
}; // PUlleyjs Class
// uses a class to manage context


var Pulley =
/*#__PURE__*/
function () {
  function Pulley(selector, state, props) {
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

  var _proto = Pulley.prototype;

  _proto.log = function log(msg) {
    return this.props.debug ? logMsg(msg) : '';
  };
  /*
    CHECK ✅
    ====
    - takes in a `rule` and returns true or false
    - exmaple of a `rule`:
    - window.location.href === 'https://jeffry.in'
    - or like, const isJeffryIn = window.location.href === 'https://jeffry.in'
  */


  _proto.check = function check() {
    return !!this.props.rule;
  };
  /*
    INIT 🌻
    ====
    - initialize dopeness
    - checks that pulley.js is ready to rock
    - rocks
    - or, logs not rocking (if debug is true)
  */


  _proto.init = function init() {
    var check = this.check();
    var selector = this.selector;
    return check && selector ? this.pull(selector) : this.log("init:check:" + check + ",selector:" + selector);
  };
  /*
    MANAGESTATE 👩🏽‍🎨
    ====
    - update state
    - based on
      - if the mouse is down
      - startx
      - scrollLeft
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
  /*
    ADDINSTANCE ➕
    ====
    - add anin
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
  /*
    SETUP 👩🏽‍🍴
    ====
    - map elements to be worked on
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

  return Pulley;
}();

export default Pulley;
