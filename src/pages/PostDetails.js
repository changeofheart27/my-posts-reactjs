import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router";

const PostDetails = () => {
  const [post, setPost] = useState();
  const {id} = useParams();

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => {
        console.log(response.data);
        setPost(response.data);
      });
  }, [id]);

  return (
    <div>
      <h3>{post.title}</h3>
      <p>ID: {post.id}</p>
      <p>Body: {post.body}</p>
    </div>
  )
    
};

export default PostDetails;