
import { User } from '@/types/user';
import { USERS_STORAGE_KEY } from '@/types/auth';

/**
 * Retrieves the list of users from local storage
 */
export const getStoredUsers = (): User[] => {
  const users = localStorage.getItem(USERS_STORAGE_KEY);
  if (!users) return [];
  try {
    return JSON.parse(users);
  } catch (error) {
    console.error("Error parsing stored users:", error);
    return [];
  }
};

/**
 * Saves a user to local storage
 */
export const saveUser = (userData: User): void => {
  const users = getStoredUsers();
  const existingUserIndex = users.findIndex(u => u.email === userData.email);
  
  if (existingUserIndex >= 0) {
    users[existingUserIndex] = userData;
  } else {
    users.push(userData);
  }
  
  localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
};

/**
 * Generates a random 6-digit verification code
 */
export const generateVerificationCode = (): string => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};
