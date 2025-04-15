
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LogIn, Mail, Lock, AlertCircle } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { isValidPmiEmail } from "@/types/auth";

const loginSchema = z.object({
  email: z.string()
    .min(1, "E-posta adresi giriniz")
    .email("Geçerli bir e-posta adresi giriniz")
    .refine(isValidPmiEmail, {
      message: "Sadece pmi.com veya koseoglultd.com.tr uzantılı e-posta adresleri kabul edilmektedir"
    }),
  password: z.string().min(1, "Şifre giriniz"),
});

type LoginFormValues = z.infer<typeof loginSchema>;

export default function Login() {
  const { login, isLoading } = useAuth();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const form = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    try {
      setError("");
      // Use email as username for login
      await login(data.email, data.password);
      navigate("/");
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Giriş yaparken bir hata oluştu");
      }
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
              Şirket e-posta adresiniz ile giriş yapın
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>E-posta Adresi</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            placeholder="isim@pmi.com" 
                            className="pl-10" 
                            {...field} 
                            disabled={isLoading}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Şifre</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                          <Input 
                            type="password" 
                            placeholder="********" 
                            className="pl-10" 
                            {...field} 
                            disabled={isLoading}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {error && (
                  <div className="text-sm bg-red-50 p-3 rounded-md border border-red-100 flex items-start">
                    <AlertCircle className="h-4 w-4 mr-2 mt-0.5 text-red-500" />
                    <span className="text-red-700">{error}</span>
                  </div>
                )}

                <Button type="submit" className="w-full bg-brand-600 hover:bg-brand-700" disabled={isLoading}>
                  {isLoading ? "Giriş yapılıyor..." : (
                    <>
                      <LogIn className="mr-2 h-4 w-4" />
                      Giriş Yap
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter className="flex flex-col items-center text-center pt-0">
            <div className="text-sm text-gray-600 border-t w-full pt-4">
              <p className="mb-1">Şifre her çalışan için şirket standardı:</p>
              <code className="bg-gray-100 px-2 py-1 rounded font-medium text-brand-700">Sakarya54</code>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
