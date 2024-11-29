'use client'
import Link from 'next/link'
import React from 'react'
import { LinksMenuProps } from '@/models/LinksConfigure';
import { usePathname } from 'next/navigation';
import { Icon } from "@iconify/react";
import style from './sidemenu.module.css'

const LinksProp = ({links}: LinksMenuProps) => {
    const pathname  = usePathname()
    
  return (
    <div className="flex flex-col gap-y-2 pt-3">
    {links.map(({ link, linkName, icon }) => (
        <Link key={link} href={link}
        className={`${
            pathname  === link ? `${style.TabToggle}` : `${style.Tab}` 
        } transition-colors duration-300 flex py-2 px-2 rounded border-blue-400 border-b-2`}>
           <Icon icon={icon} width="24" height="24" style={{ marginRight: "8px" }} className=''/>
          {linkName}
        </Link>
      ))}
  </div>
  )
}

export default LinksProp;
