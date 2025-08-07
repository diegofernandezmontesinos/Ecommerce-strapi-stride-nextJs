import { useFormik } from "formik";
import { User } from "@/api";
import { useAuth } from "@/hooks";
import { initialValues, validationSchema } from "./ChangeEmailFom.form";
import styles from "./ChangeEmailForm.module.scss";

const userCtrl = new User();

export function ChangeEmailForm() {
  const { user,updateUser } = useAuth();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    //validationSchema: null, //comentar a futuro
    onSubmit: async (formValue) => {
      try {
        await userCtrl.updateMe(user.id, { email: formValue.email });
        updateUser("email", formValue.email);
        formik.handleReset();
      } catch (error) {
        console.error(error);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <label>Cambiar email: </label>
      <div className={styles.labelContent}>
        <input
          type="text"
          name="email"
          placeholder="nuevo email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        {formik.errors.email && (
      <div className={styles.error}>{formik.errors.email}</div>
    )}
        <input
          type="text"
          name="repeatEmail"
          placeholder="repetir email"
          value={formik.values.repeatEmail}
          onChange={formik.handleChange}
        />
         {formik.errors.repeatEmail && (
      <div className={styles.error}>{formik.errors.repeatEmail}</div>
    )}
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </div>
    </form>
  );
}
