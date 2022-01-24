/**
  mousecase - Mousecase is a JavaScript utility supporting touch-like horizontal scrolling with a mouse!
  @version v3.0.0-beta.1
  @link https://github.com/yowainwright/mousecase#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, (global.jquery = global.jquery || {}, global.jquery.reframe = factory()));
})(this, (function () { 'use strict';

    var mousecase = function (target, _a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.cssClass, cssClass = _c === void 0 ? 'js-mousecase' : _c, _d = _b.rule, rule = _d === void 0 ? true : _d;
        return ({
            props: {
                el: document.querySelector(target),
                cssClass: cssClass,
                rule: rule,
                activeClass: "".concat(cssClass, "--is-active"),
            },
            state: {
                isDown: false,
                startx: 0,
                scrollLeft: 0,
                isOn: false,
            },
            canUseMousecase: function (target, rule) {
                if (!target ||
                    document.querySelectorAll(target).length > 1 ||
                    rule === false)
                    return false;
                return true;
            },
            mouseMove: function (e) {
                if (!this.state.isDown)
                    return;
                e.preventDefault();
                var el = this.props.el;
                var initial = e.pageX - el.offsetLeft;
                var distance = (initial - this.state.startx) * 3;
                el.scrollLeft = this.state.scrollLeft - distance;
                return this;
            },
            mouseDown: function (e) {
                var _a = this.props, activeClass = _a.activeClass, el = _a.el;
                this.state.isDown = true;
                el.classList.add(activeClass);
                this.state.startx = e.pageX - el.offsetLeft;
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
                if (!this.canUseMousecase(target, this.props.rule))
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
        });
    };

    return mousecase;

}));
