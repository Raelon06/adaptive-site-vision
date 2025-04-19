import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeader } from "@/components/ui/section-header";
import { ContentCard } from "@/components/ui/content-card";
import { TeamCard } from "@/components/ui/team-card";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, Users, Target, Brain, Trophy } from "lucide-react";
import SakaryaMap from '@/components/maps/SakaryaMap';

const features = [
  {
    icon: <Users className="h-8 w-8 text-brand-600" />,
    title: "Ekip Olma",
    description: "Güçlü ekip ruhuyla birlikte başarıya ulaşıyoruz."
  },
  {
    icon: <Target className="h-8 w-8 text-brand-600" />,
    title: "Odaklı Hedef Takip ve Gelişim",
    description: "Hedeflerimizi net belirleyip, sürekli takip ve gelişimle ileriyoruz."
  },
  {
    icon: <Brain className="h-8 w-8 text-brand-600" />,
    title: "Sürekli Eğitim",
    description: "Ekibimizin gelişimi için sürekli eğitim ve öğrenme fırsatları sunuyoruz."
  },
  {
    icon: <Trophy className="h-8 w-8 text-brand-600" />,
    title: "Başarı Odaklı",
    description: "Her projede en yüksek başarıyı hedefleyerek çalışıyoruz."
  }
];

const teamMembers = [
  {
    name: "Olcay Köksal",
    title: "SATIŞ ŞEFİ",
    image: "/lovable-uploads/41d6d981-92f9-446f-9767-229ca9a7aeb1.png",
    description: "Satış ekibinin koordinasyonu ve performansın yönetiminde sorumludur.\n\nSorumlu Olduğu Alanlar:\n- Sapanca\n- Serdivan Üniversite\n- Geyve\n- Pamukova\n- Camili Karaman",
    socials: {
      linkedin: "#"
    }
  },
  {
    name: "Anıl Samur",
    title: "Satış Şefi",
    image: "/lovable-uploads/076a5834-43c1-497c-8b8f-ba97de66a0da.png",
    description: "Satış ekibinin koordinasyonu ve performansın yönetiminde sorumludur.\n\nSorumlu Olduğu Alanlar:\n- Akyazı\n- Karapürçek Küçücek",
    socials: {
      linkedin: "#"
    }
  },
  {
    name: "KEREM KARAPÜRÇEK",
    title: "Satış Temsilcisi",
    image: "/lovable-uploads/9b8b9cde-7c72-4908-8c8d-3b7982ed5587.png",
    description: "Satış stratejilerinin geliştirilmesi ve uygulanmasından sorumludur.",
    socials: {
      linkedin: "#"
    }
  },
  {
    name: "Onur Enginyol",
    title: "Ezd Merchendiser",
    image: "/lovable-uploads/a1965ce6-f319-458b-a4df-291fe5c7ea57.png",
    description: "Müşteri portföyü yönetimi ve yeni iş geliştirme sorumlusudur.",
    socials: {
      linkedin: "#"
    }
  },
  {
    name: "Alican Pool",
    title: "Satış Temsilcisi",
    image: "/lovable-uploads/4f391e33-32d7-47ec-a906-4d2c97e7406e.png",
    description: "Müşteri portföyü yönetimi ve yeni iş geliştirmeden sorumlu.",
    socials: {
      linkedin: "#"
    }
  },
  {
    name: "Cenk Çolak",
    title: "Ezd Merchendiser",
    image: "/lovable-uploads/53a20f65-54c2-4350-b9fb-a889e4e65767.png",
    description: "Müşteri ilişkileri ve satış operasyonlarının yönetiminden sorumludur.",
    socials: {
      linkedin: "#"
    }
  }
];

const Index = () => {
  return (
    <Layout>
      <HeroSection
        title="Sakarya Güney Batıya Hoş Geldiniz"
        subtitle="SGB olarak, bölgemizdeki tüm müşterilerimize en kaliteli hizmeti sunmak için buradayız. Profesyonel ekibimizle her zaman yanınızdayız."
        backgroundImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="bg-white text-brand-700 hover:bg-gray-100">
            <Link to="/about">Biz Kimiz</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
            <Link to="/team">Ekibimiz</Link>
          </Button>
        </div>
      </HeroSection>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="2025 Sakarya Güney Batı Ekibi"
            subtitle="Modern, dinamik ve başarıya odaklı profesyonellerimizle geleceği şekillendiriyoruz"
            className="text-center"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard
                key={index}
                name={member.name}
                title={member.title}
                image={member.image}
                description={member.description}
                socials={member.socials}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <SectionHeader
            title="2025 Hedeflerimiz"
            subtitle="Sakarya Güney Batı Bölgesi olarak, geleceğe yönelik hedeflerimiz"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <Button variant="link" asChild className="text-brand-600 p-0 hover:text-brand-700">
                  <Link to="/2025" className="inline-flex items-center">
                    Detaylar
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <SectionHeader
            title="2025 Vizyonumuz"
            subtitle="Geleceğe yönelik planlarımız ve hedeflerimiz"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ContentCard
              title="Yeni Teknolojiler"
              description="2025 yılında adapte edeceğimiz yeni teknolojiler ve inovasyon planlarımız"
              image="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              link="/2025"
            />
            <ContentCard
              title="Büyüme Stratejimiz"
              description="2025 yılına kadar sürdürülebilir büyüme için geliştirdiğimiz stratejilerimiz"
              image="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
              link="/2025"
            />
            <ContentCard
              title="Yeni Pazarlar"
              description="2025 yılında faaliyet göstermeyi planladığımız yeni pazarlar ve bölgeler"
              image="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80"
              link="/2025"
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/2025" className="inline-flex items-center">
                Tüm 2025 Planlarımızı Görün
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <SectionHeader
            title="Sakarya Bölge Haritamız"
            subtitle="Modern ve interaktif haritamız ile bölgemizi keşfedin"
          />
          <SakaryaMap />
        </div>
      </section>

      <section className="py-20 bg-brand-700 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sizinle Çalışmaya Hazırız</h2>
            <p className="text-xl text-gray-100 mb-8">
              Hedefinize ulaşmanız için destek olmak üzere buradayız. Profesyonel ekibimizle her zaman yanınızdayız.
            </p>
            <Button asChild size="lg" className="bg-white text-brand-700 hover:bg-gray-100">
              <a href="mailto:info@pmi.com">Hemen İletişime Geçin</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
