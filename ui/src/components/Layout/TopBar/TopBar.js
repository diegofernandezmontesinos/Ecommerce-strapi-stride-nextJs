import Link from "next/link";
import styles from "./TopBar.module.scss";
import Image from "next/image";

export function TopBar(props) {
  const { isOpenSearch } = props;
  return (
    <div className={styles.topBar}>
      <div className={styles.left}>
        <Link href="/">
          <Image src="/images/logo.png" alt="Gaming" width={80} height={30} />
        </Link>
      </div>
      <div className={styles.center}>
        <div>
          <span>Menu</span>
        </div>
      </div>

      <div className={styles.right}>
        <span>ACCOUNT</span>
      </div>
    </div>
  );
}
