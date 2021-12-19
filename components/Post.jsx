import { useRouter } from "next/router";
import moment from "moment";
import styles from "../styles/Post.module.css";

const Post = ({ article }) => {
  const { description, title, url, urlToImage, publishedAt } = article;
  const router = useRouter();

  return (
    <div className={styles.pageContainer}>
      <h2>{title}</h2>
      <div className={styles.imgContainer}>
        <img src={urlToImage} alt="title-img" />
      </div>
      <p style={{ fontSize: "18px" }}>{description}</p>
      <div className={styles.bottom}>
        <button onClick={() => router.push(url)}>visit</button>
        <p>{moment(publishedAt).format("MMM DD, YYYY")}</p>
      </div>
    </div>
  );
};

export default Post;
