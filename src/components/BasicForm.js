import useBasicInput from '../hooks/use-basicInput';

const BasicForm = (props) => {

  const nameValidity = value => value.trim() !== '';
  const emailValidity = value => value.trim() !== '' && value.trim().includes('@');

  const {
    value: firstName,
    isValid: isFirstNameValid,
    hasError: isFirstNameError,
    inputChangeHandler: onFirstNameChangeHandler,
    inputBlurHandler: onFirstNameBlurHandler,
    reset: firstNameReset
  } = useBasicInput(nameValidity);

  const {
    value: secondName,
    isValid: isSecondNameValid,
    hasError: isSecondNameError,
    inputChangeHandler: onSecondNameChangeHandler,
    inputBlurHandler: onSecondNameBlurHandler,
    reset: secondNameReset
  } = useBasicInput(nameValidity);

  const {
    value: emailEntered,
    isValid: isEmailValid,
    hasError: isEmailError,
    inputChangeHandler: onEmailChangeHandler,
    inputBlurHandler: onEmailBlurHandler,
    reset: emailReset
  } = useBasicInput(emailValidity);

  let isFormValid = false;

  if (isFirstNameValid && isSecondNameValid && isEmailValid) {
    isFormValid = true;
  }

  const onFormSubmitHandler = () => {
    if (!isFormValid) {
      return;
    }
    firstNameReset();
    secondNameReset();
    emailReset();
  }

  const firstNamestyles = !isFirstNameError  ? 'form-control' : 'form-control invalid';
  const secondNameStyles = !isSecondNameError  ? 'form-control' : 'form-control invalid';
  const emailStyles = !isEmailError  ? 'form-control' : 'form-control invalid';

  return (
    <form onSubmit={onFormSubmitHandler}>
      <div className='control-group'>
        <div className={firstNamestyles}>
          <label htmlFor='name'>First Name</label>
          <input type='text' id='name' onBlur={onFirstNameBlurHandler} onChange={onFirstNameChangeHandler} value={firstName} />
          {isFirstNameError && <p className='error-text'>Please Enter proper first name</p>}
        </div>
        <div className={secondNameStyles}>
          <label htmlFor='name'>Last Name</label>
          <input type='text' id='name' onBlur={onSecondNameBlurHandler} onChange={onSecondNameChangeHandler} value={secondName}/>
          {isSecondNameError && <p className='error-text'>Please enter second name properly</p>}
        </div>
      </div>
      <div className={emailStyles}>
        <label htmlFor='name'>E-Mail Address</label>
        <input type='email' id='name' onChange={onEmailChangeHandler} onBlur={onEmailBlurHandler} value= {emailEntered}/>
        {isEmailError && <p className='error-text'>Enter proper email</p>}
      </div>
      <div className='form-actions'>
        <button disabled={!isFormValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
