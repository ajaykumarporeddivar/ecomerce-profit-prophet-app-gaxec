import Link from 'next/link'
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center max-w-md p-8">
        <div className="text-8xl font-black text-gray-100 mb-2">404</div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Page not found</h1>
        <p className="text-gray-500 mb-6 text-sm">The page you are looking for does not exist.</p>
        <Link href="/dashboard" className="px-6 py-2.5 bg-black text-white rounded-lg text-sm font-semibold hover:bg-gray-800 inline-block">
          Go to Dashboard
        </Link>
      </div>
    </div>
  )
}