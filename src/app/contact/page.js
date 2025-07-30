"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [rows, setRows] = useState(3);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    const lineHeight = 24;
    const minRows = 3;
    const maxRows = 8;

    const newRows = Math.min(
      Math.max(minRows, Math.ceil(value.split("\n").length)),
      maxRows
    );
    setRows(newRows);
  };
  const handleSubmit = async(e) => {
    e.preventDefault();

    console.log("Submitting projects:", formData);
    alert("Mail sent");
     try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
      
      if (response.ok) {
        setFormData({ firstName: '', email: '', message: '',lastName:'', subject:''})
        setSubmitted(true);
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    }
    if(submitted){
      return(
         <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-green-100 p-6 rounded-lg"
      >
        <h3>Thank you for your message!</h3>
        <p>We&apos;ll get back to you soon.</p>
      </motion.div>
      )
    }
  
  };
  return (
    <section>
      <div className="w-full px-8 py-6 md:px-16 md:py-10 lg:px-28 grid grid-cols-1 gap-4 bg-[#FCEDC6] text-[var(--color-primary-text)]">
        {/* contact info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="grid grid-cols-1 lg:col-span-2">
            <div className="flex flex-rows gap-4 items-center">
              <div className=" h-[2px] w-[32px] md:w-18 lg:w-22 bg-black">
                {" "}
              </div>
              <div className="uppercase text-sm md:text-base whitespace-nowrap font-bold tracking-[2px] text-[var(--color-primary-text)]">
                Contact US
              </div>
            </div>
            <div className="px-8">
              <h2 className="font-bold  md:leading-[48.2px] text-4xl md:text-[56px] max-w-[780px] text-center md:text-left md:pl-[82px] py-8">
                We&apos;d love to hear from you
              </h2>
              <p className="text-black/70 px-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse varius enim in eros elementum tristique. Duis
                cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                commodo diam libero vitae erat. Suspendisse varius enim
                elementum tristique.
              </p>
            </div>
          </div>
          {/* info */}
          <div className="gap-6 md:max-lg:px-16 lg:pt-16 max-w-[465px] grid grid-cols-3 lg:grid-cols-1 sm:max-md:mx-auto">
            {/* contacts */}
            <div className=" grid grid-cols-1 gap-1">
              <p className="font-bold text-2xl">Let&apos;s talk!</p>
              <div className="flex flex-row gap-6">
                <div className="">+91 1234567890</div>
                <div className="">smjss@org.in</div>
              </div>
            </div>
            {/* headoffice */}
            <div className=" grid grid-cols-1 gap-1">
              <p className="font-bold text-2xl">Head Office </p>
              <div className="">smjss@org.in</div>
            </div>
            {/* branchoffice */}
            <div className=" grid grid-cols-1 gap-1">
              <p className="font-bold text-2xl">Branch Office</p>
              <div className="">+91 1234567890</div>
            </div>

            {/* socials */}
            <div className="flex flex-row gap-5">
              <a href="">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  className="w-[20px] h-[20px]"
                >
                  <path d="M 11 4 C 7.134 4 4 7.134 4 11 L 4 39 C 4 42.866 7.134 46 11 46 L 39 46 C 42.866 46 46 42.866 46 39 L 46 11 C 46 7.134 42.866 4 39 4 L 11 4 z M 13.085938 13 L 21.023438 13 L 26.660156 21.009766 L 33.5 13 L 36 13 L 27.789062 22.613281 L 37.914062 37 L 29.978516 37 L 23.4375 27.707031 L 15.5 37 L 13 37 L 22.308594 26.103516 L 13.085938 13 z M 16.914062 15 L 31.021484 35 L 34.085938 35 L 19.978516 15 L 16.914062 15 z"></path>
                </svg>
              </a>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                className="w-[20px] h-[20px]"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="50"
                height="50"
                viewBox="0 0 50 50"
                className="w-[20px] h-[20px]"
              >
                <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* input form */}
      <div className="w-full px-8 py-6 md:py-10 flex justify-center gap-4 bg-white text-[var(--color-primary-text)]">
        <div className="grid grid-cols-1 gap-4 w-full px-8 py-6 md:px-46 md:py-10 lg:px-78 ">
          <div className="grid grid-cols-2 gap-4">
            <div className=" grid grid-cols-1 gap-2">
              <label className="font-bold text-sm leading-[19.2px] text-black/60">
                First Name{" "}
              </label>
              <input
                type="text"
                name="firstName"
                className="border-b-2 border-black/70 pb-2 bg-transparent focus:border-black focus:outline-none transition-colors"
                placeholder="John"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              ></input>
            </div>
            <div className=" grid grid-cols-1 gap-2">
              <label className="font-bold text-sm leading-[19.2px] text-black/60">
                Last Name{" "}
              </label>
              <input
                type="text"
                name="lastName"
                className="border-b-2 border-black/70 focus:border-black pb-2 bg-transparent focus:border-black focus:outline-none transition-colors"
                placeholder="Doe"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              ></input>
            </div>
            <div className=" grid grid-cols-1 gap-2">
              <label className="font-bold text-sm leading-[19.2px] text-black/60">
                Email
              </label>
              <input
                type="text"
                name="email"
                className="border-b-2 border-black/70 focus:border-black pb-2 bg-transparent focus:border-black focus:outline-none transition-colors"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleInputChange}
                required
              ></input>
            </div>
            <div className=" grid grid-cols-1 gap-2">
              <label className="font-bold text-sm leading-[19.2px] text-black/60">
                Subject{" "}
              </label>
              <input
                type="text"
                name="subject"
                className="border-b-2 border-black/70 focus:border-black pb-2 bg-transparent focus:border-black focus:outline-none transition-colors"
                placeholder="How can we help?"
                value={formData.subject}
                onChange={handleInputChange}
                required
              ></input>
            </div>
            <div className=" grid grid-cols-1 gap-2 col-span-2">
              <label className="font-bold text-sm leading-[19.2px] text-black/60">
                Message{" "}
              </label>
              <textarea
              name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Type your message"
                rows={rows}
                className="w-full px-4 py-3 border-2 border-black/60 focus:outline-none focus:border-black resize-none transition-all duration-200"
                style={{ minHeight: "72px" }}
              />{" "}
            </div>
          </div>
          <div className="flex justify-center">
            <button className=" btn-primary " onClick={handleSubmit}>
              Send Message
            </button>
          </div>
        </div>
      </div>
      {/* location image */}

    </section>
  );
}
