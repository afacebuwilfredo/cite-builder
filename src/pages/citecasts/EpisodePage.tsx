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

        <aside className="w-full md:w-80 space-y-6">
          {/* Instructor Info */}
          <div className="border rounded-lg p-4 bg-card">
            <h4 className="text-sm font-semibold mb-3">Instructor</h4>
            <div className="flex flex-col items-center text-center">
              <img src={instructor.avatar} alt={instructor.name} className="h-16 w-16 rounded-full object-cover mb-2" />
              <Link to={`/citecasts/${instructor.id}`} className="font-semibold hover:underline">{instructor.name}</Link>
              <p className="text-xs text-muted-foreground mt-1">{instructor.bio}</p>
            </div>
          </div>

          {/* Tutorial Info */}
          {/* <div className="border rounded-lg p-4 bg-card">
            <h4 className="text-sm font-semibold mb-3">Tutorial</h4>
            <h5 className="font-semibold text-sm mb-2">{tutorial.title}</h5>
            <p className="text-xs text-muted-foreground">{tutorial.description}</p>
          </div> */}

          {/* Episodes List */}
          <div className="border rounded-lg p-4 bg-card">
            <h4 className="text-sm font-semibold mb-3">Episodes</h4>
            <ul className="space-y-1 max-h-96 overflow-y-auto">
              {tutorialEpisodes.map((ep) => (
                <li key={ep.id} className={`p-2 rounded cursor-pointer transition-colors ${ep.id === episode.id ? "bg-primary text-primary-foreground" : "hover:bg-muted"}`}>
                  <Link to={`/citecasts/${instructorId}/${tutorialId}/${ep.id}`} className="text-xs block">{ep.number}. {ep.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
