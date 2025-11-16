import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from '@/components/Header';
import { tutorials } from "../../data/tutorials";
import { instructors } from "../../data/instructors";
import { episodes } from "../../data/episodes";
import EpisodePlayer from "../../components/citecasts/EpisodePlayer";
import SidebarEpisodes from "../../components/citecasts/SidebarEpisodes";

export default function TutorialPage() {
  const { instructorId, tutorialId } = useParams<{ instructorId: string; tutorialId: string }>();
  const tutorial = tutorials.find((t) => t.id === tutorialId);
  const instructor = instructors.find((i) => i.id === instructorId);
  const tutorialEpisodes = episodes.filter((e) => e.tutorialId === tutorialId).sort((a, b) => a.number - b.number);

  if (!tutorial || !instructor) return <div className="p-4">Tutorial or instructor not found.</div>;

  // default play first episode
  const [currentEpisode, setCurrentEpisode] = React.useState(tutorialEpisodes[0] || null);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-[1fr,320px] gap-6">
        <main>
          <div className="mb-4">
            <h1 className="text-2xl font-bold">{tutorial.title}</h1>
            <p className="text-sm text-muted-foreground">By <Link to={`/citecasts/${instructor.id}`} className="underline">{instructor.name}</Link></p>
          </div>

          {/* Make the player clickable to open the episode page */}
          {currentEpisode ? (
            <Link to={`/citecasts/${instructor.id}/${tutorial.id}/${currentEpisode.id}`}>
              <EpisodePlayer episode={currentEpisode} />
            </Link>
          ) : (
            <EpisodePlayer episode={null} />
          )}

          <div className="mt-6">
            <h3 className="text-lg font-semibold">About this tutorial</h3>
            <p className="text-sm text-muted-foreground mt-2">{tutorial.description}</p>
          </div>
        </main>

        <SidebarEpisodes episodes={tutorialEpisodes} instructorId={instructor.id} tutorialId={tutorial.id} />
      </div>
    </div>
  );
}
