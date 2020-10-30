import React, { createContext, useCallback, useContext, useState } from 'react';
import { uuid } from 'uuidv4';
import { ToastContainer } from '../components/ToastContainer';

interface ToastContextData {
  addToast({ title, message, type }: Omit<ToastData, 'id'>): void;
  removeToast(id: string): void;
}
export interface ToastData {
  id: string;
  title: string;
  message?: string;
  type?: 'success' | 'error' | 'info';
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

const ToastProvider: React.FC = ({ children }) => {
  const [toasts, setToasts] = useState<ToastData[]>([]);

  const addToast = useCallback(
    ({ title, message, type }: Omit<ToastData, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        title,
        message,
        type,
      };

      setToasts(state => [...state, toast]);
    },
    [],
  );

  const removeToast = useCallback(
    id => setToasts(status => [...status.filter(element => element.id !== id)]),
    [],
  );

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
}

export { ToastProvider, useToast };
