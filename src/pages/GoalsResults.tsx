
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeader } from "@/components/ui/section-header";
import LocationTable from "@/components/goals/LocationTable";
import DocumentList from "@/components/goals/DocumentList";
import SpecialTargets from "@/components/goals/SpecialTargets";
import LocationSummaryTable from "@/components/goals/LocationSummaryTable";
import MethodologySection from "@/components/goals/MethodologySection";
import AccessInfoSection from "@/components/goals/AccessInfoSection";
import { 
  documentsList, 
  specialTargets, 
  ezdLocations, 
  statusOptions 
} from "@/components/goals/data";

const GoalsResults = () => {
  const [locations, setLocations] = useState(ezdLocations);
  const [isAdmin] = useState(true);

  return (
    <Layout>
      <HeroSection
        title="Hedefler & Sonuçlar"
        subtitle="Satış hedeflerimiz ve performans sonuçlarımız"
        backgroundImage="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
      />

      <section className="py-20">
        <div className="container-custom">
          <SectionHeader
            title="EZD DR'ları Detaylı Görünüm"
            subtitle="Tüm bölge ve lokasyon detaylarına buradan erişebilirsiniz"
          />
          
          <LocationTable 
            locations={locations} 
            setLocations={setLocations} 
            statusOptions={statusOptions}
            isAdmin={isAdmin}
          />
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <SectionHeader
            title="Performans Dokümanları"
            subtitle="Hedef ve sonuç raporlarımıza buradan erişebilirsiniz"
          />

          <DocumentList documents={documentsList} />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Top 5 Şef Dükkanında Özel Hedefler"
            subtitle="Öncelikli mağazalarımız için belirlenen özel satış hedefleri"
          />
          
          <SpecialTargets targets={specialTargets} />
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <SectionHeader
            title="EZD DR'ları"
            subtitle="Bölgesel EZD DR lokasyonları ve hedef bilgileri"
          />
          
          <LocationSummaryTable locations={locations} />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <MethodologySection />
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <AccessInfoSection />
        </div>
      </section>
    </Layout>
  );
};

export default GoalsResults;
