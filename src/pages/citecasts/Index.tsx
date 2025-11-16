import React from "react";
import Header from '@/components/Header';
import { instructors } from "../../data/instructors";
import { tutorials } from "../../data/tutorials";
import InstructorCard from "../../components/citecasts/InstructorCard";

export default function CiteCastsIndex() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

  <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">CiteCasts</h1>

      <section>
        <h2 className="text-lg font-semibold mb-3">Instructors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {instructors.map((ins) => {
            const count = tutorials.filter((t) => t.instructorId === ins.id).length;
            return <InstructorCard key={ins.id} instructor={ins} tutorialsCount={count} />;
          })}
        </div>
      </section>
      </div>
    </div>
  );
}
