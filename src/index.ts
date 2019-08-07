interface MousecasePropArguments {
  cssClass?: string;
  rule?: boolean;
}

interface MousecaseProps {
  activeClass: string;
  cssClass: string;
  el: HTMLElement;
  rule: boolean;
}

interface MousecaseState {
  isDown: boolean;
  startx: number;
  scrollLeft: number;
  isOn: boolean;
}


type MousecaseThis = any;

interface MousecaseResult {
  props: MousecaseProps;
  state: MousecaseState;
  canUseMousecase: (target: string, rule: boolean) => boolean;
  mouseMove: (e: MouseEvent) => MousecaseThis;
  mouseDown: (e: MouseEvent) => MousecaseThis;
  mouseNotDown: () => MousecaseThis;
  manageState: () => MousecaseThis;
  init: () => void;
  off: () => MousecaseThis;
  on: () => MousecaseThis;
}

const mousecase = (
  target: string,
  {
    cssClass = 'js-mousecase',
    rule = true,
  }: MousecasePropArguments = {}
): MousecaseResult  => ({
  props: {
    el: document.querySelector(target),
    cssClass,
    rule,
    activeClass: `${cssClass}--is-active`,
  } as MousecaseProps,
  state: {
    isDown: false,
    startx: 0,
    scrollLeft: 0,
    isOn: false,
  } as MousecaseState,
  canUseMousecase (target: string, rule: boolean): boolean {
    if (
      !target ||
      document.querySelectorAll(target).length > 1 ||
      rule === false

    ) return false;
    return true;
  },
  mouseMove (e: MouseEvent) {
    if (!this.state.isDown) return;
    e.preventDefault();
    const { el } = this.props;
    const initial = e.pageX - el.offsetLeft;
    const distance = (initial - this.state.startx) * 3;
    el.scrollLeft = this.state.scrollLeft - distance;
    return this;
  },
  mouseDown (e: MouseEvent) {
    const { activeClass, el } = this.props;
    this.state.isDown = true;
    el.classList.add(activeClass);
    this.state.startx = e.pageX - el.offsetLeft;
    this.state.scrollLeft = el.scrollLeft;
    return this;
  },
  mouseNotDown () {
    this.state.isDown = false;
    const { activeClass, el } = this.props;
    el.classList.remove(activeClass);
    return this;
  },
  manageState () {
    if (!this.state.isOn) return;
    const { el } = this.props;
    el.addEventListener('mousemove', (e) => this.mouseMove(e));
    el.addEventListener('mousedown', (e) => this.mouseDown(e));
    el.addEventListener('mouseleave', () => this.mouseNotDown());
    el.addEventListener('mouseup', () => this.mouseNotDown());
    return this;
  },
  init () {
    if (!this.canUseMousecase(target, this.props.rule)) return;
    this.state.isOn = true;
    this.manageState();
  },
  off () {
    this.state.isOn = false;
    return this;
  },
  on () {
    this.state.isOn = true;
    return this;
  },
});

export default mousecase;
