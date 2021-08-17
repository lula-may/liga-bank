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

const clearNumber = (str) => Number(str.replace(/\D/g, ''));

const isValidValue = (value, min, max) => {
  if (value < min || value > max || isNaN(value)) {
    return false;
  }
  return true;
};

export {clearNumber, defineViewportWidth, getClassName, isValidValue};
