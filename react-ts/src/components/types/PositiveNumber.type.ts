import { RandomNumberType } from './RandomNumberType.type';

export type PositiveNumber = RandomNumberType & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};
