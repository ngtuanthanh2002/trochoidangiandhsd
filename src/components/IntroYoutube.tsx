import YouTube from 'react-youtube';

const VIDEO_ID = 'kS7FBue5NeI';

export default function IntroYoutube() {
  const origin =
    typeof window !== 'undefined' ? window.location.origin : 'https://trochoidangian.vercel.app';

  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      rel: 0,
      modestbranding: 1,
      playsinline: 1,
      origin,
    },
  };

  return (
    <YouTube
      videoId={VIDEO_ID}
      opts={opts}
      className="intro-video-youtube"
      iframeClassName="intro-video-iframe"
      title="Video giới thiệu trò chơi dân gian"
      onReady={(e) => {
        const ifr = e.target.getIframe?.();
        if (ifr) {
          ifr.style.position = 'absolute';
          ifr.style.inset = '0';
          ifr.style.width = '100%';
          ifr.style.height = '100%';
        }
      }}
    />
  );
}
