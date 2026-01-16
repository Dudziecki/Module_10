import React from "react";
import { IAuthor } from "../types";
import { DEFAULT_USER } from "../../../lib/constants/constants";
import "./PostHeader.css";

type HeaderPropsType = {
  author: IAuthor;
  createdAt: string;
};

export const PostHeader = ({ author, createdAt }: HeaderPropsType) => (
  <section className="post-header">
    <img
      src={author.avatar || DEFAULT_USER.avatar}
      alt={`${author.name}'s profile picture`}
      className="post-header-avatar"
    />
    <div className="post-header-info">
      <h3 className="post-header-name">{author.name}</h3>
      <time dateTime={createdAt} className="post-header-timestamp">
        {createdAt}
      </time>
    </div>
  </section>
);
