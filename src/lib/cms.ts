// src/lib/cms.ts
import defaultConfig from "@/data/config.json";
import defaultPrograms from "@/data/programs.json";

export type Config = {
  heroImages: string[];
  ofertaAcademicaTitle: string;
  ofertaAcademicaSubtitle: string;
};

export type Program = {
  title: string;
  desc: string;
  tag?: string;
};

const KEY_CONFIG = "cms_config_v1";
const KEY_PROGRAMS = "cms_programs_v1";

function getStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as unknown as T) : fallback;
  } catch {
    return fallback;
  }
}

export function getConfig(): Config {
  // merge superficial por si agregas campos nuevos en default
  const override = getStorage<Config>(KEY_CONFIG, defaultConfig as Config);
  return { ...(defaultConfig as Config), ...override };
}

export function saveConfig(next: Config): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY_CONFIG, JSON.stringify(next));
}

export function getPrograms(): Program[] {
  return getStorage<Program[]>(KEY_PROGRAMS, defaultPrograms as Program[]);
}

export function savePrograms(next: Program[]): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY_PROGRAMS, JSON.stringify(next));
}
