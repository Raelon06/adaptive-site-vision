
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { User } from '@/types/user';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  sendVerificationCode: (email: string) => Promise<boolean>;
  verifyCode: (email: string, code: string) => Promise<boolean>;
  createPassword: (email: string, password: string) => Promise<boolean>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

// Mock storage for demo purposes
const USERS_STORAGE_KEY = 'pmi_users';
const ACTIVE_USER_KEY = 'pmi_active_user';
const VERIFICATION_CODES = 'pmi_verification_codes';

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();

  // On mount, check if user is already logged in
  useEffect(() => {
    const storedUser = localStorage.getItem(ACTIVE_USER_KEY);
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Error parsing stored user:", error);
        localStorage.removeItem(ACTIVE_USER_KEY);
      }
    }
    setIsLoading(false);
  }, []);

  const getStoredUsers = (): User[] => {
    const users = localStorage.getItem(USERS_STORAGE_KEY);
    if (!users) return [];
    try {
      return JSON.parse(users);
    } catch (error) {
      console.error("Error parsing stored users:", error);
      return [];
    }
  };

  const saveUser = (userData: User) => {
    const users = getStoredUsers();
    const existingUserIndex = users.findIndex(u => u.email === userData.email);
    
    if (existingUserIndex >= 0) {
      users[existingUserIndex] = userData;
    } else {
      users.push(userData);
    }
    
    localStorage.setItem(USERS_STORAGE_KEY, JSON.stringify(users));
  };

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const users = getStoredUsers();
      const user = users.find(u => u.email === email && u.password === password);
      
      if (!user) {
        throw new Error("Geçersiz email veya şifre");
      }
      
      setUser(user);
      localStorage.setItem(ACTIVE_USER_KEY, JSON.stringify(user));
      toast({
        title: "Giriş başarılı",
        description: "Hoş geldiniz!",
      });
      navigate('/');
    } catch (error) {
      toast({
        title: "Giriş başarısız",
        description: error instanceof Error ? error.message : "Bir hata oluştu",
        variant: "destructive",
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem(ACTIVE_USER_KEY);
    toast({
      title: "Çıkış yapıldı",
      description: "Güvenli bir şekilde çıkış yaptınız.",
    });
    navigate('/login');
  };

  const sendVerificationCode = async (email: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Generate a 6-digit code
      const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
      
      // Store the code with the email
      const codes = JSON.parse(localStorage.getItem(VERIFICATION_CODES) || '{}');
      codes[email] = verificationCode;
      localStorage.setItem(VERIFICATION_CODES, JSON.stringify(codes));
      
      console.log(`Verification code for ${email}: ${verificationCode}`);
      
      toast({
        title: "Doğrulama kodu gönderildi",
        description: "Lütfen email adresinize gelen kodu kontrol edin. (Demo amaçlı: Kod konsola yazdırıldı)",
      });
      
      return true;
    } catch (error) {
      toast({
        title: "Kod gönderme başarısız",
        description: "Doğrulama kodu gönderilemedi. Lütfen tekrar deneyin.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const verifyCode = async (email: string, code: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const codes = JSON.parse(localStorage.getItem(VERIFICATION_CODES) || '{}');
      const storedCode = codes[email];
      
      if (!storedCode) {
        throw new Error("Doğrulama kodu bulunamadı veya süresi dolmuş");
      }
      
      if (storedCode !== code) {
        throw new Error("Geçersiz doğrulama kodu");
      }
      
      toast({
        title: "Kod doğrulandı",
        description: "Email adresiniz başarıyla doğrulandı.",
      });
      
      return true;
    } catch (error) {
      toast({
        title: "Doğrulama başarısız",
        description: error instanceof Error ? error.message : "Bir hata oluştu",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const createPassword = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser: User = {
        id: Date.now().toString(),
        email,
        password,
        name: email.split('@')[0], // Simple name from email
        role: 'user'
      };
      
      saveUser(newUser);
      
      // Clean up verification code
      const codes = JSON.parse(localStorage.getItem(VERIFICATION_CODES) || '{}');
      delete codes[email];
      localStorage.setItem(VERIFICATION_CODES, JSON.stringify(codes));
      
      toast({
        title: "Hesap oluşturuldu",
        description: "Hesabınız başarıyla oluşturuldu. Şimdi giriş yapabilirsiniz.",
      });
      
      return true;
    } catch (error) {
      toast({
        title: "Hesap oluşturma başarısız",
        description: "Hesabınız oluşturulamadı. Lütfen tekrar deneyin.",
        variant: "destructive",
      });
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
        login,
        logout,
        sendVerificationCode,
        verifyCode,
        createPassword
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
