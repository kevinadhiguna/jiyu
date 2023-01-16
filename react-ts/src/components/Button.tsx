type ButtonProps = {
  handleClick: () => void
};

export const Button = ({ handleClick }: ButtonProps) => {
  return(
    <button onClick={handleClick}>Click</button>
  );
}
