import { useState, useEffect } from "react";
import { Platform } from "@/api"
import styles from "./Menu.module.scss";


const platformCtrl = new Platform();

export function Menu(props) {
    
  const { isOpenSearch } = props;
  const [platform, setPlatform] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await platformCtrl.getAll();
        setPlatform(response)
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      <h2>Menu...</h2>
    </div>
  );
}
