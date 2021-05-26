import {useState} from 'react';

const useInput = (validateValue) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = validateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const onInputBlurHandler = (event) => {
        setIsTouched(true);
        
      }

    const onInputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        isValid: valueIsValid,
        value: enteredValue,
        hasError,
        onInputBlurHandler, 
        onInputChangeHandler,
        reset
    };

};

export default useInput;