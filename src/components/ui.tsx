'use client';

import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';
import { tailwindMerge } from 'tailwind-merge';

function cn(...inputs: any[]): string {
  return tailwindMerge(inputs);
}

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  href?: string;
}

function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  onClick,
  children,
  className,
  href,
}: ButtonProps) {
  const classes = cn(
    'inline-flex',
    'items-center',
    'border',
    'font-medium',
    'rounded',
    {
      'bg-primary': variant === 'primary',
      'text-white': variant === 'primary',
      'border-primary': variant === 'primary',
      'hover:bg-primary-dark': variant === 'primary',
      'bg-secondary': variant === 'secondary',
      'text-white': variant === 'secondary',
      'border-secondary': variant === 'secondary',
      'hover:bg-secondary-dark': variant === 'secondary',
      'bg-white': variant === 'outline',
      'text-primary': variant === 'outline',
      'border-gray-300': variant === 'outline',
      'hover:bg-gray-100': variant === 'outline',
      'bg-white': variant === 'ghost',
      'text-primary': variant === 'ghost',
      'border-transparent': variant === 'ghost',
      'hover:bg-gray-100': variant === 'ghost',
    },
    {
      'py-2': size === 'md',
      'px-4': size === 'md',
      'text-sm': size === 'sm',
      'py-1': size === 'sm',
      'px-2': size === 'sm',
      'py-3': size === 'lg',
      'px-6': size === 'lg',
      'text-lg': size === 'lg',
    },
    {
      'opacity-50': disabled || loading,
      'pointer-events-none': disabled || loading,
    },
    className
  );

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        onClick={disabled || loading ? undefined : onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      onClick={disabled || loading ? undefined : onClick}
    >
      {children}
    </button>
  );
}

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white',
        'border',
        'border-gray-300',
        'rounded',
        'shadow-sm',
        className
      )}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: React.ReactNode;
}

function CardHeader({ children }: CardHeaderProps) {
  return (
    <div className={cn('bg-gray-100', 'py-2', 'px-4', 'border-b', 'border-gray-300')}>
      {children}
    </div>
  );
}

interface CardTitleProps {
  children: React.ReactNode;
}

function CardTitle({ children }: CardTitleProps) {
  return <h2 className={cn('text-lg', 'font-medium', 'pb-2')}>{children}</h2>;
}

interface CardContentProps {
  children: React.ReactNode;
}

function CardContent({ children }: CardContentProps) {
  return <div className={cn('py-4', 'px-4')}>{children}</div>;
}

interface CardFooterProps {
  children: React.ReactNode;
}

function CardFooter({ children }: CardFooterProps) {
  return (
    <div className={cn('bg-gray-100', 'py-2', 'px-4', 'border-t', 'border-gray-300')}>
      {children}
    </div>
  );
}

interface BadgeProps {
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info';
  children: React.ReactNode;
}

function Badge({ variant = 'default', children }: BadgeProps) {
  const classes = cn(
    'inline-flex',
    'items-center',
    'px-2',
    'py-1',
    'rounded',
    'text-sm',
    'font-medium',
    {
      'bg-gray-100': variant === 'default',
      'text-gray-500': variant === 'default',
      'bg-success': variant === 'success',
      'text-white': variant === 'success',
      'bg-warning': variant === 'warning',
      'text-white': variant === 'warning',
      'bg-error': variant === 'error',
      'text-white': variant === 'error',
      'bg-info': variant === 'info',
      'text-white': variant === 'info',
    }
  );

  return <span className={classes}>{children}</span>;
}

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  type?: 'text' | 'email' | 'password';
  icon?: React.ReactNode;
}

function Input({
  label,
  placeholder,
  value,
  onChange,
  error,
  type = 'text',
  icon,
}: InputProps) {
  return (
    <div>
      <label className={cn('block', 'text-sm', 'font-medium', 'pb-1')}>{label}</label>
      <div className={cn('relative', 'flex', 'items-center')}>
        {icon && <div className={cn('absolute', 'left-2', 'top-2')}>{icon}</div>}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={cn(
            'block',
            'w-full',
            'pl-8',
            'text-sm',
            'border',
            'border-gray-300',
            'rounded',
            'py-2',
            'pr-2',
            {
              'border-red-500': error,
            }
          )}
        />
      </div>
      {error && <div className={cn('text-sm', 'text-red-500', 'pt-1')}>{error}</div>}
    </div>
  );
}

function Spinner() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cn('animate-spin', 'h-5', 'w-5', 'border-4', 'border-gray-200', 'border-t-primary', 'rounded-full')}
      viewBox="0 0 24 24"
    >
      <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" className={cn('animate-ping')} />
    </svg>
  );
}

interface AvatarProps {
  name: string;
  size?: 'sm' | 'md' | 'lg';
}

function Avatar({ name, size = 'md' }: AvatarProps) {
  const initials = name.split(' ').map((word) => word.charAt(0)).join('');
  const color = String hashCode(name) % 10;

  return (
    <div
      className={cn(
        'flex',
        'items-center',
        'justify-center',
        'rounded-full',
        {
          'w-8': size === 'sm',
          'h-8': size === 'sm',
          'text-sm': size === 'sm',
          'w-12': size === 'md',
          'h-12': size === 'md',
          'text-md': size === 'md',
          'w-16': size === 'lg',
          'h-16': size === 'lg',
          'text-lg': size === 'lg',
        }
      )}
      style={{
        backgroundColor: `hsl(${color * 36}, 50%, 50%)`,
      }}
    >
      {initials}
    </div>
  );
}

function hashCode(str: string) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = Math.imul(31, hash) + str.charCodeAt(i) | 0;
  }
  return hash;
}

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

function Modal({ open, onClose, title, children }: ModalProps) {
  if (!open) return null;

  return (
    <div
      className={cn(
        'fixed',
        'top-0',
        'left-0',
        'w-full',
        'h-full',
        'bg-gray-500',
        'bg-opacity-75',
        'flex',
        'items-center',
        'justify-center'
      )}
    >
      <div
        className={cn(
          'bg-white',
          'border',
          'border-gray-300',
          'rounded',
          'shadow-sm',
          'max-w-lg',
          'w-full'
        )}
      >
        <div className={cn('bg-gray-100', 'py-2', 'px-4', 'border-b', 'border-gray-300')}>
          <h2 className={cn('text-lg', 'font-medium')}>{title}</h2>
        </div>
        <div className={cn('py-4', 'px-4')}>{children}</div>
        <div className={cn('bg-gray-100', 'py-2', 'px-4', 'border-t', 'border-gray-300')}>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  changeType: 'up' | 'down' | 'neutral';
  icon: React.ReactNode;
}

function StatCard({ title, value, change, changeType, icon }: StatCardProps) {
  return (
    <div
      className={cn(
        'bg-white',
        'border',
        'border-gray-300',
        'rounded',
        'shadow-sm',
        'p-4',
        'flex',
        'items-center'
      )}
    >
      <div className={cn('w-8', 'h-8', 'mr-4')}>{icon}</div>
      <div>
        <h2 className={cn('text-lg', 'font-medium', 'pb-1')}>{title}</h2>
        <p className={cn('text-sm', 'font-medium', 'pb-1')}>{value}</p>
        <p
          className={cn('text-sm', {
            'text-green-500': changeType === 'up',
            'text-red-500': changeType === 'down',
            'text-gray-500': changeType === 'neutral',
          })}
        >
          {change}
        </p>
      </div>
    </div>
  );
}

export {
  cn,
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  Badge,
  Input,
  Spinner,
  Avatar,
  Modal,
  StatCard,
};