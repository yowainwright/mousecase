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
declare type MousecaseThis = any;
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
declare const mousecase: (target: string, { cssClass, rule, }?: MousecasePropArguments) => MousecaseResult;
export default mousecase;
