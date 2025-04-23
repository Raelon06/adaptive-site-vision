import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Calendar, Clock, Award, BookOpen, Star, Plus, ArrowUp } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const coachingPrograms = [
  {
    id: 1,
    title: "Satış Teknikleri Eğitimi",
    coach: "BERK BORA",
    position: ""SAHA & DİJİTAL İŞ GELİŞTİRME UZMANI",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    banner: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description: "Müşteri ihtiyaçlarını anlamak ve etkili satış teknikleri geliştirmek için kapsamlı bir eğitim programı.",
    modules: [
      "Müşteri Psikolojisi",
      "İkna Teknikleri",
      "Satış Süreçleri Optimizasyonu",
      "İtiraz Yönetimi"
    ],
    duration: "4 Hafta",
    nextSession: "15 Mayıs 2025"
  },
  {
    id: 2,
    title: "Müşteri İlişkileri Yönetimi",
    coach: "BERK BORA",
    position: "SAHA & DİJİTAL İŞ GELİŞTİRME UZMANI",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    banner: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description: "Uzun vadeli müşteri ilişkileri kurmak ve müşteri memnuniyetini artırmak için stratejiler.",
    modules: [
      "Müşteri Beklentilerini Anlama",
      "İlişki Geliştirme Teknikleri",
      "Sorun Çözme ve Çatışma Yönetimi",
      "Müşteri Sadakati Oluşturma"
    ],
    duration: "3 Hafta",
    nextSession: "1 Haziran 2025"
  },
  {
    id: 3,
    title: "Dijital Satış Stratejileri",
    coach: "SERKAN TAPŞIN",
    position: "SALES COORDİNATOR",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=768&q=80",
    banner: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description: "Dijital platformlarda etkili satış stratejileri geliştirmek ve online müşteri deneyimini optimize etmek.",
    modules: [
      "Sosyal Medya Satışları",
      "E-Ticaret Stratejileri",
      "Online Müşteri Deneyimi",
      "Dijital Pazarlama Entegrasyonu"
    ],
    duration: "4 Hafta",
    nextSession: "10 Temmuz 2025"
  },
  {
    id: 4,
    title: "İleri Düzey Pazarlama Teknikleri",
    coach: "BERK BORA",
    position: ""SAHA & DİJİTAL İŞ GELİŞTİRME UZMANI"",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1661&q=80",
    banner: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description: "Pazarlama stratejilerini geliştirmek ve müşteri segmentasyonu ile hedef odaklı kampanyalar oluşturmak.",
    modules: [
      "Pazar Segmentasyonu",
      "Hedef Odaklı Kampanyalar",
      "Pazarlama Analizi",
      "Rekabet Stratejileri"
    ],
    duration: "5 Hafta",
    nextSession: "20 Ağustos 2025"
  },
  {
    id: 5,
    title: "Liderlik ve Takım Yönetimi",
    coach: "BERK BORA",
    position: ""SAHA & DİJİTAL İŞ GELİŞTİRME UZMANI"",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    banner: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description: "Etkili liderlik becerileri geliştirmek ve takım performansını artırmak için stratejiler.",
    modules: [
      "Liderlik Stilleri",
      "Motivasyon Teknikleri",
      "Takım Dinamikleri",
      "Performans Yönetimi"
    ],
    duration: "6 Hafta",
    nextSession: "5 Eylül 2025"
  },
  {
    id: 6,
    title: "Müzakere ve İkna Teknikleri",
    coach: "Elif Yıldız",
    position: "Satış Temsilcisi",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    banner: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    description: "Etkili müzakere ve ikna teknikleri ile anlaşmaları başarıyla sonuçlandırmak.",
    modules: [
      "Müzakere Psikolojisi",
      "Etkili İkna Teknikleri",
      "Kazan-Kazan Stratejileri",
      "Zor Durumları Yönetme"
    ],
    duration: "4 Hafta",
    nextSession: "15 Ekim 2025"
  },
  {
    id: 7,
    title: "İş Analizi ve Raporlama",
    coach: "Murat Bilgin",
    position: "Satış Temsilcisi",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    banner: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description: "Veri analizi ve raporlama teknikleri ile iş süreçlerini optimize etmek ve karar verme süreçlerini iyileştirmek.",
    modules: [
      "Veri Analizi Temelleri",
      "Raporlama Teknikleri",
      "İş Zekası Araçları",
      "Veri Odaklı Karar Verme"
    ],
    duration: "5 Hafta",
    nextSession: "1 Kasım 2025"
  }
];

const Coaching = () => {
  return (
    <Layout>
      <HeroSection
        title="Koçluk Programlarımız"
        subtitle="Kişisel ve profesyonel gelişiminiz için özel tasarlanmış eğitimler"
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
      />

      <section className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold mb-4 font-serif">Koçluk Seviyeleri</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Plus className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Yeni</h3>
                </div>
                <p className="text-gray-600">Koçluk sürecine yeni başlayan veya 6 aydan az deneyime sahip olan kişiler için temel seviye programlar.</p>
              </div>
              
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <ArrowUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Gelişiyorum</h3>
                </div>
                <p className="text-gray-600">6-18 ay arası deneyime sahip, temel koçluk becerilerini geliştiren ve ileri seviye tekniklere ilerleyen kişiler için.</p>
              </div>
              
              <div className="border rounded-lg p-5 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <Star className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold">Uzman Seviye</h3>
                </div>
                <p className="text-gray-600">18 aydan fazla deneyime sahip, ileri düzey koçluk teknikleri uygulayan ve diğerlerine mentorluk yapabilen kişiler için.</p>
              </div>
            </div>
            
            <div className="mt-8">
              <Accordion type="single" collapsible className="bg-gray-50 rounded-lg">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="px-4 py-3 hover:bg-gray-100 rounded-t-lg">
                    Koçluk Seviyelerini Nasıl İlerletebilirim?
                  </AccordionTrigger>
                  <AccordionContent className="px-4 py-3">
                    <p className="mb-2">Koçluk seviyenizi ilerletmek için şu adımları takip edebilirsiniz:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li>Düzenli olarak eğitimlere katılın</li>
                      <li>Uygulama seanslarında aktif rol alın</li>
                      <li>Geri bildirimleri dikkate alarak kendinizi geliştirin</li>
                      <li>Yıllık değerlendirme sınavlarına girin</li>
                      <li>Mentorluk programlarına dahil olun</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <SectionHeader
            title="Satış Ekibi Koçluk Programları"
            subtitle="Satış ekibimiz için özel olarak tasarlanmış, kişisel ve profesyonel gelişimi destekleyen koçluk programları"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coachingPrograms.map((program) => (
              <div 
                key={program.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={program.banner} 
                    alt={program.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                  <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{program.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <img 
                      src={program.image} 
                      alt={program.coach} 
                      className="w-12 h-12 rounded-full mr-3 object-cover" 
                    />
                    <div>
                      <h4 className="font-semibold">{program.coach}</h4>
                      <p className="text-sm text-gray-600">{program.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4 line-clamp-3">{program.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {program.modules.slice(0, 2).map((module, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {module}
                      </span>
                    ))}
                    {program.modules.length > 2 && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium">
                        +{program.modules.length - 2} modül
                      </span>
                    )}
                  </div>
                  <div className="flex items-center justify-between mb-4 text-sm text-gray-600">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{program.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>{program.nextSession}</span>
                    </div>
                  </div>
                  <Button asChild className="w-full">
                    <a href={`#program-${program.id}`}>
                      Detayları Görüntüle
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-serif">Koçluk Yaklaşımımız</h2>
              <p className="text-lg text-gray-700 mb-6">
                PMI olarak, her bir ekip üyemizin potansiyelini en üst düzeye çıkarmak için kişiselleştirilmiş 
                koçluk programları sunuyoruz. Koçluk programlarımız, teorik bilginin yanı sıra pratik uygulamalar ve 
                gerçek dünya senaryoları ile desteklenmektedir.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Deneyimli koçlarımız, her katılımcının ihtiyaçlarını ve gelişim alanlarını belirleyerek, 
                kişiye özel bir gelişim planı oluşturur. Düzenli geri bildirimler ve izleme toplantıları ile 
                katılımcıların gelişimini sürekli olarak takip eder ve destekleriz.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start">
                  <Award className="h-6 w-6 mr-2 text-brand-600" />
                  <div>
                    <h3 className="font-semibold mb-1">Yüksek Kalite</h3>
                    <p className="text-sm text-gray-600">Sektör standartlarının üzerinde eğitim içeriği</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BookOpen className="h-6 w-6 mr-2 text-brand-600" />
                  <div>
                    <h3 className="font-semibold mb-1">Kapsamlı İçerik</h3>
                    <p className="text-sm text-gray-600">Teorik ve pratik bilgilerin harmanı</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Play className="h-6 w-6 mr-2 text-brand-600" />
                  <div>
                    <h3 className="font-semibold mb-1">Interaktif Yöntem</h3>
                    <p className="text-sm text-gray-600">Katılımlı ve etkileşimli eğitim süreçleri</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Calendar className="h-6 w-6 mr-2 text-brand-600" />
                  <div>
                    <h3 className="font-semibold mb-1">Esnek Program</h3>
                    <p className="text-sm text-gray-600">İş takvimlerine uygun eğitim planlaması</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Koçluk Yaklaşımı" 
                className="rounded-lg shadow-xl" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="bg-brand-700 text-white rounded-lg p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 font-serif">Özel Koçluk Talebi</h2>
              <p className="text-lg mb-8">
                Ekip veya bireysel ihtiyaçlarınıza özel koçluk programları için talepte bulunabilirsiniz. 
                İhtiyaçlarınıza uygun olarak hazırlanacak programlar için bizimle iletişime geçin.
              </p>
              <Button size="lg" className="bg-white text-brand-700 hover:bg-gray-100">
                <a href="mailto:coaching@pmi.com">Koçluk Talebi Oluştur</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Coaching;
