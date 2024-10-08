// Lifted wholesale from https://blog.logrocket.com/using-localstorage-react-hooks/
// Further modified to keep track of a lastUpdated timestamp for efficient caching
import { useState, useEffect } from "react";

const getStorageValue = (key, defaultValue) => {
  // getting stored value
  const saved = localStorage.getItem(key);
  const initial = JSON.parse(saved);
  return initial || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
  const lastUpdated = JSON.parse(localStorage.getItem(`${key}-lastUpdated`)) || 0;
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(`${key}-lastUpdated`, JSON.stringify(Date.now()));
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue, lastUpdated];
};
