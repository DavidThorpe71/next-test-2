import Link from 'next/link';

const event = (props) => {
  return (
    <div>
      {JSON.stringify(props)}
      <ul>
        <li>
          <Link href={`/${props.query.eventName}/agenda`}>
            <a>Agenda</a>
          </Link>
        </li>
        <li>
          <Link href={`/${props.query.eventName}/attendees`}>
            <a>attendees</a>
          </Link>
        </li>
        <li>
          <Link href={`/${props.query.eventName}/performers`}>
            <a>Performers</a>
          </Link>
        </li>
        <li>
          <Link href={`/${props.query.eventName}/location`}>
            <a>Location</a>
          </Link>
        </li>
      </ul>
      <Link href={`/`}>
        <a>HOME</a>
      </Link>
    </div>
  );
};

export default event;