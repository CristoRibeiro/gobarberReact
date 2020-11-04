import React, { useCallback, useEffect, useState } from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';
import { AnimatedValue } from 'react-spring';
import { Container } from './style';
import { ToastData, useToast } from '../../../hooks/toast';

const icons = {
  info: <FiInfo size={20} />,
  success: <FiCheckCircle size={20} />,
  error: <FiAlertCircle size={20} />,
};
interface ToastProps {
  toast: ToastData;
  style: object;
}

export const Toast: React.FC<ToastProps> = ({ toast, style }) => {
  const { removeToast } = useToast();
  const [timer, setTimer] = useState(0);

  const handleStopTime = useCallback(() => {
    clearTimeout(timer);
  }, [timer]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      removeToast(toast.id);
    }, 3000);

    setTimer(timeOut);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Container
      key={toast.id}
      type={toast.type}
      hasDescription
      onMouseEnter={handleStopTime}
      style={style}
    >
      {toast.type && icons[toast.type || 'info']}
      <div>
        <strong>{toast.title}</strong>
        <p>{toast.message}</p>
      </div>
      <button type="button" onClick={() => removeToast(toast.id)}>
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};
