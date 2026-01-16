import React, { useState } from "react";
import { LikeIcon } from "./LikeIcon";
import "./LikeButton.css";

type LikeButtonPropsType = {
  count: number;
};

export const LikeButton = ({ count }: LikeButtonPropsType) => {
  const [likes, setLikes] = useState(count);
  const [isLiked, setIsLiked] = useState(false);

  function handleLikes() {
    setIsLiked(!isLiked);
    setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
  }

  return (
    <button onClick={handleLikes} className="like-button">
      <LikeIcon isLiked={isLiked} />
      <span className="likes-count">{likes} likes</span>
    </button>
  );
};
