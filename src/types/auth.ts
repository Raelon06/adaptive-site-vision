
import { User } from './user';

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
}

// Constants for local storage keys
export const USERS_STORAGE_KEY = 'pmi_users';
export const ACTIVE_USER_KEY = 'pmi_active_user';

// Function to validate PMI email domains
export const isValidPmiEmail = (email: string): boolean => {
  return email.toLowerCase().endsWith('pmi.com') || 
         email.toLowerCase().endsWith('koseoglultd.com.tr');
}
