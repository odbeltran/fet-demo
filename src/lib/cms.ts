import defaultConfig from "@/data/config.json";
import defaultPrograms from "@/data/programs.json";

const KEY_CONFIG = "cms_config_v1";
const KEY_PROGRAMS = "cms_programs_v1";

function getStorage<T>(key: string, fallback: T): T {
  if (typeof window === "undefined") return fallback;
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

export function getConfig() {
  const override = getStorage<typeof defaultConfig>(KEY_CONFIG, defaultConfig);
  // merge superficial por si agregas nuevos campos en default
  return { ...defaultConfig, ...override };
}

export function saveConfig(next: any) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY_CONFIG, JSON.stringify(next));
}

export function getPrograms() {
  return getStorage<typeof defaultPrograms>(KEY_PROGRAMS, defaultPrograms);
}

export function savePrograms(next: any) {
  if (typeof window === "undefined") return;
  localStorage.setItem(KEY_PROGRAMS, JSON.stringify(next));
}
