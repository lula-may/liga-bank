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

const getPluralNumeral = (count, formOne, formTwo, formMany) => {
  if (count > 4 && count < 21) {
    return formMany;
  }

  const remainder = count % 10;
  if (remainder === 1) {
    return formOne;
  }

  if (remainder > 1 && remainder < 5) {
    return formTwo;
  }

  return formMany;
};

const getPaymentByRate = (total, rate) => Math.round(total * rate / 100);

const getRateByPayment = (total, payment) => payment * 100 / total;

export {clearNumber, defineViewportWidth, getClassName, getPaymentByRate, getRateByPayment, getPluralNumeral, isValidValue};
