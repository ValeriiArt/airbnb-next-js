import { Nunito } from 'next/font/google'

import './globals.css';

import Navbar from './components/navbar/Navbar';
import ClientOnly from './components/ClientOnly';
import SignUpModal from './components/modals/SignUpModal';
import SignInModal from './components/modals/SignInModal';
import RentModal from './components/modals/RentModal';

import ToasterProvider from './provider/ToasterProvider';
import getCurrentUser from './actions/getCurrentUser';


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
          <RentModal />
          <SignInModal />
          <SignUpModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        {children}
      </body>
    </html>
  )
}
