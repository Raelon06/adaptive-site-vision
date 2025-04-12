
import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";

const visionItems = [
  {
    title: "Teknolojik Dönüşüm",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description: "2025 yılına kadar dijital dönüşümümüzü tamamlayarak, tüm süreçlerimizi yapay zeka ve otomasyonla destekleyeceğiz. Bu sayede operasyonel verimliliğimizi artırarak, müşterilerimize daha hızlı ve kaliteli hizmet sunacağız.",
  },
  {
    title: "Yeni Pazarlar",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80",
    description: "2025 yılına kadar global pazarda varlığımızı güçlendirerek, 5 yeni ülkede faaliyet göstermeyi hedefliyoruz. Yerel pazarlardaki başarımızı global ölçeğe taşıyarak, uluslararası bir marka olmayı amaçlıyoruz.",
  },
  {
    title: "Sürdürülebilir Büyüme",
    image: "https://images.unsplash.com/photo-1638913662295-9630035ef770?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description: "2025 yılına kadar yıllık ortalama %15 büyüme hedefiyle, sürdürülebilir bir gelişim stratejisi izleyeceğiz. Finansal hedeflerimizi gerçekleştirirken, çevresel ve sosyal sorumluluklarımızı da göz önünde bulunduracağız.",
  },
  {
    title: "İnovasyon Merkezi",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description: "2025 yılına kadar Ar-Ge yatırımlarımızı artırarak, sektörün inovasyon merkezi haline gelmeyi hedefliyoruz. Geliştireceğimiz yeni ürün ve hizmetlerle, müşterilerimize katma değer sunmaya devam edeceğiz.",
  },
  {
    title: "Müşteri Deneyimi",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1766&q=80",
    description: "2025 yılına kadar müşteri deneyimini en üst seviyeye çıkarmak için tüm kanallarımızı entegre edeceğiz. Yapay zeka destekli müşteri hizmetleri ile 7/24 kesintisiz ve kişiselleştirilmiş destek sunacağız.",
  },
  {
    title: "İnsan Kaynakları",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description: "2025 yılına kadar sektörün en çok tercih edilen işvereni olmayı hedefliyoruz. Çalışanlarımızın sürekli gelişimi için eğitim programlarımızı genişleterek, yetenek havuzumuzu güçlendireceğiz.",
  }
];

const Vision2025 = () => {
  return (
    <Layout>
      <HeroSection
        title="2025 Vizyonumuz"
        subtitle="Geleceğe yönelik hedeflerimiz ve stratejilerimiz"
        backgroundImage="https://images.unsplash.com/photo-1502101872923-d48509bff386?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1032&q=80"
      />

      <section className="py-20">
        <div className="container-custom">
          <SectionHeader
            title="2025 Hedeflerimiz"
            subtitle="PMI olarak 2025 yılına kadar gerçekleştirmeyi planladığımız stratejik hedeflerimiz"
          />

          <div className="space-y-20">
            {visionItems.map((item, index) => (
              <div 
                key={index} 
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
              >
                <div className={`${index % 2 !== 0 ? 'order-1 md:order-2' : ''}`}>
                  <h3 className="text-2xl font-bold mb-4 text-brand-700 font-serif">{item.title}</h3>
                  <p className="text-lg text-gray-700 mb-6">
                    {item.description}
                  </p>
                  <div className="flex space-x-3">
                    <div className="w-16 h-1 bg-brand-600 rounded-full"></div>
                    <div className="w-4 h-1 bg-brand-400 rounded-full"></div>
                    <div className="w-2 h-1 bg-brand-300 rounded-full"></div>
                  </div>
                </div>
                <div className={`${index % 2 !== 0 ? 'order-2 md:order-1' : ''}`}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="rounded-lg shadow-xl w-full h-auto object-cover" 
                    style={{ maxHeight: '400px' }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 font-serif">2025 Yolculuğumuz</h2>
            <p className="text-lg text-gray-700 mb-8">
              2025 yılına kadar belirlediğimiz hedeflere ulaşmak için titizlikle hazırladığımız stratejik planımızı 
              adım adım uyguluyoruz. Bu yolculukta, müşterilerimiz, çalışanlarımız ve paydaşlarımızla birlikte 
              ilerleyerek başarıya ulaşacağımıza inanıyoruz.
            </p>
            <Button size="lg">
              <a href="mailto:info@pmi.com">Bize Katılın</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Vision2025;
