


import React from 'react'
import Menu from './Menu'

export interface PaginaProps {
    children: React.ReactNode
    className?: string
}

const Pagina: React.FC<PaginaProps> = ({children,className}) => {
  return (
    <div className='flex'>
        <Menu/>
      <main className={`flex-1 p-7 ${className ?? ''}`}>{children}</main>
    </div>
  )
}

export default Pagina
