import Link from 'next/link';

const event = (props) => {
  return (
    <div>
      {JSON.stringify(props)}
      <Link href={`/${props.query.eventName}/agenda`}>
        <a>Agenda</a>
      </Link>
      <Link href={`/${props.query.eventName}/attendees`}>
        <a>attendees</a>
      </Link>
      <Link href={`/${props.query.eventName}/performers`}>
        <a>Performers</a>
      </Link>
      <Link href={`/`}>
        <a>HOME</a>
      </Link>
    </div>
  );
};

export default event;