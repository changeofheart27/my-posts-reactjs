import axios from "axios";
import { useContext, useEffect, useState } from "react";
import CurrentUserContext from "../context/currentUserContext";
import LoginPage from "./LoginPage";

const ProfilePage = () => {
    const currentUser = useContext(CurrentUserContext);
    const isLogin = currentUser.token !== null;

    const [profile, setProfile] = useState({
      name: "",
      id: null,
      createdAt: null,
    });

    let didCancel = false;
    useEffect(() => {
        axios.get(`https://60dff0ba6b689e001788c858.mockapi.io/users/${currentUser.userId}`, {
            headers: {
                "Authorization" : currentUser.token
            }
        })
        .then(response => {
            if (!didCancel) {
                setProfile({
                    name: response.data.name,
                    id: response.data.id,
                    createdAt: response.data.createdAt
                });
            }
        });
        return () => didCancel = true;
    }, [currentUser.userId, currentUser.token]);

    if (!isLogin) {
        return <LoginPage/>
    }

    
    return (
        <div>
            <p>Testing</p>    
        </div>
    )
}

export default ProfilePage;