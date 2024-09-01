import { GoDotFill } from "react-icons/go";
import { pricingData } from "../data/pricingData";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";



const PricingPlans = ({ category }) => {


  const plans = pricingData[category];

  const userLoggedIn = false;
  const navigate = useNavigate(); // Use useNavigate for navigation
  const activePathname = useLocation().pathname;



  const paymentHandler = () => {
    if (userLoggedIn) {
      alert("Payment Successful");
    } else {
      Swal.fire({
        title: "<strong>দুঃখিত !</strong>",
        text: "আপনার লগইন করা নেই, আপনি কি লগইন করতে চান?",
        color: "black",
        icon: "error",
        iconColor: "#f97316",
        showCancelButton: true,
        confirmButtonColor: "#f97316",
        cancelButtonColor: "red",
        confirmButtonText: "হ্যাঁ",
        cancelButtonText: "না"
        
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  return (
    <div className="flex flex-col tablet:flex-row gap-4 tablet:gap-6 justify-center items-center tablet:items-end">

      {plans.map((plan) => (
        <div key={plan.id} className="w-64 border-orange-500 border-2 shadow-lg rounded-lg overflow-hidden tablet:hover:bg-black/15 duration-500">
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
            <button onClick={paymentHandler} className="w-full bg-orange-500 text-white py-2 rounded tablet:hover:bg-orange-700 transition duration-300">
              পেমেন্ট করুন
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PricingPlans;
