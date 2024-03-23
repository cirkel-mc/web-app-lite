import { MusicianAttribute } from '@/models/user/types/musician-types'
import { Dayjs } from 'dayjs'

export interface CreateSessionPayload {
  eventName: string
  category: string
  date: Dayjs
  time: string
  location: string
  isRecurring?: boolean
  genre: string[]
  member: MusicianAttribute[]
}
