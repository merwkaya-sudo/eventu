import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface CategoryCardProps {
  name: string;
  icon: LucideIcon;
  eventCount: number;
  color: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ name, icon: Icon, eventCount, color }) => {
  return (
    <div className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100">
      <div className="text-center">
        <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${color} group-hover:scale-110 transition-transform duration-300`}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#AA4069] transition-colors duration-300">
          {name}
        </h3>
        <p className="text-gray-600 text-sm">
          {eventCount} etkinlik
        </p>
      </div>
    </div>
  );
};

export default CategoryCard;