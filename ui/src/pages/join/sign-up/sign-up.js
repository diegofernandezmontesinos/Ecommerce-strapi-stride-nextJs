import { JoinLayouts } from "@/layouts/JoinLayouts";
import Link from "next/link";
import styles from "./sign-up.module.scss";
import { RegisterForm } from "@/components/Auth";

export default function signUpPage() {
  return (
    <>
      <JoinLayouts>
        <div className={styles.signIn}>
          <h3>Crear cuenta</h3>
          {/*FORM */}
          <RegisterForm />
          <div className={styles.actions}>
            <Link href="/join/sign-in">Atras</Link>
          </div>
        </div>
      </JoinLayouts>
    </>
  );
}
