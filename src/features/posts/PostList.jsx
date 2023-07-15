import {useSelector} from "react-redux";
import { selectAllPosts } from "./postsSlice";
import TimeAgo from "./TimesAgo";
import ReactionButtons from "./Reaction";



const PostsList = () => {
    const posts = useSelector(selectAllPosts)
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    const renderPost = orderedPosts.map((post) => (
        <article className="card">
            <h2>{post.title}</h2>
            <h4>{post.content}</h4>
            <p><TimeAgo timestamp={post.date} /></p>
            <ReactionButtons post={post} />
        </article>
    ))

  return (
    <div className=""><h1 className="button">Posts</h1>{renderPost}</div>
  )
}

export default PostsList