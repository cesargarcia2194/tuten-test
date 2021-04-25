import * as yup from 'yup';
export const validationSchema = yup.object({
    email: yup
      .string('Introduza email')
      .email('Email no valido')
      .required('Email es requerido'),
    password: yup
      .string('Intriduzca contraseña')
      .required('Contraseña es requerida'),
    app: yup
    .string('Intriduzca app')
    .required('app es requerida'),
  });