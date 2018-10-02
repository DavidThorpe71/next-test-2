import React from 'react';
import Link from 'next/link';

const location = (props) => {
  return (
    <div>
      {JSON.stringify(props)}
      <h1>Location page</h1>
      <Link href={`/${props.query.eventName}`}>
        <a>Event home</a>
      </Link>
    </div>
  );
};

export default location;