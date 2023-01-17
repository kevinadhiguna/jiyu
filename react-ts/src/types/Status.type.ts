// Learn union of string literals in props

export type StatusProps = {
  // Instead of this:
  // status: string;

  // DO this:
  status: 'loading' | 'success' | 'error';
};
