
import { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useAuth } from '@/contexts/AuthContext';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const { isAuthenticated } = useAuth();

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {isAuthenticated && <Navbar />}
      <main className={`flex-grow ${isAuthenticated ? 'pt-16' : ''}`}>
        {children}
      </main>
      {isAuthenticated && <Footer />}
    </div>
  );
}
