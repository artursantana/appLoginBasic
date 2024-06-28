

import React from 'react'
import {Usuario} from '@/core/model/Usuario'
import usuarios from '../../data/constants/Usuarios'
import LinhaUsuario from './LinhaUsuario'

const ListaUsuario = () => {
  return (
    <div className='flex flex-col gap-4'>
      {
        usuarios.map((usuario: Usuario)=>{
            return <LinhaUsuario key={usuario.id} usuario={usuario}/>
        })


      }
    </div>
  )
}

export default ListaUsuario
