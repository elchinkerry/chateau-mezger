"use client"

import { useI18n } from "../../lib/i18n"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function Hero() {
    const { t } = useI18n()

    return (
        <section className="relative h-screen w-full overflow-hidden bg-stone-900">
            {/* Background Image Container */}
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 hover:scale-105"
                style={{
                    backgroundImage: `url('https://images.unsplash.com/photo-1649872518937-fcefb7c7f887?q=80&w=3840&auto=format&fit=crop')`,
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="max-w-4xl w-full"
                >
                    <span className="text-amber-200/80 dark:text-accent uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs font-medium mb-4 md:mb-6 block">
                        Occitanie • France
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white mb-6 md:mb-8 leading-[1.1]">
                        {t('hero', 'headline')}
                    </h1>
                    <p className="text-base md:text-xl text-stone-200 font-sans max-w-2xl mx-auto mb-8 md:mb-10 font-light tracking-wide leading-relaxed">
                        {t('hero', 'subheadline')}
                    </p>

                    <motion.a
                        href="#rooms"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center space-x-3 bg-white text-stone-900 px-6 py-3 md:px-8 md:py-4 rounded-none text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-stone-100 transition-colors shadow-2xl"
                    >
                        <span>{t('hero', 'cta')}</span>
                        <ArrowRight size={16} />
                    </motion.a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2 }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2"
                >
                    <div className="w-[1px] h-20 bg-gradient-to-b from-white to-transparent" />
                </motion.div>
            </div>
        </section>
    )
}
