import React from "react";
import styles from "./JoinLayouts.module.scss";
import Link from "next/link";
import { XIcon } from "@primer/octicons-react";
import Image from "next/image";
import { useRouter }  from "next/router";
import { useAuth } from "@/hooks";



export function JoinLayouts(props) {
  const { children } = props;
  const router = useRouter();
  const { user } = useAuth();

  if(user) router.push("/");
   return (
    <div className={styles.container}>
      <div className={styles.topBar}>
        <Link href="/">
          <Image src="/images/logo.png" alt="Logo" width={100} height={16} />
        </Link>
        <Link href="/">
          <XIcon size={16} aria-label="Close" />
        </Link>
      </div>
      <div className={styles.blockLeft}> {children}</div>
      <div className={styles.blockRight}></div>
    </div>
  );
}
