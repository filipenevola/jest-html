import { test, expect } from '@jest/globals';
import { sayHello2 } from './sayHello2.js';

test('sayHello says Hello2', () => {
    expect(sayHello2()).toBe('Hello 2');
});
