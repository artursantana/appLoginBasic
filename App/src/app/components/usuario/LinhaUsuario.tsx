


import React from 'react'
import { Usuario } from '@/core/model/Usuario'
import Image from 'next/image'

export interface LinhaUsuarioProps {
    usuario: Usuario
    onClick?: (usuario: Usuario) => void
}


const LinhaUsuario: React.FC<LinhaUsuarioProps> = ({ usuario,onClick }) => {
  return (
    <div className='flex bg-zinc-900 p-4 items-center gap-5 rounded-md cursor-pointer' onClick={ () => onClick?.(usuario)}>
      <Image src='http://source.unsplash.com/random/80x80?avatar' width={80} height={80} alt='avatar'/>
      <div className='flex flex-col'>
        <span className='text-xl font-black'>{usuario.nome}</span>
        <span className='text-sm text-zinc-400'>{usuario.email}</span>
      </div>
    </div>
  )
}

export default LinhaUsuario
