import { createReducer } from '@reduxjs/toolkit';
import { Credit } from '../data/credit';
import {setStep, setCreditType, setInitialPayment, setPeriod, setTotalPrice, setInitialPaymentRate, setValidStatus, ActionType} from './actions';
import {getPaymentByRate} from '../utils';

const initialState = {
  creditType: undefined,
  formStep: 1,
  initialPayment: undefined,
  initialPaymentRate: undefined,
  isValidPrice: true,
  period: undefined,
  totalPrice: undefined,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setStep, (state, action) => {
      state.formStep = action.payload;
    })
    .addCase(setCreditType, (state, action) => {
      const {totalSum: {min: minTotalPrice}, initialPayment, period} = Credit[action.payload];
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
    .addCase(setTotalPrice, (state, action) => {
      state.totalPrice = action.payload;
    })
    .addCase(setValidStatus, (state, action) => {
      state.isValidPrice = action.payload;
      state.initialPayment = !action.payload && 0;
    })
    .addCase(ActionType.UPDATE_INITIAL_PAYMENT, (state) => {
      state.initialPayment = getPaymentByRate(state.totalPrice, state.initialPaymentRate);
    });
});

export {reducer};
