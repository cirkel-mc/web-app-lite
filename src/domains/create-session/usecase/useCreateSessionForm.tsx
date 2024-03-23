import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { createSessionSchema } from '@/models/create-session/schema/create-session-schema'

export const useCreateSessionForm = () => {
  const form = useForm({
    defaultValues: {
      eventName: '',
      date: new Date(),
      time: '',
      category: 'Jamming Session',
      location: '',
      isRecurring: false,
      genre: [],
      member: [],
    },
    resolver: yupResolver(createSessionSchema),
    mode: 'all',
  })

  return form
}
