import React from "react";
import "./SuggestedPeopleItem.css";

type SuggestedPeopleItemPropsType = {
  title: string;
  subtitle: string;
  avatar: string;
};

export const SectionItem: React.FC<SuggestedPeopleItemPropsType> = ({
  title,
  subtitle,
  avatar,
}) => {
  return (
    <div className="section-item">
      <div className="section-item-image">
        <img src={avatar} alt="avatar-image" />
      </div>
      <div className="section-item-info">
        <p className="section-item-title">{title}</p>
        <p className="section-item-subtitle">{subtitle}</p>
      </div>
    </div>
  );
};
