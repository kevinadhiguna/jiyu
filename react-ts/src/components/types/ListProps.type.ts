export type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void
};
