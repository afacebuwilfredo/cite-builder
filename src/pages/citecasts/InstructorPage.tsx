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

      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-[1fr,300px] gap-6">
        <main>
          <div className="flex items-center gap-4 mb-6">
            <img src={instructor.avatar} alt={instructor.name} className="h-20 w-20 rounded-full object-cover" />
            <div>
              <h1 className="text-2xl font-bold">{instructor.name}</h1>
              <p className="text-sm text-muted-foreground">{instructor.bio}</p>
            </div>
          </div>

          <section>
            <h2 className="text-lg font-semibold mb-3">Tutorials</h2>
            <div className="grid gap-6 md:grid-cols-2">
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
        </main>

        <aside className="w-full md:w-80 space-y-6">
          {/* Quick Stats */}
          <div className="border rounded-lg p-4 bg-card">
            <h4 className="text-sm font-semibold mb-3">Statistics</h4>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Tutorials</span>
                <span className="font-semibold">{instructorTutorials.length}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Episodes</span>
                <span className="font-semibold">{episodes.filter(e => instructorTutorials.some(t => t.id === e.tutorialId)).length}</span>
              </div>
            </div>
          </div>

          {/* All Tutorials List */}
          <div className="border rounded-lg p-4 bg-card">
            <h4 className="text-sm font-semibold mb-3">All Tutorials</h4>
            <ul className="space-y-2 max-h-96 overflow-y-auto">
              {instructorTutorials.map((t) => {
                const count = episodes.filter(e => e.tutorialId === t.id).length;
                return (
                  <li key={t.id}>
                    <Link to={`/citecasts/${instructor.id}/${t.id}`} className="text-xs hover:underline block">
                      <div className="font-medium">{t.title}</div>
                      <div className="text-muted-foreground">{count} episodes</div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* All Instructors List */}
          <div className="border rounded-lg p-4 bg-card">
            <h4 className="text-sm font-semibold mb-3">All Instructors</h4>
            <ul className="space-y-2 max-h-96 overflow-y-auto">
              {instructors.map((ins) => {
                const count = tutorials.filter((t) => t.instructorId === ins.id).length;
                return (
                  <li key={ins.id} className={`p-2 rounded transition-colors ${ins.id === instructor.id ? "bg-primary/10" : "hover:bg-muted"}`}>
                    <Link to={`/citecasts/${ins.id}`} className="text-xs block">
                      <div className="flex items-center gap-2 mb-1">
                        <img src={ins.avatar} alt={ins.name} className="h-6 w-6 rounded-full object-cover" />
                        <span className="font-medium">{ins.name}</span>
                      </div>
                      <div className="text-muted-foreground ml-8">{count} tutorials</div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
