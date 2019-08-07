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
declare const mousecase: (target: string, { cssClass, rule, }?: MouseCasePropArguments) => {
    props: MouseCaseProps;
    state: MouseCaseState;
    __proto__: any;
};
export default mousecase;
