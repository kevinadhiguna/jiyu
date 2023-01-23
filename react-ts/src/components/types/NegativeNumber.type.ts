import { RandomNumberType } from './RandomNumberType.type';

export type NegativeNumber = RandomNumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};
