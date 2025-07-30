import React from "react";
import project from "../../public/proj1.png";

export default function ProjectsDone() {
  return (
    <section className="w-full px-8 py-6 md:px-16 md:py-10 lg:px-28 grid grid-cols-1 gap-4 bg-white text-[var(--color-primary-text)] ">
      {/* About info */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="grid grid-cols-1 lg:col-span-2">
          <div className="flex flex-rows gap-4 items-center">
            <div className=" h-[2px] w-[32px] md:w-18 lg:w-22 bg-black"> </div>
            <div className="uppercase text-sm md:text-base whitespace-nowrap font-bold tracking-[2px] text-[var(--color-primary-text)]">
              Project we have done
            </div>
          </div>
          <h2 className="font-bold md:leading-[48.2px] text-4xl md:text-[56px] max-w-[780px] text-center md:text-left md:pl-[100px] py-8">
            We are creating a place where children with special needs can thrive
          </h2>
        </div>
      </div>
      {/* Grid of projects */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
          className="rounded-[20px] h-80 bg-center bg-cover relative overflow-hidden shadow-3xl"
          style={{ backgroundImage: `url("/proj1.png")` }}
          role="img"
          aria-label="Mission smile project"
        >
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h3 className="text-white font-bold text-lg mb-2">Mission smile</h3>
            <p className="text-white text-sm opacity-90">Kids studying</p>
            <button
              className="mt-4 btn-secondary text-white text-sm w-48"
              aria-label="Learn more about Mission smile project"
            >
              Learn more
            </button>
          </div>
        </div>
        <div
          className="rounded-[20px] h-80 bg-center bg-cover relative overflow-hidden shadow-3xl"
          style={{ backgroundImage: `url("/proj1.png")` }}
          role="img"
          aria-label="Mission smile project"
        >
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h3 className="text-white font-bold text-lg mb-2">Mission smile</h3>
            <p className="text-white text-sm opacity-90">Kids studying</p>
            <button
              className="mt-4 btn-secondary text-white text-sm w-48"
              aria-label="Learn more about Mission smile project"
            >
              Learn more
            </button>
          </div>
        </div>
        <div
          className="rounded-[20px] h-80 bg-center bg-cover relative overflow-hidden shadow-3xl"
          style={{ backgroundImage: `url("/proj1.png")` }}
          role="img"
          aria-label="Mission smile project"
        >
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            <h3 className="text-white font-bold text-lg mb-2">Mission smile</h3>
            <p className="text-white text-sm opacity-90">Kids studying</p>
            <button
              className="mt-4 btn-secondary text-white text-sm w-48"
              aria-label="Learn more about Mission smile project"
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
