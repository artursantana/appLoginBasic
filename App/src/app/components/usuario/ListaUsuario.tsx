

import React from 'react'
import {Usuario} from '@/core/model/Usuario'
import usuarios from '../../data/constants/Usuarios'
import LinhaUsuario from './LinhaUsuario'

export interface ListaUsuarioProps {
  usuarios: Usuario[]
  onClick?: (usuario: Usuario) => void
}

const ListaUsuario: React.FC<ListaUsuarioProps> = ({onClick, usuarios}) => {
  return (
    <div className='flex flex-col gap-4'>
      {
        usuarios.map((usuario: Usuario)=>{
            return <LinhaUsuario key={usuario.id} usuario={usuario} onClick={onClick}/>
        })


      }
    </div>
  )
}

export default ListaUsuario
