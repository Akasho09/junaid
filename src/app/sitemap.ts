// src/app/sitemap.ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://junaid12.vercel.app'
  return [
    { url: base,              lastModified: new Date(), changeFrequency: 'monthly', priority: 1 },
    { url: `${base}/cricket`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/stats`,   lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/academics`,lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/gallery`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: 'yearly',  priority: 0.5 },
  ]
}