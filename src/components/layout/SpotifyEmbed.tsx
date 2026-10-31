export interface SpotifyEmbedProps {
  playlistId: string;
  className?: string;
}

export function SpotifyEmbed({
  playlistId,
  className = "rounded-xl",
}: SpotifyEmbedProps) {
  return (
    <iframe
      title="Playlist do Spotify"
      src={`https://open.spotify.com/embed/playlist/${playlistId}`}
      width="100%"
      height="352"
      style={{ border: 0 }}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy"
      className={className}
    />
  );
}
