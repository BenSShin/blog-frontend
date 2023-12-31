import axios from "axios";
import { useState, useEffect } from "react";
import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import { PostsShow } from "./PostShow";
import { SignUp } from "./SignUp";
import { Login } from "./Login";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Home";
import { PostsShowPage } from "./PostsShowPage";

export function Content() {
  // giving react variable and ability to set variable
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState({});

  // a function to toggle modal show on
  const handleShowPost = (post) => {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  };

  // a function to toggle modal show off
  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  // a function to show list of blogs using blog api
  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };
  const handleCreatePost = (params) => {
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      setPosts([...posts, response.data]);
    });
  };

  const handleUpdatePost = (id, params) => {
    axios.patch(`http://localhost:3000/posts/${id}.json`, params).then((response) => {
      setPosts(
        posts.map((post) => {
          if (post.id === response.data) {
            return response.data;
          } else {
            return post;
          }
        })
      );
      setCurrentPost(response.data);
    });
  };

  const handleDestroyPost = (post) => {
    axios.delete(`http://localhost:3000/posts/${post.id}.json`).then((response) => {
      setPosts(posts.filter((p) => p.id !== post.id));
      console.log(response);
      handleClose();
    });
  };
  // allows the functino handleIndexPosts to occur when page is loaded
  useEffect(handleIndexPosts, []);

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/posts/new" element={<PostsNew onCreatePost={handleCreatePost} />} />
        <Route path="/posts" element={<PostsIndex posts={posts} onShowPost={handleShowPost} />} />
        <Route path="/posts/:id" element={<PostsShowPage />} />
      </Routes>
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <PostsShow post={currentPost} onUpdatePost={handleUpdatePost} onDestroyPost={handleDestroyPost} />
      </Modal>
      <Modal isPostsShowVisible onClose={handleClose}></Modal>
    </div>
  );
}
