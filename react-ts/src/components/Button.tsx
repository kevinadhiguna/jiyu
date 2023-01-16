import React from "react";

type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void
};

export const Button = ({ handleClick }: ButtonProps) => {
  return(
    <button onClick={handleClick}>Click</button>
  );
}
