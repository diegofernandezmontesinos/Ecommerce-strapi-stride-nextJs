import * as Yup from "yup";

export function initialValues() {
  return {
    title: "",
    name: "",
    address: "",
    city: "",
    state: "",
    postal_code: "",
    phone: "",
  };
}

export function validationSchema() {
  return Yup.object({
    title: Yup.string().required("El título es obligatorio"),
    name: Yup.string().required("El name es obligatorio"),
    address: Yup.string().required("El address es obligatorio"),
    city: Yup.string().required("El city es obligatorio"),
    state: Yup.string().required("El state es obligatorio"),
    postal_code: Yup.string().required("El postal_code es obligatorio"),
    phone: Yup.number().required("El phone es obligatorio"),
  });
}
