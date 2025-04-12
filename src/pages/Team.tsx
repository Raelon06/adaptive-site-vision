
import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { TeamCard } from "@/components/ui/team-card";
import { SectionHeader } from "@/components/ui/section-header";

// Team members data
const teamMembers = [
  {
    name: "Ahmet Yılmaz",
    title: "Satış Direktörü",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    description: "15 yıllık satış ve pazarlama deneyimi ile ekibimize liderlik etmektedir.",
    socials: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Ayşe Kaya",
    title: "Bölge Müdürü",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80",
    description: "İstanbul bölgesi operasyonlarından sorumlu, 10 yıllık deneyimli bir yönetici.",
    socials: {
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    name: "Mehmet Demir",
    title: "Satış Temsilcisi",
    image: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=768&q=80",
    description: "Anadolu bölgesi müşterilerinden sorumlu, 5 yıllık sektör deneyimine sahip.",
    socials: {
      linkedin: "#"
    }
  },
  {
    name: "Zeynep Aydın",
    title: "Satış Temsilcisi",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1661&q=80",
    description: "Marmara bölgesi müşterilerinden sorumlu, müşteri ilişkileri konusunda uzman.",
    socials: {
      linkedin: "#",
      facebook: "#"
    }
  },
  {
    name: "Can Özkan",
    title: "Satış Temsilcisi",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description: "Ege bölgesi müşterilerinden sorumlu, 7 yıllık sektör deneyimine sahip.",
    socials: {
      linkedin: "#",
      instagram: "#"
    }
  },
  {
    name: "Elif Yıldız",
    title: "Satış Temsilcisi",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
    description: "Karadeniz bölgesi müşterilerinden sorumlu, müşteri memnuniyeti odaklı çalışır.",
    socials: {
      linkedin: "#"
    }
  },
  {
    name: "Murat Bilgin",
    title: "Satış Temsilcisi",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
    description: "Doğu Anadolu bölgesi müşterilerinden sorumlu, saha satış deneyimi yüksek.",
    socials: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

const Team = () => {
  return (
    <Layout>
      <HeroSection
        title="Satış Ekibimiz"
        subtitle="Alanında uzman profesyonel ekibimizle tanışın"
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
      />

      <section className="py-20">
        <div className="container-custom">
          <SectionHeader
            title="Profesyonel Ekibimiz"
            subtitle="Deneyimli ekibimiz, müşterilerimize en iyi hizmeti sunmak için çalışıyor."
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

      <section className="py-20 bg-gray-50">
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
            <div>
              <img 
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Ekip Çalışması" 
                className="rounded-lg shadow-xl" 
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Team;
