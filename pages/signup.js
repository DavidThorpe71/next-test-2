import React from "react";
import { Mutation } from "react-apollo";
import gql from "graphql-tag";

const CREATE_USER = gql`
  mutation createUser($email: String, $password: String, $name: String) {
    createUser(email: $email, password: $password, name: $name) {
      name
      email
    }
  }
`;

const signup = () => {
  return (
    <div>
      <Mutation
        mutation={CREATE_USER}
        variables={{ email: "d@d.com", password: "test", name: "davidt" }}
      >
        {(createUser, { loading, error }) => {
          return <button onClick={createUser}>Create user</button>;
        }}
      </Mutation>
      <p>testing</p>
    </div>
  );
};

export default signup;
