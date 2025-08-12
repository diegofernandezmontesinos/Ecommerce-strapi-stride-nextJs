import React, { useState } from "react";
import { BasicModal } from "@/components/Shared";
import styles from "./AddAddress.module.scss";
import {} from "../AddressForm"
import { AddressForm } from "../AddressForm/AddressForm";

export function AddAddress(props) {
  const { onReload } = props;
  const [isShow, setIsShow] = useState(false);

  const onOpenClose = () => setIsShow((prev) => !prev);
  return (
    <div className={styles.addAddressContainer}>
      <button
        className={styles.addBtn}
        onClick={onOpenClose}

        // onClick={() => setIsShow(!isShow)}
      >
        Crear
      </button>
      <BasicModal visible={isShow} onHide={onOpenClose} title="Nueva dirección">
       <AddressForm onClose={onOpenClose} onReload={onReload}/>
      </BasicModal>
    </div>
  );
}
