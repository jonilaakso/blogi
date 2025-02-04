/**
 * This configures the translations for all ui text in your website. 
 * 
 * All languages will follow this ordering/structure and will fallback to the
 * default language for any entries that haven't been translated 
 */
import type { SupportedLanguage } from "src/utils/i18n";

export default {
    "en": {
        "site.title": {
            text: "Astro Theme Cody"
        },
        "site.description": {
            text: "A corner of the internet where the walls are scribbled with texts about cyber and information technology."
        },
        "profile.description": {
            text: "IT-Wizard who writes about IT and Cybersecurity"
        },
        "blog.lastUpdated": {
            text: "Last updated:"
        },
        "sidebar.tableOfContents": {
            text: "Table of Contents"
        },
        "project.platform": {
            text: "PLATFORM"
        },
        "project.stack": {
            text: "STACK"
        },
        "project.website": {
            text: "WEBSITE"
        }
    },
    "fi": {
        "site.title": {
            text: "Kyberlaakso"
        },
        "site.description": {
            text: "Kulmaus internetissä jonka seinille on raapustettu kyberistä ja tietotekniikasta"
        },
        "profile.description": {
            text: "Kyberistä ja tietotekniikasta kiinnostunut IT-velho"
        },
        "blog.lastUpdated": {
            text: "Viimeeksi päivitetty:"
        },
        "sidebar.tableOfContents": {
            text: "Sisältö"
        },
        "project.platform": {
            text: "Platform"
        },
        "project.stack": {
            text: "Stack"
        },
        "project.website": {
            text: "URL"
        }
    }
} as const satisfies TranslationUIEntries;

type TranslationUIEntries = Record<SupportedLanguage, Record<string, UIEntry>>;

export type UIEntry = { text: string };