import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";
import DocsCard from "../components/DocsCard";
import useBaseUrl from "@docusaurus/useBaseUrl";
const isDev = process.env.NODE_ENV == "development";

const docsList = [
  {
    isDraft: !isDev && true,
    title: <>[WIP]Crud2a React React-Router</>,
    imageUrl: "img/react-react-router-crud2a-thumbnail.jpg",
    description: (
      <>
        Crud with Authentication and Authorization of React and React-Router.
        Backend is Ruby on rails.
      </>
    ),
    link: "docs/crud2a-react-react-router/00-intro",
  },
  {
    title: <>Flutter CRUD with Authentication and Authorization</>,
    imageUrl: "img/flutter-firestore-crud2a-course-thumbnail.png",
    description: (
      <>
        Fastest way to learn the combination of Flutter and Firebase and
        Firestore.
      </>
    ),
    link: "docs/flutter-crud2a/introduction",
  },
  {
    isDraft: !isDev && true,
    title: "[WIP]Fullstack web development 2020",
    imageUrl: "img/complete-web-dev-with-rails-course-thumbnail.jpg",
    description: (
      <>Complete guide to web development 2020 with Ruby on rails.</>
    ),
    link: "docs/the-complete-webdev-with-rails-2020/introduction",
  },
  {
    title: "Frontend Master Course 2020!",
    imageUrl: "img/frontend-in-a-week.jpg",
    description: <>Fastest way to learn frontend and build real website.</>,
    link: "docs/frontend-quick-learning/introduction",
  },
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout description="Coder Hackers is a site to stock and share what I've learned.">
      <div className={classnames("hero hero--dark", styles.heroBanner)}>
        <div
          style={{ display: "flex", flexDirection: "column", margin: "0 auto" }}
        >
          <div>
            <img
              alt="Kohheepeace avatar"
              className={styles.heroLogo}
              src={useBaseUrl("img/logo.png")}
            />
            <h1 className={classnames("hero--title", styles.heroTitle)}>
              CODER HACKERS
            </h1>
          </div>
          <h1 className={styles.heroProjectTagline}>
            <span className={styles.heroProjectKeywords}>Stock</span> and{" "}
            <span className={styles.heroProjectKeywords}>Share</span>, what I
            learned.
          </h1>
        </div>
      </div>
      <main>
        {docsList && docsList.length && (
          <section className={styles.docsListSection}>
            <div className="container">
              <div className="row">
                {docsList.map((props, idx) => {
                  if (props.isDraft) {
                    return null;
                  } else {
                    return <DocsCard key={idx} {...props} />;
                  }
                })}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
