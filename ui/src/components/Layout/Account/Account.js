import { Badge } from 'primereact/badge';
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
      <Button
        icon="pi pi-shopping-cart"
        className={styles.cart}
        onClick={goToCart}
      >
        {total > 0 && <Badge value={total} />

}
      </Button>

      {!user ? (
        <Button icon="pi pi-bell" onClick={goToLogin}></Button>
      ) : (
        <Button className={styles.user} onClick={goToAccount}></Button>
      )}
    </div>
  );
}
