import { Navbar, Footer } from '@/components';
import './globals.css';

export const metadata = {
  title: 'WizGallery',
  description: 'a full-stack web app created by andre arcaina!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-mono">
        <Navbar />
        <main className="space-y-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
