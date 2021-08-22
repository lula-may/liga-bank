import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  SET_FORM_STEP: 'FORM/SET_STEP',
  SET_CREDIT_TYPE: 'CREDIT/SET_CREDIT_TYPE',
  SET_INITIAL_PAYMENT: 'CREDIT/SET_INITIAL_PAYMENT',
  SET_INITIAL_PAYMENT_RATE: 'CREDIT/SET_RATE',
  SET_PERIOD: 'CREDIT/SET_PERIOD',
  SET_VALID_STATUS: 'CREDIT/SET_VALID_STATUS',
  SET_TOTAL_PRICE: 'CREDIT/SET_TOTAL_PRICE',
  UPDATE_INITIAL_PAYMENT: 'CREDIT/UPDATE_INITIAL_PAYMENT',
  UPDATE_INITIAL_PAYMENT_RATE: 'CREDIT/UPDATE_INITIAL_PAYMENT_RATE',
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

export const setValidStatus = createAction(ActionType.SET_VALID_STATUS, (isValid) => ({
  payload: isValid,
}));

export const updateInitialPayment = createAction(ActionType.UPDATE_INITIAL_PAYMENT);

export const updateInitialPaymentRate = createAction(ActionType.UPDATE_INITIAL_PAYMENT_RATE);

