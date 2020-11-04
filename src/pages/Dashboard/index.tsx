import React, { useCallback } from 'react';
import { FiXCircle } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import { Container } from './style';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  const handleSignOut = useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <Container>
      <h1>Dashboard</h1>

      <button type="button" onClick={handleSignOut}>
        <FiXCircle size={30} />
      </button>
    </Container>
  );
};

export default Dashboard;
