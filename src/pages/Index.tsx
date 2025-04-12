
import { Button } from "@/components/ui/button";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeader } from "@/components/ui/section-header";
import { ContentCard } from "@/components/ui/content-card";
import { TeamCard } from "@/components/ui/team-card";
import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight, BookOpen, Brain, Target, Users } from "lucide-react";

const features = [
  {
    icon: <Users className="h-8 w-8 text-brand-600" />,
    title: "Profesyonel Ekip",
    description: "Deneyimli ve uzman ekibimizle her zaman en iyi hizmeti sunuyoruz."
  },
  {
    icon: <Target className="h-8 w-8 text-brand-600" />,
    title: "Hedef Odaklı",
    description: "Net hedeflerle çalışarak maksimum verimliliği sağlıyoruz."
  },
  {
    icon: <BookOpen className="h-8 w-8 text-brand-600" />,
    title: "Sürekli Eğitim",
    description: "Sürekli eğitimle kendimizi geliştiriyor ve güncel kalıyoruz."
  },
  {
    icon: <Brain className="h-8 w-8 text-brand-600" />,
    title: "Yapay Zeka",
    description: "En son teknolojileri kullanarak inovatif çözümler sunuyoruz."
  }
];

const Index = () => {
  return (
    <Layout>
      <HeroSection
        title="PMI'a Hoş Geldiniz"
        subtitle="Sektörün lider firması olarak, profesyonel hizmetlerimizle yanınızdayız."
        backgroundImage="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
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

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Neden Biz?"
            subtitle="PMI olarak, en yüksek kalitede hizmet sunmak için çalışıyoruz."
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
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2025 Preview Section */}
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

      {/* Team Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Ekibimizle Tanışın"
            subtitle="Profesyonel ekibimiz, alanında uzman kişilerden oluşmaktadır"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamCard
              name="Ahmet Yılmaz"
              title="Satış Direktörü"
              image="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
              socials={{
                linkedin: "#"
              }}
            />
            <TeamCard
              name="Ayşe Kaya"
              title="Bölge Müdürü"
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80"
              socials={{
                linkedin: "#"
              }}
            />
            <TeamCard
              name="Mehmet Demir"
              title="Satış Temsilcisi"
              image="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=768&q=80"
              socials={{
                linkedin: "#"
              }}
            />
            <TeamCard
              name="Zeynep Aydın"
              title="Satış Temsilcisi"
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1661&q=80"
              socials={{
                linkedin: "#"
              }}
            />
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link to="/team">
                Tüm Ekibi Görüntüle
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Call To Action */}
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
