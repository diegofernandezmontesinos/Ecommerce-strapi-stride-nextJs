import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Game } from "@/api";
import styles from "./BannerLastGamePublished.module.scss";

const gameCtrl = new Game();

export function BannerLastGamePublished() {
  const [game, setGame] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await gameCtrl.queLastPublished();
        console.log(response);

        // Verifica que response.data exista y tenga al menos un elemento
        if (response?.data?.length > 0) {
          console.log(response.data[0]);
          setGame(response.data[0]);
        } else {
          console.warn("No se encontraron juegos publicados:", response);
        }
      } catch (error) {
        console.error("Error al obtener el último juego publicado:", error);
      }
    })();
  }, []);

if (!game) {
  return <p>Cargando juego...</p>;
}

  console.log("Juego:", game);
  const wallpaper = game.wallpaper;
  return (
    <div>
      <h2>BannerLastGamePublished</h2>
    </div>
  );
}
