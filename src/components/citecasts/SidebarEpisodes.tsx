import React from "react";
import type { Episode } from "../../types";
import EpisodeItem from "./EpisodeItem";

export default function SidebarEpisodes({
  episodes,
  instructorId,
  tutorialId,
}: {
  episodes: Episode[];
  instructorId: string;
  tutorialId: string;
}) {
  return (
    <aside className="w-full md:w-80 border-l p-4">
      <h4 className="text-sm font-semibold mb-2">Episodes</h4>
      <ul className="space-y-1">
        {episodes.map((ep) => (
          <EpisodeItem
            key={ep.id}
            episode={ep}
            instructorId={instructorId}
            tutorialId={tutorialId}
          />
        ))}
      </ul>
    </aside>
  );
}
