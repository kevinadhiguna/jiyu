import { RandomNumberType } from './RandomNumberType.type';

export type Zero = RandomNumberType & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
};
