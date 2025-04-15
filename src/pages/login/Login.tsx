
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Login() {
  const navigate = useNavigate();

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
              Giriş işlemi yönetici tarafından kaldırıldı
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">Kullanıcı girişi şu anda devre dışı bırakılmıştır.</p>
              <p className="text-gray-600">Lütfen sistem yöneticisi ile iletişime geçin.</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
