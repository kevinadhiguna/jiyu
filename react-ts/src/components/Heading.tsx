// Learn to insert text between the component tags, such as :
// <Heading>My Text</Heading>
// Instead of :
// <Heading message='My Text' />

type HeadingProps = {
  children: string;
};

export const Heading = ({ children }: HeadingProps) => {
  return(
    <h2>{children}</h2>
  );
}
