export const ADD_ONE = "ADD_ONE";

export const APPLY_NUMBER = "APPLY_NUMBER";
export const CHANGE_OPERATION = "CHANGE_OPERATION";
export const CLEAR_DISPLAY = "CLEAR_DISPALY";
export const UPDATE_MEMORY = 'UPDATE_MEMORY';
export const MEMORY_ADD_TOTAL = 'MEMORY_ADD_TOTAL';
export const CLEAR_MEMORY = 'CLEAR_MEMORY';

export const addOne = () => {
    return({type:ADD_ONE});
}

export const applyNumber = (number) => {
    return({type:APPLY_NUMBER, payload:number});
}

export const changeOperation = (operator) => {
    return({type:CHANGE_OPERATION, payload:operator});
}

export const clearDisplay = () => {
    return({type:CLEAR_DISPLAY});
}

export const updateMemory = () => {
    return({type:UPDATE_MEMORY})
}

export const memoryAddTotal = () => {
    return({type:MEMORY_ADD_TOTAL});
}

export const clearMemory = () => {
    return({type:CLEAR_MEMORY});
}