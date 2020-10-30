import React, { createContext, useCallback, useContext, useState } from 'react';
import api from '../services/api';

interface AuthData {
  token: string;
  user: object;
}
interface SignInProviderData {
  email: string;
  password: string;
}
interface ProviderData {
  user: object;
  signIn(data: SignInProviderData): Promise<void>;
  signUp(): void;
}

const AuthContext = createContext<ProviderData>({} as ProviderData);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthData>(() => {
    const token = localStorage.getItem('@GoBarber:token');
    const user = localStorage.getItem('@GoBarber:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }
    return {} as AuthData;
  });

  const signIn = useCallback(
    async ({ email, password }: SignInProviderData) => {
      const response = await api.post('sessions', {
        password,
        email,
      });

      const { token, userDTO } = response.data;

      localStorage.setItem('@GoBarber:token', token);
      localStorage.setItem('@GoBarber:user', JSON.stringify(userDTO));

      setData({ token, user: userDTO });
    },
    [],
  );

  const signUp = useCallback(() => {
    localStorage.removeItem('@GoBarber:token');
    localStorage.removeItem('@GoBarber:user');

    setData({} as AuthData);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signUp }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): ProviderData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('The AuthProvider need be used around your tags');
  }
  return context;
}
