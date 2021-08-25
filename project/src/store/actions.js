import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  RESET_OPTIONS: 'CREDIT/RESET_OPTIONS',
  SET_CASCO: 'CREDIT/SET_CASCO',
  SET_CREDIT_TYPE: 'CREDIT/SET_CREDIT_TYPE',
  SET_INITIAL_PAYMENT: 'CREDIT/SET_INITIAL_PAYMENT',
  SET_INITIAL_PAYMENT_RATE: 'CREDIT/SET_RATE',
  SET_LIFE_INSURANCE: 'SET_LIFE_INSURANCE',
  SET_MAT_CAPITAL: 'CREDIT/SET_MAT_CAPITAL',
  SET_PERIOD: 'CREDIT/SET_PERIOD',
  SET_VALID_STATUS: 'CREDIT/SET_VALID_STATUS',
  SET_TOTAL_PRICE: 'CREDIT/SET_TOTAL_PRICE',
  UPDATE_INITIAL_PAYMENT: 'CREDIT/UPDATE_INITIAL_PAYMENT',
  UPDATE_INITIAL_PAYMENT_RATE: 'CREDIT/UPDATE_INITIAL_PAYMENT_RATE',
  INCREMENT_REQUEST: 'PAGE/INCREMENT_REQUEST',
  SET_FORM_STEP: 'PAGE/SET_FORM_STEP',
  SET_VIEWPORT: 'PAGE/SET_VIEWPORT',
  SET_POPUP: 'PAGE/SET_POPUP',
};

export const incrementRequest = createAction(ActionType.INCREMENT_REQUEST);

export const resetOptions = createAction(ActionType.RESET_OPTIONS);

export const setCasco = createAction(ActionType.SET_CASCO, (isAdded) => ({
  payload: isAdded,
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

export const setLifeInsurance = createAction(ActionType.SET_LIFE_INSURANCE, (isAdded) => ({
  payload: isAdded,
}));

export const setMatCapital = createAction(ActionType.SET_MAT_CAPITAL, (isAdded) => ({
  payload: isAdded,
}));

export const setPeriod = createAction(ActionType.SET_PERIOD, (period) => ({
  payload: period,
}));

export const setPopup = createAction(ActionType.SET_POPUP, (popupType) => ({
  payload: popupType,
}));

export const setStep = createAction(ActionType.SET_FORM_STEP, (step) => ({
  payload: step,
}));

export const setTotalPrice = createAction(ActionType.SET_TOTAL_PRICE, (price) => ({
  payload: price,
}));

export const setValidStatus = createAction(ActionType.SET_VALID_STATUS, (isValid) => ({
  payload: isValid,
}));

export const setViewport = createAction(ActionType.SET_VIEWPORT, (viewport) => ({
  payload: viewport,
}));

export const updateInitialPayment = createAction(ActionType.UPDATE_INITIAL_PAYMENT);

export const updateInitialPaymentRate = createAction(ActionType.UPDATE_INITIAL_PAYMENT_RATE);
