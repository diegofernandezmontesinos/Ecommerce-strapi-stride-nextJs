// IdentifierForm.tsx
import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import styles from "./LoginForm.module.scss";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { Auth } from "@/api";
import { useAuth } from "@/hooks";
import { initialValues, validationSchema } from "./LoginForm.form";

const authCtrl = new Auth();
export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuth();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    // validationSchema: null, //comentar a futuro
    onSubmit: async (formValue) => {
      try {
        const response = await authCtrl.login(formValue);
        console.log("Login successful:", response);
        login(response.jwt);
        //router.push("/");
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
