import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";
import DocsCard from "../components/DocsCard";
import useBaseUrl from "@docusaurus/useBaseUrl";

const docsList = [
  {
    title: <>Crud2a React React-Router</>,
    imageUrl: "img/undraw_docusaurus_mountain.svg",
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
    link: "docs/crud2a-react-react-router/00-intro"
  },
  {
    title: <>Flutter Crud2a</>,
    imageUrl:
      "https://storage.googleapis.com/coderhackers-assets/flutter_firebase_firestore_crud2a/Copy%20of%20Flutter%20CRUD%20for%20Youtube%20(3).png",
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
    link: "docs/flutter-crud2a/introduction"
  }
];

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <div className={classnames("hero hero--dark", styles.heroBanner)}>
        {/* <div className="container">
          <h1 className={classnames("hero--title", styles.heroTitle)}>
            {siteConfig.title}
          </h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div> */}
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
              {siteConfig.title}
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
                {docsList.map((props, idx) => (
                  <DocsCard key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
