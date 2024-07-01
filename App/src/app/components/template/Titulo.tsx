
import React, { ElementType } from 'react'

export interface TituloProps {
    principal: string
    secundario: string
    Icone: ElementType
}

const Titulo: React.FC<TituloProps> = ({principal,secundario,Icone}) => {
  return (
    <div className='flex gap-2'>
        <Icone size={50}/>
        <div className='flex flex-col'>
            <h1>{principal}</h1>
            <h1>{secundario}</h1>
        </div>
      
    </div>
  )
}

export default Titulo
