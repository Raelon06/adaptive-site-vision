
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Store, Target, Bookmark } from "lucide-react";

interface SpecialTarget {
  id: number;
  store: string;
  target: string;
  description: string;
  deadline: string;
}

interface SpecialTargetsProps {
  targets: SpecialTarget[];
}

const SpecialTargets: React.FC<SpecialTargetsProps> = ({ targets }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {targets.map((target) => (
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
  );
};

export default SpecialTargets;
