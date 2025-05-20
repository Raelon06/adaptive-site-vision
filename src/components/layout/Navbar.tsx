
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, CalendarDays, Map, FileText, LogOut, Users, Code } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { useAuth } from '@/contexts/AuthContext';

const menuItems = [
  { name: 'Ana Sayfa', path: '/' },
  { 
    name: 'Biz Kimiz', 
    path: '/about', 
    submenu: [
      { 
        name: 'Ekibimiz', 
        path: '/team',
        icon: <Users className="h-4 w-4 mr-1" /> 
      }
    ] 
  },
  { 
    name: '2025', 
    path: '/2025',
    submenu: [
      { name: '2025 Hedefleri', path: '/2025', icon: <CalendarDays className="h-4 w-4 mr-1" /> },
      { name: 'Sakarya Güney Batı Road Map', path: '/roadmap', icon: <Map className="h-4 w-4 mr-1" /> },
      { name: 'EZD Supervisor Notlar', path: '/supervisor-notes', icon: <FileText className="h-4 w-4 mr-1" /> }
    ]
  },
  { name: 'Hedefler & Sonuçlar', path: '/goals-results' },
  { name: 'Koçluk', path: '/coaching' },
  { name: 'Yapay Zeka', path: '/ai-news' },
  { name: 'Eğitim', path: '/training' },
  { 
    name: 'Developer Area', 
    path: '/dev-area',
    icon: <Code className="h-4 w-4 mr-1" />
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const location = useLocation();
  const { isAuthenticated, logout, user } = useAuth();

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

  if (!isAuthenticated) {
    return null;
  }

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
          <img 
            src="/lovable-uploads/942c5a63-00ab-421a-89f8-d8a625bca962.png" 
            alt="KÖBEOĞLU PMI THE REDS KAZANIR" 
            className="h-12 md:h-14 w-auto"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-1">
          {menuItems.map((item) => (
            <div key={item.name} className="relative group">
              {item.submenu ? (
                <div className="relative group">
                  <button 
                    onClick={() => toggleSubmenu(item.name)}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-200",
                      location.pathname === item.path 
                        ? "text-brand-700 font-semibold" 
                        : "text-gray-700 hover:text-brand-600 hover:bg-gray-100/80"
                    )}
                  >
                    <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand-600 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                      {item.name}
                    </span>
                    <ChevronDown 
                      className={cn(
                        "ml-1 h-4 w-4 transition-transform duration-200", 
                        openSubmenu === item.name ? "rotate-180" : ""
                      )} 
                    />
                  </button>

                  <div 
                    className={cn(
                      "absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all transform origin-top-right",
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
                            "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200 flex items-center",
                            location.pathname === subItem.path ? "bg-gray-100 font-medium" : ""
                          )}
                        >
                          {subItem.icon && subItem.icon}
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  to={item.path}
                  className={cn(
                    "px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
                    location.pathname === item.path 
                      ? "text-brand-700 font-semibold" 
                      : "text-gray-700 hover:text-brand-600 hover:bg-gray-100/80"
                  )}
                >
                  <span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-brand-600 after:scale-x-0 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left">
                    {item.name}
                  </span>
                </Link>
              )}
            </div>
          ))}

          <Button 
            variant="ghost" 
            size="sm" 
            onClick={logout}
            className="ml-4 text-gray-700 hover:text-red-600 hover:bg-red-50"
          >
            <LogOut className="h-4 w-4 mr-1" />
            Çıkış Yap
          </Button>
        </div>

        <div className="md:hidden flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="sm" 
            onClick={logout}
            className="text-gray-700 hover:text-red-600 hover:bg-red-50"
          >
            <LogOut className="h-4 w-4" />
          </Button>
        
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-600 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={cn(
          "md:hidden fixed inset-0 z-50 bg-white transform transition-transform ease-in-out duration-300",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/942c5a63-00ab-421a-89f8-d8a625bca962.png" 
              alt="KÖBEOĞLU PMI THE REDS KAZANIR" 
              className="h-10 w-auto"
            />
            {user && (
              <span className="text-sm font-medium text-gray-700">{user.name}</span>
            )}
          </div>
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-brand-600 hover:bg-gray-100 focus:outline-none transition-colors duration-200"
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
                    className="w-full flex items-center justify-between px-3 py-2 rounded-md text-gray-700 hover:text-brand-600 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span className="font-medium">{item.name}</span>
                    <ChevronDown 
                      className={cn(
                        "ml-1 h-4 w-4 transition-transform duration-200", 
                        openSubmenu === item.name ? "rotate-180" : ""
                      )} 
                    />
                  </button>
                  {openSubmenu === item.name && (
                    <div className="pl-4 py-1 space-y-1 animate-fade-in">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-3 py-2 rounded-md text-gray-700 hover:text-brand-600 hover:bg-gray-100 transition-colors duration-200 flex items-center"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.icon && subItem.icon}
                          <span className="ml-1">{subItem.name}</span>
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  to={item.path}
                  className="block px-3 py-2 rounded-md text-gray-700 hover:text-brand-600 hover:bg-gray-100 transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="font-medium">{item.name}</span>
                </Link>
              )}
            </div>
          ))}
          
          <div className="pt-4 mt-4 border-t">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={logout}
              className="w-full justify-start text-red-600 hover:bg-red-50 hover:text-red-700"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Çıkış Yap
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
