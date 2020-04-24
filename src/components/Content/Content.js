import React from "react";
import s from "./Content.module.css";
import MyPost from "./MyPost/MyPost";

const Content = (props) => {
  
debugger
  return (
    <div>
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2015/02/24/15/41/dog-647528__340.jpg"
          width="1170px"
          height="250px"
        />
      </div>
      <div>ava + description</div>
      <MyPost postsData={props.state.postsData} addPost={props.addPost}/>
    </div>
  );
};

export default Content;
