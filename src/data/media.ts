import fs from 'node:fs';
import path from 'node:path';

// Media is discovered at build time, not hardcoded. Drop a file into
// public/media/projects/ named after the slug and the project lights up on its
// own — no code edit, which is the point for a 3-hrs-a-week owner.
//
// Video wins over image when both exist.
const DIR = path.resolve('public/media/projects');

export type Media =
  | { kind: 'video'; src: string; poster: string }
  | { kind: 'image'; src: string }
  | null;

const exists = (f: string) => {
  try { return fs.existsSync(path.join(DIR, f)); } catch { return false; }
};

export function mediaFor(slug: string): Media {
  if (exists(`${slug}.mp4`)) {
    return {
      kind: 'video',
      src: `/media/projects/${slug}.mp4`,
      poster: exists(`${slug}.jpg`) ? `/media/projects/${slug}.jpg` : '',
    };
  }
  if (exists(`${slug}.jpg`)) return { kind: 'image', src: `/media/projects/${slug}.jpg` };
  return null;
}

/** Tall vertical atmosphere for an act's sticky left column.
 *  site/public/media/bg/<act-id>.mp4 (+ .jpg poster). */
export function backdropFor(id: string): { src: string; poster: string } | null {
  const dir = path.resolve('public/media/bg');
  try {
    if (!fs.existsSync(path.join(dir, `${id}.mp4`))) return null;
    return {
      src: `/media/bg/${id}.mp4`,
      poster: fs.existsSync(path.join(dir, `${id}.jpg`)) ? `/media/bg/${id}.jpg` : '',
    };
  } catch {
    return null;
  }
}

/** Is the opening montage in place yet? The hero has a full typographic
 *  fallback so the landing page is never a black screen waiting on a file. */
export function hasMontage(): boolean {
  try {
    return fs.existsSync(path.resolve('public/media/montage.mp4'));
  } catch {
    return false;
  }
}

/** Images for two minor builds shown side by side in one beat, instead of each
 *  claiming a full screen of its own. Falls back gracefully if only one landed. */
export function pairMedia(slugs: [string, string]): { slug: string; src: string }[] {
  return slugs
    .map((slug) => {
      const m = mediaFor(slug);
      return m ? { slug, src: m.kind === 'video' ? m.poster || m.src : m.src } : null;
    })
    .filter((x): x is { slug: string; src: string } => x !== null);
}

/** Extra stills for a project: <slug>-1.jpg, <slug>-2.jpg … */
export function stillsFor(slug: string): string[] {
  const out: string[] = [];
  for (let i = 1; i <= 12; i++) {
    if (exists(`${slug}-${i}.jpg`)) out.push(`/media/projects/${slug}-${i}.jpg`);
  }
  return out;
}
