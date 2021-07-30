import React from "react";
import { useHistory } from "react-router";

const Logout = ({ currentUser }) => {
  localStorage.clear();
  currentUser.token = "";
  let history = useHistory();
  history.push("/login");
  return null;
};

export default Logout;