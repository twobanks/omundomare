import HeadSection from '@/components/HeadSection'
import { YouTubeVideoItem } from '@/utils/types'
import Image from 'next/image'

async function getYouTubeVideos() {
  const API_KEY = process.env.YOUTUBE_API_KEY
  const CHANNEL_ID = process.env.YOUTUBE_CHANNEL_ID
  const maxResults = 9 
  const URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet,id&order=date&type=video&maxResults=${maxResults}`
  try {
    const res = await fetch(URL, { next: { revalidate: 3600 } })
    if (!res.ok) { throw new Error(`Falha ao buscar vídeos: ${res.statusText}`) }
    const data = await res.json()
    return data.items as YouTubeVideoItem[]
  } catch (error) {
    console.error(error)
    return [] 
  }
}

export default async function VideosPage() {
  const videos = await getYouTubeVideos()
  return (
    <>
      <HeadSection image="/images/bg-hero.jpg" titulo='Vídeos' />
      <section className="bg-brand-contact py-20 md:py-24">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          {videos.length === 0 ? (
            <p className="text-center text-lg text-brand-text-muted">
              Não foi possível carregar os vídeos no momento. Tente novamente mais tarde.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              {videos.map((video) => (
                <a
                  key={video.id.videoId}
                  href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-brand-white shadow-lg transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="relative h-56 w-full">
                    <Image src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} layout="fill" objectFit="cover"/>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-sans text-md font-bold text-brand-text hover:text-brand-lilac">
                      {video.snippet.title}
                    </h3>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}