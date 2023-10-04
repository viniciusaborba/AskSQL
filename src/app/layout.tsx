import './globals.css'
import type { Metadata } from 'next'
import { Inter, Ubuntu_Mono } from 'next/font/google'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '600', '700', '800', '900']
})

const ubuntuMono = Ubuntu_Mono({
  weight: '400',
  variable: '--font-ubuntu',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${ubuntuMono.variable}`}>
      <body className='bg-blueberry-900'>{children}</body>
    </html>
  )
}
