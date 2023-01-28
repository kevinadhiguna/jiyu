import React from "react";

export type TextOwnProps<E extends React.ElementType> = {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary';
  children: React.ReactNode;
  as?: E;
};

export type TextProps<E extends React.ElementType> = TextOwnProps<E> & 
Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;
