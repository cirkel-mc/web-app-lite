import { useMutation } from '@tanstack/react-query'
import { postRegister } from '@/models/register/api/post-register'

export const useRegister = () => {
  return useMutation({
    mutationFn: postRegister,
  })
}
