
import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  Users, 
  Database, 
  Check, 
  Target, 
  FileSpreadsheet, 
  Download, 
  Edit, 
  Save 
} from "lucide-react";

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

interface Location {
  id: number;
  name: string;
  target: string;
  manager: string;
  status: string;
  representative: Representative;
  territories: Territory[];
}

interface StatusOption {
  value: string;
  color: string;
}

interface LocationTableProps {
  locations: Location[];
  setLocations: React.Dispatch<React.SetStateAction<Location[]>>;
  statusOptions: StatusOption[];
  isAdmin: boolean;
}

const LocationTable: React.FC<LocationTableProps> = ({ 
  locations, 
  setLocations, 
  statusOptions,
  isAdmin
}) => {
  const [selectedLocation, setSelectedLocation] = useState<number | null>(null);
  const [openDialogId, setOpenDialogId] = useState<number | null>(null);
  const [editingTargetId, setEditingTargetId] = useState<number | null>(null);
  const [tempTargetValue, setTempTargetValue] = useState("");

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
  );
};

export default LocationTable;
