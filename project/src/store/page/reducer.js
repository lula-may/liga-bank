import { createReducer } from '@reduxjs/toolkit';
import {setStep, incrementRequest, setPopup, setViewport} from '../actions';

const initialState = {
  formStep: 1,
  popup: null,
  requestNumber: 10,
  viewport: '',
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(incrementRequest, (state) => {
      state.requestNumber = state.requestNumber++;
    })
    .addCase(setPopup, (state, action) => {
      state.popup = action.payload;
    })
    .addCase(setStep, (state, action) => {
      state.formStep = action.payload;
    })
    .addCase(setViewport, (state, action) => {
      state.viewport = action.payload;
    });
});

export {reducer};
