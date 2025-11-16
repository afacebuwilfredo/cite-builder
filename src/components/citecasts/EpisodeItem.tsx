import React from "react";
import type { Episode } from "../../types";
import { Link, useLocation } from "react-router-dom";

export default function EpisodeItem({
  episode,
  instructorId,
  tutorialId,
}: {
  episode: Episode;
  instructorId: string;
  tutorialId: string;
}) {
  const loc = useLocation();
  const active = loc.pathname.endsWith(`/${episode.id}`);

  return (
    <li
      className={`flex justify-between items-center p-2 rounded ${
        active ? "bg-surface" : "hover:bg-muted/50"
      }`}
    >
      <Link
        to={`/citecasts/${instructorId}/${tutorialId}/${episode.id}`}
        className="flex-1"
      >
        <div className="text-sm font-medium">
          {episode.number}. {episode.title}
        </div>
        <div className="text-xs text-muted-foreground">
          {episode.duration} • {episode.free ? "Free" : "Premium"}
        </div>
      </Link>
    </li>
  );
}
