
'use client'
import React, { useState } from 'react'
import Pagina from '../template/Pagina'
import ListaUsuario from '../../components/usuario/ListaUsuario'
import Titulo from '../../components/template/Titulo'
import { IconUser } from '@tabler/icons-react'
import FormularioUsuario from '../usuario/FormularioUsuario'
import usuarios from '@/app/data/constants/Usuarios'
import { Usuario } from '@/core/model/Usuario'


const User = () => {
  const [usuario,setUsuario] = useState<Usuario>(usuarios[0])
  return (
    <Pagina className='flex flex-col gap-10'>
       <Titulo Icone={IconUser} principal='usuarios' secundario='cadastro de usuarios'/>
       {/*<ListaUsuario/>*/}
       <FormularioUsuario usuario={usuarios[0]} onChange={setUsuario} />
    </Pagina>
  )
}

export default User
