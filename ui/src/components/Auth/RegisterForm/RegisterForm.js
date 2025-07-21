import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import styles from "./RegisterForm.module.scss";
import { useFormik } from "formik";
import { Auth } from "@/api";
import { useRouter } from "next/router";
import { validationSchema, initialValues } from "./RegisterForm.form";

const authCtrl = new Auth();

export default function RegisterForm() {
  const router = useRouter();

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    validationSchema: null, //comentar a futuro
    onSubmit: async (formValue) => {
      try {
        await authCtrl.register(formValue);
        router.push("/join/sign-in");
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.simpleForm}>
      <div className={styles.formGroup}>
        <InputText
          id="username"
          placeholder="Usuario"
          value={formik.values.username}
          className={styles.inputText}
          onChange={formik.handleChange}
          error={formik.errors.username}
        />
        {formik.errors.username && (
          <small className="p-error">{formik.errors.username}</small>
        )}
      </div>

      <div className={styles.formGroup}>
        <InputText
          id="email"
          placeholder="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          className={styles.inputText}
          error={formik.errors.email}
        />
        {formik.errors.email && (
          <small className="p-error">{formik.errors.email}</small>
        )}
      </div>

      <div className={styles.formGroup}>
        <InputText
          id="password"
          placeholder="Contraseña"
          type="password"
          className={styles.inputText}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
        {formik.errors.password && (
          <small className="p-error">{formik.errors.password}</small>
        )}
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
