
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const emailSchema = z.object({
  email: z.string().email("Geçerli bir email adresi giriniz"),
});

export type EmailFormValues = z.infer<typeof emailSchema>;

interface EmailStepProps {
  onSubmit: (data: EmailFormValues) => Promise<void>;
  error: string;
  isLoading: boolean;
}

export function EmailStep({ onSubmit, error, isLoading }: EmailStepProps) {
  const emailForm = useForm<EmailFormValues>({
    resolver: zodResolver(emailSchema),
    defaultValues: {
      email: "",
    },
  });

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
          <form onSubmit={emailForm.handleSubmit(onSubmit)} className="space-y-4">
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
}
