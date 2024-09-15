import React, { useState } from "react";
import { Code2, LightbulbIcon, VideoIcon } from "lucide-react";
import { FEATURES } from "../../data/feature";

const Features = () => {
  // State to manage the currently expanded feature index
  const [expandedFeatureIndex, setExpandedFeatureIndex] = useState(null);

  // Toggle function
  const toggleExpand = (index) => {
    // Set the expanded feature to the clicked index or collapse if already expanded
    setExpandedFeatureIndex(expandedFeatureIndex === index ? null : index);
  };

  return (
    <div className="flex justify-between gap-8 mt-28">
      {FEATURES.map((feature, index) => (
        <div
          key={index}
          className="feature-item border-2 border-orange-500 hover:border-2 hover:border-orange-500 rounded"
        >
          <div className="card bg-base-100 w-96 hover:shadow-xl">
            <div className="card-body">
              <h2 className="text-3xl">
                <feature.icon width="50px" height="50px" />
              </h2>
              <h2 className="card-title">{feature.title}</h2>
              <p
                className={`line-clamp-6 ${
                  expandedFeatureIndex === index ? "line-clamp-none" : ""
                }`}
              >
                {feature.description}
              </p>
              <button
                onClick={() => toggleExpand(index)}
                className="text-blue-500 hover:underline mt-2"
              >
                {expandedFeatureIndex === index ? "Show Less" : "Show More"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Features;
