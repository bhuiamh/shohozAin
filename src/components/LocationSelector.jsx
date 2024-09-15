import React, { useState, useEffect } from "react";
import SelectField from "./SelectField";

function LocationSelector({ preDivision="বিভাগ" , preDistrict="জেলা", preUpazila= "উপজেলা", onDivisionChange, onDistrictChange, onUpazilaChange }) {
  const [divisions, setDivisions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [upazilas, setUpazilas] = useState([]);
  const [selectedDivision, setSelectedDivision] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedUpazila, setSelectedUpazila] = useState("");

  useEffect(() => {
    const fetchDivisions = async () => {
      try {
        const response = await fetch("https://bdapis.com/api/v1.2/divisions");
        const data = await response.json();
        setDivisions(data.data);
      } catch (error) {
        console.error("Error fetching divisions:", error);
      }
    };
    fetchDivisions();
  }, []);

  useEffect(() => {
    if (selectedDivision) {
      const fetchDistricts = async () => {
        try {
          const response = await fetch(
            `https://bdapis.com/api/v1.2/division/${selectedDivision}`
          );
          const data = await response.json();
          setDistricts(data.data);
          setUpazilas([]); // Clear upazilas when a new district is selected
        } catch (error) {
          console.error("Error fetching districts:", error);
        }
      };
      fetchDistricts();
    }
  }, [selectedDivision]);

  useEffect(() => {
    if (selectedDistrict) {
      const fetchUpazilas = async () => {
        try {
          const response = await fetch(
            `https://bdapis.com/api/v1.2/district/${selectedDistrict}`
          );
          const data = await response.json();
          setUpazilas(data.data.upazillas);
        } catch (error) {
          console.error("Error fetching upazilas:", error);
        }
      };
      fetchUpazilas();
    }
  }, [selectedDistrict]);

  return (
    <div className="">
      <form className="flex gap-2 min-w-full">
        <SelectField
          id="division"
          name="division"
          value={selectedDivision}
          onChange={(e) => {
            const division = e.target.value;
            setSelectedDivision(division);
            setSelectedDistrict("");
            setSelectedUpazila("");
            onDivisionChange(division);
          }}
          options={divisions}
          placeholder={preDivision}
        />

         <SelectField
          id="district"
          name="district"
          value={selectedDistrict}
          onChange={(e) => {
            const district = e.target.value;
            setSelectedDistrict(district);
            setSelectedUpazila("");
            onDistrictChange(district);
          }}
          options={districts}
          disabled={!selectedDivision}
          placeholder={selectedDivision ? "জেলা" : preDistrict}
        /> 

        <SelectField
          id="upazila"
          name="upazila"
          value={selectedUpazila}
          onChange={(e) => {
            const upazila = e.target.value;
            setSelectedUpazila(upazila);
            onUpazilaChange(upazila);
          }}
          options={upazilas}
          disabled={!selectedDistrict}
          placeholder={selectedDivision ? "উপজেলা" : preUpazila}
        />
      </form>
    </div>
  );
}

export default LocationSelector;
