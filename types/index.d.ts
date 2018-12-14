export default function MouseCase (
  target: string | Element,
  options?: MouseCase.Options,
): any

export namespace MouseCase {
  export interface Options {
    cssClass: string,
    debug: boolean,
    rule: boolean,
  }
}
