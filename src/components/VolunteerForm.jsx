"use client";
import React from "react";
export default function VolunteerForm(){
  const [submitted, setSubmitted] = React.useState(false);
  const[ input, setInput] = React.useState();
  const [isOpen, setIsOpen]= React.useState(false);
  const [formData, setFormData] = React.useState({
    name:"",
    email:"",
    phoneNumber:"",
    role:"",
    availibility:"",
    comments:"",
  })
  return(
    <div className="">
      
    </div>
  )
}















// "use client";
// import React from "react";

// export default function VolunteerForm({ isOpen, onClose }) {
//   const [submitted, setSubmitted] = React.useState(false);
//   // const [input, setInput] = React.useState();
//   const [formData, setFormData] = React.useState({
//     name: "",
//     email: "",
//     phone: "",
//     age: "",
//     city: "",
//     interests: [],
//     timeCommitment: "",
//     duration: "",
//     experience: "",
//     motivation: "",
//     backgroundCheck: "",
//   });
//   const [isSubmitting, setIsSubmitting] = React.useState(false);
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     console.log("Submitting projects:", formData);
//     // alert("Mail sent");
//     try {
//       const response = await fetch("/api/contact", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           age: "",
//           city: "",
//           interests: [],
//           timeCommitment: "",
//           duration: "",
//           experience: "",
//           motivation: "",
//           backgroundCheck: "",
//         });
//         setSubmitted(true);
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     }
//     if (submitted) {
//       return (
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="bg-green-100 p-6 rounded-lg"
//         >
//           <h3>Thank you for your message!</h3>
//           <p>We&apos;ll get back to you soon.</p>
//         </motion.div>
//       );
//     }
//     if (!isOpen) return null;
//   };
//   const handleInputChange = async (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };
//   return (
//     <div className="relative w-full rounded">
//       {/* logo */}
//       <div className=""></div>
//       {/* form */}
//       <div className="grid grid-cols-1 py-6 md:py-10 px-8 md:px-24 gap-8">
//         {/* header */}
//         <div className="">
//           <div className=""></div>
//           <h2 className="">Join as a Volunteer!</h2>
//         </div>
//         {/* inputs */}
//         <div className="grid grid-cols-1 gap-4">
//           <div className=" grid grid-cols-1 gap-2">
//             <label className="font-bold text-sm leading-[19.2px] text-black/60">
//               Name
//             </label>
//             <input
//               type="text"
//               name="subject"
//               className="border-b-2 border-black/70 focus:border-black pb-2 bg-transparent focus:border-black focus:outline-none transition-colors"
//               placeholder="How can we help?"
//               value={formData.name}
//               onChange={handleInputChange}
//               required
//             ></input>
//           </div>
//           <div className=" grid grid-cols-1 gap-2">
//             <label className="font-bold text-sm leading-[19.2px] text-black/60">
//               Email Address
//             </label>
//             <input
//               type="text"
//               name="email"
//               className="border-b-2 border-black/70 focus:border-black pb-2 bg-transparent focus:border-black focus:outline-none transition-colors"
//               placeholder="How can we help?"
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//             ></input>
//           </div>
//           <div className=" grid grid-cols-1 gap-2">
//             <label className="font-bold text-sm leading-[19.2px] text-black/60">
//               Phone Number
//             </label>
//             <input
//               type="text"
//               name="number"
//               className="border-b-2 border-black/70 focus:border-black pb-2 bg-transparent focus:border-black focus:outline-none transition-colors"
//               placeholder="How can we help?"
//               value={formData.number}
//               onChange={handleInputChange}
//               required
//             ></input>
//           </div>
//           <div className=" grid grid-cols-1 gap-2">
//             <label className="font-bold text-sm leading-[19.2px] text-black/60">
//               Age
//             </label>
//             <input
//               type="text"
//               name="age"
//               className="border-b-2 border-black/70 focus:border-black pb-2 bg-transparent focus:border-black focus:outline-none transition-colors"
//               placeholder="How can we help?"
//               value={formData.age}
//               onChange={handleInputChange}
//               required
//             ></input>
//           </div>
//           {/* area of interest */}
//           <div className="grid grid-cols-1 gap-2">
//             <h2 className="">Areas of interest</h2>
//             <div className=""></div>
//             <div className="">
//               <div className="">How would you like to contribute?</div>
//               <div className=""></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
