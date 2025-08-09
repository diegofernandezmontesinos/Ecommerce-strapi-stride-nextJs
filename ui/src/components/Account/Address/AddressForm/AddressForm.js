import styles from "./AddressForm.module.scss";

export function AddressForm() {
  return (
    <form className={styles.content}>
      <div className={styles.inputTitle}>
        <input type="text" placeholder="Título de la dirección" />
      </div>

      <div className={styles.twoColumns}>
        <input type="text" placeholder="Nombre y apellidos" />
        <input type="text" placeholder="Dirección" />
      </div>

      <div className={styles.twoColumns}>
        <input type="text" placeholder="Provincia" />
        <input type="text" placeholder="Ciudad" />
      </div>

      <div className={styles.twoColumns}>
        <input type="text" placeholder="Código postal" />
        <input type="text" placeholder="Teléfono" />
      </div>

      <button type="submit" className={styles.button}>
        Enviar
      </button>
    </form>
  );
}
