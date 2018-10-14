import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const SIGNIN_MUTATION = gql`
  mutation signIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      name
      email
    }
  }
`;

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  saveToState = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { email, password } = this.state;
    return (
      <Mutation
        mutation={SIGNIN_MUTATION}
        variables={{ email, password }}
        refetchQueries={[{ query: CURRENT_USER_QUERY }]}
      >
        {(signIn, { loading, error }) => (
          <form
            method="post"
            onSubmit={async (e) => {
              e.preventDefault();
              await signIn();
              this.setState({
                email: '',
                password: ''
              });
            }}
          >
            <fieldset disabled={loading}>
              <h2>Sign In here</h2>
              <label htmlFor="email">
                email
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={email}
                  onChange={this.saveToState}
                />
              </label>
              <label htmlFor="password">
                password
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  value={password}
                  onChange={this.saveToState}
                />
              </label>
              <button type="submit">Sign In!</button>
            </fieldset>
          </form>
        )}
      </Mutation>
    );
  }
}

export default SignIn;
