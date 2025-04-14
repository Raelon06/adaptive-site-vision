
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, User, ArrowRight, ArrowLeft } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const emailSchema = z.object({
  email: z.string().email("Geçerli bir email adresi giriniz"),
});

const verificationSchema = z.object({
  code: z.string().length(6, "Doğrulama kodu 6 haneli olmalıdır"),
});

const passwordSchema = z.object({
  password: z.string().min(6, "Şifre en az 6 karakter olmalıdır"),
  confirmPassword: z.string().min(6, "Şifre en az 6 karakter olmalıdır"),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Şifreler eşleşmiyor",
  path: ["confirmPassword"],
});

type EmailFormValues = z.infer<typeof emailSchema>;
type VerificationFormValues = z.infer<typeof verificationSchema>;
type PasswordFormValues = z.infer<typeof passwordSchema>;

enum RegistrationStep {
  EnterEmail = 0,
  VerifyCode = 1,
  CreatePassword = 2,
}

export default function Register() {
  const { sendVerificationCode, verifyCode, createPassword, isLoading } = useAuth();
  const [currentStep, setCurrentStep] = useState<RegistrationStep>(RegistrationStep.EnterEmail);
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const emailForm = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

  const verificationForm = useForm<VerificationFormValues>({
    resolver: zodResolver(verificationSchema),
    defaultValues: {
      code: "",
    },
  });

  const passwordForm = useForm<PasswordFormValues>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const handleEmailSubmit = async (data: EmailFormValues) => {
    try {
      setError("");
      const success = await sendVerificationCode(data.email);
      if (success) {
        setEmail(data.email);
        setCurrentStep(RegistrationStep.VerifyCode);
      }
    } catch (err) {
      setError("Doğrulama kodu gönderilirken bir hata oluştu");
    }
  };

  const handleVerificationSubmit = async (data: VerificationFormValues) => {
    try {
      setError("");
      const success = await verifyCode(email, data.code);
      if (success) {
        setCurrentStep(RegistrationStep.CreatePassword);
      }
    } catch (err) {
      setError("Doğrulama kodu kontrol edilirken bir hata oluştu");
    }
  };

  const handlePasswordSubmit = async (data: PasswordFormValues) => {
    try {
      setError("");
      const success = await createPassword(email, data.password);
      if (success) {
        navigate("/login");
      }
    } catch (err) {
      setError("Şifre oluşturulurken bir hata oluştu");
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case RegistrationStep.EnterEmail:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Kaydolun</CardTitle>
              <CardDescription>
                Email adresinizi girerek başlayın
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...emailForm}>
                <form onSubmit={emailForm.handleSubmit(handleEmailSubmit)} className="space-y-4">
                  <FormField
                    control={emailForm.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <div className="relative">
                            <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                            <Input 
                              placeholder="ornek@mail.com" 
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
                    <div className="text-sm text-red-500 mt-2">{error}</div>
                  )}

                  <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? "İşleniyor..." : (
                      <>
                        Doğrulama Kodu Gönder
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <div className="text-sm text-center w-full">
                Zaten hesabınız var mı?{" "}
                <Link to="/login" className="text-brand-600 hover:text-brand-500 font-medium">
                  Giriş Yapın
                </Link>
              </div>
            </CardFooter>
          </Card>
        );

      case RegistrationStep.VerifyCode:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Email Doğrulama</CardTitle>
              <CardDescription>
                {email} adresine gönderilen 6 haneli kodu girin
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...verificationForm}>
                <form onSubmit={verificationForm.handleSubmit(handleVerificationSubmit)} className="space-y-4">
                  <FormField
                    control={verificationForm.control}
                    name="code"
                    render={({ field }) => (
                      <FormItem className="flex flex-col items-center">
                        <FormControl>
                          <InputOTP maxLength={6} {...field}>
                            <InputOTPGroup>
                              <InputOTPSlot index={0} />
                              <InputOTPSlot index={1} />
                              <InputOTPSlot index={2} />
                              <InputOTPSlot index={3} />
                              <InputOTPSlot index={4} />
                              <InputOTPSlot index={5} />
                            </InputOTPGroup>
                          </InputOTP>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {error && (
                    <div className="text-sm text-red-500 mt-2 text-center">{error}</div>
                  )}

                  <div className="flex space-x-3">
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setCurrentStep(RegistrationStep.EnterEmail)}
                      disabled={isLoading}
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Geri
                    </Button>
                    <Button 
                      type="submit" 
                      className="flex-1"
                      disabled={isLoading}
                    >
                      {isLoading ? "Doğrulanıyor..." : (
                        <>
                          Doğrula
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2">
              <Button 
                variant="link" 
                className="text-sm"
                onClick={async () => {
                  await sendVerificationCode(email);
                }}
                disabled={isLoading}
              >
                Kodu tekrar gönder
              </Button>
            </CardFooter>
          </Card>
        );

      case RegistrationStep.CreatePassword:
        return (
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Şifre Oluştur</CardTitle>
              <CardDescription>
                Hesabınız için güçlü bir şifre belirleyin
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...passwordForm}>
                <form onSubmit={passwordForm.handleSubmit(handlePasswordSubmit)} className="space-y-4">
                  <FormField
                    control={passwordForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Şifre</FormLabel>
                        <FormControl>
                          <Input 
                            type="password" 
                            placeholder="********" 
                            {...field} 
                            disabled={isLoading}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={passwordForm.control}
                    name="confirmPassword"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Şifreyi Tekrarla</FormLabel>
                        <FormControl>
                          <Input 
                            type="password" 
                            placeholder="********" 
                            {...field} 
                            disabled={isLoading}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {error && (
                    <div className="text-sm text-red-500 mt-2">{error}</div>
                  )}

                  <div className="flex space-x-3">
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="flex-1"
                      onClick={() => setCurrentStep(RegistrationStep.VerifyCode)}
                      disabled={isLoading}
                    >
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Geri
                    </Button>
                    <Button 
                      type="submit" 
                      className="flex-1"
                      disabled={isLoading}
                    >
                      {isLoading ? "Kaydediliyor..." : (
                        <>
                          Hesabı Oluştur
                          <User className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>
        );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <img 
            src="/lovable-uploads/942c5a63-00ab-421a-89f8-d8a625bca962.png" 
            alt="PMI Logo" 
            className="mx-auto h-24 w-auto"
          />
          <h2 className="mt-6 text-3xl font-bold text-gray-900">PMI Sistemine Kayıt</h2>
          <p className="mt-2 text-sm text-gray-600">
            Satış ve eğitim portalına erişmek için kaydolun
          </p>
        </div>

        {renderStepContent()}
      </div>
    </div>
  );
}
