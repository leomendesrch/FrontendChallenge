import Header from '@/components/header/header'
import './globals.css'
import { Saira } from 'next/font/google'
import DefaultProviders from '@/components/defaultProviders/defaultProviders'
import { PageWrapper } from '@/components/pageWrapper/PageWrapper'

const saira = Saira({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin']
})

export const metadata = {
  title: 'Capputeeno',
  description: 'FRONTENDCHALLENGE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <DefaultProviders>
          <Header></Header>
          {children}
        </DefaultProviders>
      </body>
    </html>
  )
}
