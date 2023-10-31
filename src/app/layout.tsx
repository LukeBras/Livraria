'use client'

import { Header } from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { useDarkMode } from '@/hooks/useDarkMode'
import { useAside } from '@/hooks/useAside';
import { Aside } from '@/components/Aside'


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

  const {mode} = useDarkMode();
  const {aside} = useAside();

  return (
    <html className={mode} lang="en">
      <body className={inter.className}>
          <Header/>
          <main>
            {children}
          </main>
           
      </body>
    </html>
  )
}
