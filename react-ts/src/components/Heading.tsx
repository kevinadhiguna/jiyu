import { HeadingProps } from '../types/Heading.type';

export const Heading = ({ children }: HeadingProps) => {
  return(
    <h2>{children}</h2>
  );
}
