import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const CREATE_USER = gql`
  mutation createUser($email: String, $password: String, $name: String) {
    createUser(email: $email, password: $password, name: $name) {
      name
      email
    }
  }
`;

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: ''
  };

  saveToState = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    const { email, password, name } = this.state;
    return (
      <div>
        <Mutation
          mutation={CREATE_USER}
          variables={this.state}
          refetchQueries={[{ query: CURRENT_USER_QUERY }]}
        >
          {(createUser, { loading, error }) => (
            <form
              method="post"
              onSubmit={async (e) => {
                e.preventDefault();
                await createUser();
                this.setState({
                  name: '',
                  email: '',
                  password: ''
                });
              }}
            >
              <fieldset disabled={loading} aria-busy={loading}>
                <h2>Sign up for an account</h2>
                <label htmlFor="email">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="email"
                    value={email}
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="name">
                  Name
                  <input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={name}
                    onChange={this.saveToState}
                  />
                </label>
                <label htmlFor="password">
                  Password
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    value={password}
                    onChange={this.saveToState}
                  />
                </label>
                <button type="submit">Sign up!</button>
              </fieldset>
            </form>
          )}
        </Mutation>
        <p>testing</p>
      </div>
    );
  }
}

export default SignUp;
