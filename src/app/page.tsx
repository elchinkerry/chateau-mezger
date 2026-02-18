"use client"

import { Navbar } from "../components/layout/Navbar"
import { Hero } from "../components/sections/Hero"
import { Experience } from "../components/sections/Experience"
import { Rooms } from "../components/sections/Rooms"
import { Footer } from "../components/layout/Footer"
import { useI18n } from "../lib/i18n"
import { motion } from "framer-motion"

export default function Home() {
  const { t } = useI18n()

  return (
    <main className="min-h-screen">
      <Navbar />

      <Hero />

      <Experience />

      <Rooms />

      {/* Testimonial Section */}
      <section className="py-24 bg-stone-900 text-stone-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <p className="text-3xl md:text-4xl font-serif italic leading-relaxed text-stone-100">
              &ldquo;{t('testimonials', 'quote')}&rdquo;
            </p>
            <div className="flex flex-col items-center">
              <div className="w-12 h-[1px] bg-amber-400 mb-4" />
              <p className="text-sm uppercase tracking-[0.2em] font-medium text-amber-400">
                {t('testimonials', 'rating')}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

