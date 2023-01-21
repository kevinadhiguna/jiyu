// Learn to pass a component as a prop

import { Login } from './Login';
import { PrivateProps } from '../types/PrivateProps.type';

export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name='joe' />; // <- <Component /> can be any component
  } else {
    return <Login />;
  }
}
