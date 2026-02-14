'use client';
import { GraduationCap, BookOpen, Shield, CheckCircle2 } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';

export function WhoItsForSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const roles = [
    {
      icon: GraduationCap,
      title: "Students",
      description: "Submit assignments digitally, get instant proof of receipt, and track your submission status in real-time.",
      features: ["Instant receipts", "Status tracking", "WhatsApp updates"],
    },
    {
      icon: BookOpen,
      title: "Lecturers",
      description: "Receive submissions reliably, see everything in one dashboard, and release grades without spreadsheet chaos. Start free—no IT approval needed.",
      features: ["One dashboard", "No lost work", "Start in 5 minutes"],
    },
    {
      icon: Shield,
      title: "Administrators",
      description: "Full visibility across courses. Complete audit trails. Respond to queries with evidence, not guesswork.",
      features: ["Full oversight", "Audit trails", "Dispute resolution"],
    }
  ];

  return (
    <section id="who-its-for" ref={ref} className="py-32 px-6 lg:px-8 bg-zinc-50 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-zinc-200 text-[#E85002] text-xs font-medium mb-8 shadow-sm"
          >
            <span className="flex h-1.5 w-1.5 relative">
               <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#E85002]"></span>
            </span>
            Who It's For
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
            Built for the entire <br/>
            <span className="text-[#E85002]">academic ecosystem.</span>
          </h2>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto leading-relaxed">
            Whether you're a student, lecturer, or administrator, HandIn makes assessment operations reliable.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {roles.map((role, index) => {
            const Icon = role.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="relative group"
              >
                <motion.div
                  animate={{ y: isHovered ? -8 : 0 }}
                  className="relative h-full p-10 rounded-2xl bg-white border border-zinc-200 transition-all duration-300 hover:shadow-xl hover:shadow-zinc-200/50 hover:border-[#E85002]/30"
                >
                  <div className="flex flex-col items-center text-center h-full">
                    <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${isHovered ? 'bg-[#E85002] text-white shadow-lg shadow-[#E85002]/30' : 'bg-zinc-100 text-zinc-600'}`}>
                      <Icon size={32} />
                    </div>

                    <h3 className="text-xl font-bold text-zinc-900 mb-4">
                      {role.title}
                    </h3>

                    <p className="text-zinc-500 mb-8 leading-relaxed flex-grow text-sm">
                      {role.description}
                    </p>

                    <div className="space-y-3 w-full pt-8 border-t border-zinc-100">
                      {role.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-sm text-zinc-600 justify-start">
                          <CheckCircle2 size={16} className="text-[#E85002] shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
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
