import { describe, expect } from 'vitest';
import calculateCalories from './calculateCalories';
import { ICalories, IFormValues } from '../types';

interface ITestCase {
  received: IFormValues;
  expected: ICalories;
}

const testCases: Array<ITestCase> = [
  {
    received: {
      gender: 'male',
      age: '30',
      height: '180',
      weight: '85',
      activity: 'min',
    },
    expected: {
      weightMaintenance: 2196,
      loseWeight: 1866,
      gainWeight: 2525,
    },
  },

  {
    received: {
      gender: 'female',
      age: '25',
      height: '168',
      weight: '64',
      activity: 'low',
    },
    expected: {
      weightMaintenance: 1930,
      loseWeight: 1640,
      gainWeight: 2220,
    },
  },

  {
    received: {
      gender: 'male',
      age: '40',
      height: '175',
      weight: '95',
      activity: 'high',
    },
    expected: {
      weightMaintenance: 3189,
      loseWeight: 2710,
      gainWeight: 3667,
    },
  },
];

describe('calculate calories', () => {
  test.each(testCases)('calories', ({ received, expected }) => {
    expect(calculateCalories(received)).toEqual(expected);
  });
});
