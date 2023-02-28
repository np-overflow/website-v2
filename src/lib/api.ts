import { load } from 'js-yaml'

import rawMeta from '../content/meta.yaml?raw';
import rawSEO from '../content/seo.yaml?raw'
import rawLanding from '../content/landing.yaml?raw'

export interface Meta {
  announcement: {
    enabled: boolean
    description: string
    url: string
  }
  navbar: {
    title: string
    menu_items: {
      name: string
      to: string
      icon: string
    }[]
    join_us: {
      enabled: boolean
      text: string
      url: string
      icon: string
    }
  }
  socials: {
    discord_url: string
    instagram_url: string
  }
}

export function getMeta() {
  return load(rawMeta) as Meta
}

export interface SEO extends SEOMeta {
}

export function getSEO() {
  return load(rawSEO) as SEO
}

export interface Landing {
  hero: {
    tagline_raw: string
    description_raw: string
    img_src: string
    join_us: {
      enabled: boolean
      text: string
      url: string
    }
  }
}

export function getLanding() {
  return load(rawLanding) as Landing
}
