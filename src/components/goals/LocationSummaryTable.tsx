
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { MapPin } from "lucide-react";

interface Location {
  id: number;
  name: string;
  target: string;
  manager: string;
  status: string;
}

interface LocationSummaryTableProps {
  locations: Location[];
}

const LocationSummaryTable: React.FC<LocationSummaryTableProps> = ({ locations }) => {
  return (
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
  );
};

export default LocationSummaryTable;
