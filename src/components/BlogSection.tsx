import React from 'react';
import BlogCard from './BlogCard';

const BlogSection = () => {
  const blogPosts = [
    {
      title: 'AI Etkinlik Rehberi: 2024\'te Kaçırmamanız Gereken 10 Konferans',
      excerpt: 'Yapay zeka alanındaki en önemli etkinlikleri ve konferansları keşfedin. Uzmanlardan öğrenme fırsatları ve networking imkanları.',
      author: 'Ayşe Demir',
      authorImage: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=200',
      readTime: '5 dk okuma',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Teknoloji Etkinliklerinden Maksimum Verim Alma Yolları',
      excerpt: 'Etkinliklere katılırken networking yapma, öğrenme hedefleri belirleme ve takip stratejileri hakkında pratik ipuçları.',
      author: 'Mehmet Kaya',
      authorImage: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
      readTime: '7 dk okuma',
      image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      title: 'Online vs Offline Etkinlikler: Hangisi Daha Etkili?',
      excerpt: 'Pandemi sonrası etkinlik dünyasında hibrit modellerin avantajları ve dezavantajları üzerine detaylı bir analiz.',
      author: 'Zeynep Özkan',
      authorImage: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
      readTime: '6 dk okuma',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Etkinlik Rehberi
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Etkinlik dünyasından haberler, ipuçları ve rehberler
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <BlogCard key={index} {...post} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#AA4069] text-white font-semibold rounded-xl hover:bg-[#C75085] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Tüm Yazıları Gör
          </button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;