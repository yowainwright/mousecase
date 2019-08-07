type Proto = any

interface MouseCasePropArguments {
    cssClass?: string | null;
    rule?: boolean | null;
}
interface MouseCaseProps {
    activeClass?: string;
    cssClass?: string | null;
    el: Element;
    rule?: boolean | null;
}

interface MouseCaseState {
    isDown?: boolean;
    startx: number | null;
    scrollLeft: number | null;
    isOn: boolean;
}

const mousecase = (
    target: string,
    {
        cssClass = 'js-mousecase',
        rule = true,
    }: MouseCasePropArguments = {}
) => ({
    props: {
        el: document.querySelector(target),
        cssClass,
        rule,
        activeClass: `${cssClass}--is-active`,
    } as MouseCaseProps,
    state: {
        isDown: false,
        startx: null,
        scrollLeft: null,
        isOn: false,
    } as MouseCaseState,
    __proto__: {
        canUseMouseCase (target: string, rule: boolean): boolean {
            if (
                !target ||
        document.querySelectorAll(target).length > 1 ||
        rule === false || !rule

            ) return false
            return true
        },
        mouseMove (e: MouseEvent) {
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
    } as Proto,
})

export default mousecase
