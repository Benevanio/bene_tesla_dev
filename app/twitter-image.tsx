import { ogSize, renderOgImage } from '@/components/seo/ogImage'

export const alt = 'Benevanio Santos | Engenheiro de Software Full Stack & Desktop'
export const size = ogSize
export const contentType = 'image/png'

export default function Image() {
  return renderOgImage()
}
