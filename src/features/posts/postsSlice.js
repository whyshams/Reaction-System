import { createSlice,nanoid } from "@reduxjs/toolkit";
import {sub} from 'date-fns';

const initialState = [ {
    id :"1", title : "This is post number 1....", content: "This is the Content of post number one...",date:sub(new Date(),{minutes : 10}).toISOString(),  reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
    }
},{
    id :"2", title : "This is post number 2....", content: "This is the Content of post number two...", date:sub(new Date(),{minutes : 5}).toISOString(),   reactions: {
        thumbsUp: 0,
        wow: 0,
        heart: 0,
        rocket: 0,
        coffee: 0
    }
},
]

const postsSlice = createSlice({
    name : 'posts',
    initialState,
    reducers:{
        addPost:{reducer(state,action) {
            state.push(action.payload)
        },
        prepare(title,content) {
            return{
                payload : {
                    id: nanoid() ,
                    title,
                    content,
                    date : new Date().toISOString(),
                    reactions: {
                        thumbsUp: 0,
                        wow: 0,
                        heart: 0,
                        rocket: 0,
                        coffee: 0
                    }
                }
            }
        
        }
    },
    addReaction(state ,action) {
        const {postId, reaction} = action.payload;
        const existingPost = state.find(post => post.id === postId)
        if(existingPost){
            existingPost.reactions[reaction]++
        }

    }
    },
})

export const selectAllPosts = (state) => state.posts;

export const {addPost,addReaction} = postsSlice.actions;

export default postsSlice.reducer;