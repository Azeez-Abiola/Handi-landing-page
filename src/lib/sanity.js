import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const sanity = createClient({
  projectId: 'j38ff3kg',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true, // published content is read from the CDN (no token needed)
})

const builder = imageUrlBuilder(sanity)

// Build an image URL from a Sanity image reference: urlFor(img).width(800).url()
export const urlFor = (source) => builder.image(source)
