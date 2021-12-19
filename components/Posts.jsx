import Post from "./Post";
import styles from "../styles/Posts.module.css";

const Posts = ({ articles }) => {
  return (
    <div className={styles.pageContainer}>
      {articles.map((article) => (
        <Post article={article} key={article.publishedAt} />
      ))}
    </div>
  );
};

export default Posts;
