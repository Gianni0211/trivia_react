import React from "react";
import styles from "./top-bar.module.scss";
import { AiOutlineUser } from "react-icons/ai";

const TopBar = (props) => {
  return (
    <>
      <div className={styles.topBarWrapper}>
        <button className={styles.iconWrapper}>
          <AiOutlineUser className={styles.icon} size={"1.5rem"} />
        </button>
      </div>
    </>
  );
};

export default TopBar;
