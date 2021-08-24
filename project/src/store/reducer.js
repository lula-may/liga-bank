import { createReducer } from '@reduxjs/toolkit';
import { CreditData } from '../const';
import {setStep, setCreditType, setInitialPayment, setPeriod, setTotalPrice, setInitialPaymentRate, setValidStatus, ActionType, setCasco, setLifeInsurance, setMatCapital, resetOptions} from './actions';
import {getPaymentByRate, getRateByPayment} from '../utils';

const initialState = {
  creditType: undefined,
  formStep: 1,
  initialPayment: undefined,
  initialPaymentRate: undefined,
  isCasco: false,
  isLifeInsurance: false,
  isMatCapital: false,
  isValidPrice: true,
  period: undefined,
  totalPrice: undefined,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(resetOptions, (state) => {
      state.isCasco = false;
      state.isLifeInsurance = false;
      state.isMatCapital = false;
    })
    .addCase(setStep, (state, action) => {
      state.formStep = action.payload;
    })
    .addCase(setCreditType, (state, action) => {
      const {totalSum: {min: minTotalPrice}, initialPayment, period} = CreditData[action.payload];
      state.creditType = action.payload;
      state.totalPrice = minTotalPrice;
      state.initialPayment = initialPayment.min * minTotalPrice / 100;
      state.initialPaymentRate = initialPayment.min;
      state.period = period.min;
    })
    .addCase(setInitialPayment, (state, action) => {
      state.initialPayment = action.payload;
    })
    .addCase(setInitialPaymentRate, (state, action) => {
      state.initialPaymentRate = action.payload;
    })
    .addCase(setPeriod, (state, action) => {
      state.period = action.payload;
    })
    .addCase(setCasco, (state, action) => {
      state.isCasco = action.payload;
    })
    .addCase(setLifeInsurance, (state, action) => {
      state.isLifeInsurance = action.payload;
    })
    .addCase(setMatCapital, (state, action) => {
      state.isMatCapital = action.payload;
    })
    .addCase(setTotalPrice, (state, action) => {
      state.totalPrice = action.payload;
    })
    .addCase(setValidStatus, (state, action) => {
      state.isValidPrice = action.payload;
      state.initialPayment = !action.payload && 0;
    })
    .addCase(ActionType.UPDATE_INITIAL_PAYMENT, (state) => {
      state.initialPayment = getPaymentByRate(state.totalPrice, state.initialPaymentRate);
    })
    .addCase(ActionType.UPDATE_INITIAL_PAYMENT_RATE, (state) => {
      state.initialPaymentRate = getRateByPayment(state.totalPrice, state.initialPayment);
    });
});

export {reducer};
