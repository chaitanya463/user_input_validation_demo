
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {

  const nameValidityFunc = value => value.trim() !== '';

  const emailValidityFunc = value => value.trim() !== '' && value.trim().includes('@');

  const {
    isValid: enteredNameIsValid,
    value: enteredName, 
    hasError: nameInputHasError,
    onInputBlurHandler: nameBlurHandler,
    onInputChangeHandler: nameChangeHandler,
    reset : resetNameInput
  } = useInput(nameValidityFunc);


  const {
    isValid: enteredEmailIsValid,
    value: enteredEmail, 
    hasError: emailInputHasError,
    onInputBlurHandler: emailBlurHandler,
    onInputChangeHandler: emailChangeHandler,
    reset : resetEmailInput
  } = useInput(emailValidityFunc);


  let formIsValid = false;
 
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }
  

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid) {
      return;
    }
    console.log(enteredName);
    resetNameInput();
    resetEmailInput();
  }



  const nameInputClasses = !nameInputHasError ? 'form-control' : 'form-control invalid';

  const emailInputClasses = !emailInputHasError ? 'form-control' : 'form-control invalid';
  

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' onChange= {nameChangeHandler} value={enteredName} onBlur={nameBlurHandler}/>
        {nameInputHasError && <p className="error-text">Name must not be empty!</p>}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your Email</label>
        <input type='email' id='email' onChange= {emailChangeHandler} onBlur={emailBlurHandler} value={enteredEmail}/>
        {emailInputHasError && <p className="error-text">Enter a proper Email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
