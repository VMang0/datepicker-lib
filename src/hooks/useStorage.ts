export const useStorage = () => {
  const addToStorage = <T>(storageName: string, data: T): void => {
    localStorage.setItem(storageName, JSON.stringify(data));
  };

  const getFromStorage = <T>(storageName: string): T | null => {
    const data = localStorage.getItem(storageName);
    return data ? (JSON.parse(data) as T) : null;
  };

  return {
    addToStorage,
    getFromStorage,
  };
};
