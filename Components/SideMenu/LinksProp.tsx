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
            pathname  === link ? 'text-blue-800 bg-green-600' : ' bg-blue-700' 
        } p-2 hover:bg-red-600 `}>
          {linkName}
        </Link>
      ))}
  </div>
  )
}

export default LinksProp;
