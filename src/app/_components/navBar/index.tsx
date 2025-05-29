import React from 'react'
import Image from 'next/image'
import Search from './search'
import Link from 'next/link'
import SidebarToggle from './sidebarToggle'

export default function NavBar() {
  return (
    <header className="flex w-full">
        <SidebarToggle />
      <div className='ml-auto mr-auto mt-4 z-10'>
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
      </div>
      <div className='hidden'>
        <Search />
      </div>

    </header>
  )
}
