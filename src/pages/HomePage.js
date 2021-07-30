import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const HomePage = ({ currentUser }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setIsLoading(false);
    axios
      .get("http://localhost:8080/api/v1/posts", {
        headers: {
          Authorization: "Bearer " + currentUser.token,
        },
      })
      .then((response) => {
        console.log(response.data);
        setPosts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const postsSorted = posts.sort(
    (post1, post2) => post1.createdDate.localeCompare(post2.createdDate)
  );

  if (isLoading) {
    return <h3>Loading...</h3>
  }
  return (
    <div>
      <Header />
      {currentUser.token.length === 0 && (
        <h3 style={{ textAlign: "center", marginTop: 30 }}>
          Please login to see posts.
        </h3>
      )}
      <div className="article-post">
        {postsSorted.map((post) => (
          <article key={post.id}>
            <Link to={`/post/postdetails/${post.id}`}>
              <h2 className="article-title">{post.title}</h2>
              <h3 className="article-info">{post.description}</h3>
            </Link>
            <p className="article-metadata">
              Posted by {post.authorDTO.lastName} {post.authorDTO.firstName} on {post.createdDate} · 8 mins read
            </p>
            <Link to={`/post/postedit/${post.id}`}>Edit</Link>
            <br />
            <Link to={`/post/postdetails/${post.id}`}>Details</Link>
            <hr />
          </article>
        ))}

        <Link to="/posts">
          <button className="btn-post" type="submit">
            View All Posts →
          </button>
        </Link>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
