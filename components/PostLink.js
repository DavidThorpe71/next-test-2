import Link from 'next/link';

const PostLink = (props) => {
  return (
    <Link href={`/${props.eventName}`}>
      <a>{props.eventName}</a>
    </Link>
  );
};

export default PostLink;