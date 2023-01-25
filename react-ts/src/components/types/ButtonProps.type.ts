import React from 'react';

export type ButtonProps = {
  variant: 'primary' | 'secondary';
  children: string;
} & Omit<React.ComponentProps<'button'>, 'children'>;

// Notes:
// Omit<React.ComponentProps<'button'>, 'children'> is there to 
//   avoid the children prop having types of string and React.ReactNode
