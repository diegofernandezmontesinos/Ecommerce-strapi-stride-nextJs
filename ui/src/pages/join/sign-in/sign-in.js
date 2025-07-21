import Link from "next/link";
import { JoinLayouts } from "@/layouts/JoinLayouts";
import { LoginForm } from "@/components/Auth";
import styles from "./sign-in.module.scss";

export default function signInPage() {
  return (
    <>
      <JoinLayouts>
        <div className={styles.signIn}>
          <h3>Iniciar sesión</h3>

          {/* LOGIN FORM */}
          <LoginForm />

          {/* LINK TO REGISTER */}
          <div className={styles.actions}>
            <Link href="/join/sign-up">
              ¿No tienes una cuenta? Regístrate aquí.
            </Link>
          </div>
        </div>
      </JoinLayouts>
    </>
  );
}
