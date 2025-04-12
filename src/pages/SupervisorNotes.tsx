
import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FileText, Calendar, User, CheckCircle } from "lucide-react";

const supervisorNotes = [
  {
    id: 1,
    date: "15 Mart 2024",
    author: "Ahmet Yılmaz",
    title: "EZD Süreç İyileştirmeleri",
    content: "EZD süreçlerinde yapılan iyileştirmeler sonucunda işlem süreleri %20 azaltıldı. Tüm supervisor ekibinin bu yeni süreçlere adaptasyonu için gerekli eğitimler planlandı.",
    tags: ["süreç", "iyileştirme", "eğitim"]
  },
  {
    id: 2,
    date: "2 Nisan 2024",
    author: "Ayşe Kaya",
    title: "Saha Ekibi Performans Değerlendirmesi",
    content: "Mart ayı performans değerlendirmesi sonuçları paylaşıldı. Batı bölgesinde hedeflerin %110'u gerçekleştirildi. Sakarya Güney bölgesinde ise hedeflerin %95'ine ulaşıldı. İyileştirme planları hazırlanacak.",
    tags: ["performans", "değerlendirme", "hedefler"]
  },
  {
    id: 3,
    date: "18 Nisan 2024",
    author: "Mehmet Demir",
    title: "Yeni EZD Supervisorlar İçin Oryantasyon",
    content: "Yeni katılan EZD supervisorlar için oryantasyon programı güncellendi. Yeni program, saha uygulamalarına daha fazla odaklanıyor ve gerçek vaka senaryoları içeriyor.",
    tags: ["oryantasyon", "eğitim", "yeni başlayanlar"]
  },
  {
    id: 4,
    date: "5 Mayıs 2024",
    author: "Zeynep Aydın",
    title: "Müşteri Şikayetleri Yönetim Süreci",
    content: "Müşteri şikayetlerinin çözüm süreleri analiz edildi. Ortalama çözüm süresi 3.2 güne indirildi. Kritik şikayetler için acil müdahale ekibi oluşturuldu.",
    tags: ["müşteri", "şikayet", "çözüm"]
  },
  {
    id: 5,
    date: "22 Mayıs 2024",
    author: "Ali Yıldız",
    title: "Çeyrek Dönem Hedef Değerlendirmesi",
    content: "2024 ilk çeyrek hedef değerlendirme toplantısı yapıldı. Tüm EZD supervisorların katılımıyla gerçekleştirilen toplantıda 2. çeyrek stratejileri belirlendi.",
    tags: ["hedef", "strateji", "değerlendirme"]
  },
  {
    id: 6,
    date: "10 Haziran 2024",
    author: "Fatma Şahin",
    title: "Yeni Teknoloji Uygulamaları",
    content: "Saha ekibinin kullanımı için yeni mobil uygulama devreye alındı. Bu uygulama sayesinde raporlama süreçleri otomatikleştirildi ve anlık veri akışı sağlandı.",
    tags: ["teknoloji", "uygulama", "verimlilik"]
  }
];

const SupervisorNotes = () => {
  return (
    <Layout>
      <HeroSection
        title="EZD Supervisor Notları"
        subtitle="Saha yönetimi ve supervisor notları"
        backgroundImage="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
      />

      <section className="py-20">
        <div className="container-custom">
          <SectionHeader
            title="Supervisor Notları"
            subtitle="EZD supervisorlar tarafından paylaşılan önemli notlar ve bilgiler"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {supervisorNotes.map((note) => (
              <Card key={note.id} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-2 border-b">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-brand-700 flex items-center">
                      <FileText className="mr-2 h-5 w-5" />
                      {note.title}
                    </CardTitle>
                  </div>
                  <CardDescription className="flex flex-wrap gap-2 mt-2">
                    <span className="flex items-center text-gray-600">
                      <Calendar className="mr-1 h-4 w-4" /> {note.date}
                    </span>
                    <span className="flex items-center text-gray-600">
                      <User className="mr-1 h-4 w-4" /> {note.author}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-4">
                  <p className="text-gray-700 mb-4">{note.content}</p>
                  <div className="flex flex-wrap gap-2">
                    {note.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-100 text-brand-800"
                      >
                        <CheckCircle className="mr-1 h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SupervisorNotes;
