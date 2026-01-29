'use client'

import { motion } from 'framer-motion'
import { Mail, Cloud, CheckCircle2, ShieldCheck } from 'lucide-react'

const smtpFeatures = [
  'Dedicated SMTP nodes',
  'IP reputation management',
  'Unlimited sending domains',
  'Auto-mailbox generation',
  'One-click DNS orchestration'
]

export function SendingProvidersSection() {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-[2.5rem] md:text-[4rem] font-black text-[#101828] leading-[1.1] mb-8 tracking-tighter">
                Infrastructure <br />
                <span className="text-[#745DF3]">you own.</span>
              </h2>
              <p className="text-xl text-[#101828]/50 leading-relaxed mb-10 max-w-lg">
                LeadFlow isn't a sender. It's the brain. Connect professional providers and maintain total control over your reputation.
              </p>

              <div className="space-y-4">
                {smtpFeatures.map((feature, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 text-lg font-medium text-[#101828]"
                  >
                    <div className="w-6 h-6 rounded-full bg-[#745DF3]/10 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-[#745DF3]" />
                    </div>
                    {feature}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 grid grid-cols-1 gap-6">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-[#FBFBFB] border border-[#101828]/5 p-8 rounded-[2.5rem] shadow-sm flex items-center gap-6"
              >
                <div className="w-16 h-16 bg-[#101828] rounded-2xl flex items-center justify-center text-white shrink-0">
                  <Mail className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#101828]">Dedicated SMTP</h4>
                  <p className="text-[#101828]/40">Enterprise scaling with Mailreef integration.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-[#FBFBFB] border border-[#101828]/5 p-8 rounded-[2.5rem] shadow-sm flex items-center gap-6"
              >
                <div className="w-16 h-16 bg-white border border-[#101828]/10 rounded-2xl flex items-center justify-center text-[#745DF3] shrink-0">
                  <Cloud className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-[#101828]">Google / Outlook</h4>
                  <p className="text-[#101828]/40">Native OAuth support for standard inboxes.</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="bg-[#745DF3] p-8 rounded-[2.5rem] shadow-lg shadow-[#745DF3]/20 flex items-center gap-6 text-white"
              >
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-8 h-8" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white">Reputation Guard</h4>
                  <p className="text-white/60">Automated rotation & health monitoring.</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
