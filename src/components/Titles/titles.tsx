import * as React from "react";
import styles from "./titles.module.scss";
type TitlesProps = {
  title: string;
  desc: string;
};

const Titles: React.FC<TitlesProps> = ({ title, desc }) => {
  title = "Giochiamo";
  desc = "Gioca con i tuoi amici!";
  return (
    <div className={styles.titlesWrapper}>
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.homeDesc}>{desc}</h3>
    </div>
  );
};

export default Titles;
