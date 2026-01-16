import React from "react";
import { SectionItem } from "../SuggestedPeopleItem/SectionItem";
import "./SuggestedPeopleSection.css";
import { suggestedPeople } from "../../lib/SuggestedPeople/SuggestedPeople";

export const SuggestedPeopleSection = () => {
  return (
    <section className="suggested-people-section">
      <h2>Suggested people</h2>
      <div className="section-list">
        {suggestedPeople.map((user) => (
          <SectionItem
            key={user.id}
            title={user.name}
            subtitle={user.link}
            avatar={user.avatar}
          />
        ))}
      </div>
    </section>
  );
};
