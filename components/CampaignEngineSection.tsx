'use client'

import { motion } from 'framer-motion'
import { Send, BarChart3, RotateCw, StopCircle, Zap, Layers } from 'lucide-react'

export function CampaignEngineSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-white border-y border-[#101828]/5">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-8 md:space-y-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-[2.25rem] md:text-[4rem] font-black text-[#101828] leading-[1.1] mb-6 tracking-tighter">
                  Campaigns at <br className="hidden md:block" />
                  <span className="text-[#745DF3]">Velocity.</span>
                </h2>
                <p className="text-lg md:text-xl text-[#101828]/50 leading-relaxed max-w-md">
                  A high-frequency engine built for modern multi-mailbox architectures. No bottlenecks. Just scale.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {[
                  { icon: Zap, title: "Parallel Execution", desc: "Run 100+ campaigns simultaneously." },
                  { icon: RotateCw, title: "Auto-Rotation", desc: "Intelligent domain & mailbox swapping." },
                  { icon: StopCircle, title: "Reply Detection", desc: "Instantly halt follow-ups on interest." },
                  { icon: Layers, title: "Deep Analytics", desc: "Precision tracking across every inbox." },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="w-10 h-10 bg-[#FBFBFB] border border-[#101828]/5 rounded-xl flex items-center justify-center text-[#101828] mb-4 group-hover:bg-[#745DF3] group-hover:text-white transition-all">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h4 className="font-bold text-[#101828] mb-2">{item.title}</h4>
                    <p className="text-[#101828]/40 text-sm leading-snug">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square"
            >
              {/* Campaign Engine Visual Logic */}
              <div className="absolute inset-0 bg-[#745DF3] rounded-[4rem] rotate-3 overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.1] [mask-image:linear-gradient(0deg,#745DF3,transparent)]" />
              </div>
              
              <div className="absolute inset-0 bg-white border-2 border-[#101828] rounded-[4rem] p-12 flex flex-col justify-between shadow-2xl">
                <div>
                  <div className="flex justify-between items-center mb-12">
                    <div className="px-5 py-2 bg-[#745DF3]/10 text-[#745DF3] rounded-full text-sm font-black">ACTIVE</div>
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#101828]/10" />
                      <div className="w-10 h-3 rounded-full bg-[#745DF3]" />
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="h-4 w-3/4 bg-[#101828]/5 rounded-full" />
                    <div className="h-4 w-1/2 bg-[#101828]/5 rounded-full" />
                    <div className="h-4 w-2/3 bg-[#101828]/5 rounded-full" />
                  </div>
                </div>

                <div className="mt-auto">
                    <div className="flex items-end gap-3 h-32">
                        {[40, 70, 45, 90, 65, 80, 50, 95].map((h, i) => (
                            <motion.div 
                                key={i}
                                initial={{ height: 0 }}
                                whileInView={{ height: `${h}%` }}
                                transition={{ duration: 1, delay: i * 0.05 }}
                                className="flex-1 bg-[#101828] rounded-t-lg"
                            />
                        ))}
                    </div>
                    <div className="mt-6 flex justify-between items-center">
                        <span className="font-black text-2xl text-[#101828]">12,482</span>
                        <span className="text-[#101828]/40 text-sm font-bold">SENT TODAY</span>
                    </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
