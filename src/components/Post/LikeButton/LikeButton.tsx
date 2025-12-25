import { useState } from 'react';
import { LikeIcon } from './LikeIcon';
import './LikeButton.css';

type LikeButtonPropsType = {
  count: number;
};

export const LikeButton: React.FC<LikeButtonPropsType> = ({ count }) => {
  const [likes, setLikes] = useState(count);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <button
      onClick={() => {
        setIsLiked(!isLiked);
        setLikes((prev) => (isLiked ? prev - 1 : prev + 1));
      }}
      className="like-button"
    >
      <LikeIcon isLiked={isLiked} />
      <span>{likes} likes</span>
    </button>
  );
};
