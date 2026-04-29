'use client';

import { AiOutlineDashboard } from 'lucide-react';
import { AiOutlineFile Done} from 'lucide-react';
import { AiOutlineSetting } from 'lucide-react';
import { AiOutlineInfoCircle } from 'lucide-react';
import { AiOutlineBarChart } from 'lucide-react';
import { AiOutlineLineChart } from 'lucide-react';
import { clsx } from 'clsx';
import AppSidebar from '@/components/layout/AppSidebar';
import AppHeader from '@/components/layout/AppHeader';
import DemoBanner from '@/components/layout/DemoBanner';

const navItems = [
  { label: 'Dashboard', icon: AiOutlineDashboard, href: '/dashboard' },
  { label: 'Inventory', icon: AiOutlineFileDone, href: '/inventory' },
  { label: 'Pricing', icon: AiOutlineSetting, href: '/pricing' },
  { label: 'Insights', icon: AiOutlineInfoCircle, href: '/insights' },
  { label: 'Reports', icon: AiOutlineBarChart, href: '/reports' },
  { label: 'Forecasts', icon: AiOutlineLineChart, href: '/forecasts' },
];

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen">
      <AppSidebar navItems={navItems} />
      <div className="flex-1 overflow-y-auto">
        <AppHeader projectTitle="Ecomerce Profit Prophet" />
        <DemoBanner />
        <main className="p-4">{children}</main>
      </div>
    </div>
  );
};

export default Layout;