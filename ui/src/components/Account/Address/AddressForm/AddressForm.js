import styles from "./AddressForm.module.scss";
import { useFormik } from "formik";
import { Address } from "@/api";
import { useAuth } from "@/hooks";
import { initialValues, validationSchema } from "./AddressForm.form";

const addressCtrl = new Address();

export function AddressForm(props) {
  const {
    onClose,
    onReload,
    address,
    addressId,
    title,
    name,
    phone,
    postal_code,
    city,
    state,
    documentId,
  } = props;
  const { user } = useAuth();

  const formik = useFormik({
    initialValues: initialValues({
      title,
      name,
      address,
      city,
      state,
      postal_code,
      phone,
    }),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValues) => {
      try {
        if (documentId) {
          console.log("Actualizar dirección");
          await addressCtrl.update(formValues, documentId);
        } else {
          console.log("Crear dirección");
          await addressCtrl.create(formValues, user.id);
        }

        formik.handleReset();
        onReload();
        onClose();
      } catch (error) {
        console.error("Error al enviar el formulario:", error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.content}>
      <div className={styles.inputTitle}>
        <input
          type="text"
          placeholder="Título de la dirección"
          name="title"
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.errors.title}
        />
      </div>

      <div className={styles.twoColumns}>
        <input
          type="text"
          name="name"
          placeholder="Nombre y apellidos"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.errors.name}
        />
        <input
          type="text"
          placeholder="Dirección"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          error={formik.errors.address}
        />
      </div>

      <div className={styles.twoColumns}>
        <input
          type="text"
          placeholder="Provincia"
          name="state"
          value={formik.values.state}
          onChange={formik.handleChange}
          error={formik.errors.state}
        />
        <input
          type="text"
          placeholder="Ciudad"
          name="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          error={formik.errors.city}
        />
      </div>

      <div className={styles.twoColumns}>
        <input
          type="text"
          placeholder="Código postal"
          name="postal_code"
          value={formik.values.postal_code}
          onChange={formik.handleChange}
          error={formik.errors.postal_code}
        />
        <input
          type="text"
          placeholder="Teléfono"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          error={formik.errors.phone}
        />
      </div>

      <button type="submit" className={styles.button}>
        Enviar
      </button>
    </form>
  );
}
