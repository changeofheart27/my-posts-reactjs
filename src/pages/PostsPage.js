import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const PostsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setIsLoading(false);
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        console.log(response);
        setPosts(response.data);
      })
      .catch((error) => {
        //setIsLoading(false);
        console.log(error);
      });
  }, []);
  console.log("Search Text = ", searchText);

  const postFilter = posts.filter((post) =>
    post.title.toLowerCase().includes(searchText)
  );

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      <input
        type="text"
        style={{ margin: 20 }}
        placeholder="Search by title"
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)}
      />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title -- Sort (NONE)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {postFilter.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>
                {/* <a href={`/posts/${post.id}`}>View Detail</a> */}
                <Link to={`/posts/${post.id}`}>View Detail</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PostsPage;
