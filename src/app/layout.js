import './globals.css'
import { Playfair_Display } from 'next/font/google'

const playd = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playd',
})

export const metadata = {
  title: 'Bored App',
  description: 'I make this when im bored and i will update if im get bored again hehe',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={playd.className}>{children}</body>
    </html>
  )
}
