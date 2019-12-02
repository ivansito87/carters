import React, { Component } from 'react';
import './sign-in.scss';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button.component';

class SignInComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      email: '',
      password: '',
    });
  };

  handleChange = event => {
    const { value, name } = event.target;
    console.log({ [name]: value });
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h1>Already have an account</h1>
        <span>Sign in with your email and password</span>
        <form action="">
          <FormInput
            name="email"
            label={'email'}
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <label htmlFor="">Email</label>
          <FormInput
            name="password"
            label={'password'}
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit"> Sign In </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignInComponent;
