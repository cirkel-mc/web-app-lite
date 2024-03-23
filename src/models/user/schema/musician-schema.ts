import * as yup from 'yup'

export const musicianSchema = yup.object({
  fullname: yup.string().required('fullname is required'),
  profilePicture: yup.string(),
  skills: yup.array().of(yup.string()).required('skills is required'),
})
