
import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Play, Globe, BookOpen, Key, Award, Clock } from "lucide-react";

const trainingPlatforms = [
  {
    name: "Coursera",
    logo: "https://images.unsplash.com/photo-1687462108995-a12e926dade4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description: "Global bir eğitim platformu olan Coursera, dünyanın önde gelen üniversitelerinden ve şirketlerinden kurslar sunmaktadır.",
    categories: ["İş Becerileri", "Teknoloji", "Veri Bilimi", "Pazarlama"],
    link: "https://www.coursera.org/"
  },
  {
    name: "Udemy",
    logo: "https://images.unsplash.com/photo-1598425237654-4fc758e50a93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description: "Geniş kurs kataloğu ile Udemy, çeşitli sektörlerden profesyonellerin hazırladığı kurslar sunar.",
    categories: ["Satış", "Liderlik", "Pazarlama", "Teknoloji"],
    link: "https://www.udemy.com/"
  },
  {
    name: "LinkedIn Learning",
    logo: "https://images.unsplash.com/photo-1616469829581-73993eb86b02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description: "LinkedIn Learning, iş dünyasına yönelik çeşitli konularda videolu kurslar sunan bir eğitim platformudur.",
    categories: ["İş Becerileri", "Satış", "Pazarlama", "Liderlik"],
    link: "https://www.linkedin.com/learning/"
  },
  {
    name: "edX",
    logo: "https://images.unsplash.com/photo-1557428894-56bcc97113fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1736&q=80",
    description: "Harvard ve MIT tarafından kurulan edX, yüksek kaliteli akademik kurslar sunan bir eğitim platformudur.",
    categories: ["İş Yönetimi", "Veri Analizi", "Liderlik", "Teknoloji"],
    link: "https://www.edx.org/"
  },
  {
    name: "Khan Academy",
    logo: "https://images.unsplash.com/photo-1613677135043-a2512fbf49fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1767&q=80",
    description: "Khan Academy, ücretsiz eğitim kaynakları sunan, kar amacı gütmeyen bir eğitim organizasyonudur.",
    categories: ["Matematik", "Ekonomi", "Bilim", "Programlama"],
    link: "https://www.khanacademy.org/"
  },
  {
    name: "Pluralsight",
    logo: "https://images.unsplash.com/photo-1581089781785-603411fa81e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description: "Pluralsight, teknoloji ve yaratıcı konularda uzmanlaşmış bir eğitim platformudur.",
    categories: ["Teknoloji", "Yazılım Geliştirme", "Veri Bilimi", "IT"],
    link: "https://www.pluralsight.com/"
  }
];

const recommendedCourses = [
  {
    title: "Satış Teknikleri Masterclass",
    platform: "Udemy",
    instructor: "John Smith",
    rating: 4.8,
    duration: "10 saat",
    level: "Orta Seviye",
    link: "https://www.udemy.com/"
  },
  {
    title: "Müşteri İlişkileri Yönetimi",
    platform: "Coursera",
    instructor: "Wharton School",
    rating: 4.7,
    duration: "6 hafta",
    level: "Tüm Seviyeler",
    link: "https://www.coursera.org/"
  },
  {
    title: "Etkili İkna Teknikleri",
    platform: "LinkedIn Learning",
    instructor: "Sarah Johnson",
    rating: 4.9,
    duration: "4 saat",
    level: "Başlangıç",
    link: "https://www.linkedin.com/learning/"
  },
  {
    title: "Yapay Zeka ve Satış",
    platform: "edX",
    instructor: "MIT",
    rating: 4.6,
    duration: "8 hafta",
    level: "İleri Seviye",
    link: "https://www.edx.org/"
  }
];

const Training = () => {
  return (
    <Layout>
      <HeroSection
        title="Eğitim Kaynakları"
        subtitle="Profesyonel gelişiminiz için ücretsiz eğitim platformları ve kaynaklar"
        backgroundImage="https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1674&q=80"
      />

      <section className="py-20">
        <div className="container-custom">
          <SectionHeader
            title="Ücretsiz Eğitim Platformları"
            subtitle="Kişisel ve profesyonel gelişiminiz için faydalanabileceğiniz ücretsiz eğitim platformları"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {trainingPlatforms.map((platform, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={platform.logo} 
                    alt={platform.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                  <p className="text-gray-700 mb-4">{platform.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {platform.categories.map((category, i) => (
                      <span 
                        key={i}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                  <Button asChild className="w-full">
                    <a href={platform.link} target="_blank" rel="noopener noreferrer">
                      Platforma Git
                      <ExternalLink className="ml-2 h-4 w-4" />
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
          <SectionHeader
            title="Önerilen Kurslar"
            subtitle="Satış ekibimiz için özel olarak seçilmiş eğitim kursları"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recommendedCourses.map((course, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{course.title}</h3>
                    <p className="text-gray-500 text-sm">{course.platform} • {course.instructor}</p>
                  </div>
                  <div className="bg-brand-50 text-brand-700 px-2 py-1 rounded text-sm font-medium">
                    {course.rating} / 5
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <div className="flex items-center mr-4">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                    <span>{course.level}</span>
                  </div>
                </div>
                <Button asChild variant="outline" className="w-full">
                  <a href={course.link} target="_blank" rel="noopener noreferrer">
                    Kursa Git
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-serif">Kendi Öğrenme Yolunuzu Oluşturun</h2>
              <p className="text-lg text-gray-700 mb-6">
                Profesyonel gelişiminiz için kendi öğrenme yolunuzu oluşturabilirsiniz. 
                İhtiyaçlarınıza ve ilgi alanlarınıza göre farklı platformlardan kurslar seçerek, 
                kendi eğitim programınızı oluşturabilirsiniz.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Ücretsiz eğitim platformlarındaki kaynaklardan faydalanarak, satış becerilerinizi 
                geliştirebilir, yeni teknikler öğrenebilir ve kariyerinizde ilerleyebilirsiniz. 
                Sürekli öğrenme, başarılı bir satış kariyeri için vazgeçilmez bir unsurdur.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-start">
                  <Globe className="h-6 w-6 mr-2 text-brand-600" />
                  <div>
                    <h3 className="font-semibold mb-1">Online Erişim</h3>
                    <p className="text-sm text-gray-600">Her yerden erişilebilir eğitim kaynakları</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Play className="h-6 w-6 mr-2 text-brand-600" />
                  <div>
                    <h3 className="font-semibold mb-1">Video İçerikler</h3>
                    <p className="text-sm text-gray-600">Görsel öğrenme deneyimi sunan dersler</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BookOpen className="h-6 w-6 mr-2 text-brand-600" />
                  <div>
                    <h3 className="font-semibold mb-1">Kapsamlı Kaynaklar</h3>
                    <p className="text-sm text-gray-600">Detaylı dokümanlar ve ek materyaller</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Key className="h-6 w-6 mr-2 text-brand-600" />
                  <div>
                    <h3 className="font-semibold mb-1">Ücretsiz Erişim</h3>
                    <p className="text-sm text-gray-600">Birçok kaynağa ücretsiz erişim imkanı</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Öğrenme Yolculuğu" 
                className="rounded-lg shadow-xl" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-brand-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <Award className="h-16 w-16 mx-auto mb-6 text-white" />
            <h2 className="text-3xl font-bold mb-6 font-serif">Öğrenme Yolculuğunuzu Belgelendirin</h2>
            <p className="text-xl mb-8">
              Tamamladığınız kursların sertifikalarını LinkedIn profilinize ekleyerek, profesyonel 
              gelişiminizi belgelendirebilirsiniz. Sertifikalar, iş başvurularında ve kariyer 
              gelişiminizde önemli bir rol oynayabilir.
            </p>
            <Button size="lg" className="bg-white text-brand-700 hover:bg-gray-100">
              <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                LinkedIn Profilinizi Güncelleyin
              </a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Training;
