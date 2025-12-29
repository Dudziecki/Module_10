import React, { useReducer, useState } from "react";
import { Post } from "../components/Post/Post";
import { NewPostSection } from "../components/NewPostSection/NewPostSection";
import { SuggestedPeopleSection } from "../components/SuggestedPeopleSection/SuggestedPeopleSection";
import { SuggestedCommunities } from "../components/SuggestedCommunities/SuggestedCommunities";
import "./Home.css";
import { CreatePostModal } from "../components/CreatePostModal/CreatePostModal";
import { addPostAC, postsReducer } from "../store/posts-reducer";
import { useAuth } from "../contexts/AuthContext";

export const Home = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [posts, dispatch] = useReducer(postsReducer, []);
  const { user } = useAuth();

  const handleCreatePost = (data: { description: string; image?: string }) => {
    dispatch(addPostAC(data));
    setIsCreateModalOpen(false);
  };

  const openCreatePostModal = () => {
    setIsCreateModalOpen(true);
  };

  const closeCreatePostModal = () => {
    setIsCreateModalOpen(false);
  };
  return (
    <div className="home">
      <section className="home__feed">
        {user && <NewPostSection onAddPost={openCreatePostModal} />}
        {posts.map((post) => (
          <Post key={post.id} {...post} isLoggedIn />
        ))}
        <Post
          author={{ name: "Mike" }}
          createdAt="3 min ago"
          description="ffff"
          likesCount={2}
          comments={[{ id: 1, text: "string" }]}
          isLoggedIn
        />

        <Post
          author={{ name: "Mike" }}
          createdAt="3 min ago"
          description="ffff"
          likesCount={2}
          comments={[{ id: 1, text: "string" }]}
          isLoggedIn
        />
      </section>

      {user && (
        <aside className="home-sidebar">
          <SuggestedPeopleSection />
          <SuggestedCommunities />
        </aside>
      )}

      <CreatePostModal
        isOpen={isCreateModalOpen}
        onClose={closeCreatePostModal}
        onCreate={handleCreatePost}
      />
    </div>
  );
};
