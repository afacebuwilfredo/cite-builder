import React from "react";
import type { Tutorial } from "../../types";
import { Link } from "react-router-dom";

export default function TutorialItem({
  tutorial,
  instructorId,
  episodesCount,
}: {
  tutorial: Tutorial;
  instructorId: string;
  episodesCount: number;
}) {
  return (
    <div className="border-b py-4">
      <Link to={`/citecasts/${instructorId}/${tutorial.id}`} className="block">
        <div className="flex justify-between items-start">
          <div>
            <h4 className="text-lg font-semibold">{tutorial.title}</h4>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {tutorial.description}
            </p>
            <div className="mt-2 text-xs text-muted-foreground">
              {episodesCount} episodes • {tutorial.level}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
