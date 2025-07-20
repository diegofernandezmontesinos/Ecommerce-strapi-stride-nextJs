
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import styles from "./RegisterForm.module.scss";
import  {useFormik} from "formik";
import {  validationSchema, initialValues } from "./RegisterForm.form"


export default function RegisterForm() {

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit:() => console.log("Formulario enviado"),
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.simpleForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Nombre y apellido</label>
        <InputText
          id="name"
          value={formik.values.name}
          className={styles.inputText}
          onChange={formik.handleChange}
           error={formik.errors.email}
        />
      </div>

       <div className={styles.formGroup}>
        <label htmlFor="username">Usuario</label>
        <InputText
          id="username"
          value={formik.values.username}
          className={styles.inputText}
          onChange={formik.handleChange}
           error={formik.errors.username}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <InputText
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          className={styles.inputText}
           error={formik.errors.email}
        />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="password">Contraseña</label>
        <InputText
          id="password"
          type="password"
          className={styles.inputText}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}

        />
      </div>

      <Button
        label="Enviar"
        type="submit"
        loading={formik.isSubmitting}
        className={styles.customSubmitButton}
      />
    </form>
  );
}
