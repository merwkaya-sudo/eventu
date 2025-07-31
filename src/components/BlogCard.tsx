import React from 'react';
import { Clock, ArrowRight } from 'lucide-react';

interface BlogCardProps {
  title: string;
  excerpt: string;
  author: string;
  authorImage: string;
  readTime: string;
  image: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  title,
  excerpt,
  author,
  authorImage,
  readTime,
  image
}) => {
  return (
    <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
      {/* Blog Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Blog Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#AA4069] transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Author Info */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={authorImage} 
              alt={author}
              className="w-10 h-10 rounded-full object-cover mr-3"
            />
            <div>
              <p className="text-sm font-medium text-gray-800">{author}</p>
              <div className="flex items-center text-gray-500 text-xs">
                <Clock className="w-3 h-3 mr-1" />
                <span>{readTime}</span>
              </div>
            </div>
          </div>
          
          <button className="group/btn p-2 text-[#AA4069] hover:bg-[#AA4069] hover:text-white rounded-full transition-all duration-300">
            <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;