
import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

// Import our new components
import { EmailStep, EmailFormValues } from "./components/EmailStep";
import { VerificationStep, VerificationFormValues } from "./components/VerificationStep";
import { PasswordStep, PasswordFormValues } from "./components/PasswordStep";
import { RegisterHeader } from "./components/RegisterHeader";

// Define registration steps enum
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
  const [lastCodeSentTime, setLastCodeSentTime] = useState(0);
  const navigate = useNavigate();
  const { toast } = useToast();

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

  const handleResendCode = async () => {
    await sendVerificationCode(email);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case RegistrationStep.EnterEmail:
        return (
          <EmailStep 
            onSubmit={handleEmailSubmit} 
            error={error}
            isLoading={isLoading}
          />
        );

      case RegistrationStep.VerifyCode:
        return (
          <VerificationStep
            onSubmit={handleVerificationSubmit}
            onBack={() => setCurrentStep(RegistrationStep.EnterEmail)}
            onResendCode={handleResendCode}
            email={email}
            error={error}
            isLoading={isLoading}
          />
        );

      case RegistrationStep.CreatePassword:
        return (
          <PasswordStep
            onSubmit={handlePasswordSubmit}
            onBack={() => setCurrentStep(RegistrationStep.VerifyCode)}
            error={error}
            isLoading={isLoading}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <RegisterHeader 
          logoSrc="/lovable-uploads/942c5a63-00ab-421a-89f8-d8a625bca962.png"
          title="PMI Sistemine Kayıt"
          subtitle="Satış ve eğitim portalına erişmek için kaydolun"
        />

        {renderStepContent()}
      </div>
    </div>
  );
}
