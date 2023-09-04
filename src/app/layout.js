import './globals.css'
import { Playfair_Display, Poppins } from 'next/font/google'

const playd = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playd',
})
const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
})

export const metadata = {
  title: 'Bored App',
  description: `I make this when i'm bored, and i will update this website when i'm bored again`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${playd.variable} ${poppins.variable}  font-sans`}>
        {children}
      </body>
    </html>
  )
}
