import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
      type: ['password', 'password'],
      error: null
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      this.setState({error: 'Password Dont Match'});
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDocument(user, { displayName });

      this.setState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: ''
      });
    } catch (error) {
      this.setState({error: error});

    }
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };

  changeTypeOfConfirmPassword = () => {
    this.setState({type: this.state.type[1] === 'password' ? [this.state.type[0], 'text'] : [this.state.type[0], 'password']})
  }
  changeTypeOfPassword = () => {
    this.setState({type: this.state.type[0] === 'password' ? ['text', this.state.type[1]] : ['password', this.state.type[1]]})
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'>I do not have a account</h2>
        <span>Sign up with your email and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
            icon={true}
            changeType={this.changeTypeOfPassword}
            type={this.state.type[0]}
          />
          <FormInput
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
            icon={true}
            changeType={this.changeTypeOfConfirmPassword}
            type={this.state.type[1]}
          />
          {this.state.error ? <h1 id="error-sign-up">{this.state.error.toString().replace('Error: ', '').replace(' by another account', '')}</h1> : null}
          <CustomButton type='submit'>SIGN UP</CustomButton>
        </form>
      </div>
    );
  }
}

export default SignUp;
