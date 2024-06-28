

import React from 'react'
import MenuItem from './MenuItem'
import { IconHome,IconUser } from '@tabler/icons-react'




const Menu = () => {
  return (
    
      <aside className='w-72 bg-zinc-700 h-screen'>
            <nav className='flex flex-col gap-1 py-7'>
                <MenuItem Icone={IconHome} texto='Início' url='/'/>
                <MenuItem Icone={IconUser} texto='Cadastro Usuário' url='/components/user'/>
            </nav>
      </aside>
    
  )
}

export default Menu
