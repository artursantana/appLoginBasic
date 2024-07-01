


'use client'
import React, { InputHTMLAttributes } from 'react'

export interface inputTextoProps extends InputHTMLAttributes<HTMLInputElement> {

label: string

}

const InputTexto: React.FC<inputTextoProps> = ({label, ...props}) => {
  return (
    <div className='flex flex-col gap-1'>
        <label>{label}</label>
        <input {...props} className='bg-zinc-800 p-2 rounded-md outline-none' />
      
    </div>
  )
}

export default InputTexto
