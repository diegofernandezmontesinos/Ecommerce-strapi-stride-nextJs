import { useEffect, useState } from "react";
import { Game } from "@/api/game";
import Link from "next/link";
import styles from "./BannerLastGamePublished.module.scss";
import { fn } from "@/utils";
import { Label } from "@/components/Shared";

const gameCtrl = new Game();
export function BannerLastGamePublished() {
  const [game, setGame] = useState(null);
  const [wallpaperUrl, setWallpaperUrl] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await gameCtrl.getLastPublished();

        const result = response?.data?.[0];
        if (!result) {
          console.warn("No se encontró ningún juego publicado.");
          return;
        }

        setGame(result);

        const wallpaper =
          result.wallpaper?.formats?.large?.url || game.wallpaper?.url;

        if (wallpaper) {
          setWallpaperUrl(wallpaper);
        } else {
          console.warn("No se encontró wallpaper en el juego:", result);
        }
      } catch (error) {
        console.error("Error al obtener el último juego publicado:", error);
      }
    })();
  }, []);

  if (!game) {
    return <p>Cargando imagen del juego...</p>;
  }

  const price = fn.calcDiscountPrice(game.price, game.discount);
  return (
    <div className={styles.container}>
      <img
        src={wallpaperUrl}
        alt="Wallpaper del último juego publicado"
        className={styles.wallpaper}
      />
      <Link className={styles.infoContainer} href={game.slug}>
        <h2 className={styles.date}>{game.title}</h2>
        <Label.Discount> - {game.discount}% </Label.Discount>
        <span>{game.price}</span>
      </Link>
    </div>
  );
}
