
import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { TeamCard } from "@/components/ui/team-card";
import { SectionHeader } from "@/components/ui/section-header";

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
    description: "Satış Hedeflerini tutmak ve dijital konularda bayilerin gelişimine destek vermekle sorumludur.",
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
    description: "Satış Hedeflerini tutmak ve dijital konularda bayilerin gelişimine destek vermekle sorumludur",
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

const Team = () => {
  return (
    <Layout>
      <HeroSection
        title="Satış Ekibimiz"
        subtitle="Sakarya Güney Batı ekibi ile tanışın!."
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
      />

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Profesyonel Ekibimiz"
            subtitle="Marlboro Edge Slim İNCELİĞİN EN GÜÇLÜ HALİ"
            className="text-black"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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

      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-serif">Ekip Değerlerimiz</h2>
              <p className="text-lg text-gray-700 mb-6">
                Ekibimiz, müşteri memnuniyetini ön planda tutan, sürekli gelişim odaklı profesyonellerden oluşmaktadır. 
                Her bir ekip üyemiz, PMI'ın değerlerini temsil ederek müşterilerimize en iyi hizmeti sunmayı amaçlar.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-2 mt-1 text-brand-600">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Profesyonellik:</span> Her müşteri etkileşiminde en yüksek profesyonellik standardını koruruz.</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-2 mt-1 text-brand-600">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Dürüstlük:</span> Müşterilerimizle her zaman dürüst ve şeffaf bir ilişki kurarız.</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-2 mt-1 text-brand-600">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Sürekli Gelişim:</span> Kendimizi sürekli geliştirerek müşterilerimize daha iyi hizmet vermeyi hedefleriz.</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 mr-2 mt-1 text-brand-600">
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700"><span className="font-semibold">Takım Çalışması:</span> Birlikte çalışarak ortak hedeflerimize ulaşırız.</p>
                </li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Ekip Çalışması" 
                className="rounded-lg w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
