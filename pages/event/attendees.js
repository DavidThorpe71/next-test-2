import React from 'react';
import Link from 'next/link';

const attendees = (props) => {
  return (
    <div>
      {JSON.stringify(props)}
      <h1>Attendees page</h1>
      <Link href={`/${props.query.eventName}`}>
        <a>Event home</a>
      </Link>
    </div>
  );
};

export default attendees;