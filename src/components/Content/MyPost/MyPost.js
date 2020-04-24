import React from "react";
import s from "./MyPost.module.css";
import Post from "./Post/Post";

const MyPost = (props) => {
  debugger
  //выносим массив в index.js и добавляем props
 {/*} let postsData = [
    { id: 1, message: "Hi, how are you?", likesCount: 15 },
    { id: 2, message: "It is great!", likesCount: 20 },
    { id: 3, message: "Yoo!", likesCount: 29 }
  ];*/}

  //создаем новый массив
  let postsElements = props.postsData.map(post => (
    <Post message={post.message} likesCount={post.likesCount} />
  ));
 
let newPostElement = React.createRef();

  let addPost = () => {
    debugger
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }
  return (
    <div>
      My posts
      <div>
        <textarea ref={newPostElement}></textarea>
        <button onClick={addPost}>Add post</button>
        <button>Delete</button>
      </div>
      <div className={s.posts}>
        {postsElements}
        {/*<Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
       <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>*/}
      </div>
    </div>
  );
};

export default MyPost;
