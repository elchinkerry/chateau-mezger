"use client"

import { useI18n } from "../../lib/i18n"
import { Mail, Phone, Instagram, MapPin, Heart } from "lucide-react"

export function Footer() {
    const { t } = useI18n()

    return (
        <footer id="footer" className="bg-stone-900 dark:bg-black text-stone-100 py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-12 md:gap-16">
                <div className="max-w-sm">
                    <h2 className="text-3xl font-serif mb-6">Château Mezger</h2>
                    <p className="font-sans font-light text-stone-400 leading-relaxed mb-8">
                        Experience the "Art of Doing Nothing" in our historic estate. Adults-only sanctuary in the heart of France.
                    </p>
                    <div className="flex space-x-6 text-stone-500">
                        <a href="#" className="hover:text-amber-500 transition-colors"><Instagram size={20} /></a>
                        <a href="#" className="hover:text-amber-500 transition-colors"><Mail size={20} /></a>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:gap-24">
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-6">Location</h4>
                        <div className="flex items-start space-x-3 text-stone-400">
                            <MapPin size={18} className="shrink-0 mt-1" />
                            <p className="font-sans font-light leading-relaxed">
                                123 Route du Château<br />
                                75000 Paris<br />
                                France
                            </p>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-6">Inquiries</h4>
                        <div className="space-y-4 text-stone-400">
                            <div className="flex items-center space-x-3">
                                <Phone size={18} className="shrink-0" />
                                <a href="tel:+33123456789" className="font-sans font-light hover:text-amber-400 transition-colors">
                                    +33 1 23 45 67 89
                                </a>
                            </div>
                            <div className="flex items-center space-x-3">
                                <Mail size={18} className="shrink-0" />
                                <a href="mailto:contact@chateau-mezger.com" className="font-sans font-light hover:text-amber-400 transition-colors">
                                    contact@chateau-mezger.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-16 md:mt-24 pt-8 border-t border-stone-800 flex flex-col sm:flex-row justify-between gap-2 text-[10px] uppercase tracking-widest text-stone-600">
                <p>© 2024 Château Mezger. All rights reserved.</p>
                <p className="flex items-center gap-1">
                    Design by Creoxlab with <Heart size={10} className="fill-stone-600 text-stone-600" />
                </p>
            </div>
        </footer>
    )
}
