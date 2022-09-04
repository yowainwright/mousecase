export interface MousecasePropArguments {
  cssClass?: string;
  rule?: boolean;
}

export interface MousecaseProps {
  activeClass: string;
  cssClass: string;
  el: HTMLElement;
  rule: boolean;
}

export interface MousecaseState {
  isDown: boolean;
  startx: number;
  scrollLeft: number;
  isOn: boolean;
}

export interface MousecaseFactory {
  props: MousecaseProps;
  state: MousecaseState;
  canUseMousecase: (target: string, rule: boolean) => boolean;
  mouseMove: (e: MouseEvent) => MousecaseFactory;
  mouseDown: (e: MouseEvent) => MousecaseFactory;
  mouseNotDown: () => MousecaseFactory;
  manageState: () => MousecaseFactory;
  init: () => void;
  off: () => MousecaseFactory;
  on: () => MousecaseFactory;
}
