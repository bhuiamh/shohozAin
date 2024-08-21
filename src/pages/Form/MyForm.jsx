import React, { useState, useEffect } from "react";

function MyForm() {
  const [divisions, setDivisions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpazila, setSelectedUpazila] = useState("");

  // Fetch divisions on component mount


  console.log(selectedDistrict, "selectedDistrict........................................")
  useEffect(() => {
    const fetchDivisions = async () => {
      try {
        const response = await fetch("https://bdapis.com/api/v1.2/divisions");
        const data = await response.json();
        setDivisions(data.data); // Adjust based on the actual API response structure
      } catch (error) {
        console.error("Error fetching divisions:", error);
      }
    };
    fetchDivisions();
  }, []);

  // Fetch districts when a division is selected
  useEffect(() => {
    if (selectedDivision) {
      const fetchDistricts = async () => {
        try {
          const response = await fetch(
            `https://bdapis.com/api/v1.2/division/${selectedDivision}`
          );
          const data = await response.json();
          setDistricts(data.data); // Adjust based on the actual API response structure
          setUpazilas([]); // Clear upazilas when a new district is selected
        } catch (error) {
          console.error("Error fetching districts:", error);
        }
      };
      fetchDistricts();
    }
  }, [selectedDivision]);

  // Fetch upazilas when a district is selected
  useEffect(() => {
    if (selectedDistrict) {
      const fetchUpazilas = async () => {
        try {
          const response = await fetch(
            `https://bdapis.com/api/v1.2/district/${selectedDistrict}`
          );
          const data = await response.json();
          console.log(data.data.upazillas, "data.....................................")
          setUpazilas(data.data.upazillas); // Adjust based on the actual API response structure
        } catch (error) {
          console.error("Error fetching upazilas:", error);
        }
      };
      fetchUpazilas();
    }
  }, [selectedDistrict]);

  return (
    <div className="mt-24 border-2 border-black p-4">
      <h1 className="text-black">Select your location</h1>
      <form>
        <label htmlFor="division" className="text-black">
          Division:
        </label>
        <select
          className="text-black bg-white border"
          id="division"
          name="division"
          value={selectedDivision}
          onChange={(e) => {
            setSelectedDivision(e.target.value);
            setSelectedDistrict(""); // Reset district and upazila when division changes
            setSelectedUpazila("");
          }}
        >
          <option className="text-black" value="">
            -- Select Division --
          </option>
          {divisions?.map((division) => (
            <option
              className="text-black"
              key={division._id}
              value={division.division}
            >
              {division.divisionbn}
            </option>
          ))}
        </select>

        <label htmlFor="district" className="text-black">
          District:
        </label>
        <select
          className="text-black bg-white border"
          id="district"
          name="district"
          value={selectedDistrict}
          onChange={(e) => {
            setSelectedDistrict(e.target.value);
            setSelectedUpazila(""); // Reset upazila when district changes
          }}
          disabled={!selectedDivision} // Disable until division is selected
        >
          <option className="text-black" value="">
            -- Select District --
          </option>
          {districts?.map((district) => (
            <option
              className="text-black"
              key={district._id}
              value={district.district}
            >
              {district.districtbn}
            </option>
          ))}
        </select>

        <label htmlFor="upazila" className="text-black">
          Upazila:
        </label>
        <select
          className="text-black bg-white border"
          id="upazila"
          name="upazila"
          value={selectedUpazila}
          onChange={(e) => setSelectedUpazila(e.target.value)}
          disabled={!selectedDistrict} // Disable until district is selected
        >
          <option className="text-black bg-" value="">
            -- Select Upazila --
          </option>
          {upazilas?.map((upazila) => (
            <option
              className="text-black"
              key={upazila._id}
              value={upazila}
            >
              {upazila}
            </option>
          ))}
        </select>
      </form>
    </div>
  );
}

export default MyForm;
