import React, { useEffect, useState } from "react";
import logo from "../../assets/shohozain.png";
import SectionTitle from "../Shared/SectionTitle";
import TextInput from "../../components/TextInput";
import LocationSelector from "../../components/LocationSelector";
import SelectField from "../../components/SelectField";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Helmet } from "react-helmet";
// import TextArea from "../../components/TextArea";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailOrPhone, setEmailOrPhone] = useState("");
  const [age, setAge] = useState("");
  const [selectedOccupation, setSelectedOccupation] = useState("");
  const [division, setDivision] = useState("");
  const [district, setDistrict] = useState("");
  const [upazila, setUpazila] = useState("");
  const [disabled, setDisabled] = useState(true);

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

  useEffect(() => {
    if (name && emailOrPhone && subject && message) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [name, email, subject, message]);

  const handleContactUs = (event) => {
    event.preventDefault();
    console.log({
      name,
      email,
      subject,
      message,
    });
  };

  return (
    <div className="max-w-[1280px] mx-auto mt-24 tablet:mt-32 px-4 tablet:px-0 cursor-default grid grid-cols-1 laptop:grid-cols-2">
      <Helmet>
        <title>
          Contact Us @ ShohozAin - Get in Touch for Legal Assistance
        </title>
        <meta
          name="description"
          content="Need legal help? Contact ShohozAin today. Reach out to our team for expert legal advice, support, and inquiries. We're here to assist you with all your legal needs."
        />
        <meta
          name="keywords"
          content="Contact ShohozAin, legal assistance, legal support, expert legal advice, ShohozAin contact, legal inquiries, customer support"
        />
      </Helmet>

      <div>
        <SectionTitle
          title={"যোগাযোগ করুন"}
          subTitle={"আমাদের সাথে যোগাযোগ করতে নিচের ফর্মটি পূরণ করুন"}
        ></SectionTitle>
        <p className="text-base tablet:text-xl mb-4 font-semibold mt-10 text-justify">
          আপনার কোনো প্রশ্ন থাকলে বা আমাদের সেবা সম্পর্কে আপনার মতামত থাকলে,
          দয়া করে এই ফর্মটি পূরণ করুন অথবা
          <span className="text-orange-500 cursor-pointer px-2">
            contact@shohozain.com
          </span>
          এ ইমেইল করুন। আপনার প্রতিক্রিয়া আমাদের জন্য অত্যন্ত গুরুত্বপূর্ণ।
        </p>

        <div className="flex gap-4 mt-10">
          <div className="h-12 w-12 border-2 border-orange-500 rounded-md flex justify-center items-center">
            <FaLocationDot className="text-orange-500" size={20} />
          </div>
          <div>
            <h1 className="text-sm tablet:text-base font-bold">ঠিকানা</h1>
            <h1 className="text-xs tablet:text-sm">
              এইচ এইচ প্রোপার্টিস, সি/১, রোড ১০, পূর্ব গোরান, <br /> খিলগাঁও,
              ঢাকা
            </h1>
          </div>
        </div>
        <div className="flex gap-4 mt-5">
          <div className="h-12 w-12 border-2 border-orange-500 rounded-md flex justify-center items-center">
            <IoCall className="text-orange-500" size={20} />
          </div>
          <div>
            <h1 className="text-xs tablet:text-base font-bold">ফোন নাম্বার</h1>
            <h1 className="text-xs tablet:text-sm">
              +880 167 104 3256 <br /> +880 167 104 3256
            </h1>
          </div>
        </div>
        <div className="flex gap-4 mt-5">
          <div className="h-12 w-12 border-2 border-orange-500 rounded-md flex justify-center items-center">
            <MdEmail className="text-orange-500" size={20} />
          </div>
          <div>
            <h1 className="text-xs tablet:text-base font-bold">ইমেইল</h1>
            <h1 className="text-xs tablet:text-sm">
              contact@shohozain.com <br /> amirhamzalemon@gmail.com
            </h1>
          </div>
        </div>
      </div>

      <div className="flex flex-1 flex-col justify-center px-6 laptop:px-8">
        <div className="mt-1 mobile:mx-auto mobile:w-full mobile:max-w-sm">
          <form onSubmit={handleContactUs}>
            <div className="space-y-4 mt-10 tablet:mt-0">
              <TextInput
                name="name"
                placeholder="আপনার নাম"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <TextInput
                name="emailOrPhone"
                placeholder="ইমেইল অথবা ফোন নাম্বার"
                value={emailOrPhone}
                onChange={(e) => setEmailOrPhone(e.target.value)}
              />
              <div className="flex gap-2 ">
                <TextInput
                  name="age"
                  type="number"
                  placeholder="বয়স"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                />
                <SelectField
                  id="occupation"
                  name="occupation"
                  value={selectedOccupation}
                  onChange={(e) => setSelectedOccupation(e.target.value)}
                  options={occupations}
                  placeholder="পেশা নির্বাচন করুন"
                />
              </div>
              <div className="pt-5s">
                <LocationSelector
                  onDivisionChange={setDivision}
                  onDistrictChange={setDistrict}
                  onUpazilaChange={setUpazila}
                />
              </div>

              <TextInput
                name="subject"
                placeholder="বিষয়"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
              <TextInput
                height="h-24"
                name="message"
                placeholder="আপনার বার্তা"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className="mt-4">
              <button
                disabled={disabled}
                type="submit"
                className={`flex w-full justify-center rounded-md ${
                  disabled
                    ? "bg-orange-300"
                    : "bg-orange-600 tablet:hover:bg-orange-700"
                } px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600`}
              >
                জমা দিন
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
