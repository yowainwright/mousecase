interface MouseCasePropArguments {
    cssClass?: string;
    rule?: boolean;
}
interface MouseCaseProps {
    activeClass: string;
    cssClass: string;
    el: HTMLElement;
    rule: boolean;
}
interface MouseCaseState {
    isDown: boolean;
    startx: number;
    scrollLeft: number;
    isOn: boolean;
}
interface MouseCaseResult {
    props: MouseCaseProps;
    state: MouseCaseState;
    canUseMouseCase: (target: string, rule: boolean) => boolean;
    mouseMove: (e: MouseEvent) => any;
    mouseDown: (e: MouseEvent) => any;
    mouseNotDown: () => any;
    manageState: () => any;
    init: () => void;
    off: () => any;
    on: () => any;
}
declare const mousecase: (target: string, { cssClass, rule, }?: MouseCasePropArguments) => MouseCaseResult;
export default mousecase;
