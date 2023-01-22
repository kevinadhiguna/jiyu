import { ListProps } from '../types/ListProps.type';
import { PersonInGeneric } from '../types/Person.type';

export const List = <T extends PersonInGeneric>({ 
  items, 
  onClick, 
}: ListProps<T>) => {
  return(
    <>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return(
          <div key={item.id} onClick={() => onClick(item)}>
            {JSON.stringify(item)}
          </div>
        );
      })}
    </>
  );
}
