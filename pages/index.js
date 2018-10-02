import React from 'react';
import PostLink from '../components/PostLink';

const index = () => {
  return (
    <div>
      <ul>
        <li>
          <PostLink eventName="sxsw" />
        </li>
        <li>
          <PostLink eventName="reading-festival" />
        </li>
        <li>
          <PostLink eventName="glastonbury" />
        </li>
        <li>
          <PostLink eventName="supernormal-festival" />
        </li>
      </ul>
    </div>
  );
};

export default index;