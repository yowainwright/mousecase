/**
  mousecase - Mousecase is a JavaScript utility supporting touch-like horizontal scrolling with a mouse!
  @version v2.0.0
  @link https://github.com/yowainwright/mousecase#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/
/**
import { boolean } from '@storybook/addon-knobs';
 * mouseCase
 * @param {target} string
 * @param {props} object
 * @param {props.cssClass} string
 * @param {props.rule} boolean
 */
var mousecase = function (target, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.cssClass, cssClass = _c === void 0 ? 'js-mousecase' : _c, _d = _b.rule, rule = _d === void 0 ? true : _d;
    return ({
        props: {
            el: !target ? null : document.querySelector(target),
            cssClass: cssClass,
            rule: rule,
            activeClass: cssClass + "--is-active",
        },
        state: {
            isDown: false,
            startx: null,
            scrollLeft: null,
            isOn: false,
        },
        __proto__: {
            canUseMouseCase: function (target, rule) {
                if (!target ||
                    document.querySelectorAll(target).length > 1 ||
                    rule === false || !rule)
                    return false;
                return true;
            },
            mouseMove: function (e) {
                if (!this.state.isDown)
                    return;
                e.preventDefault();
                var el = this.props.el;
                var initial = e.pageX - el.offsetLeft;
                var distance = (initial - this.state.startX) * 3;
                el.scrollLeft = this.state.scrollLeft - distance;
                return this;
            },
            mouseDown: function (e) {
                var _a = this.props, activeClass = _a.activeClass, el = _a.el;
                this.state.isDown = true;
                el.classList.add(activeClass);
                this.state.startX = e.pageX - el.offsetLeft;
                this.state.scrollLeft = el.scrollLeft;
                return this;
            },
            mouseNotDown: function () {
                this.state.isDown = false;
                var _a = this.props, activeClass = _a.activeClass, el = _a.el;
                el.classList.remove(activeClass);
                return this;
            },
            manageState: function () {
                var _this = this;
                if (!this.state.isOn)
                    return;
                var el = this.props.el;
                el.addEventListener('mousemove', function (e) { return _this.mouseMove(e); });
                el.addEventListener('mousedown', function (e) { return _this.mouseDown(e); });
                el.addEventListener('mouseleave', function () { return _this.mouseNotDown(); });
                el.addEventListener('mouseup', function () { return _this.mouseNotDown(); });
                return this;
            },
            init: function () {
                if (!this.canUseMouseCase(target, this.props.rule))
                    return;
                this.state.isOn = true;
                this.manageState();
            },
            off: function () {
                this.state.isOn = false;
                return this;
            },
            on: function () {
                this.state.isOn = true;
                return this;
            },
        },
    });
};

export default mousecase;
