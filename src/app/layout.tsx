import type { Metadata } from 'next'
import { Playfair_Display } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wealth Academy',
  description: 'Learn How To Create Generational Wealth In Six Simple Steps',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.className} bg-dark-darker text-white`}>
        {children}
      </body>
    </html>
  )
}
