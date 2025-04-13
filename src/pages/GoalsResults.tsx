
import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, FileSpreadsheet, FileText, Eye, Target, Bookmark, MapPin, Store } from "lucide-react";

const documentsList = [
  {
    title: "2023 Satış Hedefleri ve Sonuçları",
    description: "2023 yılına ait bölgesel satış hedefleri ve gerçekleşen sonuçlar.",
    type: "excel",
    date: "15 Ocak 2023",
    size: "1.2 MB",
    downloadUrl: "#"
  },
  {
    title: "2024 Q1 Satış Performansı",
    description: "2024 yılı ilk çeyrek satış performansı ve hedef gerçekleştirme oranları.",
    type: "excel",
    date: "5 Nisan 2024",
    size: "985 KB",
    downloadUrl: "#"
  },
  {
    title: "2024 Q2 Satış Performansı",
    description: "2024 yılı ikinci çeyrek satış performansı ve hedef gerçekleştirme oranları.",
    type: "excel",
    date: "8 Temmuz 2024",
    size: "1.1 MB",
    downloadUrl: "#"
  },
  {
    title: "Bölgesel Satış Hedefleri - 2024",
    description: "2024 yılı için belirlenen bölgesel satış hedefleri ve stratejiler.",
    type: "excel",
    date: "20 Aralık 2023",
    size: "1.5 MB",
    downloadUrl: "#"
  },
  {
    title: "Yıllık Performans Raporu - 2023",
    description: "2023 yılı genel performans değerlendirmesi ve gelecek öngörüleri.",
    type: "pdf",
    date: "31 Aralık 2023",
    size: "2.3 MB",
    downloadUrl: "#"
  },
  {
    title: "Müşteri Memnuniyeti Sonuçları - 2023",
    description: "2023 yılı müşteri memnuniyeti anket sonuçları ve analizleri.",
    type: "excel",
    date: "15 Şubat 2024",
    size: "890 KB",
    downloadUrl: "#"
  },
  {
    title: "Ürün Performans Analizi - 2024",
    description: "2024 yılı ürün bazlı satış performansı ve pazar analizi.",
    type: "excel",
    date: "10 Haziran 2024",
    size: "1.3 MB",
    downloadUrl: "#"
  },
  {
    title: "Stratejik Hedefler - 2025",
    description: "2025 yılı için belirlenen stratejik hedefler ve yol haritası.",
    type: "pdf",
    date: "5 Mart 2024",
    size: "1.8 MB",
    downloadUrl: "#"
  }
];

// Top 5 Chef Store Special Targets data
const specialTargets = [
  {
    id: 1,
    store: "Sapanca Merkez Şef Dükkanı",
    target: "₺850.000",
    description: "Hafta sonu satışlarında %15 artış hedefi",
    deadline: "30 Eylül 2024"
  },
  {
    id: 2,
    store: "Serdivan AVM Şef Dükkanı",
    target: "₺1.250.000",
    description: "Yeni müşteri kazanımında %20 büyüme",
    deadline: "15 Ekim 2024"
  },
  {
    id: 3,
    store: "Erenler Şef Dükkanı",
    target: "₺720.000",
    description: "Premium ürün satışlarında %25 artış hedefi",
    deadline: "1 Kasım 2024"
  },
  {
    id: 4,
    store: "Adapazarı Merkez Şef Dükkanı",
    target: "₺950.000",
    description: "Müşteri memnuniyeti puanında 4.8/5 hedefi",
    deadline: "20 Ekim 2024"
  },
  {
    id: 5,
    store: "Karasu Sahil Şef Dükkanı",
    target: "₺650.000",
    description: "Sezonluk ürün satışlarında %30 artış",
    deadline: "30 Ekim 2024"
  }
];

// EZD DR locations data
const ezdLocations = [
  {
    id: 1,
    name: "Sapanca",
    target: "₺420.000",
    manager: "Ahmet Yılmaz",
    status: "İyi"
  },
  {
    id: 2,
    name: "Akyazı",
    target: "₺380.000",
    manager: "Mehmet Kaya",
    status: "Orta"
  },
  {
    id: 3,
    name: "Geyve",
    target: "₺350.000",
    manager: "Ayşe Demir",
    status: "İyi"
  },
  {
    id: 4,
    name: "Pamukova",
    target: "₺290.000",
    manager: "Fatma Şahin",
    status: "Geliştirilmeli"
  },
  {
    id: 5,
    name: "Serdivan-Üniversite",
    target: "₺520.000",
    manager: "Ali Öztürk",
    status: "Çok İyi"
  },
  {
    id: 6,
    name: "Camili - Karaman",
    target: "₺310.000",
    manager: "Zeynep Kılıç",
    status: "Orta"
  },
  {
    id: 7,
    name: "Karapürçek - Küçücek",
    target: "₺280.000",
    manager: "Mustafa Yıldız",
    status: "Geliştirilmeli"
  }
];

const GoalsResults = () => {
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
            title="Performans Dokümanları"
            subtitle="Hedef ve sonuç raporlarımıza buradan erişebilirsiniz"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documentsList.map((doc, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 flex-shrink-0">
                      {doc.type === "excel" ? (
                        <FileSpreadsheet className="h-10 w-10 text-green-600" />
                      ) : (
                        <FileText className="h-10 w-10 text-red-600" />
                      )}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{doc.title}</h3>
                      <p className="text-gray-600 mb-3 text-sm">{doc.description}</p>
                      <div className="flex items-center text-sm text-gray-500 mb-4">
                        <span className="mr-4">{doc.date}</span>
                        <span>{doc.size}</span>
                      </div>
                      <div className="flex space-x-3">
                        <Button size="sm" className="inline-flex items-center" asChild>
                          <a href={doc.downloadUrl}>
                            <Download className="mr-1 h-4 w-4" />
                            İndir
                          </a>
                        </Button>
                        <Button size="sm" variant="outline" className="inline-flex items-center" asChild>
                          <a href={doc.downloadUrl} target="_blank" rel="noopener noreferrer">
                            <Eye className="mr-1 h-4 w-4" />
                            Görüntüle
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Section: Top 5 Şef Dükkanında Özel Hedefler */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionHeader
            title="Top 5 Şef Dükkanında Özel Hedefler"
            subtitle="Öncelikli mağazalarımız için belirlenen özel satış hedefleri"
          />
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
              {specialTargets.map((target) => (
                <Card key={target.id} className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-brand-500">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-xl flex items-center">
                      <Store className="h-5 w-5 mr-2 text-brand-600" />
                      {target.store}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-gray-600">Hedef:</span>
                        <span className="text-xl font-bold text-brand-700">{target.target}</span>
                      </div>
                      <div>
                        <p className="text-gray-600 mb-2"><Target className="h-4 w-4 inline mr-2" /> {target.description}</p>
                        <p className="text-sm text-gray-500 flex items-center">
                          <Bookmark className="h-4 w-4 mr-1" />
                          Son Tarih: {target.deadline}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* New Section: EZD DR'ları */}
      <section className="py-20">
        <div className="container-custom">
          <SectionHeader
            title="EZD DR'ları"
            subtitle="Bölgesel EZD DR lokasyonları ve hedef bilgileri"
          />
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">#</TableHead>
                    <TableHead className="font-bold">Lokasyon</TableHead>
                    <TableHead className="font-bold">Hedef</TableHead>
                    <TableHead className="font-bold">Sorumlu Yönetici</TableHead>
                    <TableHead className="font-bold">Durum</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {ezdLocations.map((location) => (
                    <TableRow key={location.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium">{location.id}</TableCell>
                      <TableCell className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-brand-600" />
                        {location.name}
                      </TableCell>
                      <TableCell>{location.target}</TableCell>
                      <TableCell>{location.manager}</TableCell>
                      <TableCell>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium
                          ${location.status === 'Çok İyi' ? 'bg-green-100 text-green-800' : 
                            location.status === 'İyi' ? 'bg-blue-100 text-blue-800' : 
                            location.status === 'Orta' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-red-100 text-red-800'}`}>
                          {location.status}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 font-serif">Hedef Belirleme Metodolojimiz</h2>
              <p className="text-lg text-gray-700 mb-6">
                PMI olarak, SMART (Specific, Measurable, Achievable, Relevant, Time-bound) hedef belirleme 
                metodolojisini benimsiyoruz. Bu yaklaşım sayesinde, net, ölçülebilir, ulaşılabilir, 
                ilgili ve zamana bağlı hedefler belirleyerek, performansımızı sürekli olarak izliyor ve 
                geliştiriyoruz.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Hedeflerimizi belirlerken, pazar koşullarını, müşteri beklentilerini ve şirket stratejilerimizi 
                göz önünde bulundurarak, gerçekçi ve aynı zamanda zorlayıcı hedefler belirliyoruz. 
                Bu hedefleri düzenli olarak gözden geçirerek, gerektiğinde güncelliyor ve sürekli iyileştirme 
                yaklaşımıyla çalışıyoruz.
              </p>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
                alt="Hedef Belirleme" 
                className="rounded-lg shadow-xl" 
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-100">
            <h3 className="text-2xl font-bold mb-6 text-center font-serif">Yeni Dokümanlara Erişim</h3>
            <p className="text-center text-gray-700 mb-8">
              Yeni eklenen dokümanlara erişim için lütfen sisteme giriş yapın veya erişim talebinde bulunun. 
              Dokümanlar periyodik olarak güncellenmekte ve yenileri eklenmektedir.
            </p>
            <div className="flex justify-center space-x-4">
              <Button size="lg">
                Giriş Yap
              </Button>
              <Button size="lg" variant="outline">
                Erişim Talep Et
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GoalsResults;
