import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {PostsPropsType} from "./MyPostsContainer";
import MessageForm, {AddMessageForm} from "../../universalTextarea/MessageForm";


const MyPosts = (props: PostsPropsType) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)



return (
    <div className={s.postsBlock}>
        <h3>My posts</h3>
        <div>

            <AddMessageForm onSubmit={props.addPost}
                         placeholderText={"Enter your post"}
                         textMaxLength={100}

            />

        </div>
        <div className={s.posts}>{postsElements}</div>
    </div>
)

}


export default MyPosts;