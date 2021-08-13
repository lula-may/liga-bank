import { Breakpoint, Viewport } from './const';
const getClassName = (...args) => args.filter(Boolean).join(' ');

const defineViewportWidth = () => {
  if (window.innerWidth >= Breakpoint.DESKTOP) {
    return Viewport.DESKTOP;
  }
  if (window.innerWidth < Breakpoint.TABLET) {
    return Viewport.MOBILE;
  }
  return Viewport.TABLET;
};

export {defineViewportWidth, getClassName};
