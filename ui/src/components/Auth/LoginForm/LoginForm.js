// IdentifierForm.tsx
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import styles from "./LoginForm.module.scss";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./LoginForm.form";

export default function LoginForm() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
   // validationSchema: null, //comentar a futuro
    onSubmit: async (formValue) => {
      try {
        console.log("Formulario enviado:", formValue);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.simpleForm}>
      <div className={styles.formGroup}>
        <InputText
          className={styles.inputText}
          id="identifier"
          placeholder="Usuario o Email"
          name="identifier"
          type="text"
          value={formik.values.identifier}
          onChange={formik.handleChange}
          error={formik.errors.identifier}
        />
      </div>

      <div className={styles.formGroup}>
        <InputText
          className={styles.inputText}
          id="identifier"
          placeholder="Contraseña"
          name="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.errors.password}
        />
      </div>

      <Button
        className={styles.customSubmitButton}
        label="Enviar"
        type="submit"
      />
    </form>
  );
}
