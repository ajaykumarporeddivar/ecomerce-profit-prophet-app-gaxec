'use client';

import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { lucideReact } from 'lucide-react';

interface UseLocalStorage<T> {
  value: T;
  setValue: (value: T) => void;
}

const useLocalStorage = <T>(key: string, initialValue: T): UseLocalStorage<T> => {
  const [value, setValue] = useState<T>(() => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return { value, setValue };
};

interface UseFilter {
  filtered: any[];
  search: string;
  setSearch: (search: string) => void;
  status: string;
  setStatus: (status: string) => void;
}

const useFilter = (items: any[], fields: string[]): UseFilter => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');

  const filtered = items.filter((item: any) => {
    return fields.some((field: string) => {
      return item[field].toString().toLowerCase().includes(search.toLowerCase());
    });
  });

  return { filtered, search, setSearch, status, setStatus };
};

interface UseModal {
  open: boolean;
  close: () => void;
  isOpen: boolean;
  activeItem: any;
  setActiveItem: (item: any) => void;
}

const useModal = (): UseModal => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState<any>(null);

  const close = () => {
    setOpen(false);
  };

  const isOpen = open;

  return { open, close, isOpen, activeItem, setActiveItem };
};

interface UseDemoToast {
  toast: any;
  showToast: (msg: string, type: string) => void;
}

const useDemoToast = (): UseDemoToast => {
  const [toast, setToast] = useState<any>(null);

  const showToast = (msg: string, type: string) => {
    setToast({ message: msg, type: type });
    setTimeout(() => {
      setToast(null);
    }, 3000);
  };

  return { toast, showToast };
};

export { useLocalStorage, useFilter, useModal, useDemoToast };