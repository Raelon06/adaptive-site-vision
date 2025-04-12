
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';

const menuItems = [
  { name: 'Ana Sayfa', path: '/' },
  { 
    name: 'Biz Kimiz', 
    path: '/about', 
    submenu: [
      { name: 'Ekibimiz', path: '/team' }
    ] 
  },
  { name: '2025', path: '/2025' },
  { name: 'Hedefler & Sonuçlar', path: '/goals-results' },
  { name: 'Koçluk', path: '/coaching' },
  { name: 'Yapay Zeka', path: '/ai-news' },
  { name: 'Eğitim', path: '/training' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setOpenSubmenu(null);
  }, [location.pathname]);

  const toggleSubmenu = (name: string) => {
    setOpenSubmenu(openSubmenu === name ? null : name);
  };

  return (
    <nav 
      className={cn(
        "fixed w-full z-50 transition-all duration-300", 
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <h1 className="text-2xl font-bold text-brand-800">PMI</h1>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-1">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.submenu ? (
                <button 
                  onClick={() => toggleSubmenu(item.name)}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium flex items-center",
                    location.pathname === item.path 
                      ? "text-brand-700" 
                      : "text-gray-700 hover:text-brand-600 hover:bg-gray-100/80"
                  )}
                >
                  {item.name}
                  <ChevronDown 
                    className={cn(
                      "ml-1 h-4 w-4 transition-transform", 
                      openSubmenu === item.name ? "rotate-180" : ""
                    )} 
                  />
                </button>
              ) : (
                <Link
                  to={item.path}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium",
                    location.pathname === item.path 
                      ? "text-brand-700" 
                      : "text-gray-700 hover:text-brand-600 hover:bg-gray-100/80"
                  )}
                >
                  {item.name}
                </Link>
              )}

              {/* Submenu */}
              {item.submenu && (
                <div 
                  className={cn(
                    "absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all transform origin-top-right",
                    openSubmenu === item.name 
                      ? "opacity-100 scale-100" 
                      : "opacity-0 scale-95 pointer-events-none"
                  )}
                >
                  <div className="py-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className={cn(
                          "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100",
                          location.pathname === subItem.path ? "bg-gray-100" : ""
                        )}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-600 hover:bg-gray-100 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-0 z-50 bg-white transform transition-transform ease-in-out duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h1 className="text-2xl font-bold text-brand-800">PMI</h1>
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-600 hover:bg-gray-100 focus:outline-none"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-6 w-6" />
          </button>
        </div>
        <div className="p-4 space-y-1">
          {menuItems.map((item) => (
            <div key={item.name} className="py-1">
              {item.submenu ? (
                <>
                  <button
                    onClick={() => toggleSubmenu(item.name)}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-md text-gray-700 hover:text-brand-600 hover:bg-gray-100"
                  >
                    <span>{item.name}</span>
                    <ChevronDown 
                      className={cn(
                        "ml-1 h-4 w-4 transition-transform", 
                        openSubmenu === item.name ? "rotate-180" : ""
                      )} 
                    />
                  </button>
                  {openSubmenu === item.name && (
                    <div className="pl-4 py-1 space-y-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-3 py-2 rounded-md text-gray-700 hover:text-brand-600 hover:bg-gray-100"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className="block px-3 py-2 rounded-md text-gray-700 hover:text-brand-600 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
}
