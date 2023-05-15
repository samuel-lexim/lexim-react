import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] })

// CSS
import '@/styles/global.scss';
import '@/styles/CustomGlobal.css'; // custom css

export const metadata = {
  title: 'Lexim Global',
  description: 'Excellence in Web Technology',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
