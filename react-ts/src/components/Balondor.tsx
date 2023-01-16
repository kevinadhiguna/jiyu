// Learn React.ReactNode (simply, another component as children props)

type BalondorProps = {
  children: React.ReactNode;
};

export const Balondor = ({ children }: BalondorProps) => {
  return(
    // Static (BAD)
    // <h3>Balondor goes to Isagi Toichi</h3>

    // Dynamic (GOOD)
    <h3>{children}</h3>
  );
}
