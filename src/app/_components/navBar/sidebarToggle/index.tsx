'use client'

import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import NavBarItem from '../navBarItem'

export default function SidebarToggle() {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false)
  return (
    <div className={`flex flex-col gap-6 mt-4 ml-1.5 text-white fixed z-10 w-full transition-all duration-500 ${isSidebarOpen ? 'bg-gray-950 pb-1' : ''}`}>
      <Bars3Icon className='h-[40px] w-fit relative' onClick={() => setIsSidebarOpen(!isSidebarOpen)} />
      <nav className={`whitespace-nowrap w-full flex transition-all duration-500 relative ${isSidebarOpen ? 'opacity-100 top-0' : 'opacity-0 top-[-228px]'}`}>
        <ul className="flex flex-col w-full gap-1">
          <NavBarItem url="/sign-in"> 
            SIGN IN
          </NavBarItem>
          <NavBarItem url='/create-account'>
            CREATE ACCOUNT
          </NavBarItem>
          <NavBarItem url="/games">
            GAMES
          </NavBarItem>
          <NavBarItem url='/lists'>
            LISTS
          </NavBarItem>
        </ul>
      </nav>
    </div>
  )
}
