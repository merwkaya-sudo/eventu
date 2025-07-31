import React from 'react';
import CategoryCard from './CategoryCard';
import { Brain, Code, Palette, Users, Rocket, Database } from 'lucide-react';

const CategorySection = () => {
  const categories = [
    {
      name: 'Artificial Intelligence',
      icon: Brain,
      eventCount: 45,
      color: 'bg-gradient-to-br from-[#AA4069] to-[#C75085]'
    },
    {
      name: 'Development',
      icon: Code,
      eventCount: 78,
      color: 'bg-gradient-to-br from-[#8B3E6F] to-[#AA4069]'
    },
    {
      name: 'Design',
      icon: Palette,
      eventCount: 32,
      color: 'bg-gradient-to-br from-[#5E0B56] to-[#8B3E6F]'
    },
    {
      name: 'Product Management',
      icon: Users,
      eventCount: 28,
      color: 'bg-gradient-to-br from-[#3B0A45] to-[#5E0B56]'
    },
    {
      name: 'Startup',
      icon: Rocket,
      eventCount: 19,
      color: 'bg-gradient-to-br from-[#AA4069] to-[#8B3E6F]'
    },
    {
      name: 'Data Science',
      icon: Database,
      eventCount: 41,
      color: 'bg-gradient-to-br from-[#C75085] to-[#AA4069]'
    }
  ];

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Kategoriye Göre Göz At
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            İlgi alanınıza göre etkinlikleri keşfedin
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;