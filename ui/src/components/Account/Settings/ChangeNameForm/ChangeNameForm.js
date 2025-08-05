import React, { useState } from "react";
import styles from "./ChangeNameForm.module.scss";

export function ChangeNameForm() {
  const [formData, setFormData] = useState({
    currentName: "",
    newName: "",
    reason: "",
    birthDate: "",
    birthPlace: "",
    nationality: "",
    idNumber: "",
    phone: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.currentName) newErrors.currentName = "Campo requerido";
    if (!formData.newName) newErrors.newName = "Campo requerido";
    if (!formData.reason) newErrors.reason = "Seleccione un motivo";
    if (!formData.idNumber) newErrors.idNumber = "Campo requerido";
    if (!formData.email) newErrors.email = "Campo requerido";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Formulario enviado:", formData);
      setSubmitted(true);
    }
  };
  return (
    <form onSubmit={handleSubmit} className={styles.content}>
      <div className={styles.labelContent}>
        <label>Nombre y Apellido:</label>
        <input
          type="text"
          name="newName"
          value={formData.newName}
          onChange={handleChange}
        />
        {errors.newName && (
          <span style={{ color: "red" }}>{errors.newName}</span>
        )}
      </div>

      {/* <div>
        <label>Motivo del cambio:</label>
        <select name="reason" value={formData.reason} onChange={handleChange}>
          <option value="">-- Seleccione --</option>
          {reasons.map((r, i) => (
            <option key={i} value={r}>
              {r}
            </option>
          ))}
        </select>
        {errors.reason && <span style={{ color: "red" }}>{errors.reason}</span>}
      </div>

      <div>
        <label>Fecha de nacimiento:</label>
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Lugar de nacimiento:</label>
        <input
          type="text"
          name="birthPlace"
          value={formData.birthPlace}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Nacionalidad:</label>
        <input
          type="text"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Número de identificación:</label>
        <input
          type="text"
          name="idNumber"
          value={formData.idNumber}
          onChange={handleChange}
        />
        {errors.idNumber && (
          <span style={{ color: "red" }}>{errors.idNumber}</span>
        )}
      </div>

      <div>
        <label>Teléfono:</label>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      <div>
        <label>Correo electrónico:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span style={{ color: "red" }}>{errors.email}</span>}
      </div> */}

      <button type="submit" className={styles.button}>
        Enviar solicitud
      </button>
    </form>
  );
}
