import styles from "./Footer.module.scss";
import Link from "next/link";
import { Button } from "primereact/button";
import "primeicons/primeicons.css";

export function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.columns}>
        <div>
          <Link href="/">
            <img src="images/logo.png" alt="gaming" />
          </Link>
        </div>

        <div>
          <ul>
            <Link as={Link} href="#">
              {" "}
              Términos y Condiciones
            </Link>
            <Link as={Link} href="#">
              {" "}
              Política de Privacidad
            </Link>
            <Link as={Link} href="#">
              {" "}
              Contacos
            </Link>
            <Link as={Link} href="#">
              {" "}
              FAQs
            </Link>
          </ul>
        </div>

        <div className={styles.social}>
          <Button
            icon="pi pi-facebook"
            className="p-button-rounded p-button-primary"
            aria-label="Facebook"
            onClick={() => window.open("https://facebook.com")}
          />
          <Button
            icon="pi pi-twitter" // X usa este ícono todavía
            className="p-button-rounded p-button-primary"
            aria-label="X"
            onClick={() => window.open("https://x.com")}
          />

          <Button
            icon="pi pi-linkedin"
            className="p-button-rounded p-button-primary"
            aria-label="LinkedIn"
            onClick={() => window.open("https://linkedin.com")}
          />

          <Button
            icon="pi pi-video"
            className="p-button-rounded p-button-primary"
            aria-label="TikTok"
            onClick={() => window.open("https://tiktok.com")}
          />
        </div>
      </div>
      <div className={styles.copyright}>
        <span>Copyright 2023 Gaming - All rights reserved</span>
      </div>
    </div>
  );
}
