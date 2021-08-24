import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  INCREMENT_REQUEST: 'CREDIT/INCREMENT_REQUEST',
  RESET_OPTIONS: 'CREDIT/RESET_OPTIONS',
  SET_CASCO: 'CREDIT/SET_CASCO',
  SET_CREDIT_TYPE: 'CREDIT/SET_CREDIT_TYPE',
  SET_FORM_STEP: 'FORM/SET_STEP',
  SET_INITIAL_PAYMENT: 'CREDIT/SET_INITIAL_PAYMENT',
  SET_INITIAL_PAYMENT_RATE: 'CREDIT/SET_RATE',
  SET_LIFE_INSURANCE: 'SET_LIFE_INSURANCE',
  SET_MAT_CAPITAL: 'CREDIT/SET_MAT_CAPITAL',
  SET_PERIOD: 'CREDIT/SET_PERIOD',
  SET_VALID_STATUS: 'CREDIT/SET_VALID_STATUS',
  SET_TOTAL_PRICE: 'CREDIT/SET_TOTAL_PRICE',
  UPDATE_INITIAL_PAYMENT: 'CREDIT/UPDATE_INITIAL_PAYMENT',
  UPDATE_INITIAL_PAYMENT_RATE: 'CREDIT/UPDATE_INITIAL_PAYMENT_RATE',
};

export const setStep = createAction(ActionType.SET_FORM_STEP, (step) => ({
  payload: step,
}));

export const resetOptions = createAction(ActionType.RESET_OPTIONS);

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

export const setMatCapital = createAction(ActionType.SET_MAT_CAPITAL, (isAdded) => ({
  payload: isAdded,
}));

export const setCasco = createAction(ActionType.SET_CASCO, (isAdded) => ({
  payload: isAdded,
}));

export const setLifeInsurance = createAction(ActionType.SET_LIFE_INSURANCE, (isAdded) => ({
  payload: isAdded,
}));

export const updateInitialPayment = createAction(ActionType.UPDATE_INITIAL_PAYMENT);

export const updateInitialPaymentRate = createAction(ActionType.UPDATE_INITIAL_PAYMENT_RATE);

export const incrementRequest = createAction(ActionType.INCREMENT_REQUEST);
