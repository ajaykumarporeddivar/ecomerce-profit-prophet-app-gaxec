import { useState } from 'react'
import Link from 'next/link'
import { FiMenu } from 'lucide-react'

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-50 py-4">
        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-lg font-bold text-gray-900">
            Ecomerce Profit Prophet
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300"
          >
            <FiMenu size={24} />
          </button>
          <ul
            className={`lg:flex lg:items-center lg:gap-4 ${isOpen ? 'block' : 'hidden'
              } lg:block transition duration-300 ease-in-out`}
          >
            <li>
              <Link href="/dashboard" className="text-gray-500 hover:text-gray-900">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-gray-500 hover:text-gray-900">
                Products
              </Link>
            </li>
            <li>
              <Link href="/users" className="text-gray-500 hover:text-gray-900">
                Users
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}