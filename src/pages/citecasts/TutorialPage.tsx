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

  // default play first episode - move hook before conditional
  const [currentEpisode, setCurrentEpisode] = React.useState(tutorialEpisodes[0] || null);

  if (!tutorial || !instructor) return <div className="p-4">Tutorial or instructor not found.</div>;

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
              <EpisodePlayer episode={currentEpisode} summary="false"/>
            </Link>
          ) : (
            <EpisodePlayer episode={null} />
          )}

          <div className="mt-6">
            <h3 className="text-lg font-semibold">About this tutorial</h3>
            <p className="text-sm text-muted-foreground mt-2">{tutorial.description}</p>
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
          <div className="border rounded-lg p-4 bg-card">
            <h4 className="text-sm font-semibold mb-3">Tutorial Details</h4>
            <div className="space-y-2">
              <div>
                <p className="text-xs text-muted-foreground">Episodes</p>
                <p className="font-semibold">{tutorialEpisodes.length}</p>
              </div>
              {/* <div>
                <p className="text-xs text-muted-foreground">Description</p>
                <p className="text-xs mt-1">{tutorial.description}</p>
              </div> */}
            </div>
          </div>

          {/* Episodes List */}
          <SidebarEpisodes episodes={tutorialEpisodes} instructorId={instructor.id} tutorialId={tutorial.id} />
        </aside>
      </div>
    </div>
  );
}
