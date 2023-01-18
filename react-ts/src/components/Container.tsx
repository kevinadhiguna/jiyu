import { ContainerProps } from './types/Container.type';

export const Container = ({ styles }: ContainerProps) => {
  return(
    <div style={styles}>
      Text goes here
    </div>
  );
}
