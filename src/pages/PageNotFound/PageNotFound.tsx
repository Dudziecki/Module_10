import { PageNotFoundIcon } from "../../assets/icons/PageNotFoundIcon";
import "./PageNotFound.css";

export const PageNotFound = () => {
  return (
    <section className="page-not-found">
      <div className="wrapper">
        <PageNotFoundIcon />
        <h2>Page Not Found</h2>
      </div>
    </section>
  );
};
