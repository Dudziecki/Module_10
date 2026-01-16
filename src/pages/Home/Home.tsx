import React, { useReducer, useState } from "react";
import { Post } from "../../components/Post/PostComponent/Post";
import { NewPostSection } from "../../components/NewPostSection/NewPostSection";
import { SuggestedPeopleSection } from "../../components/SuggestedPeopleSection/SuggestedPeopleSection";
import { SuggestedCommunities } from "../../components/SuggestedCommunities/SuggestedCommunities";
import "./Home.css";
import { CreatePostModal } from "../../components/CreatePostModal/CreatePostModal";
import { addPostAC, postsReducer } from "../../store/posts-reducer";
import { useAuth } from "../../contexts/AuthContext";
import { initialPosts } from "../../lib/InitialPosts/initialPosts";

export const Home = () => {
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [posts, dispatch] = useReducer(postsReducer, initialPosts);
  const { user } = useAuth();

  function handleCreatePost(data: { description: string; image?: string }) {
    dispatch(addPostAC(data));
    setIsCreateModalOpen(false);
  }

  function openCreatePostModal() {
    setIsCreateModalOpen(true);
  }

  function closeCreatePostModal() {
    setIsCreateModalOpen(false);
  }

  return (
    <div className="home">
      <section className="home-feed">
        {user && <NewPostSection onAddPost={openCreatePostModal} />}
        {posts?.map((post) => (
          <Post key={post.id} {...post} isLoggedIn />
        ))}
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
