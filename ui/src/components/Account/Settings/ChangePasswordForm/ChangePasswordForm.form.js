import * as Yup from "yup";

export function initialValues(password) {
  return {
    password,
  };
}

export function validationSchema() {
  return Yup.object({
    password: Yup.string().required(true),
  });
}
