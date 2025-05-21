
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Shield } from "lucide-react";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    
    try {
      // Check if the credentials match the fixed values
      if (username === "admin" && password === "admin123") {
        await login(username, password);
        navigate('/');
      } else {
        setError("Geçersiz kullanıcı adı veya şifre");
      }
    } catch (error) {
      setError("Giriş yapılırken bir hata oluştu");
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <img 
            src="/lovable-uploads/942c5a63-00ab-421a-89f8-d8a625bca962.png" 
            alt="PMI Logo" 
            className="mx-auto h-24 w-auto"
          />
          <h2 className="mt-6 text-3xl font-bold text-gray-900 font-montserrat">PMI Sistemine Giriş</h2>
          <p className="mt-2 text-sm text-gray-600 font-opensans">
            Satış ve eğitim portalına erişmek için giriş yapın
          </p>
        </div>

        <Card className="shadow-lg border-0">
          <CardHeader className="bg-gradient-to-r from-brand-700 to-brand-800 text-white rounded-t-lg">
            <CardTitle className="text-xl">Giriş Yap</CardTitle>
            <CardDescription className="text-gray-100">
              Kullanıcı adı ve şifre ile giriş yapın
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="username">Kullanıcı Adı</Label>
                <Input 
                  id="username"
                  type="text" 
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Kullanıcı adınızı girin"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Şifre</Label>
                <Input 
                  id="password"
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Şifrenizi girin"
                  required
                />
              </div>
              
              {error && (
                <div className="bg-red-50 text-red-600 p-2 rounded text-sm">
                  {error}
                </div>
              )}
              
              <Button 
                type="submit"
                className="w-full bg-brand-600 hover:bg-brand-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Giriş yapılıyor..." : "Giriş Yap"}
              </Button>
            </form>
            
            {/* SSL Certificate Image */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 mb-3">
                <Shield className="w-4 h-4 text-green-600" />
                <span>SSL Sertifikası ile Korunan Güvenli Giriş</span>
              </div>
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="SSL Güvenlik Sertifikası" 
                  className="h-16 rounded-lg shadow-sm"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
