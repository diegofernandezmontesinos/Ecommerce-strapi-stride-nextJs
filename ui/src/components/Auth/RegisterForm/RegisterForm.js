import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import styles  from './RegisterForm.module.scss';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    e.preventDefault();
    alert(`Nombre: ${name}\nEmail: ${email}`);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.simpleForm}>
      <div className={styles.formGroup}>
        <label htmlFor="name">Nombre</label>
        <InputText id="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>

      <div className={styles.formGroup}>
        <label htmlFor="email">Email</label>
        <InputText id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <Button label="Enviar" type="submit" className={styles.customSubmitButton} />
    </form>
  );
}
