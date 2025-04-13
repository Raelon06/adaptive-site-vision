import React from "react";
import Layout from "@/components/layout/Layout";
import { HeroSection } from "@/components/ui/hero-section";
import { SectionHeader } from "@/components/ui/section-header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Download, FileSpreadsheet, FileText, Eye, Target, Bookmark, MapPin, Store, ChevronDown, ChevronUp, Users, Database, Check, Edit, Save } from "lucide-react";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";

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

const specialTargets = [
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

const ezdLocations = [
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

const statusOptions = [
  { value: "Çok İyi", color: "bg-green-100 text-green-800" },
  { value: "İyi", color: "bg-blue-100 text-blue-800" },
  { value: "Orta", color: "bg-yellow-100 text-yellow-800" },
  { value: "Geliştirilmeli", color: "bg-red-100 text-red-800" }
];

const GoalsResults = () => {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  const [openDialogId, setOpenDialogId] = useState<number | null>(null);
  const [locations, setLocations] = useState(ezdLocations);
  const [editingTargetId, setEditingTargetId] = useState<number | null>(null);
  const [tempTargetValue, setTempTargetValue] = useState("");
  const [isAdmin] = useState(true);

  const toggleLocation = (locationId: number) => {
    if (selectedLocation === locationId) {
      setSelectedLocation(null);
    } else {
      setSelectedLocation(locationId);
    }
  };
  
  const openLocationDialog = (locationId: number) => {
    setOpenDialogId(locationId);
  };

  const updateLocationStatus = (locationId: number, newStatus: string) => {
    setLocations(prevLocations => 
      prevLocations.map(location => 
        location.id === locationId 
          ? { ...location, status: newStatus } 
          : location
      )
    );
  };

  const getStatusColor = (status: string) => {
    const statusOption = statusOptions.find(option => option.value === status);
    return statusOption ? statusOption.color : "";
  };

  const startEditingTarget = (locationId: number, currentTarget: string) => {
    setEditingTargetId(locationId);
    setTempTargetValue(currentTarget);
  };

  const saveTarget = (locationId: number) => {
    setLocations(prevLocations => 
      prevLocations.map(location => 
        location.id === locationId 
          ? { ...location, target: tempTargetValue } 
          : location
      )
    );
    setEditingTargetId(null);
  };

  const cancelEditingTarget = () => {
    setEditingTargetId(null);
  };

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
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-16">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="font-bold">Lokasyon</TableHead>
                    <TableHead className="font-bold">Hedef</TableHead>
                    <TableHead className="font-bold">Sorumlu Yönetici</TableHead>
                    <TableHead className="font-bold">Durum</TableHead>
                    <TableHead className="font-bold">Temsilci</TableHead>
                    <TableHead className="font-bold">Detaylar</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {locations.map((location) => (
                    <React.Fragment key={location.id}>
                      <TableRow 
                        className="hover:bg-gray-50 cursor-pointer"
                        onClick={() => toggleLocation(location.id)}
                      >
                        <TableCell className="flex items-center font-medium">
                          <MapPin className="h-4 w-4 mr-2 text-brand-600" />
                          {location.name}
                          {selectedLocation === location.id ? (
                            <ChevronUp className="h-4 w-4 ml-2 text-gray-500" />
                          ) : (
                            <ChevronDown className="h-4 w-4 ml-2 text-gray-500" />
                          )}
                        </TableCell>
                        <TableCell onClick={(e) => e.stopPropagation()}>
                          {editingTargetId === location.id ? (
                            <div className="flex items-center">
                              <Input
                                className="w-24 mr-2"
                                value={tempTargetValue}
                                onChange={(e) => setTempTargetValue(e.target.value)}
                                onClick={(e) => e.stopPropagation()}
                                autoFocus
                              />
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="p-1 h-7 mr-1"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  saveTarget(location.id);
                                }}
                              >
                                <Save className="h-4 w-4" />
                              </Button>
                              <Button 
                                size="sm" 
                                variant="outline" 
                                className="p-1 h-7"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  cancelEditingTarget();
                                }}
                              >
                                <ChevronUp className="h-4 w-4" />
                              </Button>
                            </div>
                          ) : (
                            <div className="flex items-center">
                              <span>{location.target} krt</span>
                              {isAdmin && (
                                <Button 
                                  size="sm" 
                                  variant="ghost" 
                                  className="ml-2 p-1 h-7"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    startEditingTarget(location.id, location.target);
                                  }}
                                >
                                  <Edit className="h-3 w-3 text-gray-500" />
                                </Button>
                              )}
                            </div>
                          )}
                        </TableCell>
                        <TableCell>{location.manager}</TableCell>
                        <TableCell>
                          <Popover>
                            <PopoverTrigger asChild>
                              <button 
                                className="px-2 py-1 rounded-full text-xs font-medium inline-flex items-center"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(location.status)}`}>
                                  {location.status}
                                </span>
                                <ChevronDown className="h-3 w-3 ml-1 text-gray-500" />
                              </button>
                            </PopoverTrigger>
                            <PopoverContent className="w-48 p-3" onClick={(e) => e.stopPropagation()}>
                              <h4 className="font-medium mb-2">Durum Seç</h4>
                              <RadioGroup 
                                defaultValue={location.status}
                                onValueChange={(value) => updateLocationStatus(location.id, value)}
                              >
                                {statusOptions.map((option) => (
                                  <div key={option.value} className="flex items-center space-x-2 mb-1">
                                    <RadioGroupItem value={option.value} id={`status-${location.id}-${option.value}`} />
                                    <label 
                                      htmlFor={`status-${location.id}-${option.value}`}
                                      className={`px-2 py-1 rounded-full text-xs font-medium ${option.color} cursor-pointer flex items-center`}
                                    >
                                      {location.status === option.value && <Check className="h-3 w-3 mr-1" />}
                                      {option.value}
                                    </label>
                                  </div>
                                ))}
                              </RadioGroup>
                            </PopoverContent>
                          </Popover>
                        </TableCell>
                        <TableCell>
                          <Popover>
                            <PopoverTrigger asChild>
                              <button 
                                className="flex items-center hover:text-brand-600 transition-colors"
                                onClick={(e) => e.stopPropagation()}
                              >
                                <Users className="h-4 w-4 mr-1" />
                                {location.representative.name}
                              </button>
                            </PopoverTrigger>
                            <PopoverContent className="w-80" onClick={(e) => e.stopPropagation()}>
                              <div className="flex items-center space-x-4 mb-2">
                                <Avatar className="h-16 w-16">
                                  <AvatarImage src={location.representative.image} />
                                  <AvatarFallback>{location.representative.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <h4 className="text-lg font-semibold">{location.representative.name}</h4>
                                  <p className="text-sm text-gray-500">{location.representative.position}</p>
                                  <p className="text-sm text-gray-700 mt-1">{location.name} Bölgesi</p>
                                </div>
                              </div>
                            </PopoverContent>
                          </Popover>
                        </TableCell>
                        <TableCell>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={(e) => {
                              e.stopPropagation();
                              openLocationDialog(location.id);
                            }}
                          >
                            <Database className="h-4 w-4 mr-1" />
                            Detaylar
                          </Button>
                        </TableCell>
                      </TableRow>
                      
                      {selectedLocation === location.id && (
                        <TableRow>
                          <TableCell colSpan={6} className="p-0 bg-gray-50">
                            <div className="p-4">
                              <h4 className="text-lg font-medium mb-3 flex items-center">
                                <MapPin className="h-4 w-4 mr-2 text-brand-600" />
                                {location.name} Bölgesi Territoryleri
                              </h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {location.territories.map((territory, index) => (
                                  <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                                    <CardHeader className="pb-2">
                                      <CardTitle className="text-md">{territory.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                      <div className="flex items-start space-x-3">
                                        <FileSpreadsheet className="h-8 w-8 text-green-600 flex-shrink-0" />
                                        <div>
                                          <p className="text-sm font-medium">{territory.excelData.title}</p>
                                          <p className="text-xs text-gray-500 mt-1">{territory.excelData.date} • {territory.excelData.size}</p>
                                          <Button variant="link" size="sm" className="px-0 mt-1">
                                            <Download className="h-3 w-3 mr-1" />
                                            İndir
                                          </Button>
                                        </div>
                                      </div>
                                    </CardContent>
                                  </Card>
                                ))}
                              </div>
                            </div>
                          </TableCell>
                        </TableRow>
                      )}
                      
                      <Dialog 
                        open={openDialogId === location.id} 
                        onOpenChange={(open) => {
                          if (!open) setOpenDialogId(null);
                        }}
                      >
                        <DialogContent className="max-w-3xl">
                          <DialogHeader>
                            <DialogTitle className="text-2xl flex items-center">
                              <MapPin className="h-5 w-5 mr-2 text-brand-600" />
                              {location.name} Bölgesi Detaylı Bilgiler
                            </DialogTitle>
                          </DialogHeader>
                          
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-4">
                            <div>
                              <h3 className="text-lg font-semibold mb-4 flex items-center">
                                <Users className="h-5 w-5 mr-2 text-brand-600" />
                                Satış Temsilcisi
                              </h3>
                              <div className="bg-gray-50 p-4 rounded-lg">
                                <div className="flex items-center space-x-4">
                                  <Avatar className="h-20 w-20">
                                    <AvatarImage src={location.representative.image} />
                                    <AvatarFallback>{location.representative.name.charAt(0)}</AvatarFallback>
                                  </Avatar>
                                  <div>
                                    <h4 className="text-xl font-semibold">{location.representative.name}</h4>
                                    <p className="text-gray-600">{location.representative.position}</p>
                                    <div className="flex items-center mt-2">
                                      <span className="text-sm text-gray-500 mr-3">Hedef: {location.target} krt</span>
                                      <span className={`px-2 py-1 text-xs font-medium rounded-full
                                        ${location.status === 'Çok İyi' ? 'bg-green-100 text-green-800' : 
                                          location.status === 'İyi' ? 'bg-blue-100 text-blue-800' : 
                                          location.status === 'Orta' ? 'bg-yellow-100 text-yellow-800' : 
                                          'bg-red-100 text-red-800'}`}>
                                        {location.status}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="text-lg font-semibold mb-4 flex items-center">
                                <Target className="h-5 w-5 mr-2 text-brand-600" />
                                Bölge Bilgileri
                              </h3>
                              <div className="bg-gray-50 p-4 rounded-lg">
                                <p className="mb-2"><strong>Yönetici:</strong> {location.manager}</p>
                                <p className="mb-2"><strong>Territory Sayısı:</strong> {location.territories.length}</p>
                                <p className="mb-2"><strong>Hedef:</strong> {location.target} krt</p>
                                <p><strong>Durum:</strong> {location.status}</p>
                              </div>
                            </div>
                          </div>
                          
                          <div className="mt-4">
                            <h3 className="text-lg font-semibold mb-4 flex items-center">
                              <MapPin className="h-5 w-5 mr-2 text-brand-600" />
                              Territory Verileri
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {location.territories.map((territory, index) => (
                                <Card key={index} className="hover:shadow-md transition-shadow duration-200">
                                  <CardHeader className="pb-2">
                                    <CardTitle className="text-md">{territory.name}</CardTitle>
                                  </CardHeader>
                                  <CardContent>
                                    <div className="flex items-start space-x-3">
                                      <FileSpreadsheet className="h-8 w-8 text-green-600 flex-shrink-0" />
                                      <div>
                                        <p className="text-sm font-medium">{territory.excelData.title}</p>
                                        <p className="text-xs text-gray-500 mt-1">{territory.excelData.date} • {territory.excelData.size}</p>
                                        <Button variant="link" size="sm" className="px-0 mt-1">
                                          <Download className="h-3 w-3 mr-1" />
                                          İndir
                                        </Button>
                                      </div>
                                    </div>
                                  </CardContent>
                                </Card>
                              ))}
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    </React.Fragment>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </section>

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
                  {locations.map((location) => (
                    <TableRow key={location.id} className="hover:bg-gray-50">
                      <TableCell className="font-medium">{location.id}</TableCell>
                      <TableCell className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2 text-brand-600" />
                        {location.name}
                      </TableCell>
                      <TableCell>{location.target} krt</TableCell>
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
              Yeni eklenen dokümanlara erişim için lütfen sistem yöneticinize başvurun.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default GoalsResults;
