export default function Pricing() {
  return (
    <div className="container mx-auto p-4 pt-6 mt-10">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Pricing</h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Basic</h2>
          <p className="text-gray-500 text-sm mb-4">$19.99/month</p>
          <ul>
            <li className="text-gray-500 text-sm mb-2">1 user</li>
            <li className="text-gray-500 text-sm mb-2">1 product</li>
            <li className="text-gray-500 text-sm mb-2">Basic support</li>
          </ul>
          <button className="px-4 py-2 bg-black text-white rounded-lg text-sm font-semibold hover:bg-gray-800">
            Sign up
          </button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Pro</h2>
          <p className="text-gray-500 text-sm mb-4">$49.99/month</p>
          <ul>
            <li className="text-gray-500 text-sm mb-2">5 users</li>
            <li className="text-gray-500 text-sm mb-2">10 products</li>
            <li className="text-gray-500 text-sm mb-2">Priority support</li>
          </ul>
          <button className="px-4 py-2 bg-black text-white rounded-lg text-sm font-semibold hover:bg-gray-800">
            Sign up
          </button>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-lg font-bold text-gray-900 mb-2">Enterprise</h2>
          <p className="text-gray-500 text-sm mb-4">Custom pricing</p>
          <ul>
            <li className="text-gray-500 text-sm mb-2">Unlimited users</li>
            <li className="text-gray-500 text-sm mb-2">Unlimited products</li>
            <li className="text-gray-500 text-sm mb-2">Dedicated support</li>
          </ul>
          <button className="px-4 py-2 bg-black text-white rounded-lg text-sm font-semibold hover:bg-gray-800">
            Contact us
          </button>
        </div>
      </div>
    </div>
  )
}