
import React from "react";
import { Button } from "@/components/ui/button";
import { Download, FileSpreadsheet, FileText, Eye } from "lucide-react";

interface Document {
  title: string;
  description: string;
  type: string;
  date: string;
  size: string;
  downloadUrl: string;
}

interface DocumentListProps {
  documents: Document[];
}

const DocumentList: React.FC<DocumentListProps> = ({ documents }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {documents.map((doc, index) => (
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
  );
};

export default DocumentList;
