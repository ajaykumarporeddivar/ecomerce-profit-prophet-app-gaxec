import Link from 'next/link'
import DemoModeBanner from '../demo-mode-banner'

export default function App() {
  return (
    <div>
      <DemoModeBanner />
      <Link href="/dashboard">Dashboard</Link>
    </div>
  )
}