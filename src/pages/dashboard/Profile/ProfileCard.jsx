import React, { useEffect, useState } from "react";
import convertToBengaliDigits from "../../../commonFunction/ageConversion";
import {
  PrimaryButton,
  SecondaryButton,
} from "../../../components/Buttons.jsx";
import TextInput from "../../../components/TextInput.jsx";
import SelectField from "../../../components/SelectField.jsx";
import LocationSelector from "../../../components/LocationSelector.jsx";
import UpdateModal from "../../../components/UpdateModal.jsx";
import Swal from "sweetalert2";
// import Modal from "../../../components/Modal.jsx"; // Import the Modal component

const ProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedOccupation, setSelectedOccupation] = useState("");
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");
  const [profile, setProfile] = useState({
    name: "মাহমুদুল হাসান ভূঁইয়া",
    image:
      "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    email: "user@mail.com",
    phone: "+880 123 456 789",
    age: 25,
    occupation: "সফটওয়্যার ইঞ্জিনিয়ার",
    location: {
      division: "Dhaka",
      district: "Gazipur",
      upazila: "Kaligang",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,

      [name]: value,
    }));
  };

  const handleSaveProfile = () => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      occupation: selectedOccupation || prevProfile.occupation, // Ensure occupation is updated
      location: {
        division: division,
        district: district,
        upazila: upazila,
      },
    }));
    Swal.fire({
      title: "<strong>তথ্য হালনাগাদ !</strong>",
      text: "আপনি কি আপডেট তথ্য সংরক্ষণ করতে চান?",
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
        Swal.fire({
          title: "<strong>সফল !</strong>",
          text: "আপডেট তথ্য সংরক্ষিত হয়েছে",
          color: "black",
          icon: "success",
          iconColor: "green",
         showCancelButton: false,
         showConfirmButton: false,
         
        timer: 2000
        })
        setIsEditing(false);
      }
    });

    
  };

  useEffect(() => {
    if (isEditing) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    // Cleanup function to remove the class when component unmounts
    return () => document.body.classList.remove("no-scroll");
  }, [isEditing]);

  const occupations = [
    { _id: "1", occupation: "ডাক্তার" },
    { _id: "2", occupation: "ইঞ্জিনিয়ার" },
    { _id: "3", occupation: "শিক্ষক" },
    { _id: "4", occupation: "ব্যবসায়ী" },
    { _id: "5", occupation: "আইনজীবী" },
    { _id: "6", occupation: "সরকারি কর্মচারী" },
    { _id: "7", occupation: "কৃষক" },
    { _id: "8", occupation: "পুলিশ" },
    { _id: "9", occupation: "সাংবাদিক" },
    { _id: "10", occupation: "ব্যাংকার" },
    { _id: "11", occupation: "অন্যান্য" },
  ];

  console.log(division, district, upazila, "apter pesha");
  return (
    <div className="mt-10">
      <div className=" min-h-96">
        <div className="flex justify-center items-center">
          <div className="w-60">
            {!isEditing ? (
              <>
                <h1 className="text-lg tablet:text-xl laptop:text-2xl font-bold text-orange-500">
                  {profile.name}
                </h1>
                <div className="flex pt-1 gap-3">
                  <p className="">{profile.occupation}</p>
                  <p className="">
                    {profile.age
                      ? convertToBengaliDigits(profile.age.toString()) + " বছর"
                      : ""}
                  </p>
                </div>
              </>
            ) : (
              <UpdateModal
                isOpen={isEditing}
                onClose={() => setIsEditing(false)}
              >
                <h2 className="text-xl font-semibold mb-4">
                  আপনার তথ্য আপডেট করুন
                </h2>
                <TextInput
                  type="text"
                  name="name"
                  value={profile.name}
                  onChange={handleInputChange}
                  placeholder="আপনার নাম"
                />
                <div className="grid grid-cols-12 gap-3 col mb-4">
                  <div className="col-span-8">
                    <SelectField
                      id="occupation"
                      name="occupation"
                      value={selectedOccupation}
                      placeholder={
                        profile.occupation ? profile.occupation : "আপনার পেশা"
                      }
                      onChange={(e) => {
                        setSelectedOccupation(e.target.value);
                        handleInputChange(e);
                      }}
                      // onChange={handleOccupationChange}
                      options={occupations}
                    />
                  </div>
                  <div className="col-span-4">
                    <TextInput
                      type="number"
                      name="age"
                      value={profile.age}
                      onChange={handleInputChange}
                      placeholder="আপনার বয়স"
                    />
                  </div>
                </div>
                <TextInput
                  type="email"
                  name="email"
                  value={profile.email}
                  onChange={handleInputChange}
                  placeholder="ইমেইল"
                />
                <TextInput
                  type="text"
                  name="phone"
                  value={profile.phone}
                  onChange={handleInputChange}
                  placeholder="ফোন নাম্বার"
                />
                <LocationSelector
                  preDivision={profile.location.division}
                  preDistrict={profile.location.district}
                  preUpazila={profile.location.upazila}
                  onDivisionChange={setDivision}
                  onDistrictChange={setDistrict}
                  onUpazilaChange={setUpazila}
                />
                <div className="mt-4 flex justify-end">
                  <SecondaryButton onClick={handleSaveProfile}>
                    সেভ করুন
                  </SecondaryButton>
                </div>
              </UpdateModal>
            )}

            <div className="pt-4">
              <h1 className="font-semibold text-orange-500">যোগাযোগ</h1>

              <p>{profile.email}</p>
              <p>{profile.phone}</p>
              <p>
                {profile.location.division}, {profile.location.district}
                , {profile.location.upazila}
              </p>
            </div>

            <div>
              {!isEditing ? (
                <PrimaryButton onClick={() => setIsEditing(true)}>
                  ইডিট করুন
                </PrimaryButton>
              ) : null}
            </div>
          </div>
          <div className="h-96 w-1 bg-orange-500 mx-4" />

          <div>
            <img
              className="w-48 h-48 border-2 border-orange-500"
              src={profile.image}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
