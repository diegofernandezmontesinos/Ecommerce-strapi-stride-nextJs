import React from "react";
import { Dialog } from "primereact/dialog";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import styles from "./BasicModal.module.scss";

export function BasicModal({ children, visible, onHide, title }) {
  return (
    <Dialog
      visible={visible}
      onHide={onHide}
      header={title}
      style={{ width: "30vw" }}
      modal
       className={styles.modalOverride}
    >
      {children}
    </Dialog>
  );
}
