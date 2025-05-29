'use client'

import React, { useRef, useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { useClickOutsideComponentObserver } from '@/app/_utils/handleClickOutsideComponent'

interface SidebarToggleProps {
  children: React.ReactNode
}

export default function SidebarToggle({ children }: SidebarToggleProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const navRef = useRef(null)

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev)

  const closeSidebarIfItIsOpen = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(false)
    }
    return
  }

  useClickOutsideComponentObserver(navRef, closeSidebarIfItIsOpen)
  return (
    <div
      ref={navRef}
      className={`flex flex-col fixed gap-6 ml-1.5 w-full text-white transition-all duration-500 ${
        isSidebarOpen ? 'bg-gray-950 pb-1' : ''
      }`}
    >
      <button
        aria-expanded={isSidebarOpen}
        aria-controls="sidebar-nav"
        className="h-10 w-fit"
        onClick={toggleSidebar}
      >
        <Bars3Icon className="h-10 w-10" />
      </button>

      <nav
        id="sidebar-nav"
        role="navigation"
        className={`w-full whitespace-nowrap transition-transform duration-500 origin-top ${
          isSidebarOpen
            ? 'scale-y-100 opacity-100 pointer-events-auto'
            : 'scale-y-0 opacity-0 pointer-events-none'
        }`}
      >
        {isSidebarOpen && children}
      </nav>
    </div>
  )
}
