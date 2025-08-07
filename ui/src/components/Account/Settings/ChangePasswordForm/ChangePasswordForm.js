import React, { useState } from "react";
import { useFormik } from "formik";
import { useAuth } from "@/hooks";
import { User } from "@/api";
import { initialValues, validationSchema } from "./ChangePasswordForm.form";
import styles from "./ChangePasswordForm.module.scss";

const userCtrl = new User();

export function ChangePasswordForm() {
  const { user } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(user.password),
    validationSchema: validationSchema(),
    validateOnChange: false,
    validationSchema: null, //comentar a futuro
    onSubmit: async (formValue) => {
      try {
        console.log("Form submitted with values:");
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
          type="text"
          name="password"
          placeholder="nueva contraseña"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        {formik.errors.password && (
          <div className={styles.error}>{formik.errors.password}</div>
        )}
        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </div>
    </form>
  );
}
