import Link from 'next/link'
import React from 'react'

export default function NavBarItem({ url, children }: { url: string, children: React.ReactNode }) {
  return (
    <li className="cursor-pointer transition-colors hover:text-[#c0c0c0] bg-gray-800/25 p-2">
      <Link href={url}>
        {children}
      </Link>
    </li>
  )
}
