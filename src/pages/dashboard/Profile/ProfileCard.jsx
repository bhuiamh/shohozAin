import React, { useState } from "react";

const ProfileCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "মাহমুদুল হাসান ভূঁইয়া",
    image: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
    email: "user@mail.com",
    phone: "+৮৮০১২৩৪৫৬৭৮৯",
    age: 25,
    occupation: "সফটওয়্যার ইঞ্জিনিয়ার",
    division: "ঢাকা",
    district: "ঢাকা",
    upazila: "ধানমন্ডি",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-sm mx-auto bg-white shadow-md rounded-lg overflow-hidden border border-gray-200 mt-10 p-6">
      <div className="flex items-center justify-between">
        <img
          className="w-24 h-24 rounded-full border-2 border-orange-500"
          src={profile.image}
          alt="Profile"
        />
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-50 transition"
        >
          {isEditing ? "সেভ করুন" : "ইডিট করুন"}
        </button>
      </div>
      <div className="mt-4">
        <div className="text-lg font-semibold">{profile.name}</div>
        {isEditing ? (
          <>
            <input
              type="text"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              className="mt-2 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="ইমেইল"
            />
            <input
              type="text"
              name="phone"
              value={profile.phone}
              onChange={handleInputChange}
              className="mt-2 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="ফোন"
            />
          </>
        ) : (
          <p className="text-gray-600 mt-2">
            {profile.email} / {profile.phone}
          </p>
        )}
      </div>
      <div className="mt-4">
        <div className="text-lg font-semibold">বয়স</div>
        {isEditing ? (
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleInputChange}
            className="mt-2 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="বয়স"
          />
        ) : (
          <p className="text-gray-600 mt-2">{profile.age} বছর</p>
        )}
      </div>
      <div className="mt-4">
        <div className="text-lg font-semibold">পেশা</div>
        {isEditing ? (
          <input
            type="text"
            name="occupation"
            value={profile.occupation}
            onChange={handleInputChange}
            className="mt-2 block w-full p-2 border border-gray-300 rounded-md"
            placeholder="পেশা"
          />
        ) : (
          <p className="text-gray-600 mt-2">{profile.occupation}</p>
        )}
      </div>
      <div className="mt-4">
        <div className="text-lg font-semibold">ঠিকানা</div>
        {isEditing ? (
          <div className="flex gap-4">
            <input
              type="text"
              name="division"
              value={profile.division}
              onChange={handleInputChange}
              className="mt-2 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="বিভাগ"
            />
            <input
              type="text"
              name="district"
              value={profile.district}
              onChange={handleInputChange}
              className="mt-2 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="জেলা"
            />
            <input
              type="text"
              name="upazila"
              value={profile.upazila}
              onChange={handleInputChange}
              className="mt-2 block w-full p-2 border border-gray-300 rounded-md"
              placeholder="উপজেলা"
            />
          </div>
        ) : (
          <p className="text-gray-600 mt-2">
            {profile.upazila}, {profile.district}, {profile.division}
          </p>
        )}
      </div>
    </div>
  );
};

export default ProfileCard;
