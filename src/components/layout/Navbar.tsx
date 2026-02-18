"use client"

import { useState } from "react"
import { useI18n } from "../../lib/i18n"
import { useTheme } from "next-themes"
import { Moon, Sun, Languages, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function Navbar() {
    const { t, locale, setLocale } = useI18n()
    const { setTheme, resolvedTheme } = useTheme()
    const [menuOpen, setMenuOpen] = useState(false)

    const links = [
        { href: "#rooms", label: t('nav', 'rooms') },
        { href: "#experience", label: t('nav', 'experience') },
        { href: "#footer", label: t('nav', 'contact') },
    ]

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 w-full z-50 backdrop-blur-md border-b border-border/40"
                style={{ backgroundColor: 'color-mix(in srgb, var(--background) 85%, transparent)' }}
            >
                <div className="max-w-7xl mx-auto px-6 h-16 md:h-20 flex items-center justify-between">
                    {/* Logo */}
                    <div className="text-xl md:text-2xl font-serif tracking-tighter">
                        Château Mezger
                    </div>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center space-x-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
                        {links.map(link => (
                            <a key={link.href} href={link.href} className="hover:text-foreground transition-colors">
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Controls */}
                    <div className="flex items-center space-x-3">
                        <button
                            onClick={() => setLocale(locale === "en" ? "fr" : "en")}
                            className="flex items-center space-x-1 px-3 py-1 rounded-full border border-border hover:bg-secondary transition-colors"
                        >
                            <Languages size={14} />
                            <span className="text-xs font-bold uppercase">{locale}</span>
                        </button>

                        <button
                            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                            className="p-2 rounded-full border border-border hover:bg-secondary transition-colors"
                        >
                            {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                        </button>

                        {/* Hamburger — mobile only */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden p-2 rounded-full border border-border hover:bg-secondary transition-colors"
                            aria-label="Toggle menu"
                        >
                            {menuOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-16 left-0 right-0 z-40 border-b border-border"
                        style={{ backgroundColor: 'color-mix(in srgb, var(--background) 97%, transparent)' }}
                    >
                        <nav className="flex flex-col px-6 py-6 space-y-6">
                            {links.map(link => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-sm font-medium uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
