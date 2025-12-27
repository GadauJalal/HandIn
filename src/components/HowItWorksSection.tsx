'use client';
import { ArrowRight, Upload, Scan, CheckCircle, Sparkles } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Students upload assignments",
      description: "Students submit their work through the platform before the deadline. No printing, no paper, no stress.",
      color: "from-[#E85002] to-[#d14702]",
      features: ["Drag & drop", "Multiple formats", "Instant confirmation"]
    },
    {
      number: "02",
      icon: Scan,
      title: "HandIn runs AI and plagiarism checks",
      description: "Our system automatically scans for AI-generated content and checks against both global and local databases.",
      color: "from-[#d14702] to-[#b83d02]",
      features: ["AI detection", "Local database", "Global check"]
    },
    {
      number: "03",
      icon: CheckCircle,
      title: "Lecturers review and release results",
      description: "Faculty get clear, actionable reports. They can review, grade, and release results all in one place.",
      color: "from-[#E85002] to-[#d14702]",
      features: ["Clear reports", "One dashboard", "Bulk grading"]
    }
  ];

  return (
    <section id="how-it-works" ref={ref} className="py-32 px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#E85002]/5 via-white to-white"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            className="inline-block px-4 py-2 bg-[#E85002]/5 rounded-full mb-6 border border-[#E85002]/10"
          >
            <span className="text-[#E85002] text-sm font-medium">How It Works</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-semibold text-black mb-6 tracking-tight">
            Simple workflow,{' '}
            <span className="bg-gradient-to-r from-[#E85002] to-[#d14702] bg-clip-text text-transparent">
              powerful results
            </span>
          </h2>
          <p className="text-xl text-[#646464] max-w-2xl mx-auto leading-relaxed">
            HandIn streamlines the entire assignment process in three easy steps.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated connection line - Desktop only */}
          <div className="hidden lg:block absolute top-20 left-[10%] right-[10%] h-1 overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="h-full bg-gradient-to-r from-[#E85002]/30 via-[#E85002]/60 to-[#E85002]/30 origin-left"
            ></motion.div>
            
            {/* Animated dot traveling along the line */}
            <motion.div
              initial={{ left: '0%' }}
              animate={isInView ? { left: '100%' } : {}}
              transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
              className="absolute top-1/2 -translate-y-1/2 w-3 h-3 bg-[#E85002] rounded-full shadow-lg shadow-[#E85002]/50"
            ></motion.div>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.2,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="relative group"
                >
                  {/* Card */}
                  <motion.div
                    whileHover={{ 
                      y: -10, 
                      transition: { 
                        type: "spring", 
                        stiffness: 300, 
                        damping: 20 
                      } 
                    }}
                    className="relative bg-white rounded-3xl p-8 border-2 border-[#E85002]/10 hover:border-[#E85002]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#E85002]/20"
                  >
                    {/* Floating number badge - Moved to card corner */}
                    <motion.div 
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ 
                        delay: 0.5 + index * 0.2, 
                        type: "spring", 
                        stiffness: 200 
                      }}
                      className="absolute top-6 left-6 w-10 h-10 rounded-full bg-black text-white flex items-center justify-center font-semibold shadow-lg z-20"
                    >
                      {step.number}
                    </motion.div>

                    {/* Step Number Circle */}
                    <div className="relative mb-8">
                      <motion.div
                        whileHover={{ 
                          scale: 1.1, 
                          rotate: 5 
                        }}
                        transition={{ duration: 0.3 }}
                        className={`w-24 h-24 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto shadow-xl shadow-[#E85002]/40 group-hover:shadow-2xl group-hover:shadow-[#E85002]/60 relative overflow-hidden`}
                      >
                        <Icon className="text-white relative z-10" size={40} />
                        
                        {/* Sparkle effect on hover */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{ scale: 1.5, opacity: [0, 1, 0] }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0 bg-white/20"
                        >
                          <Sparkles className="absolute top-2 right-2 text-white" size={16} />
                        </motion.div>
                      </motion.div>
                      
                      {/* Arrow indicator - Desktop */}
                      {index < steps.length - 1 && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{ delay: 1 + index * 0.2 }}
                          className="hidden lg:block absolute top-12 -right-16 xl:-right-20"
                        >
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ArrowRight className="text-[#E85002]/40 group-hover:text-[#E85002] transition-colors" size={32} />
                          </motion.div>
                        </motion.div>
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="text-center">
                      <h3 className="text-2xl font-semibold text-black mb-4 group-hover:text-[#E85002] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-[#646464] text-lg leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Feature pills */}
                      <div className="flex flex-wrap gap-2 justify-center">
                        {step.features.map((feature, idx) => (
                          <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 0.8 + index * 0.2 + idx * 0.1 }}
                            className="px-3 py-1 bg-[#E85002]/5 rounded-full text-xs text-[#646464] border border-[#E85002]/10"
                          >
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Decorative corner gradient */}
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-[#E85002]/10 to-transparent rounded-full blur-2xl group-hover:from-[#E85002]/20 transition-all"></div>
                  </motion.div>

                  {/* Mobile Arrow */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center mt-8">
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8 + index * 0.2 }}
                      >
                        <motion.div
                          animate={{ y: [0, 5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <ArrowRight className="text-[#E85002]/40 rotate-90" size={32} />
                        </motion.div>
                      </motion.div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mt-20"
        >
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="px-10 py-5 bg-gradient-to-r from-[#E85002] to-[#d14702] text-white rounded-xl hover:shadow-2xl hover:shadow-[#E85002]/40 transition-all inline-flex items-center gap-3 group relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center gap-3 font-medium">
              See it in action
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#d14702] to-[#b83d02] opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
