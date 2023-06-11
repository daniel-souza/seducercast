import Header from '@/components/Header'
import '../../styles/globals.css'
import Banner from '@/components/Banner'

export const metadata = {
  title: 'SeducerCast',
  description: '₢ 2023 - Todos os direitos reservados.',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='dark:bg-[#E5B8F4] bg-[#2D033B]'>
        <Header />
        <div className='max-w-7xl mx-auto bg-[#E5B8F4] dark:bg-[#2D033B]'>
          <Banner src="/seducerlogo.svg" width="500" />
          {children}
        </div>
      </body>
    </html>
  )
}
