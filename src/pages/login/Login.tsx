
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);

  const handleAutoLogin = async () => {
    setIsLoading(true);
    try {
      // Automatic login with default credentials
      await login("admin", "Sakarya54");
      navigate('/');
    } catch (error) {
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
              Sisteme giriş yapmak için butona tıklayın
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-center py-8">
              <Button 
                onClick={handleAutoLogin} 
                className="w-full bg-brand-600 hover:bg-brand-700 text-white"
                disabled={isLoading}
              >
                {isLoading ? "Giriş yapılıyor..." : "Giriş Yap"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
