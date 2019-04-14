/**
  mousecase - The computer mouse is not used much. Mouse Case is a utility to support no-mouse like horizontal scrolling with a mouse!
  @version v0.0.10
  @link https://github.com/yowainwright/mousecase#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/
/**
 * mouseCase
 * @param {target} string ||  node
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
      el: typeof target === 'string' ? document.querySelector(target) : target,
      cssClass: cssClass,
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
        if (!target || document.querySelectorAll(target).length > 1 || this.props.rule === false) return false;
        return true;
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
        var _this$props2 = this.props,
            activeClass = _this$props2.activeClass,
            el = _this$props2.el;

        if (this.state.isDown) {
          this.state.isDown = false;
          el.classList.remove(activeClass);
        }

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

export default mousecase;
