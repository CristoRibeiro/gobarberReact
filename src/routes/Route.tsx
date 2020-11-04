import React from 'react';
import {
  Redirect,
  Route as RouteReactDom,
  RouteProps as RoutePropsReactDom,
} from 'react-router-dom';
import { useAuth } from '../hooks/auth';

interface RouteProps extends RoutePropsReactDom {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  path,
  ...rest
}) => {
  const { user } = useAuth();

  return (
    <RouteReactDom
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user || (!isPrivate && path !== '/') ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
