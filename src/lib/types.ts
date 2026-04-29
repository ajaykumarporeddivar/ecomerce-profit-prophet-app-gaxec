interface User {
  id: string;
  email: string;
  password: string;
  role: string;
  createdAt: string;
}

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  inventoryLevel: number;
  createdAt: string;
}

interface Prediction {
  id: string;
  productId: string;
  predictedProfit: number;
  confidenceLevel: number;
  createdAt: string;
}

interface Optimization {
  id: string;
  productId: string;
  optimizedPrice: number;
  optimizedInventoryLevel: number;
  createdAt: string;
}

interface BillingInfo {
  id: string;
  userId: string;
  plan: string;
  subscriptionDate: string;
  createdAt: string;
}

interface Stat {
  totalRevenue: number;
  growthRate: string;
  monthlyRevenue: string;
  activeUsers: number;
  createdAt: string;
}

interface Activity {
  id: string;
  action: string;
  userId: string;
  timestamp: string;
  type: string;
}

interface ApiResponse<T> {
  ok: boolean;
  data?: T;
  error?: string;
}

interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

export type {
  User,
  Product,
  Prediction,
  Optimization,
  BillingInfo,
  Stat,
  Activity,
  ApiResponse,
  PaginatedResponse,
};