import { load } from 'js-yaml'

import rawMeta from '../content/_meta.yaml?raw';
import rawSEO from '../content/_seo.yaml?raw'
import rawLanding from '../content/_landing.yaml?raw'
import rawTeam from '../content/_team.yaml?raw'

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
  footer: {
    org_name: string
    org_email: string
    sections: {
      title: string
      items: {
        title: string
        to: string
      }[]
    }[]
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
    img_alt: string
    join_us: {
      enabled: boolean
      text: string
      url: string
    }
  }
  section_tagline: string
  sections: {
    tagline_raw: string
    description_raw: string
    img_src: string
    img_alt: string
    reverse: boolean
    actions: {
      text: string
      primary: boolean
    }[]
  }[]
  section_ending: {
    tagline: string
    description: string
    actions: {
      text: string
      primary: boolean
    }[]
  }
}

export function getLanding() {
  return load(rawLanding) as Landing
}

export interface Team {
  title: string
  tagline: string
  departments: {
    title: string
    members: {
      name: string
      title: string
    }[]
  }[]
}

export function getTeam() {
  return load(rawTeam) as Team
}
