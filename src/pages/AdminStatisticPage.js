import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AdminStatisticPage = ({currentUser}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [statistic, setStatistic] = useState([]);
  const [isAuthorized, setIsAuthorized] = useState(true);

  useEffect(() => {
    setIsLoading(false);
    axios
      .get("http://localhost:8080/api/v1/admin/post/statistic?author=billgate", {
        headers: {
          "Authorization" : "Bearer " + currentUser.token,
        }
      })
      .then(response => {
        setStatistic(response.data);
      })
      .catch(error => {
        if (error.response.status === 403) {
          console.log("YOU DON'T HAVE AUTHORIZATION!");
          setIsAuthorized(false);
        }
      })
  }, []);

  console.log(currentUser);

  if (isLoading) {
    return <h3>Loading...</h3>
  }
  if (!isAuthorized) {
    return (
      <div>
        <h1>YOU DON'T HAVE PERMISSION TO ACCESS THIS PAGE!</h1>
        <Link to="/home">Go back</Link>
      </div>
    );
  }
  return (
    <div>
      <h2>{statistic.authorName}</h2>
      <h2>{statistic.numberOfPosts}</h2>
      <br />
      <Link to="/home">Go back</Link>
    </div>
  );
}

export default AdminStatisticPage;