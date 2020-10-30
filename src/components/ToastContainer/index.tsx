import React from 'react';
import { Container } from './style';
import { ToastData } from '../../hooks/toast';
import { Toast } from './Toast/toast';

export interface ToastProps {
  toasts: Array<ToastData>;
}

export const ToastContainer: React.FC<ToastProps> = toastData => {
  return (
    <Container>
      {toastData.toasts.map(element => (
        <Toast key={element.id} toast={element} />
      ))}
    </Container>
  );
};
