import { BalondorProps } from '../types/Balondor.types';

export const Balondor = ({ children }: BalondorProps) => {
  return(
    // Static (BAD)
    // <h3>Balondor goes to Isagi Toichi</h3>

    // Dynamic (GOOD)
    <h3>{children}</h3>
  );
}
