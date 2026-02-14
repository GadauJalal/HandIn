'use client';
import { Upload, MessageSquare, FileCheck, Clock, ShieldCheck, Building2, User, CheckCircle2, FileText, Smartphone } from 'lucide-react';
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
            <span className="text-[#E85002]">assessments reliably.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-xl text-zinc-500"
          >
            Built for the unique constraints of African universities. From proof of receipt to grade release.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Feature 1: Digital submissions (Large) */}
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
            
            {/* Visual: File Upload */}
            <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent hidden md:block"></div>
            <div className="absolute right-8 bottom-8 p-4 bg-white rounded-xl shadow-lg border border-zinc-100 w-64 rotate-3 group-hover:rotate-0 transition-all duration-500 hidden md:block">
               <div className="flex items-center gap-3 mb-3">
                 <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><FileText size={18}/></div>
                 <div className="text-sm font-medium truncate">Assignment_Final.pdf</div>
               </div>
               <div className="h-1.5 bg-zinc-100 rounded-full w-full overflow-hidden">
                 <div className="h-full bg-blue-500 w-full animate-pulse"></div>
               </div>
               <div className="text-xs text-right mt-1 text-zinc-400">Uploaded 2m ago</div>
            </div>
          </motion.div>

          {/* Feature 2: Proof of Receipt (Standard) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-zinc-100 relative overflow-hidden group hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <FileCheck className="text-orange-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-4">Instant proof of receipt</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-8">
              Every submission gets a unique receipt code. Students can download or share via WhatsApp.
            </p>
            <div className="bg-zinc-50 border border-zinc-200 rounded-lg p-3 flex items-center justify-between">
              <span className="font-mono text-sm font-semibold text-zinc-700">HI-2026-04821</span>
              <CheckCircle2 size={16} className="text-green-500" />
            </div>
          </motion.div>

          {/* Feature 3: WhatsApp (Standard) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-zinc-100 relative overflow-hidden group hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500 flex flex-col"
          >
            <div className="mb-auto">
              <div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                <MessageSquare className="text-green-600" size={24} />
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-4">WhatsApp notifications</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">
                Receipts, deadline reminders, and grade notifications delivered via WhatsApp.
              </p>
            </div>
            <div className="mt-8 relative h-32 bg-green-50/50 rounded-2xl overflow-hidden flex items-center justify-center">
               <Smartphone className="text-green-200 w-24 h-24 absolute -bottom-8 group-hover:-bottom-4 transition-all duration-500" />
               <div className="bg-white p-3 rounded-xl shadow-sm absolute z-10 border border-green-100 text-[10px] w-48">
                 <span className="text-zinc-400 block mb-1">HandIn Bot:</span>
                 <span className="font-medium text-zinc-800 flex items-center gap-1">
                   Your submission was received! <br/> Receipt: HI-2026-04821 <CheckCircle2 size={10} className="text-green-500 inline"/>
                 </span>
               </div>
            </div>
          </motion.div>

          {/* Feature 4: Real-time Status (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="md:col-span-2 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-zinc-100 relative overflow-hidden group hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500"
          >
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <Clock className="text-purple-600" size={24} />
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">Real-time status tracking</h3>
                <p className="text-zinc-500 leading-relaxed">
                  Students see exactly where their submission is: Received → Under Review → Marked → Grade Released. No more waiting in the dark.
                </p>
              </div>
              
              {/* Visual: Status Steps */}
              <div className="bg-zinc-50 rounded-xl p-6 border border-zinc-200 w-full">
                <div className="space-y-4">
                  {[
                    { label: "Received", status: "complete" },
                    { label: "Under Review", status: "current" },
                    { label: "Marked", status: "pending" },
                    { label: "Grade Released", status: "pending" }
                  ].map((step, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs border ${
                        step.status === 'complete' ? 'bg-green-500 border-green-500 text-white' : 
                        step.status === 'current' ? 'bg-white border-purple-500 text-purple-600' : 
                        'bg-white border-zinc-300 text-zinc-300'
                      }`}>
                        {step.status === 'complete' ? <CheckCircle2 size={14} /> : idx + 1}
                      </div>
                      <span className={`text-sm font-medium ${
                        step.status === 'complete' ? 'text-zinc-900' : 
                        step.status === 'current' ? 'text-purple-700' : 
                        'text-zinc-400'
                      }`}>{step.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature 5: Audit Trail (Standard) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-3xl p-8 shadow-sm border border-zinc-100 relative overflow-hidden group hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
              <ShieldCheck className="text-indigo-600" size={24} />
            </div>
            <h3 className="text-xl font-bold text-zinc-900 mb-4">Complete audit trail</h3>
            <p className="text-zinc-500 text-sm leading-relaxed mb-6">
              Every action logged. Every handoff tracked. When disputes happen, you have the evidence.
            </p>
            <div className="space-y-2">
              <div className="text-[10px] font-mono text-zinc-400 bg-zinc-50 p-2 rounded border border-zinc-100">
                <span className="text-indigo-600">10:42 AM</span> Uploaded by Student
              </div>
              <div className="text-[10px] font-mono text-zinc-400 bg-zinc-50 p-2 rounded border border-zinc-100">
                <span className="text-indigo-600">10:43 AM</span> Receipt Generated
              </div>
            </div>
          </motion.div>

          {/* Feature 6: One Lecturer or Uni (Col span 2 on md) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="md:col-span-2 bg-[#0A0A0A] rounded-3xl p-8 md:p-12 relative overflow-hidden group text-white"
          >
            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                  <User className="text-[#E85002]" size={24} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Works for one lecturer or an entire university</h3>
                <p className="text-zinc-400 leading-relaxed mb-6">
                  Individual lecturers can start in 5 minutes. Institutions can deploy department-wide with SSO and admin controls.
                </p>
              </div>
              
              {/* Visual: Split Icons */}
              <div className="flex-1 flex gap-4 justify-center">
                 <div className="w-32 p-4 bg-zinc-900 rounded-xl border border-zinc-800 text-center hover:border-[#E85002]/50 transition-colors">
                    <User size={32} className="mx-auto mb-2 text-zinc-500" />
                    <div className="text-xs font-medium text-zinc-300">Lecturer</div>
                 </div>
                 <div className="w-32 p-4 bg-zinc-900 rounded-xl border border-zinc-800 text-center hover:border-[#E85002]/50 transition-colors">
                    <Building2 size={32} className="mx-auto mb-2 text-[#E85002]" />
                    <div className="text-xs font-medium text-zinc-300">University</div>
                 </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
