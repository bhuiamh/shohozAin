import React from "react";
import { FEATURES } from "../../data/feature";
import { LightbulbIcon } from "lucide-react";

const Features = () => {
  return (
    <div className="flex justify-between gap-8">
      {FEATURES.map((feature, index) => (
        <div key={index} className="feature-item">
          <div className="card bg-base-100 w-96 shadow-xl">
            <div className="card-body">
              <h2 className="text-3xl">
                <feature.icon width="50px" height="50px" />
              </h2>
              <h2 className="card-title">{feature.title}</h2>
              <p className="line-clamp-6">{feature.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
