import React from "react";
import { Button } from "../common/Button/Button";
import "./NewPostSection.css";
import { DEFAULT_USER } from "../../lib/constants/constants";

type NewPostSectionPropsType = {
  onAddPost?: () => void;
};

export const NewPostSection = ({ onAddPost }: NewPostSectionPropsType) => {
  return (
    <article className="new-post-section">
      <div className="new-post-info">
        <div className="new-post-image">
          <img src={DEFAULT_USER.avatar} alt="avatar-image" />
        </div>
        <p>What's happening?</p>
      </div>
      <Button className="new-post-button" onClick={onAddPost}>
        Tell everyone
      </Button>
    </article>
  );
};
