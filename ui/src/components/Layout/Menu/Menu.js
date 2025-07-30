import { useState, useEffect } from "react";
import { Platform } from "@/api";
import Link from "next/link";
import { map } from "lodash";
import styles from "./Menu.module.scss";
import Image from "next/image";

const platformCtrl = new Platform();

export function Menu(props) {
  const { isOpenSearch } = props;
  const [platforms, setPlatforms] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await platformCtrl.getAll();
        setPlatforms(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className={styles.platforms}>
      {map(platforms, (platform) => (
        <Link
          key={platform.id}
          href={`/games/${platform.slug}`}
          className={styles.iconLink}
        >
          <Image
            src={platform.icon.url}
            alt={platform.title}
            width={20}
            height={20}
          />
          {platform.title}
        </Link>
      ))}
    </div>
  );
}
