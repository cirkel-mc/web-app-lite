import { useState, useCallback } from 'react'
import { Dayjs } from 'dayjs'
import MemberCard from '../components/MemberCard'
import { MusicianAttribute } from '@/models/user/types/musician-types'

export const useCreateSession = () => {
  const [category, setCategory] = useState('Jamming Session')
  const [isRecurring, setRecurring] = useState(false)
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<Dayjs | null>(null)
  const [genre, setGenre] = useState<string[]>([])
  const [countMember, setCountMember] = useState(3)
  const [members, setMembers] = useState<Partial<MusicianAttribute>[]>([])

  return {
    category,
    isRecurring,
    open,
    date,
    genre,
    countMember,
    members,
    setGenre,
    setCategory,
    setRecurring,
    setOpen,
    setDate,
    setCountMember,
    setMembers,
  }
}
