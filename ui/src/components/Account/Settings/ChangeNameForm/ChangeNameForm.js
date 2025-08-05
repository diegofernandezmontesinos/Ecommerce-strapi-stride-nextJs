import React, { useState } from "react";
import { useFormik } from "formik";
import { useAuth } from "@/hooks";
import { User } from "@/api";
import { initialValues, validationSchema } from "./ChangeNameForm.form";
import styles from "./ChangeNameForm.module.scss";

const userCtrl = new User();

export function ChangeNameForm() {
  const { user } = useAuth();

  const formik = useFormik({
    initialValues: initialValues(user.firstname, user.lastname),
    validationSchema: validationSchema(),
    validateOnChange: false,
    validationSchema: null, //comentar a futuro
    onSubmit: async (formValue) => {
      try {
        await userCtrl.updateMe(user.id, formValue);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.content}>
      <label>Nombre y Apellido:</label>
      <div className={styles.labelContent}>
        <input
          type="text"
          name="firstname"
          value={formik.values.firstname}
          onChange={formik.handleChange}
          error={formik.errors.firstname}
        />

        <input
          type="text"
          name="lastname"
          value={formik.values.lastname}
          onChange={formik.handleChange}
          error={formik.errors.lastname}
        />

        <button type="submit" className={styles.button}>
          Enviar
        </button>
      </div>
    </form>
  );
}
