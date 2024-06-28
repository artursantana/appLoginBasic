import Link from 'next/link'

import { ElementType } from 'react'

export interface MenuProps {
    Icone: ElementType
    texto:string
    url:string
}

const MenuItem: React.FC<MenuProps> = ({Icone,url,texto}) => {
    return(
        <Link href={url} className='flex gap-2 px-4 py-2 hover:bg-black'>
            <Icone/>
            <span>{texto}</span>
        </Link>
    )
}
export default MenuItem