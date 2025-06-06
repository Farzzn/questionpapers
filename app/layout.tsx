
import "./globals.css";
import Link from 'next/link'
import { ReactNode } from 'react';
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Question Papers as Quiz',
  description: 'Access old question papers in a quiz format.',
}

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        {/* Define Header Element of App Layout */}
        <header className="bg-gray-900 text-white shadow">
          <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <div className="flex flex-col">
            <h1 className="text-2xl font-bold tracking-tight">Old Question Papers in Quiz Form</h1>
            <p className="text-sm text-gray-400">Your one-stop solution for accessing old question papers in a quiz format.</p>
          </div>
        {/* Define Navigation bar inside header */}
        <nav>
        <ul className="flex space-x-6">
          <li>
              <Link
                href="/"
                className="hover:text-gray-300 transition-colors"
              >
                Home
            </Link>
          </li>

            <li>
            <Link
              href="/about"
              className="hover:text-gray-300 transition-colors"
            >
              About Us
            </Link>
            </li>
          </ul>
        </nav>
          </div>
        </header>

        {/* Section to call rest of components */ }
        <main>{children}</main> 
      </body>
    </html>
  );
}