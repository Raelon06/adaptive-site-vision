
import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { CheckCircle, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <Layout>
      <HeroSection
        title="Biz Kimiz"
        subtitle="PMI olarak misyonumuz, değerlerimiz ve vizyonumuz"
        backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
      />

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-serif">Hikayemiz</h2>
              <p className="text-lg text-gray-700 mb-6">
                PMI, uzun yıllara dayanan tecrübesi ile sektörün lider firmalarından biridir. 
                Müşterilerimize sunduğumuz kaliteli hizmet anlayışımız ve profesyonel ekibimizle 
                her zaman en iyiyi hedeflemekteyiz.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Kurulduğumuz günden bu yana müşteri memnuniyetini ön planda tutarak, 
                teknoloji ve yeniliklerle desteklenen hizmetlerimizi sürekli geliştiriyoruz. 
                Amacımız, müşterilerimize değer katmak ve uzun vadeli iş birlikleri kurmaktır.
              </p>
              <Button asChild>
                <Link to="/team">
                  Ekibimizle Tanışın
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1771&q=80" 
                alt="PMI Ofis" 
                className="rounded-lg shadow-xl" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Misyon & Vizyon"
            subtitle="Değerlerimiz ve hedeflerimiz doğrultusunda çalışıyoruz"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-brand-700">Misyonumuz</h3>
              <p className="text-gray-700 mb-6">
                Müşterilerimize en yüksek kalitede hizmet sunarak, onların ihtiyaçlarını 
                anlamak ve bu doğrultuda en uygun çözümleri üretmek. Sektördeki bilgi 
                birikimimizi ve tecrübemizi kullanarak müşterilerimize değer katmak ve 
                onların başarısına katkıda bulunmak.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-brand-600" />
                  <span className="text-gray-700">Müşteri memnuniyetini en üst düzeyde tutmak</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-brand-600" />
                  <span className="text-gray-700">Sürekli iyileştirme ve geliştirme ile hizmet kalitemizi artırmak</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-brand-600" />
                  <span className="text-gray-700">Etik değerlere bağlı kalarak faaliyet göstermek</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold mb-4 text-brand-700">Vizyonumuz</h3>
              <p className="text-gray-700 mb-6">
                Sektörün öncü firması olarak, müşterilerimize sunduğumuz yenilikçi 
                çözümlerle fark yaratmak ve global ölçekte tanınan bir marka haline gelmek. 
                Teknolojik gelişmeleri yakından takip ederek, hizmetlerimizi sürekli 
                geliştirmek ve müşterilerimize en iyi deneyimi sunmak.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-brand-600" />
                  <span className="text-gray-700">Sektörde lider konumu korumak ve güçlendirmek</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-brand-600" />
                  <span className="text-gray-700">İnovatif çözümlerle müşterilerimize değer katmak</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 mr-2 mt-0.5 text-brand-600" />
                  <span className="text-gray-700">Sürdürülebilir büyüme ile global pazarda yer almak</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <SectionHeader
            title="Değerlerimiz"
            subtitle="İş yapış şeklimizi belirleyen temel değerlerimiz"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-brand-600">
              <h3 className="text-xl font-semibold mb-3">Dürüstlük</h3>
              <p className="text-gray-700">
                Tüm faaliyetlerimizde dürüstlük ve şeffaflığı ön planda tutarız. 
                Müşterilerimize ve iş ortaklarımıza karşı her zaman açık ve dürüst bir 
                iletişim kurarız.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-brand-600">
              <h3 className="text-xl font-semibold mb-3">Kalite</h3>
              <p className="text-gray-700">
                Sunduğumuz her hizmette en yüksek kalite standartlarını sağlamayı 
                hedefleriz. Sürekli iyileştirme yaklaşımıyla, hizmet kalitemizi 
                her geçen gün daha da artırırız.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-brand-600">
              <h3 className="text-xl font-semibold mb-3">Müşteri Odaklılık</h3>
              <p className="text-gray-700">
                Müşterilerimizin ihtiyaçlarını anlamak ve bu doğrultuda çözümler 
                üretmek en önemli önceliğimizdir. Müşteri memnuniyeti için sürekli 
                çalışır ve geri bildirimleri dikkate alırız.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-brand-600">
              <h3 className="text-xl font-semibold mb-3">Yenilikçilik</h3>
              <p className="text-gray-700">
                Teknolojik gelişmeleri yakından takip eder, yenilikçi çözümlerle 
                sektöre öncülük etmeyi amaçlarız. Sürekli kendimizi geliştirerek 
                müşterilerimize en yeni çözümleri sunarız.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-brand-600">
              <h3 className="text-xl font-semibold mb-3">Ekip Çalışması</h3>
              <p className="text-gray-700">
                Başarıya giden yolun ekip çalışmasından geçtiğine inanırız. 
                Çalışanlarımızın birbirine saygı duyduğu, işbirliği içinde çalıştığı 
                bir ortam yaratırız.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-brand-600">
              <h3 className="text-xl font-semibold mb-3">Sorumluluk</h3>
              <p className="text-gray-700">
                Topluma ve çevreye karşı sorumluluklarımızın bilincindeyiz. 
                Sürdürülebilirlik ilkelerini benimser, faaliyetlerimizin çevresel 
                ve sosyal etkilerini göz önünde bulundururuz.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
