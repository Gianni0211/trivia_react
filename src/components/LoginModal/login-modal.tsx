import * as React from "react";
import { useState } from "react";
import styles from "./login-modal.module.scss";
import ValidateComponent from "../ValidateComponent/validate-component";
import { validatePassword } from "./utils";

const LoginModal: React.FC<any> = (): JSX.Element => {
  const [isValidPassword, setIsValidPassword] = useState(false);

  const handlePasswordValidation = (event: any) => {
    const password: string = event.target.value;
    setIsValidPassword(() => validatePassword(password));
  };
  const handleSubmit = (event: any) => {
    console.log("hai cliccato");
  };
  return (
    <div className={styles.modal}>
      <h3 className={styles.modalTitle}>Accedi</h3>
      <ValidateComponent icon={""} size={""} />
      <form className={styles.loginForm}>
        <input
          className={styles.input}
          type="text"
          placeholder="Username"
        ></input>

        <input
          className={styles.input}
          onChange={handlePasswordValidation}
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
