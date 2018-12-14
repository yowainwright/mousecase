import {
  MouseCase,
} from '../mousecase'

describe('MouseCase init', () => {
  it('instatiates', () => {
    const mousecase = new MouseCase()
    expect(typeof mousecase).toBe('object')
  })

  // it('takes in props', () => {
  //   const mousecase = new MouseCase('selector', { debug: true, rule: true })
  //   expect(mousecase.props.debug).toBe(true)
  //   expect(mousecase.props.rule).toBe(true)
  // })

  // it('mouseDown', () => { })

  // it('mouseMouse', () => { })

  // it('works in non-activestate', () => { })
})

describe('MouseCase events', () => {})

describe('MouseCase debug logs', () => {})
