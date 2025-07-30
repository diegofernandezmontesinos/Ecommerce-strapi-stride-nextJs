import { Badge } from "primereact/badge";
import { Button } from "primereact/button";
import { useRouter } from "next/router";
import { useAuth } from "@/hooks";
import styles from "./Account.module.scss";

//TODO ...
const total = 5;

export function Account() {
  const { user } = useAuth();
  const router = useRouter();

  const goToLogin = () => router.push("/join/sign-in");
  const goToAccount = () => router.push("/account");

  const goToCart = () => {
    if (!user) goToLogin();
    else router.push("/cart");
  };
  return (
    <div className={styles.account}>
      <button onClick={goToCart} className={styles.iconButton}>
        <i className="pi pi-shopping-cart" />
        {total > 0 && <span className={styles.cartBadge}>{total}</span>}
      </button>

      <button
        onClick={user ? goToAccount : goToLogin}
        className={styles.iconButton}
      >
        <i className="pi pi-user" />
      </button>
    </div>
  );
}
