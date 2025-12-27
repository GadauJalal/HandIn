'use client';
import { DollarSign, FileText, Cpu, Copy } from 'lucide-react';
import { motion, useInView, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function ProblemSection() {
  const ref = useRef(null);
  const sectionRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const problems = [
    {
      icon: DollarSign,
      title: "High cost of international tools",
      description: "Turnitin and similar platforms price out African institutions",
      color: "from-[#E85002]/20 to-[#E85002]/5",
      stat: "$3K+",
      statLabel: "per year"
    },
    {
      icon: FileText,
      title: "Paper-based submissions",
      description: "Printing stress, lost assignments, and environmental waste",
      color: "from-[#E85002]/15 to-[#E85002]/5",
      stat: "100K",
      statLabel: "pages wasted"
    },
    {
      icon: Cpu,
      title: "Rising AI tool usage",
      description: "No clear detection for AI-generated content in student work",
      color: "from-[#E85002]/20 to-[#E85002]/10",
      stat: "85%",
      statLabel: "students use AI"
    },
    {
      icon: Copy,
      title: "Local plagiarism",
      description: "Classmate-to-classmate copying that global databases miss",
      color: "from-[#E85002]/15 to-[#E85002]/5",
      stat: "40%",
      statLabel: "goes undetected"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Animated background pattern */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 opacity-[0.02]" 
      >
        <div style={{
          backgroundImage: `linear-gradient(#E85002 1px, transparent 1px), linear-gradient(90deg, #E85002 1px, transparent 1px)`,
          backgroundSize: '100px 100px'
        }} className="w-full h-full"></div>
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block px-4 py-2 bg-[#E85002]/5 rounded-full mb-6 border border-[#E85002]/10"
          >
            <span className="text-[#E85002] text-sm font-medium">The Challenge</span>
          </motion.div>

          <h2 className="text-4xl lg:text-6xl font-semibold text-black mb-6 tracking-tight">
            Today's academic challenges{' '}
            <span className="relative inline-block">
              <span className="relative z-10">in Africa</span>
              <motion.span
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="absolute bottom-1 left-0 right-0 h-3 bg-[#E85002]/20 origin-left"
              ></motion.span>
            </span>
          </h2>
          <p className="text-xl text-[#646464] max-w-3xl mx-auto leading-relaxed">
            Universities across the continent face unique obstacles that international tools weren't designed to solve.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group relative"
              >
                <motion.div
                  whileHover={{ 
                    y: -8,
                    transition: { 
                      type: "spring", 
                      stiffness: 300, 
                      damping: 20 
                    } 
                  }}
                  className="h-full p-8 rounded-2xl bg-white border border-zinc-200 hover:border-[#E85002]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#E85002]/5 relative overflow-hidden group-hover:bg-zinc-50/50"
                >
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-xl bg-[#E85002]/10 flex items-center justify-center mb-6 text-[#E85002] group-hover:bg-[#E85002] group-hover:text-white transition-colors duration-300">
                      <Icon size={24} />
                    </div>
                    
                    <h3 className="text-lg font-semibold text-zinc-900 mb-3">
                      {problem.title}
                    </h3>
                    <p className="text-zinc-500 leading-relaxed mb-6 text-sm">
                      {problem.description}
                    </p>

                    {/* Stat badge */}
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl font-bold text-zinc-900 tracking-tight group-hover:text-[#E85002] transition-colors">{problem.stat}</span>
                      <span className="text-xs text-zinc-500 font-medium uppercase tracking-wide">{problem.statLabel}</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
