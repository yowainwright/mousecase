import { mouseCaseDom } from '../../utils/mock-data'

import {
  MouseCase,
} from '../mousecase'

describe('MouseCase init', () => {
  it('instatiates', () => {
    const mousecase = new MouseCase()
    expect(typeof mousecase).toBe('object')
  })

  it('takes in props', () => {
    document.body.innerHTML = mouseCaseDom
    const mouseCase = new MouseCase('#mouse-case', { debug: true })
    expect(mouseCase.props.debug).toBe(true)
    expect(mouseCase.props.rule).toBe(true)
  })

  it('mouseDown', () => {
    document.body.innerHTML = mouseCaseDom
    const mouseCase = new MouseCase('#mouse-case', { debug: true })
    const e = new Event('mousedown')
    const testEl = document.getElementById('mouse-case')
    testEl.dispatchEvent(e)
    testEl.addEventListener('mousedown', () => {
      expect(mouseCase.state.isDown).toBe(true)
    })
  })

  // it('mouseMouse', () => { })

  // it('works in non-activestate', () => { })
})

describe('MouseCase events', () => {})

describe('MouseCase debug logs', () => {})
