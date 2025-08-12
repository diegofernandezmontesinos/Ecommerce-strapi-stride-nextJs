import React from "react";

export function Confirm({ isOpen, onClose, onConfirm, message }) {
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          padding: "20px",
          maxWidth: "400px",
          width: "90%",
          boxShadow: "0 2px 10px rgba(0,0,0,0.3)",
          textAlign: "center",
        }}
      >
        <p style={{ marginBottom: "20px" }}>
          {message || "¿Estás seguro que quieres eliminar este registro?"}
        </p>
        <button
          onClick={onConfirm}
          style={{
            marginRight: "10px",
            padding: "8px 16px",
            backgroundColor: "#e74c3c",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Eliminar
        </button>
        <button
          onClick={onClose}
          style={{
            padding: "8px 16px",
            backgroundColor: "#bdc3c7",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Cancelar
        </button>
      </div>
    </div>
  );
}
