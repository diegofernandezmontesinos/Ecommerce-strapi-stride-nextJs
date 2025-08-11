import React from "react";
import styles from "./Address.module.scss";
import { PrimeIcons } from "primereact/api";

export function Address(props) {
  const { addressId, title, name, address, postal_code, city, state } = props;
  return (
    <>
      <div className={styles.address}>
        <div>
          <p className={styles.title}> {title}:</p>
          <p className={styles.addressInfo}>
            {name}, {address}, {state}, {city}, {postal_code}
          </p>
        </div>

        <div className={styles.actions}>
          <button type="submit" className={styles.button}>
            <i className="pi pi-pencil" />
          </button>

          <button type="submit" className={styles.button}>
            <i className="pi pi-times" />
          </button>
        </div>
      </div>
    </>
  );
}
