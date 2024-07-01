
'use client'
import React, { useState } from 'react'
import Pagina from '../template/Pagina'
import ListaUsuario from '../../components/usuario/ListaUsuario'
import Titulo from '../../components/template/Titulo'
import { IconUser } from '@tabler/icons-react'
import FormularioUsuario from '../usuario/FormularioUsuario'
import usuarios from '@/app/data/constants/Usuarios'
import { Usuario } from '@/core/model/Usuario'
import Backend from '@/backend'




const User = () => {
  const [usuario,setUsuario] = useState<Partial<Usuario> | null>(null)
  const [usuarios,setUsuarios] = useState<Usuario[]>([])

  const salvar = () => {
    if(!usuario) return
    Backend.usuarios.salvar(usuario)
  }

  return (
    <Pagina className='flex flex-col gap-10'>
       <Titulo Icone={IconUser} principal='usuarios' secundario='cadastro de usuarios'/>
       {usuario ? <FormularioUsuario usuario={usuario} onChange={setUsuario} salvar={salvar} cancelar={()=>{}}/> : ( <ListaUsuario/> )}
      
    </Pagina>
  )
}

export default User
