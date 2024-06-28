


import React from 'react'
import { Usuario } from '@/core/model/Usuario'

export interface LinhaUsuarioProps {
    usuario: Usuario
}


const LinhaUsuario: React.FC<LinhaUsuarioProps> = ({usuario}) => {
  return (
    <div className='flex bg-zinc-900 p-4 rounded-md'>
      <div className='flex flex-col'>
        <span>{usuario.nome}</span>
        <span>{usuario.email}</span>
      </div>
    </div>
  )
}

export default LinhaUsuario
