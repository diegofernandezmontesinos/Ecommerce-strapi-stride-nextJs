import React, { useState } from "react";
import { BasicModal, Confirm } from "@/components/Shared";
import { AddressForm } from "../../AddressForm";
import { Address as AddressCtrl } from "@/api";
import styles from "./Address.module.scss";

const addressCtrl = new AddressCtrl();
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
  const [isShowCofirm, setIsShowConfirm] = useState(false);

  const openCloseEdit = () => setIsShowEdit((prev) => !prev);
  const openCloseConfirm = () => setIsShowConfirm((prev) => !prev);

  const onDelete = async () => {
    try {
      await addressCtrl.delete(addressId);
      onReload();
    } catch (error) {
      throw error;
    }
  };

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

          <button
            type="submit"
            className={styles.button}
            onClick={openCloseConfirm}
          >
            <i className="pi pi-times" />
          </button>
        </div>
      </div>

      <Confirm
        isOpen={isShowCofirm}
        onClose={openCloseConfirm}
        onConfirm={onDelete}
      />

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
