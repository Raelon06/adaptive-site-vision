
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

const verificationSchema = z.object({
  code: z.string().length(6, "Doğrulama kodu 6 haneli olmalıdır"),
});

export type VerificationFormValues = z.infer<typeof verificationSchema>;

interface VerificationStepProps {
  onSubmit: (data: VerificationFormValues) => Promise<void>;
  onBack: () => void;
  onResendCode: () => Promise<void>;
  email: string;
  error: string;
  isLoading: boolean;
}

export function VerificationStep({ 
  onSubmit, 
  onBack, 
  onResendCode, 
  email, 
  error, 
  isLoading 
}: VerificationStepProps) {
  const verificationForm = useForm<VerificationFormValues>({
    resolver: zodResolver(verificationSchema),
    defaultValues: {
      code: "",
    },
  });

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
          <form onSubmit={verificationForm.handleSubmit(onSubmit)} className="space-y-4">
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
                onClick={onBack}
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
          onClick={onResendCode}
          disabled={isLoading}
        >
          Kodu tekrar gönder
        </Button>
      </CardFooter>
    </Card>
  );
}
