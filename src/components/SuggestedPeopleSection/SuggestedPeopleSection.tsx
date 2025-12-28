import React from "react";
import { SectionItem } from "../SuggestedPeopleItem/SectionItem";
import "./SuggestedPeopleSection.css";

export const SuggestedPeopleSection = () => {
  const suggestedPeople = [
    {
      name: "Helena",
      link: "@helenahills",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgPimc_RQYYbUhV3A_xER8GPifFju7nveLA&s",
    },
    {
      name: "Charles",
      link: "@charles",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgPimc_RQYYbUhV3A_xER8GPifFju7nveLA&s",
    },
    {
      name: "Oscar Davis",
      link: "@oscardavis",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgPimc_RQYYbUhV3A_xER8GPifFju7nveLA&s",
    },
    {
      name: "Daniel Jay Park",
      link: "@danielj",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgPimc_RQYYbUhV3A_xER8GPifFju7nveLA&s",
    },
    {
      name: "Carlo Rojas",
      link: "@carlorojas",
      avatar:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgPimc_RQYYbUhV3A_xER8GPifFju7nveLA&s",
    },
  ];

  return (
    <section className="suggested-people-section">
      <h2>Suggested people</h2>
      <div className="section-list">
        {suggestedPeople.map((user, index) => (
          <SectionItem
            key={index}
            title={user.name}
            subtitle={user.link}
            avatar={user.avatar}
          />
        ))}
      </div>
    </section>
  );
};
