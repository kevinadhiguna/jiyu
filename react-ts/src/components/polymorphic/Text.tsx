// Learn to create a polymorphic component
//   Ordinarily, one does not use a polymorphic component unless creating a design library (Bottstrap, Ant Design, etc.)

import React from 'react';
import { TextProps } from '../types/TextProps.type';

export const Text = <E extends React.ElementType = 'div'>({ children, size, color, as }: TextProps<E>) => {
  const Component = as || 'div';

  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  )
}
