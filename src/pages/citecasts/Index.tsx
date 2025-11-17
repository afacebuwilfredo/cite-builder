import React from "react";
import { Link } from "react-router-dom";
import Header from '@/components/Header';
import { instructors } from "../../data/instructors";
import { tutorials } from "../../data/tutorials";
import { episodes } from "../../data/episodes";
import InstructorCard from "../../components/citecasts/InstructorCard";

export default function CiteCastsIndex() {
  const [viewMode, setViewMode] = React.useState<"instructors" | "tutorials">("instructors");

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-[1fr,300px] gap-6">
        <main>
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold">CiteCasts</h1>
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("instructors")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  viewMode === "instructors"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                Instructors
              </button>
              <button
                onClick={() => setViewMode("tutorials")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  viewMode === "tutorials"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted hover:bg-muted/80"
                }`}
              >
                Tutorials
              </button>
            </div>
          </div>

          <section>
            {viewMode === "instructors" ? (
              <>
                <h2 className="text-lg font-semibold mb-3">Instructors</h2>
                <div className="grid grid-cols-1 gap-4">
                  {instructors.map((ins) => {
                    const count = tutorials.filter((t) => t.instructorId === ins.id).length;
                    return <InstructorCard key={ins.id} instructor={ins} tutorialsCount={count} />;
                  })}
                </div>
              </>
            ) : (
              <>
                <h2 className="text-lg font-semibold mb-3">All Tutorials</h2>
                <div className="grid grid-cols-1 gap-4">
                  {tutorials.map((t) => {
                    const inst = instructors.find(i => i.id === t.instructorId);
                    const count = episodes.filter(e => e.tutorialId === t.id).length;
                    return (
                      <Link key={t.id} to={`/citecasts/${t.instructorId}/${t.id}`} className="border rounded-lg bg-card p-4 shadow hover:shadow-lg transition-shadow">
                        <h3 className="font-semibold mb-2">{t.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{t.description}</p>
                        <div className="flex justify-between text-xs text-muted-foreground">
                          <span>{inst?.name}</span>
                          <span>{count} episodes</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
          </section>
        </main>

        <aside className="w-full md:w-80 space-y-6">
          {/* Instructors Summary */}
          <div className="border rounded-lg p-4 bg-card">
            <h4 className="text-sm font-semibold mb-3">All Instructors</h4>
            <ul className="space-y-2 max-h-96 overflow-y-auto">
              {instructors.map((ins) => {
                const count = tutorials.filter((t) => t.instructorId === ins.id).length;
                return (
                  <li key={ins.id}>
                    <Link to={`/citecasts/${ins.id}`} className="text-xs hover:underline block">
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

          {/* Tutorials Summary */}
          <div className="border rounded-lg p-4 bg-card">
            <h4 className="text-sm font-semibold mb-3">All Tutorials</h4>
            <ul className="space-y-2 max-h-96 overflow-y-auto">
              {tutorials.map((t) => {
                const inst = instructors.find(i => i.id === t.instructorId);
                const count = episodes.filter(e => e.tutorialId === t.id).length;
                return (
                  <li key={t.id}>
                    <Link to={`/citecasts/${t.instructorId}/${t.id}`} className="text-xs hover:underline block">
                      <div className="font-medium">{t.title}</div>
                      <div className="text-muted-foreground">{inst?.name} • {count} episodes</div>
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
