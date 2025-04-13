
interface Territory {
  name: string;
  excelData: {
    title: string;
    date: string;
    size: string;
  };
}

interface Representative {
  name: string;
  image: string;
  position: string;
}

export interface Location {
  id: number;
  name: string;
  target: string;
  manager: string;
  status: string;
  representative: Representative;
  territories: Territory[];
}

export interface Document {
  title: string;
  description: string;
  type: string;
  date: string;
  size: string;
  downloadUrl: string;
}

export interface SpecialTarget {
  id: number;
  store: string;
  target: string;
  description: string;
  deadline: string;
}

export interface StatusOption {
  value: string;
  color: string;
}

export const documentsList: Document[] = [
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

export const specialTargets: SpecialTarget[] = [
  {
    id: 1,
    store: "Sapanca Merkez Şef Dükkanı",
    target: "850.000 krt",
    description: "Hafta sonu satışlarında %15 artış hedefi",
    deadline: "30 Eylül 2024"
  },
  {
    id: 2,
    store: "Serdivan AVM Şef Dükkanı",
    target: "1.250.000 krt",
    description: "Yeni müşteri kazanımında %20 büyüme",
    deadline: "15 Ekim 2024"
  },
  {
    id: 3,
    store: "Erenler Şef Dükkanı",
    target: "720.000 krt",
    description: "Premium ürün satışlarında %25 artış hedefi",
    deadline: "1 Kasım 2024"
  },
  {
    id: 4,
    store: "Adapazarı Merkez Şef Dükkanı",
    target: "950.000 krt",
    description: "Müşteri memnuniyeti puanında 4.8/5 hedefi",
    deadline: "20 Ekim 2024"
  },
  {
    id: 5,
    store: "Karasu Sahil Şef Dükkanı",
    target: "650.000 krt",
    description: "Sezonluk ürün satışlarında %30 artış",
    deadline: "30 Ekim 2024"
  }
];

export const ezdLocations: Location[] = [
  {
    id: 1,
    name: "Sapanca",
    target: "420.000",
    manager: "Olcay Köksal",
    status: "İyi",
    representative: {
      name: "Gökhan",
      image: "https://randomuser.me/api/portraits/men/1.jpg",
      position: "Satış Temsilcisi"
    },
    territories: [
      { 
        name: "Sapanca Merkez", 
        excelData: {
          title: "Sapanca Bölgesi Satış Raporu",
          date: "10 Nisan 2024",
          size: "850 KB"
        }
      },
      { 
        name: "Sapanca Göl Çevresi", 
        excelData: {
          title: "Sapanca Göl Bölgesi Satış Raporu",
          date: "15 Nisan 2024",
          size: "720 KB"
        }
      },
      { 
        name: "Kırkpınar", 
        excelData: {
          title: "Kırkpınar Müşteri Analizi",
          date: "5 Nisan 2024",
          size: "540 KB"
        }
      }
    ]
  },
  {
    id: 2,
    name: "Akyazı",
    target: "380.000",
    manager: "Anıl Samur",
    status: "Orta",
    representative: {
      name: "Samet",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      position: "Satış Temsilcisi"
    },
    territories: [
      { 
        name: "Akyazı Merkez", 
        excelData: {
          title: "Akyazı Merkez Satış Verileri",
          date: "8 Nisan 2024",
          size: "620 KB"
        }
      },
      { 
        name: "Alaağaç", 
        excelData: {
          title: "Alaağaç Bölgesi Performans Raporu",
          date: "12 Nisan 2024",
          size: "580 KB"
        }
      }
    ]
  },
  {
    id: 3,
    name: "Geyve",
    target: "350.000",
    manager: "Olcay Köksal",
    status: "İyi",
    representative: {
      name: "Alper",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      position: "Satış Temsilcisi"
    },
    territories: [
      { 
        name: "Geyve Merkez", 
        excelData: {
          title: "Geyve Merkez Satış Raporu",
          date: "6 Nisan 2024",
          size: "490 KB"
        }
      },
      { 
        name: "Alifuatpaşa", 
        excelData: {
          title: "Alifuatpaşa Bölgesi Müşteri Analizi",
          date: "9 Nisan 2024",
          size: "530 KB"
        }
      }
    ]
  },
  {
    id: 4,
    name: "Pamukova",
    target: "290.000",
    manager: "Olcay Köksal",
    status: "Geliştirilmeli",
    representative: {
      name: "Kaan",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      position: "Satış Temsilcisi"
    },
    territories: [
      { 
        name: "Pamukova Merkez", 
        excelData: {
          title: "Pamukova Merkez Satış Raporu",
          date: "7 Nisan 2024",
          size: "460 KB"
        }
      },
      { 
        name: "Turgutlu", 
        excelData: {
          title: "Turgutlu Bölgesi Performans Analizi",
          date: "11 Nisan 2024",
          size: "420 KB"
        }
      }
    ]
  },
  {
    id: 5,
    name: "Serdivan-Üniversite",
    target: "520.000",
    manager: "Olcay Köksal",
    status: "Çok İyi",
    representative: {
      name: "Ersin",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
      position: "Satış Temsilcisi"
    },
    territories: [
      { 
        name: "Üniversite Kampüs", 
        excelData: {
          title: "Kampüs Bölgesi Satış Raporu",
          date: "5 Nisan 2024",
          size: "780 KB"
        }
      },
      { 
        name: "Serdivan AVM", 
        excelData: {
          title: "AVM Bölgesi Satış Performansı",
          date: "9 Nisan 2024",
          size: "850 KB"
        }
      },
      { 
        name: "Bahçelievler", 
        excelData: {
          title: "Bahçelievler Müşteri Analizi",
          date: "12 Nisan 2024",
          size: "630 KB"
        }
      }
    ]
  },
  {
    id: 6,
    name: "Camili - Karaman",
    target: "310.000",
    manager: "Olcay Köksal",
    status: "Orta",
    representative: {
      name: "Talat",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      position: "Satış Temsilcisi"
    },
    territories: [
      { 
        name: "Camili", 
        excelData: {
          title: "Camili Bölgesi Satış Raporu",
          date: "6 Nisan 2024",
          size: "510 KB"
        }
      },
      { 
        name: "Karaman", 
        excelData: {
          title: "Karaman Bölgesi Performans Analizi",
          date: "10 Nisan 2024",
          size: "470 KB"
        }
      }
    ]
  },
  {
    id: 7,
    name: "Karapürçek - Küçücek",
    target: "280.000",
    manager: "Anıl Samur",
    status: "Geliştirilmeli",
    representative: {
      name: "Kerem",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      position: "Satış Temsilcisi"
    },
    territories: [
      { 
        name: "Karapürçek", 
        excelData: {
          title: "Karapürçek Satış Verileri",
          date: "4 Nisan 2024",
          size: "390 KB"
        }
      },
      { 
        name: "Küçücek", 
        excelData: {
          title: "Küçücek Bölgesi Müşteri Analizi",
          date: "8 Nisan 2024",
          size: "420 KB"
        }
      }
    ]
  }
];

export const statusOptions: StatusOption[] = [
  { value: "Çok İyi", color: "bg-green-100 text-green-800" },
  { value: "İyi", color: "bg-blue-100 text-blue-800" },
  { value: "Orta", color: "bg-yellow-100 text-yellow-800" },
  { value: "Geliştirilmeli", color: "bg-red-100 text-red-800" }
];
