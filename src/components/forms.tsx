'use client';

import { useState } from 'react';
import { Input, Button } from '@/components/ui';
import { clsx } from 'clsx';
import { lucideReact } from 'lucide-react';
import { exportCSV } from '@/lib/utils';

interface Entity {
  title: string;
  parties: string;
  value: string;
  type: string;
  deadline: string;
  notes: string;
}

const CreateEntityForm = () => {
  const [title, setTitle] = useState('');
  const [parties, setParties] = useState('');
  const [value, setValue] = useState('');
  const [type, setType] = useState('');
  const [deadline, setDeadline] = useState('');
  const [notes, setNotes] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const entity: Entity = {
      title,
      parties,
      value,
      type,
      deadline,
      notes,
    };
    // Simulate creating an entity
    console.log('Entity created:', entity);
    setSuccess(true);
    setTitle('');
    setParties('');
    setValue('');
    setType('');
    setDeadline('');
    setNotes('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
      />
      <Input
        type="text"
        value={parties}
        onChange={(e) => setParties(e.target.value)}
        placeholder="Parties"
      />
      <Input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Value"
      />
      <Input
        type="text"
        value={type}
        onChange={(e) => setType(e.target.value)}
        placeholder="Type"
      />
      <Input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
        placeholder="Deadline"
      />
      <Input
        type="text"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Notes"
      />
      <Button type="submit" className="bg-blue-500 hover:bg-blue-700">
        Create Entity
      </Button>
      {success && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4">
          Entity created successfully!
        </div>
      )}
    </form>
  );
};

interface FilterState {
  search: string;
  status: string;
  dateRange: string;
}

const FilterBar = () => {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');
  const [dateRange, setDateRange] = useState('');

  return (
    <div className="flex flex-col gap-4">
      <Input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="block w-full py-2 pl-3 pr-10 text-base text-gray-700 border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="">Select Status</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
      <Input
        type="date"
        value={dateRange}
        onChange={(e) => setDateRange(e.target.value)}
        placeholder="Date Range"
      />
    </div>
  );
};

const ExportButton = () => {
  const handleExport = () => {
    const data = [
      { title: 'Entity 1', parties: 'Party 1', value: '100', type: 'Type 1', deadline: '2024-01-01', notes: 'Note 1' },
      { title: 'Entity 2', parties: 'Party 2', value: '200', type: 'Type 2', deadline: '2024-01-02', notes: 'Note 2' },
    ];
    exportCSV(data, 'entities.csv');
  };

  return (
    <Button onClick={handleExport} className="bg-blue-500 hover:bg-blue-700">
      Export CSV
    </Button>
  );
};

export { CreateEntityForm, FilterBar, ExportButton };