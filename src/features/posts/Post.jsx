import TimeAgo from "./TimesAgo";
import ReactionButtons from "./Reaction";

const Post = ({ post }) => {
  return (
    <article className="card">
      <h2>{post.title}</h2>
      <h4>{post.body}</h4>
      <p>
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  );
};

export default Post;
