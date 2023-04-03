import * as React from "react";
import CategoryCard from "../../components/CategoryCard/category-card";
import Titles from "../../components/Titles/titles";
import TopBar from "../../components/TopBar/top-bar";
import styles from "./home.module.scss";

const Home: React.FC<any> = (props) => {
  const questionsCat = [
    {
      title: "Programmazione",
      questionNo: 10,
      img: "../../../public/assets/pc-coding.svg",
      bgColor: "#ed7d3a",
    },
    {
      title: "Programmazione",
      questionNo: 10,
      img: "../../../public/assets/pc-coding.svg",
      bgColor: "#ed7d3a",
    },
  ];
  return (
    <div className={styles.homeWrapper}>
      <TopBar size="1.5rem" icon="" />
      <Titles title="" desc="" />
      <div className={styles.catWrapper}>
        {questionsCat?.map((cat, i) => (
          <CategoryCard key={i} {...cat} />
        ))}
      </div>
    </div>
  );
};

export default Home;
