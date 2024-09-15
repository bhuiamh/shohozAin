{
  /* <div className="flex justify-between gap-8 mt-28"> */
}
import React, { useState } from "react";
import { Code2, LightbulbIcon, VideoIcon } from "lucide-react";
import { FEATURES } from "../../data/feature";

const Features = () => {
  // State to manage the id of the currently expanded feature
  const [expandedFeatureId, setExpandedFeatureId] = useState(null);

  // Toggle function to handle expansion and collapse
  const toggleExpand = (id) => {
    setExpandedFeatureId(expandedFeatureId === id ? null : id);
  };

  return (
    <div className="grid grid-cols-3 gap-8 py-28">
      {FEATURES.map((feature, index) => (
        <div
          key={index}
          className="w-full card bg-base-100 hover:shadow-xl feature-item border-2 border-orange-500 hover:border-2 hover:border-orange-500 rounded p-4"
        >
          <div className="">
            <div className="card-body">
              <h2 className="text-3xl">
                <feature.icon width="50px" height="50px" />
              </h2>
              <h2 className="card-title text-slate-700">{feature.title}</h2>
              <p
                className={`line-clamp-6 text-slate-700 text-justify ${
                  expandedFeatureId === index ? "line-clamp-none" : ""
                }`}
              >
                {feature.description}
              </p>
              <button
                onClick={() => toggleExpand(index)}
                className="text-blue-500 hover:underline mt-2"
              >
                {expandedFeatureId === index ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
