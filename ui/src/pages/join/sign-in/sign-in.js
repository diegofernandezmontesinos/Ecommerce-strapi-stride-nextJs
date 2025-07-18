import React from "react";
import styles from "./sign-in.module.scss";
import { JoinLayouts } from "@/layouts/JoinLayouts";

export default function signInPage() {
  return (
    <>
      <JoinLayouts>
        <div className={styles.signIn}>
          <h3>Iniciar sesión</h3>
        </div>
      </JoinLayouts>
    </>
  );
}
