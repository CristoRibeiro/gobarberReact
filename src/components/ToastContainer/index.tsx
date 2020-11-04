import React from 'react';
import { useTransition } from 'react-spring';
import { Container } from './style';
import { ToastData } from '../../hooks/toast';
import { Toast } from './Toast/toast';

export interface ToastProps {
  toasts: Array<ToastData>;
}

export const ToastContainer: React.FC<ToastProps> = ({ toasts }) => {
  const toastWithAnimation = useTransition(toasts, element => element.id, {
    from: { right: '-120%', opacity: '0' },
    enter: { right: '0%', opacity: '1' },
    leave: { right: '-120%', opacity: '0' },
  });

  return (
    <Container>
      {toastWithAnimation.map(({ item, key, props }) => (
        <Toast key={key} toast={item} style={props} />
      ))}
    </Container>
  );
};
