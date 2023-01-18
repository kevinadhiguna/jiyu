import { PersonProps } from './types/Person.type';

export const Person = ({ name }: PersonProps) => {
  return(
    <div>
      <p>{name.first} {name.last}</p>
    </div>
  );
}
