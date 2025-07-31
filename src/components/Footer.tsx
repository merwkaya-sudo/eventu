import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#3B0A45] text-[#F2E9E4] py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="relative">
                <div className="text-3xl font-bold bg-gradient-to-br from-[#8B3E6F] to-[#F2E9E4] bg-clip-text text-transparent select-none">
                  E
                </div>
                <div className="absolute -top-1 -right-1 text-[#F2E9E4] text-xs">
                  ✦
                </div>
              </div>
              <span className="ml-2 text-[#F2E9E4] text-xl font-semibold tracking-wide">
                ventú
              </span>
            </div>
            <p className="text-[#F2E9E4] opacity-80 text-sm leading-relaxed">
              AI ve teknoloji etkinliklerini tek platformdan takip edin. 
              Kariyerinizi geliştirin, network kurun.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#F2E9E4] opacity-80 hover:opacity-100 hover:text-[#AA4069] transition-colors duration-300 text-sm">
                  Etkinlikler
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F2E9E4] opacity-80 hover:opacity-100 hover:text-[#AA4069] transition-colors duration-300 text-sm">
                  Kategoriler
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F2E9E4] opacity-80 hover:opacity-100 hover:text-[#AA4069] transition-colors duration-300 text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F2E9E4] opacity-80 hover:opacity-100 hover:text-[#AA4069] transition-colors duration-300 text-sm">
                  Hakkımızda
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Destek</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-[#F2E9E4] opacity-80 hover:opacity-100 hover:text-[#AA4069] transition-colors duration-300 text-sm">
                  İletişim
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F2E9E4] opacity-80 hover:opacity-100 hover:text-[#AA4069] transition-colors duration-300 text-sm">
                  SSS
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F2E9E4] opacity-80 hover:opacity-100 hover:text-[#AA4069] transition-colors duration-300 text-sm">
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a href="#" className="text-[#F2E9E4] opacity-80 hover:opacity-100 hover:text-[#AA4069] transition-colors duration-300 text-sm">
                  Kullanım Şartları
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-[#AA4069]" />
                <span className="text-[#F2E9E4] opacity-80 text-sm">info@eventu.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-[#AA4069]" />
                <span className="text-[#F2E9E4] opacity-80 text-sm">+90 212 555 0123</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-[#5E0B56] rounded-lg hover:bg-[#AA4069] transition-colors duration-300 group">
                <Facebook className="w-5 h-5 text-[#F2E9E4] group-hover:text-white" />
              </a>
              <a href="#" className="p-2 bg-[#5E0B56] rounded-lg hover:bg-[#AA4069] transition-colors duration-300 group">
                <Twitter className="w-5 h-5 text-[#F2E9E4] group-hover:text-white" />
              </a>
              <a href="#" className="p-2 bg-[#5E0B56] rounded-lg hover:bg-[#AA4069] transition-colors duration-300 group">
                <Instagram className="w-5 h-5 text-[#F2E9E4] group-hover:text-white" />
              </a>
              <a href="#" className="p-2 bg-[#5E0B56] rounded-lg hover:bg-[#AA4069] transition-colors duration-300 group">
                <Linkedin className="w-5 h-5 text-[#F2E9E4] group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#5E0B56] mt-8 pt-8 text-center">
          <p className="text-[#F2E9E4] opacity-60 text-sm">
            © 2024 Eventú. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;