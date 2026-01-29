'use client'

import { motion } from 'framer-motion'
import { Clock, Zap, Users, Star, ArrowRight, ShieldCheck, Ticket } from 'lucide-react'

export function EarlyAccessSection({ onJoin }: { onJoin: () => void }) {
  return (
    <section className="py-20 md:py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-[#101828] rounded-[3rem] p-8 md:p-16 lg:p-20 overflow-hidden shadow-2xl">
          {/* Abstract light effects */}
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_0%_0%,rgba(116,93,243,0.15)_0%,transparent_50%)]" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#745DF3]/10 rounded-full blur-[120px]" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column: Content */}
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#745DF3] text-xs font-black tracking-widest uppercase mb-8"
              >
                <Ticket className="w-3 h-3" />
                Founding Member Program
              </motion.div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[2.5rem] md:text-[4.5rem] font-black text-white leading-[0.95] tracking-tighter mb-8 md:mb-10"
              >
                The Future of Outbound, <br className="hidden md:block" />
                <span className="text-[#745DF3]">by Invitation.</span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 md:mb-12"
              >
                LeadFlow isn't for everyone. We're opening access to a select few who want to depart from deliverability chaos and build sustainable infrastructure.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <button 
                  onClick={onJoin}
                  className="group relative bg-white text-[#101828] px-10 py-5 rounded-full text-lg font-black hover:bg-[#745DF3] hover:text-white transition-all duration-500 flex items-center gap-3"
                >
                  Join the Waitlist
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  <div className="absolute -inset-1 rounded-full bg-white/20 blur opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </motion.div>
            </div>

            {/* Right Column: Benefits Grid - Custom Layout */}
            <div className="relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { icon: Clock, title: "Priority Queue", desc: "First-in-line access for all beta features." },
                  { icon: Zap, title: "Locked Pricing", desc: "Lifetime discount for founding members." },
                  { icon: Users, title: "Founder Access", desc: "Direct line to our engineering team." },
                  { icon: Star, title: "Voter Rights", desc: "Your top requests move the roadmap." }
                ].map((benefit, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-6 rounded-[2rem] border transition-all duration-500 ${
                      i === 0 ? 'bg-[#745DF3] border-[#745DF3] text-white' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                    }`}
                  >
                    <benefit.icon className={`w-6 h-6 mb-4 ${i === 0 ? 'text-white' : 'text-[#745DF3]'}`} />
                    <h4 className="text-lg font-black mb-2 text-white">{benefit.title}</h4>
                    <p className={`text-sm leading-snug ${i === 0 ? 'text-white' : 'text-white/60'}`}>
                      {benefit.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Founder Tag Mockup Element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 12 }}
                transition={{ delay: 0.5, duration: 1 }}
                viewport={{ once: true }}
                className="absolute -top-10 -right-6 hidden lg:flex bg-white text-[#101828] px-6 py-4 rounded-2xl border border-white/20 shadow-2xl items-center gap-4 select-none pointer-events-none"
              >
                <div className="w-10 h-10 bg-[#745DF3]/10 rounded-full flex items-center justify-center">
                  <ShieldCheck className="w-6 h-6 text-[#745DF3]" />
                </div>
                <div>
                  <div className="text-[10px] font-black uppercase tracking-tighter opacity-40">Status</div>
                  <div className="text-sm font-black tracking-tight">Founding Member</div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
