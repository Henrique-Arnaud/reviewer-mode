import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Search() {
  return (
    <div className="flex items-center">
      <input className="peer rounded-2xl h-[32px] w-52 bg-gray-400/40 text-white focus:text-black hover:text-black group-hover:text-black p-2 transition-colors duration-400 ease-[cubic-bezier(.165,.84,.44,1)] hover:bg-white/80 group-hover:bg-white/80 focus:bg-white/80 outline-none tracking-[-.01em]" name="search" type="text" />
      <MagnifyingGlassIcon className="h-[24px] w-[24px] relative right-0 ml-[-28px] transition-colors duration-400 group-hover:text-gray-700 peer-focus:text-gray-700 cursor-pointer" />
    </div>
    )
}
