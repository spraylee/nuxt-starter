interface ScrollRevealRotateObject {
  x?: number | undefined
  y?: number | undefined
  z?: number | undefined
}

interface ScrollRevealPositionObject {
  top?: number | undefined
  right?: number | undefined
  bottom?: number | undefined
  left?: number | undefined
}

export interface ScrollRevealObjectOptions {
  origin?: string | undefined
  distance?: string | undefined
  duration?: number | undefined
  delay?: number | undefined
  interval?: number | undefined
  rotate?: ScrollRevealRotateObject | undefined
  opacity?: number | undefined
  scale?: number | undefined
  easing?: string | undefined
  cleanup?: boolean | undefined
  container?: any
  mobile?: boolean | undefined
  reset?: boolean | undefined
  useDelay?: string | undefined
  viewFactor?: number | undefined
  viewOffset?: ScrollRevealPositionObject | undefined
  beforeReveal?(domEl: HTMLElement | NodeListOf<Element>): void
  afterReveal?(domEl: HTMLElement | NodeListOf<Element>): void
  beforeReset?(domEl: HTMLElement | NodeListOf<Element>): void
  afterReset?(domEl: HTMLElement | NodeListOf<Element>): void
}
