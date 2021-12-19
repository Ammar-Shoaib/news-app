import { useRouter } from "next/router";
import React from "react";
import Posts from "../../components/Posts";
import styles from "../../styles/Feed.module.css";

const Feed = ({ pageNumber, articles }) => {
  const router = useRouter();

  console.log(articles);

  return (
    <div className={styles.pageContainer}>
      <h1>News World</h1>
      {!articles || articles.length === 0 ? (
        <>
          <h1>No Results Found</h1>
        </>
      ) : (
        <>
          <Posts articles={articles} />
          <div className={styles.pagination}>
            <button
              onClick={() => {
                if (pageNumber > 1) {
                  router.push(`/feed/${pageNumber - 1}`);
                }
              }}
              className={pageNumber === 1 ? styles.disabled : styles.active}
            >
              prev
            </button>
            <span>{pageNumber}</span>
            <button
              onClick={() => {
                if (pageNumber < 5) {
                  router.push(`/feed/${pageNumber + 1}`);
                }
              }}
              className={pageNumber === 5 ? styles.disabled : styles.active}
            >
              next
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageNumber = pageContext.query.slug;

  if (pageNumber < 1 || !pageNumber || pageNumber > 5) {
    return {
      props: {
        articles: [],
        pageNumber: 1,
      },
    };
  }

  const responseAPI = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&pageSize=5&page=${pageNumber}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.SECRET_KEY}`,
      },
    }
  );

  const apiJSON = await responseAPI.json();

  const { articles } = apiJSON;

  return {
    props: {
      articles,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};

export default Feed;
