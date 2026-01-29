'use client'

import { motion } from 'framer-motion'
import { Inbox, Brain, Sparkles, CheckCircle2, XCircle, Clock, Search } from 'lucide-react'

const classifications = [
  { label: 'Interested', color: 'bg-emerald-500', icon: CheckCircle2 },
  { label: 'Meeting Booked', color: 'bg-[#745DF3]', icon: Sparkles },
  { label: 'Not Interested', color: 'bg-rose-500', icon: XCircle },
  { label: 'Follow Up', color: 'bg-amber-500', icon: Clock },
]

export function UniboxAISection() {
  return (
    <section id="unibox" className="py-20 md:py-32 px-6 bg-[#FBFBFB]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-[#745DF3]/5 border border-[#745DF3]/10 rounded-full text-[#745DF3] font-bold text-sm mb-6 uppercase tracking-wider"
          >
            <Brain className="w-4 h-4" />
            AI-POWERED REPLIES
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[2.25rem] md:text-[4rem] font-black text-[#101828] leading-[1.1] mb-6 tracking-tighter"
          >
            One Inbox. <br className="hidden md:block" />
            <span className="text-[#101828]/40">Infinite Clarity.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-[#101828]/60 max-w-2xl mx-auto px-4"
          >
            Manage replies across 1,000+ mailboxes without ever breaking a sweat.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-auto lg:h-[600px]">
          {/* Main Unibox UI Mockup */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-8 bg-white border border-[#101828]/5 rounded-[3rem] shadow-2xl shadow-[#101828]/5 overflow-hidden flex flex-col"
          >
            <div className="p-6 border-b border-[#101828]/5 flex items-center justify-between bg-white/50 backdrop-blur-xl sticky top-0 z-10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#745DF3] rounded-xl flex items-center justify-center text-white">
                  <Inbox className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#101828]">Unified Inbox</h4>
                  <p className="text-xs text-[#101828]/60">48 New Replies Today</p>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-full border border-[#101828]/5 flex items-center justify-center text-[#101828]/60">
                  <Search className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="flex-1 p-6 space-y-4 overflow-hidden">
              {[
                { from: "Sarah Chen", sub: "Interview Request", label: "Interested", time: "2m ago" },
                { from: "James Wilson", sub: "Re: Quick Question", label: "Meeting Booked", time: "15m ago" },
                { from: "Marcus Thorne", sub: "Out of Office", label: "Follow Up", time: "1h ago" },
                { from: "Elena Rossi", sub: "Pricing Inquiry", label: "Interested", time: "2h ago" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-5 rounded-2xl border border-[#101828]/5 bg-[#FBFBFB] hover:border-[#745DF3]/20 transition-all cursor-default group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-[#101828]">{item.from}</span>
                    <span className="text-xs text-[#101828]/60">{item.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[#101828]/70 text-sm">{item.sub}</span>
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold text-white ${
                      item.label === 'Interested' ? 'bg-emerald-500' : 
                      item.label === 'Meeting Booked' ? 'bg-[#745DF3]' : 'bg-[#101828]/60'
                    }`}>
                      {item.label}
                    </span>
                  </div>
                </motion.div>
              ))}
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
            </div>
          </motion.div>

          <div className="lg:col-span-4 flex flex-col gap-6">
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-[#101828] text-white rounded-[3rem] p-8 flex-1 flex flex-col justify-end"
            >
              <div className="w-12 h-12 bg-[#745DF3] rounded-2xl flex items-center justify-center mb-6">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-black text-white mb-4 tracking-tight leading-tight">Sentiment Analysis Engine</h3>
              <p className="text-white/60 text-lg">Our AI classifies every reply into categories so you can prioritize high-value leads immediately.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-[#101828]/5 rounded-[3rem] p-8 h-fit"
            >
              <h4 className="font-bold text-[#101828] mb-6">Classifications</h4>
              <div className="space-y-4">
                {classifications.map((type, i) => (
                  <div key={i} className="flex items-center gap-4 group">
                    <div className={`w-8 h-8 ${type.color} rounded-lg flex items-center justify-center text-white`}>
                      <type.icon className="w-4 h-4" />
                    </div>
                    <span className="font-medium text-[#101828]/80 group-hover:text-[#101828] transition-colors">{type.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
