'use client';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import logoImage from 'figma:asset/a78969167a6cde6b8e8fb2b89908f75796047715.png';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Footer() {
  const footerLinks = {
    Product: ["Features", "Pricing", "Security", "Integrations"],
    Solutions: ["For Students", "For Lecturers", "For Departments", "For Universities"],
    Resources: ["Documentation", "Blog", "Case Studies", "Support"],
    Company: ["About", "Careers", "Contact", "Privacy Policy"]
  };

  return (
    <footer className="bg-black text-white py-20 px-6 lg:px-8 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#E85002]/5 via-transparent to-transparent"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#E85002] rounded-full opacity-5 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-5 gap-12 mb-20">
          {/* Logo and Description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-1"
          >
            <div className="flex items-center gap-2 mb-6 group cursor-pointer">
              <div className="h-10">
                  <ImageWithFallback 
                      src={logoImage}
                      alt="HandIn Logo"
                      className="h-full w-auto object-contain brightness-0 invert" // Inverted for dark footer
                  />
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Assessment operations infrastructure for African universities.
            </p>
            <div className="flex items-center gap-2 text-sm text-[#E85002]">
              <div className="w-2 h-2 rounded-full bg-[#E85002] animate-pulse"></div>
              <span>Built in Nigeria</span>
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
            >
              <h3 className="font-semibold mb-6 text-white">{category}</h3>
              <ul className="space-y-4">
                {links.map((link, linkIndex) => (
                  <motion.li 
                    key={link}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: categoryIndex * 0.1 + linkIndex * 0.05 }}
                  >
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-[#E85002] transition-colors text-sm inline-flex items-center gap-1 group"
                    >
                      {link}
                      <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 md:p-10 rounded-3xl bg-gradient-to-br from-[#E85002]/10 to-transparent border border-[#E85002]/20"
        >
          <div className="max-w-2xl">
            <h3 className="text-2xl font-semibold mb-3">Stay updated</h3>
            <p className="text-gray-400 mb-6">Get the latest news on academic integrity and HandIn updates.</p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:outline-none focus:border-[#E85002] transition-colors w-full"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-gradient-to-r from-[#E85002] to-[#d14702] text-white rounded-xl hover:shadow-lg hover:shadow-[#E85002]/40 transition-all w-full sm:w-auto font-medium"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-sm">
              © 2024 HandIn. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm group inline-flex items-center gap-1">
                Terms
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm group inline-flex items-center gap-1">
                Privacy
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="mailto:hello@handin.ng" className="text-gray-400 hover:text-[#E85002] transition-colors text-sm">
                hello@handin.ng
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
