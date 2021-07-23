import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

const PostDetails = () => {
  const [post, setPost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(false);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      });
  }, [id]);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      <h3>{post.title}</h3>
      <p>ID: {post.id}</p>
      <p>Body: {post.body}</p>
    </div>
  );
};

export default PostDetails;
