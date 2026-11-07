import audioFormats from '@/content/guides/audio-formats-bitrate'
import degreesRadians from '@/content/guides/degrees-vs-radians'
import hardwareTests from '@/content/guides/hardware-tests'
import imageFormats from '@/content/guides/image-formats'
import keyboardMouse from '@/content/guides/keyboard-mouse-problems'
import localTools from '@/content/guides/local-browser-tools'
import microphone from '@/content/guides/microphone-not-working'
import photoMetadata from '@/content/guides/remove-photo-metadata'
import reduceImageSize from '@/content/guides/reduce-image-file-size'
import resizeConvert from '@/content/guides/resize-convert-images'
import calcMistakes from '@/content/guides/scientific-calculator-mistakes'
import trimConvert from '@/content/guides/trim-convert-audio'
import typingSpeed from '@/content/guides/typing-speed-wpm'
import unitMistakes from '@/content/guides/unit-conversion-mistakes'
import webcam from '@/content/guides/webcam-not-working'
import { slugify } from '@/lib/slug'


function wordCount(guide) {
  let words = 0
  const count = (text) => {
    words += String(text).split(/\s+/).filter(Boolean).length
  }
  for (const section of guide.sections) {
    for (const block of section.blocks) {
      if (block.p) count(block.p)
      if (block.note) count(block.note)
      for (const item of block.ul || block.ol || []) count(item)
      if (block.table) block.table.rows.flat().forEach(count)
    }
  }
  return words
}

function prepare(guide) {
  return {
    ...guide,
    sections: guide.sections.map((section) => ({ id: slugify(section.heading), ...section })),
    readMinutes: Math.max(2, Math.round(wordCount(guide) / 220)),
  }
}

/** Ordered by topic, then by how a reader would naturally progress. */
export const GUIDES = [
  imageFormats,
  resizeConvert,
  reduceImageSize,
  photoMetadata,
  audioFormats,
  trimConvert,
  hardwareTests,
  microphone,
  webcam,
  keyboardMouse,
  degreesRadians,
  calcMistakes,
  unitMistakes,
  typingSpeed,
  localTools,
].map(prepare)

export function getGuide(slug) {
  return GUIDES.find((guide) => guide.slug === slug)
}

export function relatedGuides(guide, limit) {
  const sameTopic = GUIDES.filter((item) => item.slug !== guide.slug && item.topic === guide.topic)
  const rest = GUIDES.filter((item) => item.slug !== guide.slug && item.topic !== guide.topic)
  return [...sameTopic, ...rest].slice(0, limit)
}

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

/** Formats an ISO date (YYYY-MM-DD) the same way on the server and in the browser. */
export function formatDate(iso) {
  const [year, month, day] = iso.split('-').map(Number)
  return `${day} ${MONTHS[month - 1]} ${year}`
}
