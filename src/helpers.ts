import { useEffect, useRef } from "react";

export const limitRange = (val: number, min: number, max: number) => {
  if (min > max) {
    const mx = max;
    max = min;
    min = mx;
  }

  if (val < min) {
    return min;
  }
  if (val > max) {
    return max;
  }
  return val;
};

/* From: https://overreacted.io/making-setinterval-declarative-with-react-hooks/ */
export const useInterval = (callback: () => void, delay: number) => {
  const savedCallback = useRef<(() => void) | null>(null);

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      if (savedCallback.current) savedCallback.current();
    }
    if (delay !== null) {
      let id = setInterval(tick, delay);

      return () => clearInterval(id);
    }
  }, [delay]);
};

export type TimeUnit = {
  value: number;
  rotation: number;
  revolutions: number;
};

export interface TimeUnitState {
  second: TimeUnit;
  minute: TimeUnit;
  hour: TimeUnit;
}

export type TimeAction = { type: "tick" };

export function getSecond(s: number, state?: TimeUnit) {
  if (s === 60) {
    s = 0;
  }

  const newSecond = state
      ? { ...state }
      : { value: 0, rotation: 0, revolutions: 0 },
    mondaineFraction = limitRange(s / 58, 0, 1);

  if (mondaineFraction === 0) {
    newSecond.revolutions++;
  }

  newSecond.value = s;
  newSecond.rotation = mondaineFraction * 360 + 360 * newSecond.revolutions;

  return newSecond;
}

export function getMinute(m: number, state?: TimeUnit) {
  const newMinute = state
    ? { ...state }
    : { value: 0, rotation: 0, revolutions: 0 };

  if (m / 60 === 0) {
    newMinute.revolutions++;
  }

  newMinute.value = m;
  newMinute.rotation = (m / 60) * 360 + 360 * newMinute.revolutions;

  return newMinute;
}

export function getHour(h: number, m: number, state?: TimeUnit) {
  const newHour = state
    ? { ...state }
    : { value: 0, rotation: 0, revolutions: 0 };

  newHour.value = h === 12 ? 0 : h;

  if ((newHour.value + m / 60) / 12 === 0) {
    newHour.revolutions++;
  }

  newHour.rotation =
    ((newHour.value + m / 60) / 12) * 360 + 360 * newHour.revolutions;

  return newHour;
}
