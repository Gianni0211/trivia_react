import React from "react";
import CategoryCard from "../../components/CategoryCard/category-card.tsx";
import Titles from "../../components/Titles/titles";
import TopBar from "../../components/TopBar/top-bar";
import styles from "./home.module.scss";

const Home = (props) => {
  const questionsCat = [
    {
      title: "Programmazione",
      questionsNo: 10,
      img: "../../../public/assets/pc-coding.svg",
      bgColor: "#ed7d3a",
    },
    {
      title: "Programmazione",
      questionsNo: 10,
      img: "../../../public/assets/pc-coding.svg",
      bgColor: "#ed7d3a",
    },
  ];
  return (
    <div className={styles.homeWrapper}>
      <TopBar />
      <Titles />
      <div className={styles.catWrapper}>
        {questionsCat?.map((cat, i) => (
          <CategoryCard key={i} {...cat} />
        ))}
      </div>
    </div>
  );
};

export default Home;
