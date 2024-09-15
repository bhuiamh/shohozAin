import React from "react";
import { COURSESTAGES } from "../../data/courseStage";

const CourseStage = () => {
  return (
    <div className="grid tablet:grid-cols-2 gap-8">
      {COURSESTAGES.map((courseStage, index) => (
        <div key={index} className="h-full">
          <div className="card h-full flex flex-col justify-between border bg-slate-500 px-6 pt-4 pb-8 border-orange-500">
            <h1 className="text-xl font-semibold text-green-500">
              {courseStage.title}
            </h1>
            <p className="text-slate-800">{courseStage.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseStage;
