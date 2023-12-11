'use client'

import { useContext } from 'react';
import { SidebarContext } from '@/context/sidebar'
import { UserButton } from '@clerk/nextjs'
import { Menu } from '@headlessui/react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import Logo from '@/components/logo'

const HeaderInfo = () => {
  const { setSidebarOpen } = useContext(SidebarContext)
  
  return (
    <div className='flex justify-between items-center sticky top-0 z-40 h-16 shrink-0 gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8'>
      <div className='flex items-center gap-x-4 '>
        <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden" onClick={() => setSidebarOpen(true)}>
          <span className="sr-only">Open sidebar</span>
          <Bars3Icon className="h-6 w-6" aria-hidden="true" />
        </button>

        {/* Separator */}
        <div className="h-6 w-px bg-gray-900/10 lg:hidden" aria-hidden="true" />
      </div>
      <Logo color='black' />
      <div className='flex items-center gap-x-4 lg:gap-x-6'>
        {/* Separator */}
        <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

        {/* Profile dropdown */}
        <Menu as="div" className="relative">
          <UserButton afterSignOutUrl="/"/>
        </Menu>
      </div>
    </div>
  )
}

export default HeaderInfo