import Header from '@/components/Header'
import '../../styles/globals.css'
import Banner from '@/components/Banner'

export const metadata = {
  title: 'SeducerCast',
  description: '₢ 2023 - Todos os direitos reservados.',
}

import { Inter } from 'next/font/google';
 
// If loading a variable font, you don't need to specify the font weight
// const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className=''>
        <Header />
        <Banner src="/seducerlogo.svg" width="500" className='bg-yellow-400' />
        <div className='max-w-7xl mx-auto bg-[#E5B8F4] dark:bg-[#2D033B]'>
          {children}
        </div>
      </body>
    </html>
  )
}
