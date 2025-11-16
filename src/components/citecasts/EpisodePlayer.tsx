import React from "react";
import type { Episode } from "../../types";

export default function EpisodePlayer({
  episode,
}: {
  episode: Episode | null;
}) {
  if (!episode) return <div className="p-4">Select an episode to play.</div>;

  return (
    <div>
      <h3 className="text-xl font-semibold mb-2">
        {episode.number}. {episode.title}
      </h3>
      <div className="mb-4">
        <video
          key={episode.id}
          controls
          className="w-full max-h-[480px] rounded bg-black"
        >
          <source src={episode.videoUrl} />
          Your browser does not support the video tag.
        </video>
      </div>
      <p className="text-sm text-muted-foreground mb-2">
        {episode.description}
      </p>
      <details className="mb-4">
        <summary className="cursor-pointer">Summary</summary>
        <p className="mt-2 text-sm">{episode.summary}</p>
      </details>
    </div>
  );
}
