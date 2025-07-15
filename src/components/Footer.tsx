import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/rishikarjn', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/rishika-ranjan-6980562aa/', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:rishikasingh2109@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-[#0B1D51] text-white py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#725CAD] via-transparent to-[#8CCDEB]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-4">Rishika Ranjan</h3>
            <p className="text-gray-300 leading-relaxed">
              Computer Science Engineering Student passionate about creating innovative 
              web applications and solving real-world problems through technology.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#725CAD] hover:scale-110 transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6 group-hover:text-white" />
              </a>
            ))}
          </div>

          {/* Back to Top Button */}
          <div className="text-center md:text-right">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#725CAD] to-[#8CCDEB] text-white rounded-lg font-medium hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              <ArrowUp className="w-5 h-5 mr-2" />
              Back to Top
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {currentYear} Rishika Ranjan. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;