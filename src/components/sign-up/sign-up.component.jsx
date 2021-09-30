import React, {useState} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { useSnackbar } from 'notistack';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

const SignUp = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [displayName, setDisplayName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [type, setType] = useState(['password', 'password'])

  const showError = (e, variant) => {
    if(!errorMemo.hasOwnProperty(e)) {
      errorMemo[e] = 1
    }
    else if(errorMemo[e]===4) {
      switch(e) {
        case("Password don't match"):
          alert("Passwords have not matched five times, if more spam is detected, your device may be banned to run this application");
          errorMemo[e] += 1
          break;
        case("The email address is already in use."):
          alert("An email that has already been used has been used to sign up five times, if more spam is detected, your device may be banned to run this application");
          errorMemo[e] += 1
          break;
        default:
          alert(e)
      }
    }
    else if(errorMemo[e]===9) {
      document.body.innerHTML = ''
    }
    else {
      errorMemo[e] += 1
    }
    enqueueSnackbar(e, { variant })
  }

  const errorMemo = {
    
  }

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      showError("Password don't match", 'error');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      setDisplayName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
    } catch (error) {
      showError(error.toString().replace('Error: ', '').replace(' by another account', '').replace('FirebaseFirebase: ', '').replace(' (auth/email-already-in-use).', '').replace('The email address is already in use by another account', `The email address, ${email} is already in use by another account`), 'error');
    }
  };

  const handleChange = event => {
    const { name, value } = event.target;
    switch(name) {
      case('email'):
        setEmail(value)
        break;
      case('displayName'):
        setDisplayName(value)
        break;
      case('password'):
        setPassword(value)
        break;
      case('confirmPassword'):
        setConfirmPassword(value)
        break;
      default:
        console.log()
    }
  };

  const changeTypeOfConfirmPassword = () => {
    setType(type[1] === 'password' ? [type[0], 'text'] : [type[0], 'password'])
  }
  const changeTypeOfPassword = () => {
    setType(type[0] === 'password' ? ['text', type[1]] : ['password', type[1]])
  }
  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have a account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Display Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
          icon={true}
          changeType={changeTypeOfPassword}
          type={type[0]}
        />
        <FormInput
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
          icon={true}
          changeType={changeTypeOfConfirmPassword}
          type={type[1]}
        />
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  )
}

export default SignUp;
