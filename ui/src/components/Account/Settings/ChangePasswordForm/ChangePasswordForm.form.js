
import * as Yup from "yup";

export function initialValues(password, repeatPassword) {
  return {
    password,
    repeatPassword,
  };
}

export function validationSchema() {
  return Yup.object({
    password: Yup.string()
      .min(6, "Mínimo 6 caracteres")
      .required("La contraseña es obligatoria"),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Las contraseñas no coinciden")
      .required("Repite la contraseña"),
  });
}

