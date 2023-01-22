import React from "react";
import { ProfileProps } from './ProfileProps.type';

export type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};
