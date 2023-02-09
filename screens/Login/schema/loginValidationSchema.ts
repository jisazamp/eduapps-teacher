import * as yup from 'yup'

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Por favor ingresa un correo electrónico válido')
    .required('El correo electrónico es requerido'),
  password: yup
    .string()
    .min(8, ({ min }) => `La contraseña debe tener mínimo ${min} caracteres`)
    .required('La contraseña es requerida'),
})
