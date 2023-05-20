import { describe, it, expect } from 'vitest';
import calculateCalories from '../src/utils/calculateCalories';

describe('calculating calories', () => {
  it('case 1', () => {
    expect(
      calculateCalories({
        gender: 'male',
        age: '35',
        height: '180',
        weight: '85',
        activity: 'min',
      })
    ).toEqual({
      weightMaintenance: 2166,
      loseWeight: 1841,
      gainWeight: 2490,
    });
  });
});
