import { StaticImageData } from "next/image"

export type Servico = {
  titulo: string
  preco?: string
  descricao: string
  imagemUrl: StaticImageData | string
  alt?: string
  link?: string
}

export type YouTubeVideoItem = {
  id: {
    videoId: string
  }
  snippet: {
    title: string
    description: string
    thumbnails: {
      medium: {
        url: string
      }
    }
  }
}

export type SpotifyEpisode = {
  id: string
  name: string
  description: string
  release_date: string
  images: {
    url: string
  }[]
  external_urls: {
    spotify: string
  }
}