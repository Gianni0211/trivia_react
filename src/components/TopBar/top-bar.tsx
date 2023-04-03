import * as React from "react";
import styles from "./top-bar.module.scss";
import { AiOutlineUser } from "react-icons/ai";
type TopBarProps = {
  icon: string;
  size: string;
};
const TopBar: React.FC<TopBarProps> = ({ icon, size }) => {
  size = "1.5rem";
  return (
    <>
      <div className={styles.topBarWrapper}>
        <button className={styles.iconWrapper}>
          <AiOutlineUser className={styles.icon} size={size} />
        </button>
      </div>
    </>
  );
};

export default TopBar;
