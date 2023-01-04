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

export function useMeta() {
  return useAsyncData('meta', () => {
    return queryContent<Meta>('meta').findOne()
  })
}

export interface Landing {
  hero: {
    img_url: string
  }
}

export function useLanding() {
  return useAsyncData('landing', () => {
    return queryContent<Landing>('landing').findOne()
  })
}

export interface Workshops {
  workshops: {
    name: string
    slug: string
    image: string
    start_date: string
    end_date: string
    meeting_url: string
    description: string
  }[]
}

export function useWorkshops() {
  return useAsyncData('workshops', () => {
    return queryContent('workshops').findOne()
  })
}

export interface Team {
  exco: {
    name: string
    role: string
  }[]
}

export function useTeam() {
  return useAsyncData('team', () => {
    return queryContent<Team>('team').findOne()
  })
}
