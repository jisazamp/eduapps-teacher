import * as yup from 'yup'

export const registerValidationSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(2, ({ min }) => `El nombre debe tener mínimo ${min} caracteres`)
    .required('El nombre es requerido'),
  lastName: yup
    .string()
    .min(2, ({ min }) => `El apellido debe tener mínimo ${min} caracteres`)
    .required('El apellido es requerido'),
  email: yup
    .string()
    .email('Por favor ingresa un correo electrónico válido')
    .required('El correo electrónico es requerido'),
  password: yup
    .string()
    .min(8, ({ min }) => `La contraseña debe tener mínimo ${min} caracteres`)
    .required('La contraseña es requerida'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Las contraseñas no coinciden'),
  confirmEmail: yup
    .string()
    .oneOf([yup.ref('email')], 'Los correos no coinciden'),
})
