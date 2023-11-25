import React from 'react'
import clsx from 'clsx';

interface DateProps {
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const Date = ({ text, isActive, onClick }: DateProps) => {
  return (
    <div className={clsx('box-border rounded-lg py-2 px-3 border-2 border-slate-200 shadow-md min-w-[155px]', isActive && 'bg-teal-400 border-teal-300 text-white border-0')} onClick={onClick}>{text}</div>
  )
}

export default Date