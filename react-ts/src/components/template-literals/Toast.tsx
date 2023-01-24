import { ToastProps } from '../types/Position.type';

export const Toast = ({ position }: ToastProps) => {
  return(
    <>
      <p>Toast modification Position - {position}</p>
    </>
  );
}
