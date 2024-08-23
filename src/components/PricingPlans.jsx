import { GoDotFill } from "react-icons/go";
import { pricingData } from "../data/pricingData";

const PricingPlans = ({ category }) => {
  const plans = pricingData[category];

  return (
    <div className="grid grid-cols-1 tablet:grid-cols-3 place-items-center gap-6 items-end">
      {plans.map((plan) => (
        <div key={plan.id} className="w-64 border-orange-500 border-2 shadow-lg rounded-lg overflow-hidden hover:bg-black/15 duration-500">
          <div className="px-6 py-4">
            <h2 className="text-xs font-bold text-center pt-3">{plan.title}</h2>
            <h2 className="pt-4 pb-6 text-4xl font-serif text-center font-extrabold">
              {plan.price}
            </h2>
            {plan.features.map((feature, index) => (
              <h2 key={index} className="flex items-center font-bold text-sm">
                <GoDotFill className="text-orange-500 text-2xl" />
                {feature}
              </h2>
            ))}
          </div>
          <div className="px-6 py-4">
            <button className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-700 transition duration-300">
              পেমেন্ট করুন
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingPlans;
