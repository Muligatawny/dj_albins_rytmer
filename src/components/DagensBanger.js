import React from "react";

const tracks = [
  { url: "https://open.spotify.com/embed/track/0GjiU2WQ8IVxmbt8WJL7TY" },
  { url: "https://open.spotify.com/embed/track/6KAmYbn7QsJ3OKTueR7R4U" },
  { url: "https://open.spotify.com/embed/track/0J3FsLl9oyGWBU3cHqQpCo" },
  { url: "https://open.spotify.com/embed/track/4o680hk0wBVpkJTUjRtIun" },
  { url: "https://open.spotify.com/embed/track/5Qxx4yvR3uiYX3mri8iqBG" },
  { url: "https://open.spotify.com/embed/track/7lnamwp4YpfAt47c5c1ZHw" },
  { url: "https://open.spotify.com/embed/track/59l1GoEusseh3v7MfgXjfZ" },
  { url: "https://open.spotify.com/embed/track/3bamCG6jFiyHsoYQBsdJSf" },
  { url: "https://open.spotify.com/embed/track/4xSYUCGzOKJuodEUrqMJyF" },
  { url: "https://open.spotify.com/embed/track/5D7AaRW9JpqquqOnEG0uOS" },
  { url: "https://open.spotify.com/embed/track/0pNNtcdOcIFwo8HBhaUCtb" },
  { url: "https://open.spotify.com/embed/track/2M6kxoxuqOJae6IrQh65kV" },
  { url: "https://open.spotify.com/embed/track/5x4QLij6TWJGtHH0w0Zt5K" }
];

const DagensBanger = () => {
  const day = new Date().getDate();
  const index = day % tracks.length;
  const track = tracks[index];

  return (
    <div className="banger">
      <h2>Dagens banger</h2>
      <iframe
        src={track.url}
        width="100%"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Dagens låt"
      ></iframe>
    </div>
  );
};

export default DagensBanger;
