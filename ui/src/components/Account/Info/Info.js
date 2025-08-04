import styles from "./Info.module.scss";
import { DateTime} from "luxon"
import { useAuth } from "@/hooks";
import { Button } from "primereact/button";

export function Info() {
  const { data, user } = useAuth();
  const createdAt = new Date(user.createdAt).toISOString();
  console.log(data);
  return (
    <div className={styles.info}>
      <Button
        icon="pi pi-user"
        className={styles.user}
        aria-label="user"
        // onClick={() => window.open("https://facebook.com")}
        />
        <h3 className={styles.username}>{user.username}</h3>
        <h4 className={styles.email}>{user.email}</h4>
        <p className={styles.createdAt}> Miembro desde: {"  "}
            {DateTime.fromISO(createdAt, {locale: "es"}).toFormat("DDD")}
        </p>
    </div>
  );
}
