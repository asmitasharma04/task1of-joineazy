import { seedData } from '../data/seedData';

const STORAGE_KEY = 'joineazy-dashboard-data';

export const getAppData = () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedData));
    return seedData;
  }

  try {
    return JSON.parse(raw);
  } catch (error) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(seedData));
    return seedData;}
};

export const saveAppData = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const resetAppData = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(seedData));
  return seedData;
};