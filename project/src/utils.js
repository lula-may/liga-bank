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

const getPeriodLabel = (value) => getPluralNumeral(value, 'год', 'года', 'лет');

const getPaymentByRate = (total, rate) => Math.round(total * rate / 100);

const getRateByPayment = (total, payment) => payment * 100 / total;

const getAnnuityPayment = (total, yearRate, period) => {
  const monthRate = yearRate / (12 * 100);
  const monthCount = period * 12;
  return Math.round(total * monthRate / (1 - Math.pow(1 + monthRate, -monthCount)));
};

const formatRequestNumber = (count) => `№ ${String(count).padStart(4, '0')}`;
const formatMoneyString = (count) => `${count.toLocaleString('ru-RU')} рублей`;

export {
  clearNumber,
  defineViewportWidth,
  formatMoneyString,
  formatRequestNumber,
  getAnnuityPayment,
  getClassName,
  getPaymentByRate,
  getPeriodLabel,
  getRateByPayment,
  getPluralNumeral,
  isValidValue};
