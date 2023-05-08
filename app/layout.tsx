import { Nunito } from 'next/font/google'

import Navbar from './components/navbar/Navbar'
import ClientOnly from './components/ClientOnly'
import SignUpModal from './components/modals/SignUpModal'

import './globals.css'
import ToasterProvider from './provider/ToasterProvider'
import SignInModal from './components/modals/SignInModal'
import getCurrentUser from './actions/getCurrentUser'


export const metadata = {
  title: 'Airbnb',
  description: 'Airbnb clone',
}

const font = Nunito({
  subsets: ['latin'],
})

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body suppressHydrationWarning={true}
        className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <SignInModal />
          <SignUpModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
