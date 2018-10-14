import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from './User';

const SIGNOUT_MUTATION = gql`
  mutation signOut {
    signOut {
      message
    }
  }
`;

const SignOut = () => (
  <Mutation
    mutation={SIGNOUT_MUTATION}
    refetchQueries={[{ query: CURRENT_USER_QUERY }]}
  >
    {signOut => <button onClick={signOut}>Sign Out</button>}
  </Mutation>
);

export default SignOut;
