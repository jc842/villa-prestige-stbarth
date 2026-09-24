export interface SiteConfig {
  name: string;
  siteName: string;
  domain: string;
  url: string;
  siteUrl: string;
  description: string;
  siteDescription: string;
  defaultAuthor: string;
  repo: string;
  i18n: { defaultLocale: string; locales: string[]; prefixDefaultLocale: boolean; };
  theme: { style: string; fontFamily: string; colorScheme: string; };
  matomo: { url: string; siteId: string; containerId: string; };
  revive: { reviveId: string; scriptUrl: string; zones: Record<string, { zoneId: number; format: string }>; };
  legal: { editor: string; address: string; contactEmail: string; hostName: string; hostAddress: string; };
  categories: Array<{ id: string; label: string }>;
}

export const siteConfig: SiteConfig = {
  name: "Villa Prestige Saint-Barth — Collection Exclusive de Villas d'Exception & Séjours Privés à Saint-Barthélemy",
  siteName: "villa-prestige-stbarth.com",
  domain: "villa-prestige-stbarth.com",
  url: "https://villa-prestige-stbarth.com",
  siteUrl: "https://villa-prestige-stbarth.com",
  description: "Collection confidentielle des plus prestigieuses propriétés de villégiature à Saint-Barthélemy : domaines suspendus sur la falaise, piscines miroir face à la mer, conciergerie 24/7 et services sur mesure.",
  siteDescription: "Collection confidentielle des plus prestigieuses propriétés de villégiature à Saint-Barthélemy : domaines suspendus sur la falaise, piscines miroir face à la mer, conciergerie 24/7 et services sur mesure.",
  defaultAuthor: "La Direction Villa Prestige St-Barth",
  repo: "jc842/villa-prestige-stbarth",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "es"],
    prefixDefaultLocale: false,
  },

  theme: {
    style: "lexington-semplice",
    fontFamily: "Cormorant Garamond, serif",
    colorScheme: "amber",
  },

  matomo: {
    url: "https://analytics.les4h.fr/",
    siteId: "112",
    containerId: "dHcfAvF3",
  },

  revive: {
    reviveId: "ac119b122a644588953c74c4c1daee06",
    scriptUrl: "//ads.les4h.fr/www/delivery/asyncjs.php",
    zones: {
      mobileSticky: { zoneId: 758, format: "mobileBanner" },
      inContent: { zoneId: 757, format: "mediumRectangle" },
      header: { zoneId: 756, format: "leaderboard" },
      halfPage: { zoneId: 754, format: "halfPage" },
      largeRectangle: { zoneId: 755, format: "largeRectangle" },
      skyscraper: { zoneId: 759, format: "skyscraper" },
    },
  },

  legal: {
    editor: "Villa Prestige Saint-Barth Private Office",
    address: "Les Galeries du Commerce, Saint-Jean, 97133 Saint-Barthélemy",
    contactEmail: "concierge@villa-prestige-stbarth.com",
    hostName: "Cloudflare Pages",
    hostAddress: "101 Townsend St, San Francisco, CA 94107, USA",
  },

  categories: [
    { id: "domaines-exception", label: "Domaines d'Exception & Falaises" },
    { id: "baie-saint-jean", label: "Saint-Jean & Plages Secrètes" },
    { id: "conciergerie-privee", label: "Conciergerie Privée & Chefs" },
    { id: "art-de-recevoir", label: "Art de Recevoir & Événements" },
  ],
};
