import { limitRange, getSecond, getMinute, getHour } from "./helpers";

test("limitRange", () => {
  expect(limitRange(0, 0, 10)).toBe(0);
  expect(limitRange(10, 0, 10)).toBe(10);
  expect(limitRange(5, 0, 10)).toBe(5);
  expect(limitRange(0, 10, 0)).toBe(0);
  expect(limitRange(0, 10, 10)).toBe(10);
  expect(limitRange(0, 10, 5)).toBe(5);
  expect(limitRange(0, 10, -5)).toBe(0);
  expect(limitRange(0, 10, -10)).toBe(0);
});

test("getSecond", () => {
  expect(getSecond(0)).toEqual(expect.objectContaining({ value: 0 }));
  expect(getSecond(15)).toEqual(expect.objectContaining({ value: 15 }));
  expect(getSecond(58)).toEqual(expect.objectContaining({ value: 58 }));
  expect(getSecond(60)).toEqual(expect.objectContaining({ value: 0 }));
});

test("getMinute", () => {
  expect(getMinute(0)).toEqual(expect.objectContaining({ value: 0 }));
  expect(getMinute(15)).toEqual(expect.objectContaining({ value: 15 }));
  expect(getMinute(58)).toEqual(expect.objectContaining({ value: 58 }));
  expect(getMinute(60)).toEqual(expect.objectContaining({ value: 0 }));
});

test("getHour", () => {
  expect(getHour(0, 0)).toEqual(expect.objectContaining({ value: 0 }));
  expect(getHour(12, 0)).toEqual(expect.objectContaining({ value: 0 }));
  expect(getHour(24, 0)).toEqual(expect.objectContaining({ value: 0 }));
});
