import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";

export function Content() {
  // giving react variable and ability to set variable
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  // a function to toggle modal show on
  const handleShowPost = () => {
    setIsPostsShowVisible(true);
  };

  // a function to toggle modal show off
  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  const [posts, setposts] = useState([]);
  // a function to show list of blogs using blog api
  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setposts(response.data);
    });
  };
  // allows the functino handleIndexPosts to occur when page is loaded
  useEffect(handleIndexPosts, []);

  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        {/* this is refered to as children */}
        <p>TEST</p>
      </Modal>
    </div>
  );
}
