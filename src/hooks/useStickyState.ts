import { Dispatch, SetStateAction, useEffect, useState } from 'react';

export const useStickyState = <T>(defaultValue: T, key: string): [T, Dispatch<SetStateAction<T>>] => {
  const [value, setValue] = useState<T>(() => {
    const stickyValue = localStorage.getItem(key);
    return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue;
  });

  useEffect(() => {
    const isValueArray = Array.isArray(value);

    if (!value || (isValueArray && value.length < 1)) {
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }, [key, value]);

  return [value, setValue];
};
