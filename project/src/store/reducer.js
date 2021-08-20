import { createReducer } from '@reduxjs/toolkit';
import { Credit } from '../data/credit';
import {setStep, setCreditType, setInitialPayment, setPeriod, setTotalPrice, setInitialPaymentRate} from './actions';

const initialState = {
  formStep: 1,
  creditType: undefined,
  initialPayment: undefined,
  initialPaymentRate: undefined,
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
    });
});

export {reducer};
