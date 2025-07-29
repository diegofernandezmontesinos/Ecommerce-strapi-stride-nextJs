import Link from "next/link";
import Image from "next/image";
import { Account} from "../Account"
import { Menu } from "../Menu"
import styles from "./TopBar.module.scss";

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
          <Menu isOpenSearch={isOpenSearch}/>
        </div>
      </div>

      <div className={styles.right}>
        <Account />
      </div>
    </div>
  );
}
