import React from 'react'
import Logo from '../../Images/logo 1.png'
import Image from 'next/image'
import { Links } from '@/models/LinksConfigure'
import LinksProp from './LinksProp'

const LinksMenu = () => {
  return (
    <div className='fixed p-10 bg-red-700  top-0 left-0 h-full min-w-[350px]'>
        <Image src={Logo} alt='logo' width={30} height={30}/>
      <LinksProp  links={Links}/>
    </div>
  )
}

export default LinksMenu
