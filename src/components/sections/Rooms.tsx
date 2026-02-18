"use client"

import { useI18n } from "../../lib/i18n"
import { motion } from "framer-motion"

export function Rooms() {
    const { t } = useI18n()

    const rooms = [
        {
            name: t('rooms', 'towerSuite'),
            price: t('rooms', 'price'),
            image: "https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070&auto=format&fit=crop",
            className: "md:col-span-2 md:row-span-2"
        },
        {
            name: "The Park Room",
            price: "From €120/night",
            image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop",
            className: "md:col-span-1 md:row-span-1"
        },
        {
            name: "The Arts Loft",
            price: "From €130/night",
            image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?q=80&w=2070&auto=format&fit=crop",
            className: "md:col-span-1 md:row-span-1"
        }
    ]

    return (
        <section id="rooms" className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-16">
                    <span className="text-accent uppercase tracking-widest text-xs font-bold mb-4 block">
                        {t('rooms', 'title')}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif text-foreground">Your Sanctuary</h2>
                </div>

                {/* Mobile: stacked cards */}
                <div className="flex flex-col gap-4 md:hidden">
                    {rooms.map((room, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative overflow-hidden group cursor-pointer h-[260px]"
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url('${room.image}')` }}
                            />
                            <div className="absolute inset-0 bg-black/25 group-hover:bg-black/40 transition-colors" />
                            <div className="absolute bottom-0 left-0 p-6 text-white w-full bg-gradient-to-t from-black/60 to-transparent">
                                <h3 className="text-xl font-serif mb-1">{room.name}</h3>
                                <p className="text-xs font-sans tracking-widest opacity-80">{room.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Desktop: Bento grid */}
                <div className="hidden md:grid md:grid-cols-3 md:grid-rows-2 gap-4 h-[800px]">
                    {rooms.map((room, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className={`relative overflow-hidden group cursor-pointer ${room.className}`}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url('${room.image}')` }}
                            />
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                            <div className="absolute bottom-0 left-0 p-8 text-white w-full bg-gradient-to-t from-black/60 to-transparent">
                                <h3 className="text-2xl font-serif mb-2">{room.name}</h3>
                                <p className="text-sm font-sans tracking-widest opacity-80">{room.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
