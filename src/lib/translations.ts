export const translations = {
    en: {
        hero: {
            headline: "Château Mezger: The Art of Doing Nothing.",
            subheadline: "A historic Arts & Crafts estate in the heart of Tarn-et-Garonne. Adults Only.",
            cta: "Check Availability",
        },
        experience: {
            title: "The Experience",
            park: "5-Acre Park",
            pool: "Saltwater Pool",
            hosts: "English Hosts",
        },
        rooms: {
            title: "Your Sanctuary",
            towerSuite: "The Tower Suite",
            price: "From €140/night",
        },
        testimonials: {
            quote: "An absolute gem near Montauban. Benjamin makes you feel like royalty.",
            rating: "9.5 Rating on Booking.com",
        },
        footer: {
            location: "Albefeuille-Lagarde, France",
        },
        nav: {
            rooms: "Rooms",
            experience: "Experience",
            contact: "Contact",
        }
    },
    fr: {
        hero: {
            headline: "Château Mezger: L'Art de ne Rien Faire.",
            subheadline: "Un domaine historique Arts & Crafts au cœur du Tarn-et-Garonne. Réservé aux Adultes.",
            cta: "Vérifier la Disponibilité",
        },
        experience: {
            title: "L'Expérience",
            park: "Parc de 2 Hectares",
            pool: "Piscine au Sel",
            hosts: "Hôtes Anglais",
        },
        rooms: {
            title: "Votre Sanctuaire",
            towerSuite: "La Suite de la Tour",
            price: "À partir de 140€/nuit",
        },
        testimonials: {
            quote: "Un véritable bijou près de Montauban. Benjamin vous fait sentir comme des rois.",
            rating: "Note de 9.5 sur Booking.com",
        },
        footer: {
            location: "Albefeuille-Lagarde, France",
        },
        nav: {
            rooms: "Chambres",
            experience: "Expérience",
            contact: "Contact",
        }
    }
}

export type Locale = "en" | "fr";
export type TranslationKey = keyof typeof translations.en;
