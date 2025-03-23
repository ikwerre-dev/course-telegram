import type { Metadata } from 'next'
import { Space_Grotesk, Playfair_Display } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ subsets: ['latin'] })
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })

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
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.className} bg-[#030303] text-white selection:bg-gold selection:text-black`}>
        <div className="fixed inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none"></div>
        <div className="fixed inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent pointer-events-none"></div>
        <div className={`${spaceGrotesk.className} font-sans`}>
          {children}
        </div>
      </body>
    </html>
  )
}
