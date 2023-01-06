import React from 'react'
import {GrFavorite} from 'react-icons/gr'
import {MdKeyboardArrowDown} from 'react-icons/md'

function Header() {
  return (
    <header className='flex justify-end border-b divide-gray-100 font-extralight text-sm'>
        <ul className='flex flex-row items-center'>
            <li className='flex items-center px-8 py-6 gap-3 hover:bg-slate-100 cursor-pointer'><GrFavorite className='text-xl' />Os meus favoritos</li>
            <li className='px-8 py-6 hover:bg-slate-100 cursor-pointer'>Iniciar sessão</li>
            <li className='flex items-center px-8 py-6 hover:bg-slate-100 cursor-pointer gap-2'>Menu <MdKeyboardArrowDown /></li>
            <li className='flex items-center px-8 py-6 hover:bg-slate-100 cursor-pointer gap-2'>EUR <MdKeyboardArrowDown /></li>
        </ul>
    </header>
  )
}

export default Header