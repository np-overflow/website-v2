import { load } from "js-yaml";

import rawMeta from "../content/_meta.yaml?raw";
import rawSEO from "../content/_seo.yaml?raw";
import rawLanding from "../content/_landing.yaml?raw";
import rawTeam from "../content/_team.yaml?raw";
import rawEvents from "../content/_events.yaml?raw";

export interface Meta {
  announcement: {
    enabled: boolean;
    description: string;
    url: string;
  };
  navbar: {
    title: string;
    menu_items: {
      name: string;
      to: string;
      icon: string;
    }[];
    join_us: {
      enabled: boolean;
      text: string;
      url: string;
      icon: string;
    };
  };
  socials: {
    discord_url: string;
    instagram_url: string;
    tiktok_url: string;
    linkedin_url: string;
  };
  footer: {
    org_name: string;
    org_email: string;
    sections: {
      title: string;
      items: {
        title: string;
        to: string;
      }[];
    }[];
  };
}

export function getMeta() {
  return load(rawMeta) as Meta;
}

export interface SEO extends SEOMeta {}

export function getSEO() {
  return load(rawSEO) as SEO;
}

export interface Landing {
  hero: {
    tagline_raw: string;
    description_raw: string;
    // The name of the image in ./src/images/landing without extension
    // The image must be an SVG
    img_name: string;
    img_alt: string;
    join_us: {
      enabled: boolean;
      text: string;
      url: string;
    };
  };
  section_tagline: string;
  sections: {
    tagline_raw: string;
    description_raw: string;
    // The name of the image in ./src/images/landing without extension
    // The image must be a JPG
    img_name: string;
    img_alt: string;
    reverse: boolean;
    actions: {
      text: string;
      primary: boolean;
      to?: string;
    }[];
  }[];
  section_ending: {
    tagline: string;
    description: string;
    actions: {
      text: string;
      primary: boolean;
    }[];
  };
}

export function getLanding() {
  return load(rawLanding) as Landing;
}

export interface Team {
  title: string;
  tagline: string;
  departments: {
    title: string;
    members: {
      name: string;
      title: string;
    }[];
  }[];
}

export function getTeam() {
  return load(rawTeam) as Team;
}

interface GenericEvent {
  title: string;
  description_raw?: string;
  time: string;
  duration_minutes: number;
  registration_link?: string;
  resources: {
    title: string;
    url: string;
  }[];
  format: "online" | "physical" | "hybrid";
  workshop_folder?: string;
  event_folder?: string;
  link?: string;
}

interface OnlineEvent extends GenericEvent {
  format: "online";
  meeting_link: string;
}

interface PhysicalEvent extends GenericEvent {
  format: "physical";
  location: string;
  navigation_instructions_raw?: string;
}

interface HybridEvent extends GenericEvent {
  format: "hybrid";
  location: string;
  navigation_instructions_raw?: string;
  meeting_link: string;
}

type Event = OnlineEvent | PhysicalEvent | HybridEvent;

export interface Events {
  title: string;
  tagline: string;
  type: {
    title: string;
    events: Event[];
  }[];
}

export function getEvents() {
  return load(rawEvents) as Events;
}
