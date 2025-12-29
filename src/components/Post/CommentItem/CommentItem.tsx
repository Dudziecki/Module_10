import React, { Component } from "react";

import { IComment } from "../types";
import { TrashIcon } from "../../../assets/icons/TrashIcon";
import "./CommentItem.css";

interface CommentItemProps {
  comment: IComment;
  onDelete?: (id: number) => void;
  isOwner?: boolean;
}

export class CommentItem extends Component<CommentItemProps> {
  static defaultProps = {
    isOwner: true,
  };

  handleDelete = () => {
    const { comment, onDelete } = this.props;
    if (onDelete) {
      onDelete(comment.id);
    }
  };

  render() {
    const { comment, isOwner, onDelete } = this.props;

    return (
      <li className="comment-item">
        <p className="comment-item-text">
          <span className="comment-item-id">#{comment.id}.</span>
          {comment.text}
        </p>

        {isOwner && onDelete && <TrashIcon onClick={this.handleDelete} />}
      </li>
    );
  }
}
