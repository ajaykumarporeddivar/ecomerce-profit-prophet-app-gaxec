'use client';

import { useState } from 'react';
import { Modal } from '@/components/ui';
import { clsx } from 'clsx';
import { lucideReact } from 'lucide-react';

interface Entity {
  title: string;
  parties: string;
  value: string;
  type: string;
  deadline: string;
  notes: string;
}

interface EntityDetailModalProps {
  item: Entity;
  open: boolean;
  onClose: () => void;
}

const EntityDetailModal = ({ item, open, onClose }: EntityDetailModalProps) => {
  const [status, setStatus] = useState('');

  const handleApprove = () => {
    setStatus('approved');
  };

  const handleReject = () => {
    setStatus('rejected');
  };

  const handleArchive = () => {
    setStatus('archived');
  };

  return (
    <Modal open={open} onClose={onClose}>
      <div className="flex flex-col gap-4">
        <h2 className="text-lg font-bold">{item.title}</h2>
        <div className="flex flex-col gap-2">
          <span>Parties: {item.parties}</span>
          <span>Value: {item.value}</span>
          <span>Type: {item.type}</span>
          <span>Deadline: {item.deadline}</span>
          <span>Notes: {item.notes}</span>
        </div>
        <div className="flex flex-col gap-2">
          {status === 'approved' ? (
            <span className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4">
              Approved
            </span>
          ) : status === 'rejected' ? (
            <span className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4">
              Rejected
            </span>
          ) : status === 'archived' ? (
            <span className="bg-gray-100 border-l-4 border-gray-500 text-gray-700 p-4">
              Archived
            </span>
          ) : (
            <div>
              <button
                onClick={handleApprove}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Approve
              </button>
              <button
                onClick={handleReject}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Reject
              </button>
              <button
                onClick={handleArchive}
                className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Archive
              </button>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
};

interface ConfirmModalProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
  onConfirm: () => void;
  variant: 'danger' | 'info';
}

const ConfirmModal = ({ open, onClose, title, message, onConfirm, variant }: ConfirmModalProps) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className={clsx('flex flex-col gap-4', variant === 'danger' ? 'bg-red-100' : 'bg-blue-100')}>
        <h2 className="text-lg font-bold">{title}</h2>
        <p>{message}</p>
        <div className="flex flex-col gap-2">
          <button
            onClick={onConfirm}
            className={clsx(
              'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded',
              variant === 'danger' ? 'bg-red-500 hover:bg-red-700' : ''
            )}
          >
            Confirm
          </button>
          <button onClick={onClose} className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export { EntityDetailModal, ConfirmModal };