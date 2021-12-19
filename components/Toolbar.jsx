import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Toolbar.module.css";

const Toolbar = () => {
  const router = useRouter();

  return (
    <div className={styles.pageContainer}>
      <span onClick={() => router.push("/")}>Home</span>
      <span onClick={() => router.push("/feed/1")}>Feed</span>
      <span onClick={() => router.push("/eom")}>EOM</span>
    </div>
  );
};

export default Toolbar;
