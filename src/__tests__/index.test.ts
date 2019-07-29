import { mouseCaseDom } from '../../utils/mock-data'

import mousecase from '..'

describe('mouseCase init', () => {
  it('initiates basic target', () => {
    document.body.innerHTML = mouseCaseDom
    const test = mousecase('#mouse-case')
    test.init()
    expect(typeof test).toBe('object')
    expect(test.props.el instanceof HTMLElement).toBe(true)
  })

  it('initiates basic target with options', () => {
    document.body.innerHTML = mouseCaseDom
    const test = mousecase('#mouse-case', { rule: false, cssClass: 'foo-bar' })
    test.init()
    expect(typeof test).toBe('object')
    expect(test.props.rule).toBe(false)
    expect(test.props.cssClass).toBe('foo-bar')
  })

  it('does not manage state w/o target', () => {
    document.body.innerHTML = mouseCaseDom
    const test = mousecase()
    test.init()
    test.manageState = jest.fn()
    expect(test.state.isOn).toBe(false)
    expect(test.manageState).not.toHaveBeenCalled()
  })

  it('takes in props', () => {
    document.body.innerHTML = mouseCaseDom
    const test = mousecase('#mouse-case')
    test.init()
    expect(test.props.activeClass).toBe('js-mousecase--is-active')
    expect(test.props.el.id).toBe('mouse-case')
    expect(test.props.cssClass).toBe('js-mousecase')
    expect(test.props.rule).toBe(true)
  })

  it('has initial state', () => {
    document.body.innerHTML = mouseCaseDom
    const test = mousecase('#mouse-case')
    expect(test.state.isDown).toBe(false)
    expect(test.state.startx).toBe(null)
    expect(test.state.scrollLeft).toBe(null)
    expect(test.state.isOn).toBe(false)
    test.init()
    expect(test.state.isOn).toBe(true)
  })

  it('has working canUseMouseCase function', () => {
    document.body.innerHTML = mouseCaseDom
    const test = mousecase()
    test.init()

    expect(test.props.el).toBe(null)
  })

  it('mouseDown', () => {
    document.body.innerHTML = mouseCaseDom
    const test = mousecase('#mouse-case')
    test.init()
    test.mouseDown = jest.fn()
    const e = new Event('mousedown')
    const testEl = document.getElementById('mouse-case')
    testEl.dispatchEvent(e)
    testEl.addEventListener('mousedown', () => {
      expect(test.state.isDown).toBe(true)
      expect(test.mouseDown).toHaveBeenCalled()
    })
  })

  it('mouseMove', () => {
    document.body.innerHTML = mouseCaseDom
    const test = mousecase('#mouse-case')
    test.init()
    test.mouseMove = jest.fn()
    const e = new Event('mousedown')
    const testEl = document.getElementById('mouse-case')
    testEl.dispatchEvent(e)
    testEl.addEventListener('mousemove', () => {
      expect(test.state.isDown).toBe(true)
      expect(test.mouseMove).toHaveBeenCalled()
    })
  })

  it('mouseup', () => {
    document.body.innerHTML = mouseCaseDom
    const test = mousecase('#mouse-case').init()
    const e = new Event('mouseup')
    const testEl = document.getElementById('mouse-case')
    testEl.dispatchEvent(e)
    testEl.addEventListener('mousemove', () => {
      expect(test.state.isDown).toBe(false)
    })
  })

  it('manage state basics', () => {
    document.body.innerHTML = mouseCaseDom
    const test = mousecase('#mouse-case')
    test.init()
    test.manageState()
    expect(test.state.isOn).toBe(true)
  })

  it('manageState should be returned out of', () => {
    document.body.innerHTML = mouseCaseDom
    const test = mousecase()
    test.init()
    test.manageState()
    expect(test.state.isOn).toBe(false)
  })
})
