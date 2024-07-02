
'use client'
import React, { useEffect, useState } from 'react'
import Pagina from '../template/Pagina'
import ListaUsuario from '../../components/usuario/ListaUsuario'
import Titulo from '../../components/template/Titulo'
import { IconPlus, IconUser } from '@tabler/icons-react'
import FormularioUsuario from '../usuario/FormularioUsuario'
import usuarios from '@/app/data/constants/Usuarios'
import { Usuario } from '@/core/model/Usuario'
import Backend from '@/backend'




const User = () => {
  const [usuario,setUsuario] = useState<Partial<Usuario> | null>(null)
  const [usuarios,setUsuarios] = useState<Usuario[]>([])

  useEffect(()=> {
    Backend.usuarios.obter().then(setUsuarios)

  },[])

  const salvar = () => {
    if(!usuario) return
    Backend.usuarios.salvar(usuario)
  }

  return (
    <Pagina className='flex flex-col gap-10'>
       <Titulo Icone={IconUser} principal='usuarios' secundario='cadastro de usuarios'/>
       
       {usuario ? <FormularioUsuario usuario={usuario} onChange={setUsuario} salvar={salvar} cancelar={()=>{}}/> 
       : 
       ( 
        <>
        <div className='flex justify-end gap-1'>
        <button className='flex items-center bg-blue-500 rounded-md' onClick={()=> setUsuario({})}><IconPlus/> <span>Novo Usuário</span></button>
        
       </div>
       <ListaUsuario usuarios={usuarios} onClick={setUsuario}/>
        </>
        )}
      
    </Pagina>
  )
}

export default User
