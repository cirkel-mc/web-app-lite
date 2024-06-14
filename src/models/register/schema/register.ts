import * as yup from 'yup'

export const registerSchema = yup.object({
  email: yup
    .string()
    .email('Please input correct email')
    .required('Email is required'),
  username: yup.string().min(5).required('Username is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      'Password must contain at least 8 characters, one uppercase, one number and one special case character',
    ),
  city: yup.number().required('City is required'),
})
