import { createSelector } from 'reselect';
import { AUTO_TOTAL_PRICE_FOR_DISCOUNT, CreditType, HOME_FIRST_PAYMENT_RATE_FOR_DISCOUNT, INCOME_RATE, MAT_CAPITAL, MinLoanSum, Percentage } from '../const';
import { getAnnuityPayment } from '../utils';

export const getFormStep = (state) => state.formStep;

export const getCreditType = (state) => state.creditType;

export const getTotalSum = (state) => state.totalPrice;

export const getInitialPayment = (state) => state.initialPayment;

export const getPaymentRate = (state) => state.initialPaymentRate;

export const getPeriod = (state) => state.period;

export const getValidityStatus = (state) => state.isValidPrice;

export const getMatCapitalStatus = (state) => state.isMatCapital;

export const getCascoStatus = (state) => state.isCasco;

export const getLifeInsuranceStatus = (state) => state.isLifeInsurance;

export const selectLoanSum = createSelector(
  getCreditType,
  getTotalSum,
  getInitialPayment,
  getMatCapitalStatus,
  (type, totalSum, initialPayment, isMatCapital) => {
    if (type === CreditType.HOME && isMatCapital) {
      return totalSum - initialPayment - MAT_CAPITAL;
    }
    return totalSum - initialPayment;
  },
);

export const selectIsValidLoanSum = createSelector(
  getCreditType,
  selectLoanSum,
  (type, sum) => sum >= MinLoanSum[type],
);

const selectAutoPercentRate = createSelector(
  getTotalSum,
  getCascoStatus,
  getLifeInsuranceStatus,
  (price, isCasco, isLifeInsurance) => {
    if (isCasco && isLifeInsurance) {
      return Percentage.AUTO_MIN;
    }
    if (isCasco || isLifeInsurance) {
      return Percentage.AUTO_WITH_OPTION;
    }
    if (price >= AUTO_TOTAL_PRICE_FOR_DISCOUNT) {
      return Percentage.AUTO_DISCOUNT;
    }
    return Percentage.AUTO_DEFAULT;
  },
);

const selectHomePercentRate = createSelector(
  getPaymentRate,
  (rate) => (rate < HOME_FIRST_PAYMENT_RATE_FOR_DISCOUNT) ? Percentage.HOME_DEFAULT : Percentage.HOME_DISCOUNT,
);

export const selectPercentRate = createSelector(
  getCreditType,
  selectAutoPercentRate,
  selectHomePercentRate,
  (type, autoRate, homeRate) => {
    switch (type) {
      case CreditType.AUTO:
        return autoRate;
      case CreditType.HOME:
        return homeRate;
      default:
        return 0;
    }
  },
);

export const selectMonthlyPayment = createSelector(
  getPeriod,
  selectLoanSum,
  selectPercentRate,
  (period, loanSum, rate) => getAnnuityPayment(loanSum, rate, period),
);

export const selectMinIncome = createSelector(
  selectMonthlyPayment,
  (payment) => Math.round(payment / INCOME_RATE),
);
