import * as yup from 'yup'
import { musicianSchema } from '@/models/user/schema/musician-schema'

export const createSessionSchema = yup.object({
  eventName: yup.string().required('Event name is required'),
  category: yup.string().required(''),
  date: yup.date().required('Date is required'),
  time: yup.string().required('Time is required'),
  location: yup.string().required('Location is required'),
  isRecurring: yup.boolean(),
  genre: yup.array().of(yup.string()).min(1),
  member: yup.array().of(musicianSchema).min(1),
})
