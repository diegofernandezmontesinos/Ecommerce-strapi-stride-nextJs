import * as Yup from "yup";

export function initialValues() {
  return {
    username: "",
    email: "",
    password: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string().email(true).required(true),
    usermame: Yup.string().required(true),
    password: Yup.string().required(true),
  });
}
