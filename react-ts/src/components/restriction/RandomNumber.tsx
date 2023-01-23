import { RandomNumberProps } from '../types/RandomNumberProps.type';

export const RandomNumber = ({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) => {
  return(
    <>
      <p>
        {value} is {isPositive && 'positive'} {isNegative && 'negative'} {isZero && 'zero'}
      </p>
    </>
  );
}
