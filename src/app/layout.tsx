'use client'

import { Header } from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from '@/utils/Provider'



const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'My bookstore',
  description: 'My bookstore',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (

    <html className='' lang="en">
      <body className={inter.className}>
     
        <Header/>

              <Providers>
                {children}
              </Providers>
          
      </body>
    </html>

   
  )
}
