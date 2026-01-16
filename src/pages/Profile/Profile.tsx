import React, { useState } from "react";
import { Button } from "../../components/common/Button/Button";
import "./Profile.css";
import { Switcher } from "../../components/common/Switcher/Switcher";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router";
import { useTheme } from "../../contexts/ThemeContext";

export const Profile = () => {
  const [isStatistics, setIsStatistics] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();
  const { toggleTheme } = useTheme();

  function handleLogout() {
    try {
      logout();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  function handleShowProfile() {
    setIsStatistics(false);
  }

  function handleShowStatistics() {
    setIsStatistics(true);
  }

  return (
    <section className="profile-container">
      <div className="profile-buttons">
        <button
          className={`profile-button ${!isStatistics ? "active" : ""}`}
          onClick={handleShowProfile}
        >
          Profile Info
        </button>
        <button
          className={`profile-button ${isStatistics ? "active" : ""}`}
          onClick={handleShowStatistics}
        >
          Statistics
        </button>
      </div>

      {!isStatistics ? (
        <div className="grid-container">
          <div className="profile-edit">
            <h3>Edit Profile</h3>
          </div>
          <div className="profile-preferences">
            <h3>Preferences</h3>
            <Switcher onClick={toggleTheme} />
            <span>Dark Theme</span>
          </div>
          <div className="profile-actions">
            <h3>Actions</h3>
            <Button onClick={handleLogout}>Logout</Button>
          </div>
        </div>
      ) : (
        <div>Statistics Component Here</div>
      )}
    </section>
  );
};
