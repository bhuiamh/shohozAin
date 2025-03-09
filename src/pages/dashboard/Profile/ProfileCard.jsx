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
import { FaPen, FaPencilAlt } from "react-icons/fa";
import axios from "axios";

const ProfileCard = () => {
  const [profileImage, setProfileImage] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isProfileEditing, setIsProfileEditing] = useState(false);
  const [isPictureEditing, setIsPictureEditing] = useState(false);
  const [isEdited, setIsEdited] = useState(false);
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
      location: {
        division: division,
        district: district,
        upazila: upazila,
      },
    }));
    setIsEdited(true);
  };



  const handleSaveProfile = () => {

    setProfile((prevProfile) => ({
      ...prevProfile,
      image: profileImage, // Update with new image URL
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
      cancelButtonText: "না",
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

          timer: 2000,
        });
        if (selectedImage) {
          handleImageUpload();
        }
        setIsProfileEditing(false);
        setIsEdited(false);
      }
    });
  };

  useEffect(() => {
    if (isProfileEditing) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    // Cleanup function to remove the class when component unmounts
    return () => document.body.classList.remove("no-scroll");
  }, [isProfileEditing]);

  const occupations = [
    { _id: "11", occupation: "ডাক্তার" },
    { _id: "21", occupation: "ইঞ্জিনিয়ার" },
    { _id: "31", occupation: "শিক্ষক" },
    { _id: "41", occupation: "ব্যবসায়ী" },
    { _id: "51", occupation: "আইনজীবী" },
    { _id: "61", occupation: "সরকারি কর্মচারী" },
    { _id: "71", occupation: "কৃষক" },
    { _id: "81", occupation: "পুলিশ" },
    { _id: "91", occupation: "সাংবাদিক" },
    { _id: "101", occupation: "ব্যাংকার" },
    { _id: "111", occupation: "অন্যান্য" },
  ];

 
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImage(file); // Store the selected image file for upload

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result); // Set the image preview URL
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  const handleImageUpload = async () => {

    console.log("function activated handleImageUpload");
  
    if (!selectedImage) {
      // alert("No image selected for upload.");
      console.log("No image selected for upload")
      return;
    }

    const formData = new FormData();
    formData.append("image", selectedImage); // Upload the stored image file

    try {
      const response = await axios.post(
        "https://api.imgur.com/3/image",
        formData,
        {
          headers: {
            Authorization: `Client-ID 30f6038370d6626`, // Replace with your actual Client ID
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const { data } = response;
      if (data.success) {
        setSelectedImage(null); // Clear the image after successful upload
        setImagePreview(null); // Clear the image preview after upload
        // alert("Image uploaded successfully!");
        setProfileImage(data.data.link);
        console.log(profile, "from handleImageUpload >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
      } else {
        // alert("Image upload failed.");
        console.log("Image upload failed.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      // alert("An error occurred during the upload.");
    }
  };
  return (
    <div className="mt-10">
      <div className=" min-h-96">
        <div className="flex justify-center items-center relative">
          <div className="">
            {!isProfileEditing ? (
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
                isOpen={isProfileEditing}
                onClose={() => setIsProfileEditing(false)}
              >
                <h2 className="text-xl font-semibold mb-4 text-white">
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
                <div className="flex flex-col items-center mt-4">
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="hidden"
                    />
                    <div className="relative w-24 h-24 rounded-full border-2 border-orange-500">
                      <img
                        src={imagePreview || profile.image}
                        alt="Profile"
                        className="w-full h-full rounded-full object-cover"
                      />
                      <div className="absolute bottom-0 right-0 bg-orange-500 text-white rounded-full p-2 cursor-pointer">
                        <FaPencilAlt />
                      </div>
                    </div>
                  </label>
                  <p className="mt-2 text-sm text-white">
                    {selectedImage
                      ? `Selected file: ${selectedImage.name}`
                      : "No image selected"}
                  </p>
                </div>
                <div className="mt-4 flex justify-end">
                  <SecondaryButton
                    onClick={(e) => {
                      setIsProfileEditing(false), handleInputChange(e);
                    }}
                  >
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
                {profile.location.division}, {profile.location.district},{" "}
                {profile.location.upazila}
              </p>
            </div>

            <div className="absolute bottom-0">
              {!isEdited ? (
                <PrimaryButton onClick={() => setIsProfileEditing(true)}>
                  ইডিট করুন
                </PrimaryButton>
              ) : (
                <SecondaryButton
                  onClick={(e) => {
                    handleSaveProfile(); // Save the image if it's uploaded
                    setIsPictureEditing(false); // Close the modal
                  }}
                >
                সংরক্ষণ করুন
                </SecondaryButton>
              )}
            </div>
          </div>
          <div className="h-96 w-1 bg-orange-500 mx-4" />

          <div className="w-48 h-48 group relative">
            <img
              className=" w-48 h-48 border-2 border-orange-500 object-cover"
              src={
                profileImage
                  ? profileImage
                  : imagePreview
                  ? imagePreview
                  : profile.image
              }
              alt="Profile"
            />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;


