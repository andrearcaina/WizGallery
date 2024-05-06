import { Navbar, Footer, ScrollUp } from '@/components';
import './globals.css';

export const metadata = {
  title: 'WizGallery',
  description: 'a full-stack web app created by andre arcaina!',
  icons: [{ url: '/images/icon.ico', rel: 'icon' }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <main className="space-y-20">{children}</main>
        <ScrollUp />
        <Footer />
      </body>
    </html>
  )
};