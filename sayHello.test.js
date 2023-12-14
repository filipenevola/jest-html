import { test, expect } from '@jest/globals';
import { sayHello } from './sayHello.js';

test('sayHello says Hello', () => {
    expect(sayHello()).toBe('Hello');
});
