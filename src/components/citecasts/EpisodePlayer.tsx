import React from "react";
import type { Episode } from "../../types";

export default function EpisodePlayer({
  episode, summary
}: {
  episode: Episode | null;
  summary?: Episode | string ;
}) {
  if (!episode) return <div className="p-4">Select an episode to play.</div>;
  console.log(episode)
  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">
        {episode.number}. {episode.title}
      </h3>
      <div className="mb-4">
         <video
          key={episode.id}
          controls
          playsInline
          className="w-full aspect-video rounded bg-black object-contain"
          style={{ transform: "none", filter: "none" }}
        >
          <source src={episode.videoUrl} />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="text-sm text-muted-foreground mb-2">
        {episode.description}
      </p>
      {summary == "false" ?  <></> : (<details className="mb-4">
        <summary className="cursor-pointer">Summary</summary>
        <p className="mt-2 text-sm">{episode.summary}</p>
      </details>)}
    </div>
  );
}
