import React from "react";
import Link from 'next/link';
// import { Link } from "react-router-dom";
import ContributionImage from "../../public/ContributionImage.png";

export default function ContributionPage() {
  return (
    <section className="min-h w-full bg-white grid grid-cols-1 py-6 md:py-10 px-8 md:px-24 gap-8">
        {/* contribution box */}
      <div className="hidden md:block"><div
        className="mx-auto bg-cover bg-center w-full bg-no-repeat py-16 px-20 flex flex-col  justify-center items-center rounded-[20px]"
        style={{backgroundImage: `url('/contributionImage.png')`}}
      >
        <h2 className="text-white text-center font-bold md:text-5xl text-3xl leading-[57.6px] ">
          You can contribute to provide a place for children with special needs!
        </h2>
        <div className="flex flex-row gap-4 px-8 py-8">
          <Link href="/about">
            <button className="btn-primary"> Join as a volunteer</button>
          </Link>
          <Link href="/donate">
            <button className="btn-secondary">Donate</button>
          </Link>
        </div>
      </div></div>
      {/* Mobile version contribution box */}
      <div className="md:hidden transition ">
        <div
        className="mx-auto w-full py-4 px-2 flex flex-col justify-center  items-center rounded-[10px] bg-[#FCEDC6]"
      >
        <h2 className="text-black text-center font-bold text-3xl tracking-[2px]"
       >
          You can contribute to provide a place for children with special needs!
        </h2>
        <div className="flex flex-row gap-4 px-8 py-8">
          <Link href="">
            <button className="btn-navbar"> Join as a volunteer</button>
          </Link>
          <Link href="">
            <button className="btn-secondary mt-2">Donate</button>
          </Link>
        </div>
      </div>
      </div>
      {/* Event topography */}
      <div className="flex flex-row gap-2 items-center">
        <div className="text-[var(--color-primary-text)] font-medium text-[28px] leading-[56px] whitespace-nowrap">
          Our Events
        </div>
        <div className=" h-[2px] w-full bg-[#1D2130]/20"> </div>

      </div>
      {/* Events */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto">
        <div className="w-fit bg-[#F2C94C] grid grid-cols-1 md:grid-cols-3 gap-1 rounded-[20px] px-2 md:px-0 py-4 text-[var(--color-primary-text)]">
            {/* Date Section */}
          <div className="flex flex-col items-center justify-center min-w-[50px] md:pl-6 py-2 md:py-0">
            <div className="font-medium text-2xl leading-[tight]">15</div>
            <div className="text-sm font-medium uppercase tracking-[2px]">
              Aug
            </div>
          </div>
          {/* Event section */}
          <div className="flex flex-col gap-1 ">
            <div className="flex flex-rows gap-2 items-center">
              <div className="uppercase text-xs tracking-[2px] font-medium whitespace-nowrap px-12 md:px-0">
                NEXT EVENT
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="3"
                viewBox="0 0 44 3"
                fill="none"
                className="hidden md:block"
              >
                <path d="M0 1.5H44" stroke="#1D2130" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="font-bold text-[18px] max-w-[220px] text-center md:text-left">Teaching them about their national identity</h3>
          </div>
          {/* Arrow button */}
          <div className="flex justify-center items-center">
            <Link href=""><button className="hover:cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
  <circle cx="28" cy="28" r="28" fill="white"/>
  <path d="M37.4571 28.7071C37.8476 28.3166 37.8476 27.6834 37.4571 27.2929L31.0931 20.9289C30.7026 20.5384 30.0695 20.5384 29.6789 20.9289C29.2884 21.3195 29.2884 21.9526 29.6789 22.3431L35.3358 28L29.6789 33.6569C29.2884 34.0474 29.2884 34.6805 29.6789 35.0711C30.0695 35.4616 30.7026 35.4616 31.0931 35.0711L37.4571 28.7071ZM19.25 29L36.75 29L36.75 27L19.25 27L19.25 29Z" fill="#1D2130"/>
</svg></button></Link>
          </div>
        </div>
          <div className="w-fit bg-[#F2C94C] grid grid-cols-1 md:grid-cols-3 gap-1 rounded-[20px] px-2 md:px-0 py-4 text-[var(--color-primary-text)]">
            {/* Date Section */}
          <div className="flex flex-col items-center justify-center min-w-[50px] md:pl-6 py-2 md:py-0">
            <div className="font-medium text-2xl leading-[tight]">14</div>
            <div className="text-sm font-medium uppercase tracking-[2px]">
              NOV
            </div>
          </div>
          {/* Event section */}
          <div className="flex flex-col gap-1">
            <div className="flex flex-rows gap-2 items-center sm:max-md:justify-center">
              <div className="uppercase text-xs tracking-[2px] font-medium whitespace-nowrap px-12 md:px-0">
                NEXT EVENT
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="44"
                height="3"
                viewBox="0 0 44 3"
                fill="none"
                className="hidden md:block"
              >
                <path d="M0 1.5H44" stroke="#1D2130" strokeWidth="2" />
              </svg>
            </div>
            <h3 className="font-bold text-[18px] max-w-[220px] text-center md:text-left">A day with our wonderful children</h3>
          </div>
          {/* Arrow button */}
          <div className="flex justify-center items-center">
            <Link href=""><button className="hover:cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
  <circle cx="28" cy="28" r="28" fill="white"/>
  <path d="M37.4571 28.7071C37.8476 28.3166 37.8476 27.6834 37.4571 27.2929L31.0931 20.9289C30.7026 20.5384 30.0695 20.5384 29.6789 20.9289C29.2884 21.3195 29.2884 21.9526 29.6789 22.3431L35.3358 28L29.6789 33.6569C29.2884 34.0474 29.2884 34.6805 29.6789 35.0711C30.0695 35.4616 30.7026 35.4616 31.0931 35.0711L37.4571 28.7071ZM19.25 29L36.75 29L36.75 27L19.25 27L19.25 29Z" fill="#1D2130"/>
</svg></button></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
