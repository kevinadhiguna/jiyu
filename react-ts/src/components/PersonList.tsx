import { PersonListProps } from './types/PersonList.type';

export const PersonList = ({ names }: PersonListProps) => {
  return(
    <div>
      {/* Hardcode (BAD) */}
      {/* 
        <h4>Barow Shohei</h4>
        <h4>Etoshi Rin</h4>
        <h4>Nagi Eishiro</h4>
        <h4>Azira Meguru</h4> 
      */}

      {/* Dynamic (GOOD) */}
      {names.map(name => {
        return(
          <p key={name.first}>
            {name.first} {name.last}
          </p>
        );
      })}
    </div>
  );
}
