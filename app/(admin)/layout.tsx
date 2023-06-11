import '../../styles/globals.css'

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
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
