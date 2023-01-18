import { InputProps } from './types/Input.type';

export const Input = ({ value, handleChange }: InputProps) => {
  return(
    <input type="text" value={value} onChange={handleChange} />
  );
}
