'use client'
import Link from 'next/link'
import React from 'react'
import { LinksMenuProps } from '@/models/LinksConfigure';
import { usePathname } from 'next/navigation';

const LinksProp = ({links}: LinksMenuProps) => {
    const pathname  = usePathname()
    
  return (
    <div className="flex flex-col gap-y-2 pt-3">
    {links.map(({ link, linkName }) => (
        <Link key={link} href={link}
        className={`${
            pathname  === link ? 'text-red-800 bg-green-600' : ' bg-blue-700 text-white' 
        } p-2 hover:bg-purple-600 transition-colors duration-500`}>
          {linkName}
        </Link>
      ))}
  </div>
  )
}

export default LinksProp;
