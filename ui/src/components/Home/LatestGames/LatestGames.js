import React, { useState, useEffect } from "react";
import { Game } from "@/api";

const gameCtrl = new Game();
const limit = 9;
const platformId = null;

export function LatestGames() {
  const [games, setGames] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await gameCtrl.getLatestPublished({
          limit,
          platformId,
        });
        setGames(response);
      } catch (error) {
        throw error;
      }
    })();
  }, []);

   if (!game) {
    return <p>Cargando imagen del juego...</p>;
  }

  return <div>LatestGames</div>;
}
