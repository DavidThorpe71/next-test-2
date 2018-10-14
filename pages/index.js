import React from 'react';
import Link from 'next/link';
import PostLink from '../components/PostLink';
import User from '../components/User';
import SignOut from '../components/SignOut';
import SignIn from '../components/SignIn';

const index = () => (
  <User>
    {({ data: { me } }) => (
      <>
        {!me && <SignIn />}
        {me && (
          <ul>
            <li>
              <PostLink eventName="reading-festival" />
            </li>
            <li>
              <PostLink eventName="glastonbury" />
            </li>
            <li>
              <PostLink eventName="supernormal-festival" />
            </li>
            <li>
              <SignOut />
            </li>
          </ul>
        )}
      </>
    )}
  </User>
);

export default index;
