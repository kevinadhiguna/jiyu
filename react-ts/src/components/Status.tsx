// Learn union of string literals in props

type StatusProps = {
  // Instead of this:
  // status: string;

  // DO this:
  status: 'loading' | 'success' | 'error';
};

export const Status = ({ status }: StatusProps) => {
  let message;
  if (status === 'loading') {
    message = 'Loading...';
  }
  if (status === 'success') {
    message = 'Data fetched succesfully!';
  }
  if (status === 'error') {
    message = 'Error fetching data'
  }
  
  return(
    <div>
      {/* Static (BAD) */}
      {/* 
      <h3>Loading...</h3>
      <h3>Data fetched succesfully!</h3>
      <h3>Error fetching fata</h3> 
      */}

      {/* Dynamic (GOOD) */}
      <h3>Status - {message}</h3>
    </div>
  );
}