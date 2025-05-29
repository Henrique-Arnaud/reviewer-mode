import React from 'react'
import Image from 'next/image'
import Search from './search'
import Link from 'next/link'
import SidebarToggle from './sidebarToggle'
import NavBarItem from './navBarItem'

export default function NavBar() {
  return (
    <header className="fixed top-5 w-full h-20 flex">
      <SidebarToggle>
        <ul className="flex flex-col w-full gap-1">
          <NavBarItem url="/login">LOGIN</NavBarItem>
          <NavBarItem url="/register">CREATE ACCOUNT</NavBarItem>
          <NavBarItem url="/games">GAMES</NavBarItem>
          <NavBarItem url="/lists">LISTS</NavBarItem>
        </ul>
      </SidebarToggle>
      <div className="relative ml-auto mr-auto">
        <Link href="/">
          <Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={196}
            height={44}
            priority
          />
        </Link>
      </div>
      <div className="hidden">
        <Search />
      </div>
    </header>
  )
}
