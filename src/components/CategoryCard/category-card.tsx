import * as React from "react";
import styles from "./category-card.module.scss";
import { AiOutlineCheck } from "react-icons/ai";

const CategoryCard: React.FC<any> = ({
  title,
  questionNo,
  img,
  bgColor,
}): JSX.Element => {
  const cardStyle = {
    background: `linear-gradient(to bottom, ${bgColor}, ${bgColor})`,
  };

  return (
    <div className={styles.cardWrapper} style={cardStyle}>
      <div className={styles.contentWrapper}>
        <span className={styles.iconWrapper}>
          <AiOutlineCheck className={styles.icon} />
        </span>
        <p className={styles.countTitle}>{`${questionNo}`}</p>
        <p className={styles.cardTitle}>{title}</p>
      </div>
      <img
        className={styles.cardImg}
        alt="immagine della categoria"
        src={img}
      />
    </div>
  );
};

export default CategoryCard;
