'use client'

import { useState } from 'react'
import CreateSessionForm from '@/domains/create-session/components/CreateSessionForm/CreateSessionForm'
import AddSessionMemberForm from '@/domains/create-session/components/AddMemberForm'
import { useCreateSession } from '@/domains/create-session/usecase/useCreateSession'
import { useCreateSessionForm } from '@/domains/create-session/usecase/useCreateSessionForm'

const CreateSession = () => {
  const [current, setCurrent] = useState('session')
  const form = useCreateSessionForm()
  const {
    category,
    isRecurring,
    open,
    date,
    genre,
    countMember,
    members,
    setCategory,
    setRecurring,
    setOpen,
    setGenre,
    setDate,
    setCountMember,
    setMembers,
  } = useCreateSession()

  const renderContent = () => {
    if (current === 'session') {
      return (
        <CreateSessionForm
          form={form}
          category={category}
          isRecurring={isRecurring}
          open={open}
          date={date}
          genre={genre}
          countMember={countMember}
          members={members}
          setCategory={setCategory}
          setGenre={setGenre}
          setRecurring={setRecurring}
          setOpen={setOpen}
          setDate={setDate}
          setCountMember={setCountMember}
          setCurrent={setCurrent}
        />
      )
    } else if (current === 'member') {
      return (
        <AddSessionMemberForm
          form={form}
          setCurrent={setCurrent}
          setMembers={setMembers}
          members={members}
        />
      )
    }
  }

  return <div>{renderContent()}</div>
}

export default CreateSession
