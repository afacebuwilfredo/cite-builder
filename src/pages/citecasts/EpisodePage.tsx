import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import Header from '@/components/Header';
import { episodes } from "../../data/episodes";
import { tutorials } from "../../data/tutorials";
import { instructors } from "../../data/instructors";
import EpisodePlayer from "../../components/citecasts/EpisodePlayer";

export default function EpisodePage() {
  const { instructorId, tutorialId, episodeId } = useParams<{ instructorId: string; tutorialId: string; episodeId: string }>();
  const episode = episodes.find((e) => e.id === episodeId);
  const tutorial = tutorials.find((t) => t.id === tutorialId);
  const instructor = instructors.find((i) => i.id === instructorId);

  const navigate = useNavigate();

  if (!episode || !tutorial || !instructor) return <div className="p-4">Episode not found.</div>;

  // compute prev / next
  const tutorialEpisodes = episodes.filter((e) => e.tutorialId === tutorialId).sort((a, b) => a.number - b.number);
  const idx = tutorialEpisodes.findIndex((e) => e.id === episodeId);
  const prev = tutorialEpisodes[idx - 1];
  const next = tutorialEpisodes[idx + 1];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-[1fr,320px] gap-6">
        <main>
          <EpisodePlayer episode={episode} />

          <div className="flex gap-2 mt-4">
            {prev ? <button onClick={() => navigate(`/citecasts/${instructorId}/${tutorialId}/${prev.id}`)} className="btn">← Prev</button> : null}
            {next ? <button onClick={() => navigate(`/citecasts/${instructorId}/${tutorialId}/${next.id}`)} className="btn">Next →</button> : null}
          </div>

          <div className="mt-6">
            <Link to={`/citecasts/${instructorId}/${tutorialId}`}>← Back to tutorial</Link>
          </div>
        </main>

        <aside className="w-full md:w-80 border-l p-4">
          <h4 className="text-sm font-semibold mb-2">Other episodes</h4>
          <ul className="space-y-1">
            {tutorialEpisodes.map((ep) => (
              <li key={ep.id} className={`p-2 ${ep.id === episode.id ? "bg-muted" : "hover:bg-muted/50"}`}>
                <Link to={`/citecasts/${instructorId}/${tutorialId}/${ep.id}`}>{ep.number}. {ep.title}</Link>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </div>
  );
}
