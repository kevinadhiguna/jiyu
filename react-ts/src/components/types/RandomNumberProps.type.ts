// (1)
// export type RandomNumberProps = {
//   value: number;
//   isPositive?: boolean;
//   isNegative?: boolean;
//   isZero?: boolean;
// };

// (2)
import { PositiveNumber } from './PositiveNumber.type';
import { NegativeNumber } from './NegativeNumber.type';
import { Zero } from './Zero.type';

export type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;

// NOTE:
// Instead of (1), DO like (2) since a number is not positive, negative, and zero at the same time (It must be one of them).
//   By doing like (2), a number can only be set one of 'isPositive', 'isNegative', and 'isZero'.
