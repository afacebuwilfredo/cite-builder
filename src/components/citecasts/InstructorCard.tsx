import React from "react";
import type { Instructor } from "../../types";
import { Link } from "react-router-dom";

export default function InstructorCard({
  instructor,
  tutorialsCount,
}: {
  instructor: Instructor;
  tutorialsCount: number;
}) {
  return (
    <Link
      to={`/citecasts/${instructor.id}`}
      className="block rounded-lg border p-4 hover:shadow-lg transition-shadow"
    >
      <div className="flex items-center gap-4">
        <img
          src={instructor.avatar}
          alt={instructor.name}
          className="h-14 w-14 rounded-full object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">{instructor.name}</h3>
          <p className="text-sm text-muted-foreground">{instructor.bio}</p>
          <p className="mt-2 text-xs text-muted-foreground">
            {tutorialsCount} tutorial(s)
          </p>
        </div>
      </div>
    </Link>
  );
}
