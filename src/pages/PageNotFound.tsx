import { PageNotFoundIcon } from "../assets/icons/PageNotFoundIcon";
import "./PageNotFound.css";
import { FC } from "react";

export const PageNotFound: FC = () => {
  return (
    <section className="page-not-found">
      <div className="wrapper">
        <PageNotFoundIcon />
        <h2>Page Not Found</h2>
      </div>
    </section>
  );
};
