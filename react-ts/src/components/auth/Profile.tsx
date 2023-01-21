import { ProfileProps } from '../types/ProfileProps.type';

export const Profile = ({ name }: ProfileProps) => {
  return(
    <>
      <p>Private Profile Component. Name is {name}</p>
    </>
  );
}
