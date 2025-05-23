
import { User } from './user';

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<void>;
  logout: () => void;
  // Add missing function types
  sendVerificationCode?: (email: string) => Promise<boolean>;
  verifyCode?: (email: string, code: string) => Promise<boolean>;
  createPassword?: (email: string, password: string) => Promise<boolean>;
}

// Constants for local storage keys
export const USERS_STORAGE_KEY = 'pmi_users';
export const ACTIVE_USER_KEY = 'pmi_active_user';
export const VERIFICATION_CODES = 'pmi_verification_codes';

// Function to validate PMI email domains
export const isValidPmiEmail = (email: string): boolean => {
  return email.toLowerCase().endsWith('pmi.com') || 
         email.toLowerCase().endsWith('koseoglultd.com.tr');
}
