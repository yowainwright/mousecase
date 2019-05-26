/**
  mousecase - Mousecase is a JavaScript utility supporting touch-like horizontal scrolling with a mouse!
  @version v1.1.2
  @link https://github.com/yowainwright/mousecase#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/
/**
 * mouseCase
 * @param {target} string || node
 * @param {props} object
 * @param {props.cssClass} string
 * @param {props.rule} boolean
 */
var mousecase = function mousecase(target, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$cssClass = _ref.cssClass,
      cssClass = _ref$cssClass === void 0 ? 'js-mousecase' : _ref$cssClass,
      _ref$rule = _ref.rule,
      rule = _ref$rule === void 0 ? true : _ref$rule;

  return {
    props: {
      el: !target ? null : typeof target === 'string' ? document.querySelector(target) : target,
      cssClass: cssClass,
      rule: rule,
      activeClass: cssClass + "--is-active"
    },
    state: {
      isDown: false,
      startx: null,
      scrollLeft: null,
      isOn: false
    },
    __proto__: {
      canUseMouseCase: function canUseMouseCase(target, rule) {
        if (!target || document.querySelectorAll(target).length > 1 || rule === false || !rule) return false;
        return true;
      },
      mouseMove: function mouseMove(e) {
        if (!this.state.isDown) return;
        e.preventDefault();
        var el = this.props.el;
        var initial = e.pageX - el.offsetLeft;
        var distance = (initial - this.state.startX) * 3;
        el.scrollLeft = this.state.scrollLeft - distance;
        return this;
      },
      mouseDown: function mouseDown(e) {
        var _this$props = this.props,
            activeClass = _this$props.activeClass,
            el = _this$props.el;
        this.state.isDown = true;
        el.classList.add(activeClass);
        this.state.startX = e.pageX - el.offsetLeft;
        this.state.scrollLeft = el.scrollLeft;
        return this;
      },
      mouseNotDown: function mouseNotDown() {
        this.state.isDown = false;
        var _this$props2 = this.props,
            activeClass = _this$props2.activeClass,
            el = _this$props2.el;
        el.classList.remove(activeClass);
        return this;
      },
      manageState: function manageState() {
        var _this = this;

        if (!this.state.isOn) return;
        var el = this.props.el;
        el.addEventListener('mousemove', function (e) {
          return _this.mouseMove(e);
        });
        el.addEventListener('mousedown', function (e) {
          return _this.mouseDown(e);
        });
        el.addEventListener('mouseleave', function () {
          return _this.mouseNotDown();
        });
        el.addEventListener('mouseup', function () {
          return _this.mouseNotDown();
        });
        return this;
      },
      init: function init() {
        if (!this.canUseMouseCase(target, this.props.rule)) return;
        this.state.isOn = true;
        this.manageState();
      },
      off: function off() {
        this.state.isOn = false;
        return this;
      },
      on: function on() {
        this.state.isOn = true;
        return this;
      }
    }
  };
};

export default mousecase;
