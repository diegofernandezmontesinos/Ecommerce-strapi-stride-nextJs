import React from "react";
import style from "./Confirm.module.scss";

export function Confirm({ isOpen, onClose, onConfirm, message }) {
  if (!isOpen) return null;

  return (
    <div className={style.container}>
      <div className={style.section}>
        <p style={{ marginBottom: "20px" }}>
          {message || "¿Estás seguro que quieres eliminar este registro?"}
        </p>
        <button onClick={onConfirm} className={style.deleteBtn}>
          Eliminar
        </button>
        <button onClick={onClose} className={style.cancelBtn}>
          Cancelar
        </button>
      </div>
    </div>
  );
}
