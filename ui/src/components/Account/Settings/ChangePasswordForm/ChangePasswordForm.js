import React, { useState } from "react";
import { useFormik } from "formik";
import { useAuth } from "@/hooks";
import { User } from "@/api";
import { initialValues, validationSchema } from "./ChangePasswordForm.form";
import styles from "./ChangePasswordForm.module.scss";

const userCtrl = new User();

export function ChangePasswordForm() {
  const { user, logout } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(user.password, user.repeatPassword),
    validationSchema: validationSchema(),
    validateOnChange: false,
    // validationSchema: null, //comentar a futuro
    onSubmit: async (formValue) => {
      try {
        console.log("entré");
       await userCtrl.updateMe(user.id, { password: formValue.password });
       logout();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <label>Cambiar contraseña: </label>
      <div className={styles.labelContent}>
        <input
          type="password"
          name="password"
          placeholder="nueva contraseña"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
        {formik.errors.password && (
          <div className={styles.error}>{formik.errors.password}</div>
        )}
        <input
          type="password"
          name="repeatPassword"
          placeholder="repetir contraseña"
          value={formik.values.repeatPassword}
          onChange={formik.handleChange}
          error={formik.errors.repeatPassword}
        />
        {formik.errors.repeatPassword && (
          <div className={styles.error}>{formik.errors.repeatPassword}</div>
        )}
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </div>
    </form>
  );
}
