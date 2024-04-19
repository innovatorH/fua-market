import type { Metadata } from 'next'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  siteName: 'FuaMarket',
  title: 'FuaMarket',
  description: 'Elevate YourSelf with Endless Possibilities.',
  images: [
    {
      url: 'https://www.pexels.com/photo/green-high-top-sneakers-beside-bottoms-and-sunglasses-934069/',
    },
  ],
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
