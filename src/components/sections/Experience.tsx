"use client"

import { useI18n } from "../../lib/i18n"
import { motion } from "framer-motion"
import { Waves, Sun, UtensilsCrossed, Users } from "lucide-react"

export function Experience() {
    const { t } = useI18n()

    const features = [
        {
            icon: <Sun className="w-8 h-8" />,
            title: t('experience', 'park'),
            desc: "5 acres of ancient woodland and manicured lawns, perfect for a slow afternoon stroll."
        },
        {
            icon: <Waves className="w-8 h-8" />,
            title: t('experience', 'pool'),
            desc: "A heated saltwater retreat, secluded by cypress trees and the gentle sound of nature."
        },
        {
            icon: <UtensilsCrossed className="w-8 h-8" />,
            title: t('experience', 'dinner'),
            desc: "Exquisite home-cooked dinners available upon request. Enjoy local flavors in a historic setting."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: t('experience', 'hosts'),
            desc: "Bespoke hospitality from Benjamin and the team, blending English comfort with French elegance."
        }
    ]

    return (
        <section id="experience" className="py-24 bg-secondary">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif mb-4 text-foreground">{t('experience', 'title')}</h2>
                    <div className="w-20 h-1 bg-accent mx-auto" />
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {features.map((feature, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            className="group flex flex-col items-center text-center space-y-5 p-8 border border-transparent hover:border-border transition-all"
                        >
                            <div className="text-accent group-hover:scale-110 transition-transform duration-300">
                                {feature.icon}
                            </div>
                            <h3 className="text-lg font-serif text-foreground">{feature.title}</h3>
                            <p className="font-sans font-light text-muted-foreground leading-relaxed text-sm">
                                {feature.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
