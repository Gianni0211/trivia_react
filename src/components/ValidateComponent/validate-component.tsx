import * as React from "react";
import styles from "./validate-component.module.scss";

type ValidateProps = {
  icon: string;
  size: string;
};
const ValidateComponent: React.FC<ValidateProps> = ({ icon, size }) => {
  return (
    <>
      <div className={styles.validate}>
        <div className={styles.meter}>ValidateComponent</div>
      </div>
    </>
  );
};

export default ValidateComponent;
