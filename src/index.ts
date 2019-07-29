/**
import { boolean } from '@storybook/addon-knobs';
 * mouseCase
 * @param {target} string
 * @param {props} object
 * @param {props.cssClass} string
 * @param {props.rule} boolean
 */

type $FIXME = any

export interface MouseCasePropArguments {
  cssClass?: string | null
  rule?: boolean | null
} {}


export interface MouseCaseProps extends Readonly<{
  activeClass?: string
  cssClass?: string | null
  el: string | $FIXME
  rule?: boolean | null
}> {}

export interface MouseCaseState extends Readonly<{
  isDown?: boolean
  startx: number | null
  scrollLeft: number | null
  isOn: boolean 
}> {}

const mousecase = (
  target: string | $FIXME,
  {
    cssClass = 'js-mousecase',
    rule = true,
  }: MouseCasePropArguments = {}
) => ({
  props<MouseCaseProps>: {
    el: !target ? null : document.querySelector(target),
    cssClass,
    rule,
    activeClass: `${cssClass}--is-active`,
  },
  state: {
    isDown: false,
    startx: null,
    scrollLeft: null,
    isOn: false,
  },
  __proto__: {
    canUseMouseCase (target: string, rule: boolean): boolean {
      if (
        !target ||
        document.querySelectorAll(target).length > 1 ||
        rule === false || !rule

      ) return false
      return true
    },
    mouseMove (e: $FIXME) {
      if (!this.state.isDown) return
      e.preventDefault()
      const { el } = this.props
      const initial = e.pageX - el.offsetLeft
      const distance = (initial - this.state.startX) * 3
      el.scrollLeft = this.state.scrollLeft - distance
      return this
    },
    mouseDown (e: MouseEvent) {
      const { activeClass, el } = this.props
      this.state.isDown = true
      el.classList.add(activeClass)
      this.state.startX = e.pageX - el.offsetLeft
      this.state.scrollLeft = el.scrollLeft
      return this
    },
    mouseNotDown () {
      this.state.isDown = false
      const { activeClass, el } = this.props
      el.classList.remove(activeClass)
      return this
    },
    manageState () {
      if (!this.state.isOn) return
      const { el } = this.props
      el.addEventListener('mousemove', (e: MouseEvent) => this.mouseMove(e))
      el.addEventListener('mousedown', (e: MouseEvent) => this.mouseDown(e))
      el.addEventListener('mouseleave', () => this.mouseNotDown())
      el.addEventListener('mouseup', () => this.mouseNotDown())
      return this
    },
    init () {
      if (!this.canUseMouseCase(target, this.props.rule)) return
      this.state.isOn = true
      this.manageState()
    },
    off () {
      this.state.isOn = false
      return this
    },
    on () {
      this.state.isOn = true
      return this
    },
  },
})

export default mousecase
