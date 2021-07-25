import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";


const PostDetailsPage = ({ currentUser }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setIsLoading(false);
    axios
      .get(`http://localhost:8080/api/v1/posts/${id}`, {
        headers: {
          Authorization: "Bearer " + currentUser.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, currentUser.token]);

  if (isLoading) {
    return <h3>Loading...</h3>
  }
  return (
    <div>
      <Header />
      <div className="article-content">
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <br/>
        <Link to="/home">Go back</Link>
      </div>
      <Footer />
    </div>
  );
};

export default PostDetailsPage;