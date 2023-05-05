import * as React from "react";
import styles from "./login-modal.module.scss";

const LoginModal: React.FC<any> = (): JSX.Element => {
  const handleSubmit = (event: any) => {
    console.log("hai cliccato");
  };
  return (
    <div className={styles.modal}>
      <h3 className={styles.modalTitle}>Accedi</h3>
      <form className={styles.loginForm}>
        <input
          className={styles.input}
          type="text"
          placeholder="Username"
        ></input>

        <input
          className={styles.input}
          type="password"
          placeholder="Password"
        ></input>

        <button className={styles.submitBtn} onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginModal;
