
import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeader } from "@/components/ui/section-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Map } from "lucide-react";

const roadmapQuarters = [
  {
    quarter: "Q1 2024",
    milestones: [
      "Sakarya Güney bölgesi ekip yapılanmasının tamamlanması",
      "Forward Stock Share Rakamlarının Arttırılması",
      "Posm Slot Sayısı Hesaplamalarına göre Slot Arttırım Çalışması"
    ]
  },
  {
    quarter: "Q2 2024",
    milestones: [
      "Sakarya merkez satış noktalarının genişletilmesi",
      "Batı bölgesi ürün dağıtım ağının iyileştirilmesi",
      "Bölgesel pazarlama kampanyalarının başlatılması"
    ]
  },
  {
    quarter: "Q3 2024",
    milestones: [
      "Güney-Batı aksında yeni lojistik merkezinin açılması",
      "Bölgesel satış ekibine yeni eğitimlerin verilmesi",
      "Müşteri memnuniyeti anketlerinin yapılması ve değerlendirilmesi"
    ]
  },
  {
    quarter: "Q4 2024",
    milestones: [
      "Bölgesel 2024 hedeflerinin değerlendirilmesi",
      "2025 stratejik planının tamamlanması",
      "Bölgesel performans değerlendirmelerinin yapılması"
    ]
  },
  {
    quarter: "Q1 2025",
    milestones: [
      "Yeni bölgesel yapılanma ile operasyonların başlaması",
      "Dijital satış kanallarının bölgesel uyarlamalarının tamamlanması",
      "Satış noktası optimizasyonunun tamamlanması"
    ]
  },
  {
    quarter: "Q2 2025",
    milestones: [
      "Batı bölgesinde pazar payının %15 artırılması",
      "Sakarya'da yeni merkez ofisinin açılması",
      "Bölgesel rakip analizinin tamamlanması"
    ]
  }
];

const RoadMap = () => {
  return (
    <Layout>
      <HeroSection
        title="Sakarya Güney Batı Road Map"
        subtitle="2024-2025 stratejik yol haritamız"
        backgroundImage="https://images.unsplash.com/photo-1519120944692-1a8d8ceb890e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
      />

      <section className="py-20">
        <div className="container-custom">
          <SectionHeader
            title="Stratejik Yol Haritamız"
            subtitle="Sakarya Güney Batı bölgesi için 2024-2025 stratejik planımız"
          />

          <div className="relative">
            {/* Road line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-brand-200 transform -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-10">
              {roadmapQuarters.map((quarter, index) => (
                <div 
                  key={quarter.quarter} 
                  className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}
                >
                  {/* Dot on timeline */}
                  <div className="absolute left-1/2 w-6 h-6 bg-brand-600 rounded-full transform -translate-x-1/2 z-10 hidden md:block" />
                  
                  {/* Quarter card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                    <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
                      <CardHeader className="bg-brand-50 border-b">
                        <CardTitle className="flex items-center text-brand-700">
                          <Map className="h-5 w-5 mr-2" />
                          {quarter.quarter}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <ul className="space-y-3">
                          {quarter.milestones.map((milestone, mIndex) => (
                            <li key={mIndex} className="flex items-start">
                              <span className="inline-block w-2 h-2 bg-brand-500 rounded-full mt-2 mr-2"></span>
                              <span>{milestone}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Spacer */}
                  <div className="w-0 md:w-2/12" />
                  
                  {/* Empty space on the other side */}
                  <div className="w-full md:w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default RoadMap;
