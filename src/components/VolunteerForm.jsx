// "use client";
// import React from "react";
// export default function VolunteerForm(){
//   const [submitted, setSubmitted] = React.useState(false);
//   const[ input, setInput] = React.useState();
//   const [isOpen, setIsOpen]= React.useState(false);
//   const [formData, setFormData] = React.useState({
//     name:"",
//     email:"",
//     phoneNumber:"",
//     role:"",
//     availibility:"",
//     comments:"",
//   })
//   return(
//     <div className="">
      
//     </div>
//   )
// }















// // "use client";
// // import React from "react";

// // export default function VolunteerForm({ isOpen, onClose }) {
// //   const [submitted, setSubmitted] = React.useState(false);
// //   // const [input, setInput] = React.useState();
// //   const [formData, setFormData] = React.useState({
// //     name: "",
// //     email: "",
// //     phone: "",
// //     age: "",
// //     city: "",
// //     interests: [],
// //     timeCommitment: "",
// //     duration: "",
// //     experience: "",
// //     motivation: "",
// //     backgroundCheck: "",
// //   });
// //   const [isSubmitting, setIsSubmitting] = React.useState(false);
// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     console.log("Submitting projects:", formData);
// //     // alert("Mail sent");
// //     try {
// //       const response = await fetch("/api/contact", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //         },
// //         body: JSON.stringify(formData),
// //       });

// //       if (response.ok) {
// //         setFormData({
// //           name: "",
// //           email: "",
// //           phone: "",
// //           age: "",
// //           city: "",
// //           interests: [],
// //           timeCommitment: "",
// //           duration: "",
// //           experience: "",
// //           motivation: "",
// //           backgroundCheck: "",
// //         });
// //         setSubmitted(true);
// //       }
// //     } catch (error) {
// //       console.error("Error submitting form:", error);
// //     }
// //     if (submitted) {
// //       return (
// //         <motion.div
// //           initial={{ opacity: 0, y: 20 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           className="bg-green-100 p-6 rounded-lg"
// //         >
// //           <h3>Thank you for your message!</h3>
// //           <p>We&apos;ll get back to you soon.</p>
// //         </motion.div>
// //       );
// //     }
// //     if (!isOpen) return null;
// //   };
// //   const handleInputChange = async (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prev) => ({ ...prev, [name]: value }));
// //   };
// //   return (
// //     <div className="relative w-full rounded">
// //       {/* logo */}
// //       <div className=""></div>
// //       {/* form */}
// //       <div className="grid grid-cols-1 py-6 md:py-10 px-8 md:px-24 gap-8">
// //         {/* header */}
// //         <div className="">
// //           <div className=""></div>
// //           <h2 className="">Join as a Volunteer!</h2>
// //         </div>
// //         {/* inputs */}
// //         <div className="grid grid-cols-1 gap-4">
// //           <div className=" grid grid-cols-1 gap-2">
// //             <label className="font-bold text-sm leading-[19.2px] text-black/60">
// //               Name
// //             </label>
// //             <input
// //               type="text"
// //               name="subject"
// //               className="border-b-2 border-black/70 focus:border-black pb-2 bg-transparent focus:border-black focus:outline-none transition-colors"
// //               placeholder="How can we help?"
// //               value={formData.name}
// //               onChange={handleInputChange}
// //               required
// //             ></input>
// //           </div>
// //           <div className=" grid grid-cols-1 gap-2">
// //             <label className="font-bold text-sm leading-[19.2px] text-black/60">
// //               Email Address
// //             </label>
// //             <input
// //               type="text"
// //               name="email"
// //               className="border-b-2 border-black/70 focus:border-black pb-2 bg-transparent focus:border-black focus:outline-none transition-colors"
// //               placeholder="How can we help?"
// //               value={formData.email}
// //               onChange={handleInputChange}
// //               required
// //             ></input>
// //           </div>
// //           <div className=" grid grid-cols-1 gap-2">
// //             <label className="font-bold text-sm leading-[19.2px] text-black/60">
// //               Phone Number
// //             </label>
// //             <input
// //               type="text"
// //               name="number"
// //               className="border-b-2 border-black/70 focus:border-black pb-2 bg-transparent focus:border-black focus:outline-none transition-colors"
// //               placeholder="How can we help?"
// //               value={formData.number}
// //               onChange={handleInputChange}
// //               required
// //             ></input>
// //           </div>
// //           <div className=" grid grid-cols-1 gap-2">
// //             <label className="font-bold text-sm leading-[19.2px] text-black/60">
// //               Age
// //             </label>
// //             <input
// //               type="text"
// //               name="age"
// //               className="border-b-2 border-black/70 focus:border-black pb-2 bg-transparent focus:border-black focus:outline-none transition-colors"
// //               placeholder="How can we help?"
// //               value={formData.age}
// //               onChange={handleInputChange}
// //               required
// //             ></input>
// //           </div>
// //           {/* area of interest */}
// //           <div className="grid grid-cols-1 gap-2">
// //             <h2 className="">Areas of interest</h2>
// //             <div className=""></div>
// //             <div className="">
// //               <div className="">How would you like to contribute?</div>
// //               <div className=""></div>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }
import { useState } from 'react';
import { User, Mail, Phone, MapPin, Calendar, Clock, Heart, Send, CheckCircle } from 'lucide-react';

export default function VolunteerForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    dateOfBirth: '',
    emergencyContact: '',
    emergencyPhone: '',
    availability: [],
    interests: [],
    experience: '',
    skills: '',
    motivation: '',
    backgroundCheck: false,
    newsletter: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const availabilityOptions = [
    'Monday Morning', 'Monday Afternoon', 'Monday Evening',
    'Tuesday Morning', 'Tuesday Afternoon', 'Tuesday Evening',
    'Wednesday Morning', 'Wednesday Afternoon', 'Wednesday Evening',
    'Thursday Morning', 'Thursday Afternoon', 'Thursday Evening',
    'Friday Morning', 'Friday Afternoon', 'Friday Evening',
    'Saturday Morning', 'Saturday Afternoon', 'Saturday Evening',
    'Sunday Morning', 'Sunday Afternoon', 'Sunday Evening'
  ];

  const interestOptions = [
    'Event Planning', 'Fundraising', 'Community Outreach', 'Education & Tutoring',
    'Environmental Conservation', 'Animal Welfare', 'Senior Care', 'Youth Programs',
    'Food Services', 'Administrative Support', 'Marketing & Social Media', 'Technology Support'
  ];

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleMultiSelect = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: prev[name].includes(value) 
        ? prev[name].filter(item => item !== value)
        : [...prev[name], value]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the data to your backend
    console.log('Form submitted:', formData);
  };

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-md w-full text-center animate-pulse">
          <CheckCircle className="mx-auto text-green-500 mb-4" size={64} />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h2>
          <p className="text-gray-600 mb-6">Your volunteer application has been submitted successfully. We'll contact you soon!</p>
          <button 
            onClick={() => {setSubmitted(false); setCurrentStep(1); setFormData({
              firstName: '', lastName: '', email: '', phone: '', address: '', city: '', state: '', zipCode: '',
              dateOfBirth: '', emergencyContact: '', emergencyPhone: '', availability: [], interests: [],
              experience: '', skills: '', motivation: '', backgroundCheck: false, newsletter: false
            });}}
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-lg hover:scale-105 transition-transform"
          >
            Submit Another Application
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-500 to-red-500 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-8 text-white text-center">
          <Heart className="mx-auto mb-4 animate-pulse" size={48} />
          <h1 className="text-4xl font-bold mb-2">Join Our Volunteer Team</h1>
          <p className="text-lg opacity-90">Make a difference in your community</p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4 mb-8">
          <div className="flex justify-between items-center">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${
                  currentStep >= step ? 'bg-white text-purple-600' : 'bg-white/30 text-white'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-20 h-1 mx-2 transition-all ${
                    currentStep > step ? 'bg-white' : 'bg-white/30'
                  }`} />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-white text-sm mt-2">
            <span>Personal Info</span>
            <span>Availability</span>
            <span>Experience</span>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white/95 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div className="p-8 animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <User className="mr-3 text-purple-600" />
                Personal Information
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Enter your first name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Enter your last name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 flex items-center">
                    <Mail className="mr-2" size={16} />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 flex items-center">
                    <Phone className="mr-2" size={16} />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700 flex items-center">
                    <Calendar className="mr-2" size={16} />
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 flex items-center">
                    <MapPin className="mr-2" size={16} />
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Street address"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">City</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="City"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">State</label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="State"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Emergency Contact</label>
                  <input
                    type="text"
                    name="emergencyContact"
                    value={formData.emergencyContact}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Full name"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Emergency Phone</label>
                  <input
                    type="tel"
                    name="emergencyPhone"
                    value={formData.emergencyPhone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Availability & Interests */}
          {currentStep === 2 && (
            <div className="p-8 animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Clock className="mr-3 text-purple-600" />
                Availability & Interests
              </h2>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">When are you available?</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {availabilityOptions.map((option) => (
                    <label key={option} className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all hover:bg-purple-50 ${
                      formData.availability.includes(option) ? 'bg-purple-100 border-purple-500' : 'border-gray-300'
                    }`}>
                      <input
                        type="checkbox"
                        checked={formData.availability.includes(option)}
                        onChange={() => handleMultiSelect('availability', option)}
                        className="mr-2 text-purple-600"
                      />
                      <span className="text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Areas of Interest</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {interestOptions.map((option) => (
                    <label key={option} className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all hover:bg-purple-50 ${
                      formData.interests.includes(option) ? 'bg-purple-100 border-purple-500' : 'border-gray-300'
                    }`}>
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(option)}
                        onChange={() => handleMultiSelect('interests', option)}
                        className="mr-2 text-purple-600"
                      />
                      <span className="text-sm">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Experience & Motivation */}
          {currentStep === 3 && (
            <div className="p-8 animate-fadeIn">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Experience & Motivation</h2>

              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Previous Volunteer Experience</label>
                  <textarea
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Tell us about any previous volunteer work or relevant experience..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Skills & Qualifications</label>
                  <textarea
                    name="skills"
                    value={formData.skills}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="List any relevant skills, certifications, or qualifications..."
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">Why do you want to volunteer with us?</label>
                  <textarea
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleInputChange}
                    rows={4}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                    placeholder="Share your motivation and what you hope to contribute..."
                  />
                </div>

                <div className="space-y-4">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="backgroundCheck"
                      checked={formData.backgroundCheck}
                      onChange={handleInputChange}
                      required
                      className="mt-1 text-purple-600"
                    />
                    <span className="text-sm text-gray-700">
                      I consent to a background check if required for my volunteer position
                    </span>
                  </label>

                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="mt-1 text-purple-600"
                    />
                    <span className="text-sm text-gray-700">
                      I'd like to receive newsletters and updates about volunteer opportunities
                    </span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="bg-gray-50 px-8 py-6 flex justify-between">
            <button
              type="button"
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-2 rounded-lg transition-all ${
                currentStep === 1 
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                  : 'bg-gray-500 text-white hover:bg-gray-600 hover:scale-105'
              }`}
            >
              Previous
            </button>

            {currentStep < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:scale-105 transition-transform"
              >
                Next Step
              </button>
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="px-8 py-2 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-lg hover:scale-105 transition-transform flex items-center"
              >
                <Send className="mr-2" size={16} />
                Submit Application
              </button>
            )}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
