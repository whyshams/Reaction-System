import { useState } from "react";
import { useDispatch } from "react-redux";

import {addPost} from "./postsSlice"



const AddPostForm = () => {

    const dispatch = useDispatch()
    const [title,setTitle] = useState('')

    const [content, setContent] = useState('')

    const titleOnChange = (e) => setTitle(e.target.value)
    const contentOnChange = (e) => setContent(e.target.value)
  const canSave = Boolean(title) && Boolean(content)

    const handleSubmit =() => {
        
        if( title && content){
            dispatch(addPost(title,content))
            setTitle('');
        setContent('');
        }
       
    }

  return (
    <div className="text-center">
   
    <form >
<h1 className="button">Create Post</h1>

    <label >Title:</label>
    <input  value={title} onChange={titleOnChange} type="text" id="title"  placeholder="Enter a title"/>
  
    <label >Content:</label>
    <textarea  value={content} onChange={contentOnChange} type='text' id="content"  placeholder="Enter the content"/>
  <div className="button">
  <button disabled={!canSave} onClick={handleSubmit} type="button">Submit </button>

  </div>
  </form>
  </div>
  
  )
}

export default AddPostForm