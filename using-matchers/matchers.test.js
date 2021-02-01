const { test, expect } = require("@jest/globals");

/** 一般的なマッチャー */
test('two plus two is four', () => {
  expect(2 + 2).toBe(4);
})

test('object assignment', () => {
  const data = {one: 1};
  data['two'] = 2;
  
  expect(data).toEqual({one: 1, two: 2});
})

test('adding positive numbers is not zero', () => {
  for (let a = 1; a < 10; a++) {
    for (let b = 1; b < 10; b++) {
      expect(a + b).not.toBe(0);
    }
  }
})


/** 真偽値(およびそれらしく思える値) */
test('null', () => {
  const n = null;

  expect(n).toBeNull();
  expect(n).toBeDefined();
  expect(n).not.toBeUndefined();
  expect(n).not.toBeTruthy();
  expect(n).toBeFalsy();
});

test('zero', () => {
  const z = 0;

  expect(z).not.toBeNull();
  expect(z).toBeDefined();
  expect(z).not.toBeUndefined();
  expect(z).not.toBeTruthy();
  expect(z).toBeFalsy();
})

/** 数値 */
test('two plus two', () => {
  const value = 2 + 2;

  expect(value).toBeGreaterThan(3);
  expect(value).toBeGreaterThanOrEqual(3.5);
  expect(value).toBeLessThan(5);
  expect(value).toBeLessThanOrEqual(4.5);

  // toBe and toEqual are equivalent for numbers
  expect(value).toBe(4);
  expect(value).toEqual(4);
})

test('adding floating point numbers', () => {
  const value = 0.1 + 0.2;

  // expect(value).toBe(0.3) // このように書くと、丸め込み誤差が原因で期待通りに動作しない
  expect(value).toBeCloseTo(0.3); // これならば正しく動く
})

/** 文字列 */
test('there is no I in team', () => {
  expect('team').not.toMatch(/I/);
})

/** 配列と反復可能なオブジェクト */
test ('the shopping list has milk on it', () => {
  const shoppingList = [
    'diapers',
    'kleenex',
    'trash bags',
    'paper towels',
    'milk',
  ];

  expect(shoppingList).toContain('milk');
  expect(new Set(shoppingList)).toContain('milk');
})

/** 例外 */
test('compiling android goes as expected', () => {
  function compileAndroidCode() {
    throw new Error('you are using the wrong JDK');
  }

  expect(() => compileAndroidCode()).toThrow();
  expect(() => compileAndroidCode()).toThrow(Error);
})