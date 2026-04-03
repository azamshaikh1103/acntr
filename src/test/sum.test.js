import { expect, test } from 'vitest';
import { sum } from './Sum';

test("Addtion of a and b is ", () => {
    expect(sum(10, 9)).toBe(19);
});
