import { SpotifyEpisode } from '@/utils/types'
import Image from 'next/image'

async function getSpotifyAccessToken() {
  const client_id = process.env.SPOTIFY_CLIENT_ID
  const client_secret = process.env.SPOTIFY_CLIENT_SECRET
  const basicAuth = Buffer.from(`${client_id}:${client_secret}`).toString('base64')
  const res = await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${basicAuth}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: 'grant_type=client_credentials',
    cache: 'no-store',
  })
  if (!res.ok) {
    throw new Error('Falha ao autenticar com o Spotify')
  }
  const data = await res.json()
  return data.access_token as string
}

async function getPodcastEpisodes() {
  try {
    const accessToken = await getSpotifyAccessToken()
    const SHOW_ID = process.env.SPOTIFY_SHOW_ID
    const maxResults = 9 // Quantos episódios queremos buscar
    const URL = `https://api.spotify.com/v1/shows/${SHOW_ID}/episodes?limit=${maxResults}&market=BR`
    const res = await fetch(URL, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      next: { revalidate: 3600 },
    })
    if (!res.ok) {
      throw new Error(`Falha ao buscar episódios: ${res.statusText}`)
    }
    const data = await res.json()
    return data.items as SpotifyEpisode[]
  } catch (error) {
    console.error(error)
    return [] 
  }
}

export default async function PodcastPage() {
  const episodes = await getPodcastEpisodes()
  return (
    <>
      <section className="relative flex h-[40vh] min-h-[300px] items-center justify-center text-center">
        <Image src="/images/mapa-astral.webp" alt="Galáxia com tons de roxo e azul" layout="fill" objectFit="cover" quality={75} className="-z-10 brightness-50"  />
        <div className="z-10 p-4 text-brand-white">
          <h1 className="font-serif text-6xl font-bold tracking-widest"> Entregando o Ouro </h1>
        </div>
      </section>
      <section className="bg-brand-white py-20 md:py-24">
        <div className="container mx-auto max-w-7xl px-6 lg:px-8">
          {episodes.length === 0 ? (
            <p className="text-center text-lg text-brand-text-muted">
              Não foi possível carregar os episódios no momento.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
              {episodes.map((episode) => (
                <a
                  key={episode.id}
                  href={episode.external_urls.spotify} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-brand-white shadow-lg transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="relative h-64 w-full">
                    <Image
                      src={episode.images[0].url} 
                      alt={episode.name}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-sm text-brand-text-muted">
                      {new Date(episode.release_date).toLocaleDateString('pt-BR', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </p>
                    <h3 className="mt-2 font-serif text-xl font-bold text-brand-text hover:text-brand-lilac">
                      {episode.name}
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