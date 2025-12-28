import React from "react";
import { SectionItem } from "../SuggestedPeopleItem/SectionItem";
import "./SuggestedCommunities.css";

const Communities = [
  {
    name: "Design Enthusiasts",
    membersCount: "13.2k members",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgPimc_RQYYbUhV3A_xER8GPifFju7nveLA&s",
  },
  {
    name: "Photographers of SF",
    membersCount: "2k members",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgPimc_RQYYbUhV3A_xER8GPifFju7nveLA&s",
  },
  {
    name: "Marina crew",
    membersCount: "125 members",
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgPimc_RQYYbUhV3A_xER8GPifFju7nveLA&s",
  },
];
export const SuggestedCommunities = () => {
  return (
    <section className="suggested-communities-section">
      <h2>Communities you might like</h2>
      <div className="section-list">
        {Communities.map((community, index) => (
          <SectionItem
            key={index}
            title={community.name}
            subtitle={community.membersCount}
            avatar={community.avatar}
          />
        ))}
      </div>
    </section>
  );
};
