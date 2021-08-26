import {NameSpace} from '../root-reducer';

export const getViewport = (state) => state[NameSpace.PAGE].viewport;
export const getPopup = (state) => state[NameSpace.PAGE].popup;
export const getRequestNumber = (state) => state[NameSpace.PAGE].requestNumber;
export const getFormStep = (state) => state[NameSpace.PAGE].formStep;
