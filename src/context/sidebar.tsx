'use client'

import React, { createContext, useState } from 'react'

interface SidebarContextProps {
    sidebarOpen: boolean
    setSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>
}

interface SidebarProviderProps {
    children: React.ReactNode;
}

const SidebarContext = createContext({} as SidebarContextProps)

const SidebarProvider: React.FC<SidebarProviderProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <SidebarContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </SidebarContext.Provider>
  )
}

export {
  SidebarContext,
  SidebarProvider
}
