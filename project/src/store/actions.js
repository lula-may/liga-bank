import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  SET_FORM_STEP: 'FORM/SET_STEP',
  SET_CREDIT_TYPE: 'CREDIT/SET_CREDIT_TYPE',
  SET_INITIAL_PAYMENT: 'CREDIT/SET_INITIAL_PAYMENT',
  SET_INITIAL_PAYMENT_RATE: 'CREDIT/SET_RATE',
  SET_PERIOD: 'CREDIT/SET_PERIOD',
  SET_TOTAL_PRICE: 'CREDIT/SET_TOTAL_PRICE',
};

export const setStep = createAction(ActionType.SET_FORM_STEP, (step) => ({
  payload: step,
}));

export const setCreditType = createAction(ActionType.SET_CREDIT_TYPE, (type) => ({
  payload: type,
}));

export const setInitialPayment = createAction(ActionType.SET_INITIAL_PAYMENT, (value) => ({
  payload: value,
}));

export const setInitialPaymentRate = createAction(ActionType.SET_INITIAL_PAYMENT_RATE, (value) => ({
  payload: value,
}));

export const setPeriod = createAction(ActionType.SET_PERIOD, (period) => ({
  payload: period,
}));

export const setTotalPrice = createAction(ActionType.SET_TOTAL_PRICE, (price) => ({
  payload: price,
}));

