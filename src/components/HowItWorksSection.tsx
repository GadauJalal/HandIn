'use client';
import { ArrowRight, Upload, FileSearch, GraduationCap, ChevronRight, Sparkles } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      icon: Upload,
      title: "Students submit digitally",
      description: "Students upload work through the platform before the deadline. Instant receipt generated. No printing, no paper, no lost submissions.",
      color: "from-[#E85002] to-[#d14702]",
      features: ["Drag & drop", "Instant receipt", "WhatsApp confirmation"]
    },
    {
      number: "02",
      icon: FileSearch,
      title: "Submissions tracked end-to-end",
      description: "Every submission linked to the right student and assessment. Status visible to everyone. Nothing goes missing.",
      color: "from-[#d14702] to-[#b83d02]",
      features: ["Full traceability", "Status updates", "Audit trail"]
    },
    {
      number: "03",
      icon: GraduationCap,
      title: "Lecturers mark and release grades",
      description: "Review submissions, enter marks, and release grades—all in one place. Students notified automatically.",
      color: "from-[#E85002] to-[#d14702]",
      features: ["One dashboard", "Grade release", "Automatic notifications"]
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
              complete traceability
            </span>
          </h2>
          <p className="text-xl text-[#646464] max-w-2xl mx-auto leading-relaxed">
            HandIn handles the entire assessment lifecycle in three steps.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated connection line - Desktop only */}
          <div className="hidden lg:block absolute top-[6.5rem] left-[10%] right-[10%] h-px overflow-visible z-0">
             {/* Dashed base line */}
            <div className="absolute inset-0 border-t-2 border-dashed border-zinc-100"></div>
            
            {/* Animated progress line */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0 border-t-2 border-dashed border-[#E85002]/30 origin-left"
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
                    className="relative bg-white rounded-3xl p-8 border border-zinc-100 hover:border-[#E85002]/30 transition-all duration-300 hover:shadow-2xl hover:shadow-[#E85002]/10 z-10"
                  >
                    {/* Step Number Circle - Integrated into design */}
                    <div className="absolute top-6 left-6 w-8 h-8 rounded-full bg-zinc-50 border border-zinc-100 text-zinc-400 text-xs font-bold flex items-center justify-center font-mono group-hover:bg-[#E85002] group-hover:text-white group-hover:border-[#E85002] transition-colors">
                      {step.number}
                    </div>

                    {/* Icon Container */}
                    <div className="relative mb-8 pt-4">
                      <motion.div
                        whileHover={{ 
                          scale: 1.05, 
                        }}
                        transition={{ duration: 0.3 }}
                        className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto shadow-lg shadow-[#E85002]/30 group-hover:shadow-xl group-hover:shadow-[#E85002]/50 relative overflow-hidden`}
                      >
                        <Icon className="text-white relative z-10" size={32} />
                        
                        {/* Sparkle effect on hover */}
                        <motion.div
                          initial={{ scale: 0, opacity: 0 }}
                          whileHover={{ scale: 1.5, opacity: [0, 1, 0] }}
                          transition={{ duration: 0.5 }}
                          className="absolute inset-0 bg-white/20"
                        >
                          <Sparkles className="absolute top-2 right-2 text-white" size={14} />
                        </motion.div>
                      </motion.div>
                      
                      {/* Refined Arrow Connector - Desktop */}
                      {index < steps.length - 1 && (
                        <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 -right-[calc(50%-2.5rem)] xl:-right-[calc(50%-3rem)] z-0">
                           <motion.div
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 1 + index * 0.2 }}
                            className="w-10 h-10 rounded-full bg-white border border-zinc-100 shadow-sm flex items-center justify-center text-zinc-300 group-hover:text-[#E85002] group-hover:border-[#E85002]/30 transition-all duration-500"
                           >
                             <ChevronRight size={18} strokeWidth={2.5} />
                           </motion.div>
                        </div>
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-zinc-900 mb-4 group-hover:text-[#E85002] transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-zinc-500 text-base leading-relaxed mb-6">
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
                            className="px-2.5 py-1 bg-zinc-50 rounded-md text-[11px] font-medium text-zinc-500 border border-zinc-100 group-hover:border-[#E85002]/10 group-hover:bg-[#E85002]/5 group-hover:text-[#E85002] transition-colors"
                          >
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* Mobile Arrow */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center -my-4 relative z-20">
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.8 + index * 0.2 }}
                        className="w-10 h-10 rounded-full bg-white border border-zinc-100 shadow-sm flex items-center justify-center text-zinc-300"
                      >
                         <ChevronRight className="rotate-90" size={20} />
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
