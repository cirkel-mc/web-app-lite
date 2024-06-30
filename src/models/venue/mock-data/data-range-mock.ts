import dayjs from "dayjs"

export const MOCK_DATE_RANGE = [
  { day: dayjs(new Date).format('dddd'), date: dayjs(new Date).format('DD/MM/YYYY') },
  { day: dayjs(new Date).add(1, 'day').format('dddd'), date: dayjs(new Date).add(1, 'day').format('DD/MM/YYYY') },
  { day: dayjs(new Date).add(2, 'day').format('dddd'), date: dayjs(new Date).add(2, 'day').format('DD/MM/YYYY') },
  { day: dayjs(new Date).add(3, 'day').format('dddd'), date: dayjs(new Date).add(3, 'day').format('DD/MM/YYYY') },
  { day: dayjs(new Date).add(4, 'day').format('dddd'), date: dayjs(new Date).add(4, 'day').format('DD/MM/YYYY') },
  { day: dayjs(new Date).add(5, 'day').format('dddd'), date: dayjs(new Date).add(5, 'day').format('DD/MM/YYYY') },
  { day: dayjs(new Date).add(6, 'day').format('dddd'), date: dayjs(new Date).add(6, 'day').format('DD/MM/YYYY') }
]