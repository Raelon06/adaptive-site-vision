
import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeader } from "@/components/ui/section-header";
import { ContentCard } from "@/components/ui/content-card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Search } from "lucide-react";

const aiNews = [
  {
    title: "Yapay Zeka Satış Stratejilerini Nasıl Dönüştürüyor?",
    description: "Yapay zeka teknolojileri, satış süreçlerini otomatikleştirerek ve kişiselleştirerek verimliliği artırıyor ve müşteri deneyimini iyileştiriyor.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    date: "12 Nisan 2025",
    category: "Satış Teknolojileri",
    link: "#"
  },
  {
    title: "Chatbot'lar Müşteri Hizmetlerinde Devrim Yaratıyor",
    description: "Yapay zeka destekli chatbot'lar, 7/24 müşteri desteği sağlayarak müşteri memnuniyetini artırıyor ve operasyonel maliyetleri düşürüyor.",
    image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1774&q=80",
    date: "5 Nisan 2025",
    category: "Müşteri Hizmetleri",
    link: "#"
  },
  {
    title: "Yapay Zeka ile Kişiselleştirilmiş Müşteri Deneyimi",
    description: "Yapay zeka algoritmaları, müşteri verilerini analiz ederek her müşteri için özel içerik ve teklifler sunuyor, böylece dönüşüm oranları artıyor.",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    date: "28 Mart 2025",
    category: "Müşteri Deneyimi",
    link: "#"
  },
  {
    title: "Veri Analizi ve Yapay Zeka ile Satış Tahminleri",
    description: "Yapay zeka ve makine öğrenimi algoritmaları, geçmiş verileri analiz ederek doğru satış tahminleri yapıyor ve stratejik kararları destekliyor.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    date: "21 Mart 2025",
    category: "Veri Analizi",
    link: "#"
  },
  {
    title: "Yapay Zeka Destekli CRM Sistemleri",
    description: "CRM sistemlerinin yapay zeka ile entegrasyonu, müşteri ilişkilerini güçlendiriyor ve satış ekiplerinin performansını artırıyor.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80",
    date: "15 Mart 2025",
    category: "CRM Sistemleri",
    link: "#"
  },
  {
    title: "Ses Tanıma Teknolojileri ile Satış Süreçleri",
    description: "Yapay zeka destekli ses tanıma teknolojileri, satış görüşmelerinde müşteri duygularını analiz ederek satış stratejilerini iyileştiriyor.",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80",
    date: "8 Mart 2025",
    category: "Ses Teknolojileri",
    link: "#"
  },
  {
    title: "Yapay Zeka ve IoT Entegrasyonu",
    description: "Nesnelerin İnterneti (IoT) ve yapay zeka entegrasyonu, gerçek zamanlı veri analizi ile satış süreçlerini optimize ediyor.",
    image: "https://images.unsplash.com/photo-1639322537504-6427a16b0a28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1732&q=80",
    date: "1 Mart 2025",
    category: "IoT",
    link: "#"
  },
  {
    title: "Büyük Veri ve Yapay Zeka ile Pazar Analizi",
    description: "Büyük veri ve yapay zeka teknolojileri, pazar trendlerini analiz ederek satış fırsatlarını belirlemeye yardımcı oluyor.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    date: "22 Şubat 2025",
    category: "Büyük Veri",
    link: "#"
  },
  {
    title: "Görüntü Tanıma ile Müşteri Davranışlarının Analizi",
    description: "Yapay zeka destekli görüntü tanıma teknolojileri, fiziksel mağazalarda müşteri davranışlarını analiz ederek satış stratejilerini optimize ediyor.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    date: "15 Şubat 2025",
    category: "Görüntü Tanıma",
    link: "#"
  }
];

const categories = [
  "Tüm Kategoriler",
  "Satış Teknolojileri",
  "Müşteri Hizmetleri",
  "Müşteri Deneyimi",
  "Veri Analizi",
  "CRM Sistemleri",
  "Ses Teknolojileri",
  "IoT",
  "Büyük Veri",
  "Görüntü Tanıma"
];

const AINews = () => {
  return (
    <Layout>
      <HeroSection
        title="Yapay Zeka Haberleri"
        subtitle="Satış ve pazarlama alanında en son yapay zeka gelişmeleri ve trendleri"
        backgroundImage="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <SectionHeader
              title="Son Yapay Zeka Gelişmeleri"
              subtitle="Satış ve pazarlama alanında yapay zeka teknolojilerindeki son gelişmeler"
              centered={false}
              className="mb-6 md:mb-0"
            />
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input 
                type="text" 
                placeholder="Haberlerde ara..." 
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0
                    ? "bg-brand-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiNews.map((news, index) => (
              <ContentCard
                key={index}
                title={news.title}
                description={news.description}
                image={news.image}
                date={news.date}
                category={news.category}
                link={news.link}
              />
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <Button size="lg">
              Daha Fazla Göster
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-serif">Yapay Zeka ve Satış Geleceği</h2>
              <p className="text-lg text-gray-700 mb-6">
                Yapay zeka teknolojileri, satış ve pazarlama alanında devrim yaratmaya devam ediyor. 
                Müşteri verilerinin analizi, kişiselleştirilmiş pazarlama stratejileri, müşteri segmentasyonu 
                ve satış tahminleri gibi birçok alanda yapay zeka çözümleri, satış ekiplerinin performansını 
                artırıyor ve müşteri deneyimini iyileştiriyor.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                PMI olarak, yapay zeka teknolojilerindeki gelişmeleri yakından takip ediyor ve 
                bu teknolojileri satış süreçlerimize entegre ederek, müşterilerimize daha iyi hizmet 
                sunmayı hedefliyoruz. Yapay zeka destekli çözümlerimiz ile satış ekibimizin verimliliğini 
                artırıyor ve müşterilerimize kişiselleştirilmiş deneyimler sunuyoruz.
              </p>
              <Button asChild>
                <Link to="/training">
                  Yapay Zeka Eğitimlerimiz
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1586374579358-9d19d632b6d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Yapay Zeka ve Satış" 
                className="rounded-lg shadow-xl" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-brand-50 inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                  <Calendar className="h-8 w-8 text-brand-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Etkinlikler</h3>
                <p className="text-gray-700">
                  Yapay zeka konulu webinarlar ve etkinliklerimize katılarak güncel gelişmeleri takip edin.
                </p>
                <Button asChild variant="link" className="mt-3">
                  <a href="#">Etkinlikleri Görüntüle</a>
                </Button>
              </div>
              <div className="text-center">
                <div className="bg-brand-50 inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                  <svg className="h-8 w-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v10m2 2v-6a2 2 0 00-2-2h-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Kaynaklar</h3>
                <p className="text-gray-700">
                  Yapay zeka ile ilgili makaleler, e-kitaplar ve diğer kaynaklara göz atın.
                </p>
                <Button asChild variant="link" className="mt-3">
                  <a href="#">Kaynakları Görüntüle</a>
                </Button>
              </div>
              <div className="text-center">
                <div className="bg-brand-50 inline-flex items-center justify-center w-16 h-16 rounded-full mb-4">
                  <svg className="h-8 w-8 text-brand-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Videolar</h3>
                <p className="text-gray-700">
                  Yapay zeka teknolojileri hakkında bilgilendirici videolarımızı izleyin.
                </p>
                <Button asChild variant="link" className="mt-3">
                  <a href="#">Videoları İzle</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AINews;
