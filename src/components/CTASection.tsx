'use client';
import { ArrowRight, Mail, Sparkles, Check, Play } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-32 px-6 lg:px-8 bg-gradient-to-br from-[#E85002] via-[#d14702] to-[#b83d02] text-white relative overflow-hidden">
      {/* Animated Decorative Background Elements */}
      <motion.div
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.05, 0.1, 0.05]
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 left-0 w-[600px] h-[600px] bg-white rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.1, 0.15, 0.1]
        }}
        transition={{ duration: 10, repeat: Infinity, delay: 3 }}
        className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-black rounded-full blur-3xl"
      ></motion.div>

      {/* Geometric pattern */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
        backgroundSize: '50px 50px'
      }}></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-8 border border-white/20 backdrop-blur-sm"
        >
          <Sparkles className="text-white" size={16} />
          <span className="text-white text-sm font-medium">Ready to get started?</span>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl lg:text-6xl font-semibold mb-6 tracking-tight"
        >
          Ready to stop{' '}
          <span className="relative inline-block">
            losing submissions?
            <motion.span
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-1 left-0 right-0 h-3 bg-white/20 origin-left"
            ></motion.span>
          </span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-xl text-white/90 mb-12 leading-relaxed max-w-2xl mx-auto"
        >
          Start free as an individual lecturer, or talk to our team about bringing HandIn to your department or university.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="px-10 py-5 bg-white text-[#E85002] rounded-xl hover:bg-gray-50 transition-all flex items-center gap-3 group shadow-2xl hover:shadow-white/20 relative overflow-hidden font-medium"
          >
            <span className="relative z-10 flex items-center gap-3">
              Start free
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            {/* Shimmer effect */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E85002]/10 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
            ></motion.div>
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="px-10 py-5 bg-transparent text-white rounded-xl border-2 border-white hover:bg-white/10 transition-all flex items-center gap-2 shadow-xl backdrop-blur-sm font-medium"
          >
            Talk to sales
          </motion.button>
        </motion.div>

        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 pt-8 border-t border-white/20"
        >
          <p className="text-white/80 mb-3">Or reach out directly</p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            href="mailto:hello@handin.ng" 
            className="text-2xl hover:underline inline-flex items-center gap-2 group font-medium"
          >
            hello@handin.ng
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </motion.a>
        </motion.div>

        {/* Decorative trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-wrap justify-center gap-8 items-center"
        >
          {['Enterprise-ready', 'GDPR Compliant', '24/7 Support'].map((badge, index) => (
            <motion.div
              key={badge}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.6 + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ scale: 1.1, y: -2 }}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full border border-white/20 backdrop-blur-sm cursor-pointer"
            >
              <Check className="text-white" size={14} />
              <span className="text-sm text-white/90 font-medium">{badge}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
