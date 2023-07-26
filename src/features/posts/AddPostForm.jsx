import { useState } from "react";
import { useDispatch } from "react-redux";

import { addNewPost } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [addRequestStatus, setAddRequestStatus] = useState("idle");

  const [content, setContent] = useState("");

  const titleOnChange = (e) => setTitle(e.target.value);
  const contentOnChange = (e) => setContent(e.target.value);
  const canSave = Boolean(title) && Boolean(content);

  const handleSubmit = () => {
    if (canSave) {
      try {
        setAddRequestStatus("pending");
        dispatch(addNewPost({ title, body: content })).unwrap();

        setTitle("");
        setContent("");
      } catch (err) {
        console.error("Failed to save the post", err);
      } finally {
        setAddRequestStatus("idle");
      }
    }
  };

  return (
    <div className="text-center">
      <form>
        <h1 className="button">Create Post</h1>

        <label>Title:</label>
        <input
          value={title}
          onChange={titleOnChange}
          type="text"
          id="title"
          placeholder="Enter a title"
        />

        <label>Content:</label>
        <textarea
          value={content}
          onChange={contentOnChange}
          type="text"
          id="content"
          placeholder="Enter the content"
        />
        <div className="button">
          <button disabled={!canSave} onClick={handleSubmit} type="button">
            Submit{" "}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPostForm;
