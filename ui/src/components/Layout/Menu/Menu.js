import { useState, useEffect } from "react";
import { Platform } from "@/api";
import { InputText } from "primereact/inputtext";
import Link from "next/link";
import { map } from "lodash";
import styles from "./Menu.module.scss";
import classNames from "classnames"
import Image from "next/image";

const platformCtrl = new Platform();

export function Menu(props) {
  const { isOpenSearch } = props;
  const [platforms, setPlatforms] = useState(null);
  const [value, setValue] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const openCloseSearch = () => setShowSearch(prevState => !prevState)

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

      <button
        className={styles.search}
        onClick={openCloseSearch}
      >
        <i className="pi pi-search" />
      </button>

      <div className={classNames(styles.inputContainer, {
        [styles.active]: showSearch
      })}>
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={value}
            className={styles.input}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Buscar..."
          />
          <button
            className={styles.closeInput}
            onClick={openCloseSearch}
          >
            <i className="pi pi-times" name="close" />
          </button>
        </span>
      </div>
    </div>
  );
}
