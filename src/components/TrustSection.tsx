'use client';
import { FileCheck, Building2, Trees, Quote, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function TrustSection() {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const stats = [
    {
      icon: FileCheck,
      value: "50,000+",
      label: "Assignments processed",
    },
    {
      icon: Building2,
      value: "12",
      label: "Universities piloting",
    },
    {
      icon: Trees,
      value: "100,000+",
      label: "Pages of paper saved",
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6 lg:px-8 bg-[#050505] text-white relative overflow-hidden">
      {/* Elegant Background */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-[#E85002]/10 via-transparent to-transparent opacity-60"></div>
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#E85002] text-xs font-medium mb-8"
            >
              <TrendingUp size={14} />
              Built for Africa
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-[1.1] tracking-tight">
              Built in Nigeria, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E85002] to-[#ff8a4c]">for African universities.</span>
            </h2>

            <p className="text-lg text-zinc-400 mb-12 leading-relaxed max-w-lg">
              We understand the unique challenges of academic institutions across the continent. HandIn is designed from the ground up to work with your existing infrastructure.
            </p>

            {/* Stats Grid - Minimalist */}
            <div className="grid grid-cols-3 gap-8 mb-16 border-t border-white/10 pt-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-zinc-500 font-medium uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Testimonial - Clean */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="relative pl-6 border-l-2 border-[#E85002]"
            >
              <p className="text-zinc-300 text-lg italic mb-4">
                "HandIn has transformed how we manage academic integrity. The local database feature catches plagiarism that international tools completely miss."
              </p>
              <div>
                <div className="font-semibold text-white">Dr. Adebayo Ogunleye</div>
                <div className="text-sm text-zinc-500">Head of Computer Science, University of Lagos</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image - Floating Clean */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
             <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-[#111]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1583100524290-599c9ac2bf21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBBZnJpY2FuJTIwdW5pdmVyc2l0eXxlbnwwfHx8fDE3NjQ1ODQ1MTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Modern African campus"
                  className="w-full h-[500px] object-cover opacity-80 hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-[#E85002] flex items-center justify-center text-white shadow-lg shadow-[#E85002]/20">
                        <Building2 size={20} />
                      </div>
                      <div>
                        <div className="text-white font-semibold">Trusted Partner</div>
                        <div className="text-zinc-400 text-sm">University of Lagos</div>
                      </div>
                   </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
