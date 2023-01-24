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
            {/* Error: Type 'T' is not assignable to type 'ReactNode'. */}
            {/* {item} */}

            {item.toString()}

            {/* The following works too, since it returns a string, not possibly a React.Node like {item} does */}
            {/* {JSON.stringify(item)} */}
          </div>
        );
      })}
    </>
  );
}
