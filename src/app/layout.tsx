import type { Metadata } from 'next'
import '@/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import { esES } from "@clerk/localizations"
import { SidebarProvider } from '@/context/sidebar'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'
import HeaderInfo from '@/components/header-info'

export const metadata: Metadata = {
  title: process.env.NEXT_PUBLIC_APP_NAME,
  description: process.env.NEXT_PUBLIC_APP_DESCRIPTION,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={esES}>
      <html lang="en" className='h-full bg-white'>
        <body className='h-full'>
          <SidebarProvider>
            <Header />  
            <Sidebar />
            <div className="lg:pl-72">
              <HeaderInfo />
              <main className="py-10">
                <div className="px-4 sm:px-6 lg:px-8">
                  {children}
                </div>
              </main>
            </div>
          </SidebarProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
