import { createReducer } from '@reduxjs/toolkit';
import { Credit } from '../data/credit';
import {setStep, setCreditType, setInitialPayment, setPeriod, setTotalPrice} from './actions';

const initialState = {
  formStep: 1,
  creditType: undefined,
  initialPayment: undefined,
  parameters: {},
  period: undefined,
  totalPrice: undefined,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setStep, (state, action) => {
      state.formStep = action.payload;
    })
    .addCase(setCreditType, (state, action) => {
      state.creditType = action.payload;
      state.parameters = Credit[action.payload];
    })
    .addCase(setInitialPayment, (state, action) => {
      state.initialPayment = action.payload;
    })
    .addCase(setPeriod, (state, action) => {
      state.period = action.payload;
    })
    .addCase(setTotalPrice, (state, action) => {
      state.totalPrice = action.payload;
    });
});

export {reducer};
