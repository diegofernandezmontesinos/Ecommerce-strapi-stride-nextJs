import * as Yup from "yup";

export function initialValues(email, repeatEmail) {
  return {
    email: "",
    repeatEmail: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string()
      .email("Introduce un email válido")
      .required("El email es obligatorio"),

    repeatEmail: Yup.string()
      .oneOf([Yup.ref("email")], "Los emails no coinciden")
      .required("Repite el email"),
  });
}
