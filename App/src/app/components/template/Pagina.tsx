


import React from 'react'
import Menu from './Menu'

export interface PaginaProps {
    children: React.ReactNode
}

const Pagina: React.FC<PaginaProps> = ({children}) => {
  return (
    <div className='flex'>
        <Menu/>
      <main className='flex-1 p-7'>{children}</main>
    </div>
  )
}

export default Pagina
