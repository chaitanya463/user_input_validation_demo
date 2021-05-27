import {useReducer} from 'react';


const initInputState =  {
    value: '',
    isTouched: false
}
const inputReducer = (prevState, action) => {
    if (action.type === 'INPUT') {
        return {value: action.value, isTouched: prevState.isTouched};
    }
    if (action.type === 'BLUR') {
        return {isTouched: true, value: prevState.value};
    }
    if (action.type === 'RESET') {
        return {isTouched: false, value: ''};
    }
    return initInputState;
};

const useInput = (validateValue) => {

    const [inputState, dispatchFunc] = useReducer(inputReducer, initInputState);

    const valueIsValid = validateValue(inputState.value);
    const hasError = !valueIsValid && inputState.isTouched;

    const onInputBlurHandler = (event) => {
        dispatchFunc({type: "BLUR"});
        
      }

    const onInputChangeHandler = (event) => {
        dispatchFunc({type: "INPUT", value: event.target.value});
    }

    const reset = () => {
        dispatchFunc({type: "RESET"});
    }

    return {
        isValid: valueIsValid,
        value: initInputState.value,
        hasError,
        onInputBlurHandler, 
        onInputChangeHandler,
        reset
    };

};

export default useInput;