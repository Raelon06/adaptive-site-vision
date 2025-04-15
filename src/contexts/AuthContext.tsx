
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from "@/hooks/use-toast";
import { User } from '@/types/user';
import { AuthContextType, ACTIVE_USER_KEY, VERIFICATION_CODES, isValidPmiEmail } from '@/types/auth';
import { getStoredUsers, saveUser, generateVerificationCode } from '@/utils/authUtils';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

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

  const login = async (username: string, password: string) => {
    setIsLoading(true);
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check if username is a valid PMI email (custom rules for PMI domain emails)
      const email = username.includes('@') ? username : `${username}@example.com`;
      const isPmiUser = isValidPmiEmail(email);
      
      // For PMI domain emails, force password to be Sakarya54
      if (isPmiUser && password !== "Sakarya54") {
        throw new Error("Geçersiz şifre");
      }
      
      // For non-PMI emails, do regular password validation
      if (!isPmiUser && password !== "Sakarya54") { // For demo, use same password
        throw new Error("Geçersiz şifre");
      }
      
      // Login successful, create user
      const userData: User = {
        id: Date.now().toString(),
        email: email,
        password: password,
        name: username.includes('@') ? username.split('@')[0] : username,
        role: isPmiUser ? 'admin' : 'user' // PMI users get admin role
      };
      
      // Save user and session
      saveUser(userData);
      setUser(userData);
      localStorage.setItem(ACTIVE_USER_KEY, JSON.stringify(userData));
      
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
      const verificationCode = generateVerificationCode();
      
      // Store the code with the email
      const codes = JSON.parse(localStorage.getItem(VERIFICATION_CODES) || '{}');
      codes[email] = verificationCode;
      localStorage.setItem(VERIFICATION_CODES, JSON.stringify(codes));
      
      // In a real application, this would send an email
      console.log(`💌 Email sent to ${email} with verification code: ${verificationCode}`);
      
      toast({
        title: "Doğrulama kodu gönderildi",
        description: `${email} adresine doğrulama kodu gönderildi. Lütfen gelen kutunuzu kontrol edin. (Demo amaçlı: Kod konsola yazdırıldı - F12 ile görebilirsiniz)`,
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
        role: isValidPmiEmail(email) ? 'admin' : 'user' // PMI users get admin role
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
