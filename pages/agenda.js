import React from 'react';
import Link from 'next/link'

const agenda = (props) => {
  return (
    <div>
      {JSON.stringify(props)}
      <h1>Agenda</h1>
      <Link href={`/${props.query.eventName}`}>
        <a>Event home</a>
      </Link>
    </div>
  );
};

export default agenda;