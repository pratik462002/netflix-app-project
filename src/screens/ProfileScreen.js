import React from "react";
import { selectUser } from "../features/counter/userSlice";
import Nav from "../Nav";
import "./ProfileScreen.css";
import { auth } from "../firebase";
import { useSelector } from "react-redux";
import PlansScreen from "./PlansScreen";

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className="profile-screen">
      <Nav />
      <div className="profilescreenbody">
        <h1>Edit Profile</h1>
        <div className="profile-screen-info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profile-screen-details">
            <h2>{user.email}</h2>
            <div className="profilescreenplas">
              <h3>Plans</h3>
              <PlansScreen />
              <button
                onClick={() => auth.signOut()}
                className="profilescreen-signout"
              >
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
