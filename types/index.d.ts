export default function mousecase (
  target: string | Element,
  options?: mousecase.options,
): any

export namespace mousecase {
  export interface options {
    cssClass: string,
    rule: boolean,
  }
}
