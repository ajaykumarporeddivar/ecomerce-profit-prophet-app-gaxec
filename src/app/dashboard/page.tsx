'use client';

import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { AiOutlineTrophy } from 'lucide-react';
import { AiOutlineBox } from 'lucide-react';
import { AiOutlineDollar } from 'lucide-react';
import { AiOutlineUser } from 'lucide-react';
import { MOCK_PRODUCTS, STATS, RECENT_ACTIVITY, DEMO_USER } from '@/lib/data';
import StatCard from '@/components/ui/StatCard';
import Card from '@/components/ui/Card';
import CardHeader from '@/components/ui/CardHeader';
import CardTitle from '@/components/ui/CardTitle';
import CardContent from '@/components/ui/CardContent';
import Badge from '@/components/ui/Badge';
import Avatar from '@/components/ui/Avatar';

const Page = () => {
  const today = new Date();
  const greeting = `Good morning, ${DEMO_USER.name}`;
  const date = today.toLocaleDateString();

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-2">{greeting}</h2>
      <p className="text-gray-600">{date}</p>
      <div className="mt-4 grid grid-cols-4 gap-4">
        {STATS.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
          />
        ))}
      </div>
      <div className="mt-8 grid grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Products</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="w-full table-auto">
                <thead>
                  <tr>
                    <th className="px-4 py-2">Name</th>
                    <th className="px-4 py-2">Price</th>
                    <th className="px-4 py-2">Status</th>
                    <th className="px-4 py-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {MOCK_PRODUCTS.slice(0, 10).map((product, index) => (
                    <tr
                      key={index}
                      className={clsx('border-b', index % 2 === 0 ? 'bg-gray-50' : '')}
                    >
                      <td className="px-4 py-2">{product.name}</td>
                      <td className="px-4 py-2">{product.price}</td>
                      <td className="px-4 py-2">
                        <Badge
                          className={clsx(
                            product.status === 'active' ? 'bg-green-100' : 'bg-red-100',
                            'text-gray-600 py-1 px-2 rounded'
                          )}
                        >
                          {product.status}
                        </Badge>
                      </td>
                      <td className="px-4 py-2">
                        <button
                          type="button"
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1 md:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Recent Activity</CardTitle>
            </CardHeader>
            <CardContent>
              <ul>
                {RECENT_ACTIVITY.slice(0, 10).map((activity, index) => (
                  <li
                    key={index}
                    className={clsx('py-2', index % 2 === 0 ? 'bg-gray-50' : '')}
                  >
                    <Avatar
                      initials={activity.user.name.substring(0, 2).toUpperCase()}
                      className="mr-2"
                    />
                    <span>
                      {activity.user.name} {activity.action} {activity.timeAgo}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="mt-8 grid grid-cols-4 gap-4">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          New Product
        </button>
        <button
          type="button"
          className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded"
        >
          Send Invoice
        </button>
        <button
          type="button"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
          Track Order
        </button>
        <button
          type="button"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        >
          Cancel Order
        </button>
      </div>
    </div>
  );
};

export default Page;