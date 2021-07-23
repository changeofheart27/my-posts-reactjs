import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import "../App.css";

const ProfilePage = ({ currentUser }) => {
  const [profile, setProfile] = useState({
    name: "",
    id: null,
    createdAt: null,
  });

  useEffect(() => {
    let didCancel = false;
    axios
      .get(
        `https://60dff0ba6b689e001788c858.mockapi.io/users/${currentUser.userId}`
      )
      .then((response) => {
        if (!didCancel) {
          setProfile({
            name: response.data.name,
            id: response.data.id,
            createdAt: response.data.createdAt,
          });
        }
      });
    return () => (didCancel = true);
  }, [currentUser.userId, currentUser.token]);

  return (
    <div>
      <p>Username: {profile.name}</p>
      <p>Created At: {profile.createdAt}</p>
    </div>
  );
};

export default ProfilePage;
