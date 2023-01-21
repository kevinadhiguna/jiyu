// Learn an object prop example

export type Name = {
  first: string;
  last: string;
}

export type PersonProps = {
  name: Name;
};

export type PersonInGeneric = {
  id: number;
  first: string;
  last: string;
};
