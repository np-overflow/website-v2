import { load } from 'js-yaml'

import rawMeta from '../content/meta.yaml?raw';

export interface Meta {
  title: string
  logos: {
    light: string
    dark: string
  }
  menu_items: {
    name: string
    to: string
    icon: string
  }[]
  join_url: string
  discord_url: string
  instagram_url: string
}

export function getMeta() {
  return load(rawMeta) as Meta
}

