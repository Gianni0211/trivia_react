import React from "react";
import styles from "./titles.module.scss";

const Titles = (props) => {
  const homeTitle = "Giochiamo";
  const desc = "Gioca con i tuoi amici!";
  return (
    <div className={styles.titlesWrapper}>
      <h1 className={styles.title}>{homeTitle}</h1>
      <h3 className={styles.homeDesc}>{desc}</h3>
    </div>
  );
};

export default Titles;
