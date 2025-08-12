import React, { useState } from "react";
import { BasicModal } from "@/components/Shared";
import { AddressForm } from "../../AddressForm";
import styles from "./Address.module.scss";

export function Address(props) {
  const {
    addressId,
    title,
    name,
    address,
    postal_code,
    city,
    state,
    onReload,
  } = props;
  const [isShowEdit, setIsShowEdit] = useState(false);

  const openCloseEdit = () => setIsShowEdit((prev) => !prev);

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
          <button
            type="submit"
            className={styles.button}
            onClick={openCloseEdit}
          >
            <i className="pi pi-pencil" />
          </button>

          <button type="submit" className={styles.button}>
            <i className="pi pi-times" />
          </button>
        </div>
      </div>

      <BasicModal
        visible={isShowEdit}
        onHide={openCloseEdit}
        title="Editar dirección"
      >
        <AddressForm
          onClose={openCloseEdit}
          onReload={onReload}
          addressId={addressId}
          address={address}
          title={title}
          name={name}
          state={state}
          postal_code={postal_code}
          city={city}
        />
      </BasicModal>
    </>
  );
}
