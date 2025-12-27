'use client';
import { Upload, Brain, Users, MessageSquare, ArrowRight, FileCheck, ShieldAlert, Smartphone } from 'lucide-react';
import { motion, useInView } from 'motion/react';
import { useRef } from 'react';

export function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="py-32 px-6 lg:px-8 bg-[#F9F9F9] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E85002]/10 text-[#E85002] text-xs font-semibold uppercase tracking-wider mb-6"
          >
            Features
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-5xl font-bold text-zinc-900 mb-6 tracking-tight"
          >
            Everything you need to manage <br />
            <span className="text-[#E85002]">academic integrity.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-500"
          >
            Built for the unique challenges of African universities. From WhatsApp reminders to local plagiarism detection.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1: Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-100 relative overflow-hidden group hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500"
          >
            <div className="relative z-10 max-w-md">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <Upload className="text-blue-600" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">Digital submissions, simplified.</h3>
              <p className="text-zinc-500 leading-relaxed mb-8">
                Students upload assignments directly to the platform. No more lost papers, printing costs, or "I emailed it" excuses. Deadlines lock automatically.
              </p>
            </div>
            
            {/* Visual Representation */}
            <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent hidden md:block"></div>
            <div className="absolute right-8 bottom-8 p-4 bg-white rounded-xl shadow-lg border border-zinc-100 w-64 rotate-3 group-hover:rotate-0 transition-all duration-500 hidden md:block">
               <div className="flex items-center gap-3 mb-3">
                 <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><FileCheck size={18}/></div>
                 <div className="text-sm font-medium">Assignment_Final.pdf</div>
               </div>
               <div className="h-1.5 bg-zinc-100 rounded-full w-full overflow-hidden">
                 <div className="h-full bg-blue-500 w-full animate-pulse"></div>
               </div>
               <div className="text-xs text-right mt-1 text-zinc-400">Uploaded 2m ago</div>
            </div>
          </motion.div>

          {/* Feature 2: Tall Card - Mobile First */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-zinc-100 relative overflow-hidden group hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 flex flex-col"
          >
            <div className="mb-auto">
              <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <MessageSquare className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">WhatsApp Reminders</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                We meet students where they are. Automated deadlines sent via WhatsApp.
              </p>
            </div>
            <div className="mt-8 relative h-40 bg-green-50/50 rounded-2xl overflow-hidden flex items-center justify-center">
               <Smartphone className="text-green-200 w-32 h-32 absolute -bottom-10 group-hover:-bottom-5 transition-all duration-500" />
               <div className="bg-white p-3 rounded-xl shadow-sm absolute z-10 border border-green-100 text-xs">
                 <span className="text-zinc-400">HandIn Bot:</span> <br/>
                 <span className="font-medium text-zinc-800">Assignment due in 2 hours! ⏰</span>
               </div>
            </div>
          </motion.div>

          {/* Feature 3: Small Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-zinc-100 relative overflow-hidden group hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <Brain className="text-purple-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-4">Smart AI Detection</h3>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Simple "Red/Green/Amber" reports on AI content. No jargon.
            </p>
            <div className="absolute top-4 right-4 text-xs font-bold text-purple-600 bg-purple-50 px-2 py-1 rounded-md">99% Accurate</div>
          </motion.div>

          {/* Feature 4: Large Card (Local Database) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="md:col-span-2 bg-[#0A0A0A] rounded-3xl p-8 md:p-12 relative overflow-hidden group text-white"
          >
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Users className="text-[#E85002]" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Local Student Database</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  International tools miss copy-paste between classmates. HandIn checks against a shared database of students across Nigeria and Ghana.
                </p>
                <button className="text-sm font-semibold text-[#E85002] flex items-center gap-2 group-hover:gap-3 transition-all">
                  Learn how it works <ArrowRight size={16} />
                </button>
              </div>
              
              {/* Map / Network Visual */}
              <div className="flex-1 w-full h-48 bg-zinc-900/50 rounded-2xl border border-white/5 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#E85002]/20 to-transparent opacity-50"></div>
                <div className="grid grid-cols-3 gap-4 opacity-40">
                   {[1,2,3,4,5,6,7,8,9].map(i => (
                     <div key={i} className="w-2 h-2 bg-white rounded-full animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}></div>
                   ))}
                </div>
                <div className="absolute text-center">
                  <ShieldAlert size={32} className="text-[#E85002] mx-auto mb-2" />
                  <div className="text-xs font-medium text-zinc-300">Match Found</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
