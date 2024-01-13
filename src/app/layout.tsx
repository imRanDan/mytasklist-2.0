import React from 'react'
import type { ReactNode } from 'react'
import '../app/globals.css'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

type RootLayoutProps = {
  children: ReactNode;
}


const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (

      <div className={`bg-gray-100 ${inter.className}`}>
        {children}
      </div>
  )
}

export default RootLayout