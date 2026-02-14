'use client';
import { ArrowRight, CheckCircle2, Sparkles, Play, ShieldCheck, FileCheck, Clock } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={sectionRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-40 px-6 lg:px-8 overflow-hidden bg-white">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem] opacity-60"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,80,2,0.08),transparent_40%)]"></div>
      
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          {/* Left Content */}
          <motion.div 
            style={{ opacity }}
            className="flex-1 space-y-8 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E85002]/5 rounded-full border border-[#E85002]/10 text-[#E85002] font-medium text-sm mx-auto lg:mx-0"
            >
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E85002] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E85002]"></span>
              </span>
              The new standard for African universities
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl lg:text-7xl font-bold text-zinc-900 leading-[1.05] tracking-tight"
            >
              Assessment operations, <br className="hidden lg:block" />
              <span className="text-[#E85002]">finally reliable.</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl text-zinc-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-normal"
            >
              HandIn is the first assessment workflow platform built for African universities. Digital submissions, proof of receipt, and complete traceability from upload to grade release.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-[#E85002] text-white rounded-full font-medium shadow-lg shadow-[#E85002]/20 hover:shadow-xl hover:shadow-[#E85002]/30 transition-all flex items-center justify-center gap-2"
              >
                Start free
                <ArrowRight size={18} />
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-white text-zinc-700 rounded-full font-medium border border-zinc-200 hover:bg-zinc-50 transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <Play size={18} className="fill-zinc-700" />
                Watch demo
              </motion.button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="pt-8 flex items-center justify-center lg:justify-start gap-8 border-t border-zinc-100 mt-8"
            >
              <div className="flex items-center gap-2 text-sm text-zinc-600 font-medium">
                <CheckCircle2 size={16} className="text-[#E85002]" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-600 font-medium">
                <CheckCircle2 size={16} className="text-[#E85002]" />
                <span>14-day free trial</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image / Visual */}
          <motion.div 
            style={{ y }}
            className="flex-1 relative w-full max-w-xl lg:max-w-none mx-auto perspective-1000"
          >
            <motion.div
              initial={{ opacity: 0, rotateX: 10, rotateY: -10, scale: 0.9 }}
              animate={{ opacity: 1, rotateX: 0, rotateY: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.2, type: "spring", bounce: 0 }}
              className="relative z-20"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-zinc-500/10 border border-zinc-200 bg-white">
                {/* Browser Chrome */}
                <div className="bg-zinc-50 border-b border-zinc-200 px-4 py-3 flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-zinc-300"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-300"></div>
                  <div className="w-3 h-3 rounded-full bg-zinc-300"></div>
                  <div className="ml-4 flex-1 bg-white border border-zinc-200 rounded-md h-6 w-full max-w-xs mx-auto shadow-sm"></div>
                </div>
                <div className="relative aspect-[4/3] bg-zinc-50">
                   <ImageWithFallback
                    src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHw1fHxvZmZpY2UlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzY0NTg0NTEzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                    alt="Dashboard Preview"
                    className="object-cover w-full h-full opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent mix-blend-overlay"></div>
                  
                  {/* Floating Cards - Premium Look */}
                  <motion.div 
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 }}
                    className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-xl p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 max-w-[260px]"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                        <FileCheck size={20} />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-zinc-900">Submission Received</div>
                        <div className="text-xs text-zinc-500 mt-1 font-mono bg-zinc-100 px-1.5 py-0.5 rounded inline-block">Ref: HI-2026-04821</div>
                        <div className="text-xs text-green-600 mt-1 flex items-center gap-1">
                           <CheckCircle2 size={10} /> Confirmed
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div 
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="absolute top-8 left-8 bg-white/95 backdrop-blur-xl p-4 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                        <Clock size={16} />
                      </div>
                      <div>
                        <div className="text-xs text-zinc-500 uppercase font-semibold tracking-wider">Status</div>
                        <div className="text-sm font-bold text-zinc-900">Under Review</div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 inset-0 bg-gradient-to-tr from-[#E85002]/15 to-transparent blur-3xl opacity-40 transform scale-110 translate-y-10"></div>
            <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-[#E85002]/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
