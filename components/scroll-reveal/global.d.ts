import scrollReveal from 'scrollreveal'

declare const ScrollReveal: scrollReveal.ScrollRevealObject

declare global {
  interface Window {
    ScrollReveal: scrollReveal.ScrollRevealObject
  }
}
