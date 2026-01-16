import React, { Component } from "react";
import "./PostContent.css";

interface Props {
  image?: string;
  description: string;
}

export class PostContent extends Component<Props> {
  render() {
    const { image, description } = this.props;

    return (
      <section className="post-content">
        {image && (
          <div className="post-content-image-container">
            <img
              src={image}
              alt="Post content"
              className="post-content-image"
              loading="lazy"
            />
          </div>
        )}
        <div className="post-content-description-container">
          <p className="post-content-description">{description}</p>
        </div>
      </section>
    );
  }
}
