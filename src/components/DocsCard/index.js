import React from "react";
import classnames from "classnames";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from "@docusaurus/Link";

import styles from "./styles.module.css";

function DocsCard({ imageUrl, title, description, link }) {
  const imgUrl = useBaseUrl(imageUrl);

  return (
    <div className="col col--4" style={{ marginBottom: "2rem" }}>
      <Link to={link} className={styles.cardLink}>
        <div className={classnames("card shadow--tl", styles.card)}>
          <div className="card__image" style={{ textAlign: "center" }}>
            <img
              src={imgUrl}
              alt={title}
              title={title}
              style={{ height: 200 }}
            />
          </div>
          <div className="card__body">
            <h2 style={{ textAlign: "center" }}>{title}</h2>
            <p style={{ fontSize: "1.1rem" }}>{description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default DocsCard;
