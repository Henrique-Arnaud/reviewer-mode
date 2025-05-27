import React from 'react'
import Image from 'next/image'
import NavBarItem from './navBarItem'
import Search from './search'
import Link from 'next/link'

export default function NavBar() {
  return (
    <header className="flex flex-row gap-[32px] h-[80px] w-full justify-center items-center hover:bg-gradient-to-b from-black/30 from-0% to-[#0a0a0a]/20 to-75% group">
      <Link href='/'>
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
      </Link>
      <nav>
        <ul className="flex flex-row gap-4">
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
      <Search />
    </header>

  )
}
