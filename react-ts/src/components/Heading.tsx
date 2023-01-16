type HeadingProps = {
  children: string;
};

export const Heading = ({ children }: HeadingProps) => {
  return(
    <h2>{children}</h2>
  );
}
