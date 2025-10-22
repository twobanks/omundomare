import { StaticImageData } from "next/image"

export type Servico = {
  titulo: string
  preco: string
  descricao: string
  imagemUrl: string
  alt: string
}

export type ServiceCardProps = {
  imagemUrl: StaticImageData | string
  alt: string
  titulo: string
  descricao: string
  link: string
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