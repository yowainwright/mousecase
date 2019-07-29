/**
import { boolean } from '@storybook/addon-knobs';
 * mouseCase
 * @param {target} string
 * @param {props} object
 * @param {props.cssClass} string
 * @param {props.rule} boolean
 */
declare type $FIXME = any;
export interface MouseCasePropArguments {
    cssClass?: string | null;
    rule?: boolean | null;
}
export interface MouseCaseProps extends Readonly<{
    activeClass?: string;
    cssClass?: string | null;
    el: string | $FIXME;
    rule?: boolean | null;
}> {
}
export interface MouseCaseState extends Readonly<{
    isDown?: boolean;
    startx: number | null;
    scrollLeft: number | null;
    isOn: boolean;
}> {
}
declare const mousecase: $FIXME;
export default mousecase;
