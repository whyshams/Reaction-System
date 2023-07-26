import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostError,
  getPostStatus,
  fetchData,
} from "./postsSlice";
import { useEffect, useState } from "react";
import Post from "./Post";
import Pagination from "./Pagination";

const PostsList = () => {
  const dispatch = useDispatch();

  const posts = useSelector(selectAllPosts);

  const postStatus = useSelector(getPostStatus);

  const error = useSelector(getPostError);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchData());
    }
  }, [postStatus]);

  let content;
  if (postStatus === "loading") {
    content = <p>"Loading..."</p>;
  }
  if (postStatus === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => <Post key={post.id} post={post} />);
  }

  const orderedPosts = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));

  return (
    <div className="">
      <h1 className="button">Posts</h1>

      <Pagination data={orderedPosts} itemsPerPage={5} />
    </div>
  );
};

export default PostsList;
