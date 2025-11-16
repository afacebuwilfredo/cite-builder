import React from "react";
import { useParams, Link } from "react-router-dom";
import Header from '@/components/Header';
import { instructors } from "../../data/instructors";
import { tutorials } from "../../data/tutorials";
import { episodes } from "../../data/episodes";
import TutorialItem from "../../components/citecasts/TutorialItem";

export default function InstructorPage() {
  const { instructorId } = useParams<{ instructorId: string }>();
  const instructor = instructors.find((i) => i.id === instructorId);
  const instructorTutorials = tutorials.filter((t) => t.instructorId === instructorId);

  if (!instructor) return <div className="p-4">Instructor not found.</div>;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto p-4">
        <div className="flex items-center gap-4 mb-6">
          <img src={instructor.avatar} alt={instructor.name} className="h-20 w-20 rounded-full object-cover" />
          <div>
            <h1 className="text-2xl font-bold">{instructor.name}</h1>
            <p className="text-sm text-muted-foreground">{instructor.bio}</p>
          </div>
        </div>

        <section>
          <h2 className="text-lg font-semibold mb-3">Tutorials</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {instructorTutorials.map((t) => {
              const count = episodes.filter(e => e.tutorialId === t.id).length;
              return (
                <div key={t.id} className="border rounded-lg bg-card p-4 shadow hover:shadow-lg transition-shadow">
                  <TutorialItem tutorial={t} instructorId={instructor.id} episodesCount={count} />
                </div>
              );
            })}
          </div>

          <div className="mt-6">
            <Link to="/citecasts" className="text-sm">← Back to Instructors</Link>
          </div>
        </section>
      </div>
    </div>
  );
}
