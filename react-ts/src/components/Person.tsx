// Learn an object prop example

type PersonProps = {
  name: {
    first: string;
    last: string;
  }
};

export const Person = ({ name }: PersonProps) => {
  return(
    <div>
      <p>{name.first} {name.last}</p>
    </div>
  );
}
