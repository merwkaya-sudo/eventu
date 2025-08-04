import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-[#3B0A45] via-[#5E0B56] to-[#3B0A45] py-20 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#AA4069] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#8B3E6F] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#AA4069] rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto text-center relative z-10">
        {/* Dynamic Greeting */}
        <div className="flex items-center justify-center mb-6">
          <Sparkles className="w-5 h-5 text-[#F2E9E4] mr-2 opacity-80" />
          <p className="text-[#F2E9E4] text-lg font-medium opacity-90">
            Hoşgeldin
          </p>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-bold text-[#F2E9E4] mb-6 leading-tight">
          Etkinlikleri
          <span className="block bg-gradient-to-r from-[#AA4069] to-[#C75085] bg-clip-text text-transparent">
            Keşfet
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-[#F2E9E4] opacity-80 mb-10 max-w-3xl mx-auto leading-relaxed">
          AI ve teknoloji etkinliklerini tek platformdan takip et
        </p>

        {/* CTA Button */}
        <button className="group inline-flex items-center px-8 py-4 bg-[#AA4069] text-white font-semibold rounded-2xl hover:bg-[#C75085] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
          Etkinlikleri Keşfet
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;