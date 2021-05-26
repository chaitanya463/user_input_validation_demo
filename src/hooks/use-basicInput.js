import {useState} from 'react';

const useBasicInput = (validateFunction) => {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);
    const isValid = validateFunction(enteredValue);

    const hasError = !isValid && isTouched;

    const inputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    }

    const inputBlurHandler = (event) => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnteredValue('');
        setIsTouched(false);
    }

    return {
        value: enteredValue,
        isValid,
        hasError,
        inputChangeHandler,
        inputBlurHandler,
        reset
    }
};

export default useBasicInput;