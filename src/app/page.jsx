"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import HomeHero from "../components/HomeHero";
import MyPieChart from "../components/charts";
import ContributionPage from "../components/contribution.jsx";
import ProjectsDone from "../components/projects";
import Marque from "@/components/supporters";
gsap.registerPlugin(MotionPathPlugin, ScrollTrigger);

export default function Home() {
  const heroRef = useRef();
  const aboutRef = useRef();
  const servicesRef = useRef();
  const statsRef = useRef();

  useEffect(() => {
    // GSAP ScrollTrigger Animations
    const elements = [
      { ref: heroRef, delay: 0.1 },
      { ref: aboutRef, delay: 0.1 },
      { ref: servicesRef, delay: 0.1 },
      { ref: statsRef, delay: 0.1 },
    ];

    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        // Fade in from bottom
        gsap.fromTo(
          ref.current,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay,
            scrollTrigger: {
              trigger: ref.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="relative min-h-screen bg-white">
      <HomeHero ref={heroRef} />
      {/* Know about us section */}
      <div
        ref={aboutRef}
        className=" w-full px-8 py-6 md:px-16 md:py-10 lg:px-28 grid grid-cols-1 gap-4 bg-white text-[var(--color-primary-text)] "
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="grid grid-cols-1 lg:col-span-2">
            <div className="flex flex-rows gap-4 items-center">
              <div className=" h-[2px] w-[32px] md:w-18 lg:w-22 bg-black">
                {" "}
              </div>
              <div className="uppercase text-sm md:text-base whitespace-nowrap font-bold tracking-[2px] text-[var(--color-primary-text)]">
                KNOW ABOUT US
              </div>
            </div>
            <div className="px-6">
              <h2 className="font-bold  md:leading-[48.2px] text-4xl md:text-[56px] max-w-[780px] text-center md:text-left md:pl-[82px] py-8">
                We provide a place for children with special needs
              </h2>
              <p className="text-black/70  px-4 md:px-10 lg:px-20">
                Established in July 2023 in Pratapgarh, Uttar Pradesh, Sanvi
                Mahila Jan Seva Sansthan is a nonprofit organization dedicated
                to empowering women and children, fostering health and
                education, and building a more equitable society.
              </p>
              <p className="text-black/70  px-4 md:px-10 lg:px-20 py-2 hidden lg:block">
                Guided by the belief that sustainable change begins with
                empowered individuals, the organization works tirelessly to
                address critical issues such as women's health and hygiene,
                child welfare, education, and skill development. Through its
                community-based programs, Sanvi Mahila Jan Seva Sansthan strives
                to create opportunities, support growth, and ensure that every
                individual—especially women and children—can lead a life of
                dignity, independence, and purpose.
              </p>
              <Link
                href="/aboutus"
                className="flex-1 sm:flex-none px-4 md:px-10 lg:px-20"
              >
                <button
                  className="btn-primary py-4 mt-4"
                  aria-label="Learn more about us"
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:max-lg:px-16 lg:pt-16 max-w-[465px] text-center lg:text-left">
            <Image
              alt="BG"
              className="w-full py-40 bg-cover bg-center bg-no-wrap rounded-[20px] hidden lg:block"
              src="/BG Image.png"
              width={100}
              height={100}
            ></Image>
          </div>
        </div>
        {/* <div className=""> */}
        {/* support section */}
        <div className="flex flex-rows pt-16 lg:pt-24 items-center gap-6">
          <div className="uppercase text-sm md:text-base font-bold tracking-[2px] text-[var(--color-primary-text)] whitespace-nowrap">
            OUR Programs
          </div>
          <div className=" h-[2px] w-full bg-[#1D2130]/60"> </div>
        </div>
        {/* marquee */}
      </div>
      {/* marquee section */}
      <div className="pb-10">
        <Marque />
      </div>
      {/* what we do section */}
      <section
        ref={servicesRef}
        className="w-full px-8 py-6 md:px-16 md:py-10 lg:px-28 grid grid-cols-1 gap-4 py-10 bg-[#FCEDC6]"
      >
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="grid grid-cols-1 lg:col-span-2">
            <div className="flex flex-rows gap-4 items-center">
              <div className=" h-[2px] w-[32px] md:w-18 lg:w-22 bg-black">
                {" "}
              </div>
              <div className="uppercase text-sm md:text-base whitespace-nowrap font-bold tracking-[2px] text-[var(--color-primary-text)]">
                what we do
              </div>
            </div>
            <div className="px-6">
              <h2 className="font-bold  md:leading-[48.2px] text-4xl md:text-[56px] max-w-[780px] text-center md:text-left md:pl-[82px] py-8">
                Some services we provide for our children
              </h2>
              <p className=" hidden md:block text-black/70  px-4 md:px-10 lg:px-20">
                We envision a society where every woman and child has the tools,
                resources, and confidence to lead a life of dignity, health, and
                opportunity. Together, we are building a brighter tomorrow, one
                life at a time.
              </p>
              <div className="space-y-4 mt-6 px-8 py-6 md:px-16 md:py-10 lg:px-28 ">
                <div className=" flex items-start space-x-3">
                  <Image
                    src="/image.png"
                    width={30}
                    height={50}
                    alt="Picture of the author"
                    className="rounded-[6px]"
                  />
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="29"
                    viewBox="0 0 28 29"
                    fill="none"
                  >
                    <rect
                      y="0.359375"
                      width="28"
                      height="28"
                      rx="4"
                      fill="black"
                    />
                    <path
                      d="M14.9395 18.957H15.8184V21.3594H14.9395V18.957Z"
                      fill="#FFEBB9"
                    />
                    <path
                      d="M13.1816 18.957H14.0605V21.3594H13.1816V18.957Z"
                      fill="#FFEBB9"
                    />
                    <path
                      d="M17.459 6.35938H11.541C11.2983 6.35938 11.1016 6.55613 11.1016 6.79883V21.3594H12.3027V18.5176C12.3027 18.2749 12.4995 18.0781 12.7422 18.0781H16.2578C16.5005 18.0781 16.6973 18.2749 16.6973 18.5176V21.3594H17.8984V6.79883C17.8984 6.55613 17.7017 6.35938 17.459 6.35938ZM13.1816 16.7598C13.1816 17.0025 12.9849 17.1992 12.7422 17.1992C12.4995 17.1992 12.3027 17.0025 12.3027 16.7598V15.8809C12.3027 15.6382 12.4995 15.4414 12.7422 15.4414C12.9849 15.4414 13.1816 15.6382 13.1816 15.8809V16.7598ZM13.1816 14.123C13.1816 14.3657 12.9849 14.5625 12.7422 14.5625C12.4995 14.5625 12.3027 14.3657 12.3027 14.123V13.2441C12.3027 13.0014 12.4995 12.8047 12.7422 12.8047C12.9849 12.8047 13.1816 13.0014 13.1816 13.2441V14.123ZM14.9395 16.7598C14.9395 17.0025 14.7427 17.1992 14.5 17.1992C14.2573 17.1992 14.0605 17.0025 14.0605 16.7598V15.8809C14.0605 15.6382 14.2573 15.4414 14.5 15.4414C14.7427 15.4414 14.9395 15.6382 14.9395 15.8809V16.7598ZM14.9395 14.123C14.9395 14.3657 14.7427 14.5625 14.5 14.5625C14.2573 14.5625 14.0605 14.3657 14.0605 14.123V13.2441C14.0605 13.0014 14.2573 12.8047 14.5 12.8047C14.7427 12.8047 14.9395 13.0014 14.9395 13.2441V14.123ZM16.6973 16.7598C16.6973 17.0025 16.5005 17.1992 16.2578 17.1992C16.0151 17.1992 15.8184 17.0025 15.8184 16.7598V15.8809C15.8184 15.6382 16.0151 15.4414 16.2578 15.4414C16.5005 15.4414 16.6973 15.6382 16.6973 15.8809V16.7598ZM16.6973 14.123C16.6973 14.3657 16.5005 14.5625 16.2578 14.5625C16.0151 14.5625 15.8184 14.3657 15.8184 14.123V13.2441C15.8184 13.0014 16.0151 12.8047 16.2578 12.8047C16.5005 12.8047 16.6973 13.0014 16.6973 13.2441V14.123ZM13.1816 11.4863C13.1816 11.729 12.9849 11.9258 12.7422 11.9258C12.4995 11.9258 12.3027 11.729 12.3027 11.4863V10.6074C12.3027 10.3647 12.4995 10.168 12.7422 10.168C12.9849 10.168 13.1816 10.3647 13.1816 10.6074V11.4863ZM14.9395 11.4863C14.9395 11.729 14.7427 11.9258 14.5 11.9258C14.2573 11.9258 14.0605 11.729 14.0605 11.4863V10.6074C14.0605 10.3647 14.2573 10.168 14.5 10.168C14.7427 10.168 14.9395 10.3647 14.9395 10.6074V11.4863ZM16.6973 11.4863C16.6973 11.729 16.5005 11.9258 16.2578 11.9258C16.0151 11.9258 15.8184 11.729 15.8184 11.4863V10.6074C15.8184 10.3647 16.0151 10.168 16.2578 10.168C16.5005 10.168 16.6973 10.3647 16.6973 10.6074V11.4863ZM13.1816 8.84961C13.1816 9.0923 12.9849 9.28906 12.7422 9.28906C12.4995 9.28906 12.3027 9.0923 12.3027 8.84961V7.9707C12.3027 7.72801 12.4995 7.53125 12.7422 7.53125C12.9849 7.53125 13.1816 7.72801 13.1816 7.9707V8.84961ZM14.9395 8.84961C14.9395 9.0923 14.7427 9.28906 14.5 9.28906C14.2573 9.28906 14.0605 9.0923 14.0605 8.84961V7.9707C14.0605 7.72801 14.2573 7.53125 14.5 7.53125C14.7427 7.53125 14.9395 7.72801 14.9395 7.9707V8.84961ZM16.6973 8.84961C16.6973 9.0923 16.5005 9.28906 16.2578 9.28906C16.0151 9.28906 15.8184 9.0923 15.8184 8.84961V7.9707C15.8184 7.72801 16.0151 7.53125 16.2578 7.53125C16.5005 7.53125 16.6973 7.72801 16.6973 7.9707V8.84961Z"
                      fill="#FFEBB9"
                    />
                    <path
                      d="M21.5605 12.2188H18.7773V21.3594H21.5605C21.8032 21.3594 22 21.1626 22 20.9199V12.6582C22 12.4155 21.8032 12.2188 21.5605 12.2188ZM20.8281 17.9316C20.8281 18.1743 20.6314 18.3711 20.3887 18.3711C20.146 18.3711 19.9492 18.1743 19.9492 17.9316V17.0527C19.9492 16.81 20.146 16.6133 20.3887 16.6133C20.6314 16.6133 20.8281 16.81 20.8281 17.0527V17.9316ZM20.8281 15.2949C20.8281 15.5376 20.6314 15.7344 20.3887 15.7344C20.146 15.7344 19.9492 15.5376 19.9492 15.2949V14.416C19.9492 14.1733 20.146 13.9766 20.3887 13.9766C20.6314 13.9766 20.8281 14.1733 20.8281 14.416V15.2949Z"
                      fill="#FFEBB9"
                    />
                    <path
                      d="M7.43945 12.2188C7.19676 12.2188 7 12.4155 7 12.6582V20.9199C7 21.1626 7.19676 21.3594 7.43945 21.3594H10.2227V12.2188H7.43945ZM9.05078 17.9316C9.05078 18.1743 8.85402 18.3711 8.61133 18.3711C8.36863 18.3711 8.17188 18.1743 8.17188 17.9316V17.0527C8.17188 16.81 8.36863 16.6133 8.61133 16.6133C8.85402 16.6133 9.05078 16.81 9.05078 17.0527V17.9316ZM9.05078 15.2949C9.05078 15.5376 8.85402 15.7344 8.61133 15.7344C8.36863 15.7344 8.17188 15.5376 8.17188 15.2949V14.416C8.17188 14.1733 8.36863 13.9766 8.61133 13.9766C8.85402 13.9766 9.05078 14.1733 9.05078 14.416V15.2949Z"
                      fill="#FFEBB9"
                    />
                  </svg> */}
                  <div className="text-[var(--color-secondary-text)] ">
                    <div className="font-bold text-xl text-[var(--color-primary-text)] pb-1">
                      Education Programs
                    </div>
                    <li className="list-disc">
                      <i>
                        Remedial Program, Beti Bachao Beti Padhao, Balshalaa
                        Early Learning Centers.
                      </i>
                    </li>
                    <li className="list-disc">
                      Over
                      <span className="font-bold"> 1,946 girls educated</span>,
                      160+ children supported via tuition.
                    </li>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <img
                    className="rounded-[6px] w-7 h-7"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC80lEQVR4nO2Ya0iTURjHz+bmnNOaZEnRzajsQkVR0CeD/BAl5Ic+hJFpZBDrYqNIpTupGJpZRCMCI4ki7eZlC62hszUQKomg1AoEc2lrQVRUNvjHeWF+sF3evZedYe+HP2O8h+c8v/NczsMhhBBMEBHWDiggRIkIYZ4+UGqEsD9pKBEhEp9WijEZGk1c0O86nRaTkg2xGRHq2LnyIoy8fQif14Wfw12wNtRg5fKMsTU5mzLRba/Dn89PuTXveu7CbMpFXJw6NkCMk5Pw0nmDc268frgd2JC1FkeKtgf87vO6cPtaOdRqNXuQK7UlQZ2k+jLwCKMeZ8g1hTs2swVJ1Cfg21BHSCf5qNtexxZkSUa6aAif18UdBlOQ6WlTJAEZePWAfY10tlpEg5w9vY89CG2x4Yo5lNx9Vq7zMQehqjhhEgQx6nFy94uAPeUBofdA082qiEFKzflC95QHxN+K2+5d4A1RXXZAzH7ygfhhbI3nw0LQVCTi9pIXhIrOTrWV5oAAv0aewLRrixT7EERLu/NzuOHRD+F534b1maulsk8QTWWtW4Oh3la8cNRjwbxZUtomiLampaZAn6CT2i7BBBFBLGr2zDScLCnkGkF8vFZ+EJVKhfQ5M7BqxSJemppqDGtz2dL5GO63jTWFsuN75APRajUoPpiHwdctEd3cvz85kbd1I28In9eF9vsX5QExJOo540KHwp6uet4QPq8L+bnZ0oNQiI6Wy6JG9MbrFQEhPvbZxMxe0YH47u6Eq/0qKk/t5Z6HJIYAkQuCjuOWmmIUbMvmHA32riURBAjfwe9x06WIo9B8q5p7fAtmd/HCufjw5t9mcezwzojrlshdE7Sr9T+/E1BfB+1SRAK8QKrO7BdV2JGoVDhEeBChaRWpjh4qEAMhb41EEQKydS0+6n3WEPKWJ3KABIOh/+mjnETOICog49PMYbUgyaBnDQBBIP7I0G5Gf2MAAIJBYlSEtQMKCFEiQpinD5QaIexPGv9VRP4CGflv2F/LSwkAAAAASUVORK5CYII="
                    alt="trust--v1"
                  ></img>
                  <div className="text-[var(--color-secondary-text)]">
                    <div className="font-bold text-xl text-[var(--color-primary-text)] pb-1">
                      Women Empowerment and Child Welfare
                    </div>
                    <li className="list-disc">
                      <span className="font-bold">200 women trained</span> in
                      tailoring.
                    </li>
                    <li className="list-disc">
                      Rights awareness, financial literacy, entrepreneurship
                      support.
                    </li>
                    <li className="list-disc">
                      More than <span className="font-bold">3000 children</span>{" "}
                      were helped by our winter clothes distribution
                    </li>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <img
                    className="rounded-[6px] w-7 h-7"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEFElEQVR4nO2ZeVDNURTHb5tQlKVJwsietBCpiCwllMnWSE2TZVBGJSEGYUJlC80kzUSUoaTGPhEhGdvYxqCxL8mSZTC2N/M1547e9OYtvd771e9l3h9nfu/9fvf37vncc86955zHGGP4T4SJrYAehOktwkR3H+hjhIm/0tBbhDXw6pmYGGPaZB+cPJSKg7vXISF+Nlxd+sDAwKBpWMTZsSc2JUbh1f2jkFSXy8nTO4WIjwmDuVkL3QOxtbHC4qhQ3C7LUai8Inl2twjDhvQXH4RcZMwod5wqSMXv92VqA0hqyffK8/BwcxQXJCM1XiPlJbXk17syBE/xFQ8kfPp4rSEk1eU8lkRzrc621qh+Wqw1xPfK82jX1kI8kPzs9YJYIzdzrSbzCwPh5emiUKlvlaV4fOtwvUBGe7uJB3I4J1mhUgsjg9GsmQncB/XDpABvjPXxQMWNQ0ohXtw7AiMjQ/FAqipOyO06q5bMktuW6SRXZY2UtQs01UEYkMJcWYtM9PeWG7M8NlwlxJ8Pl+Bg301ckBkh/jJKbUuOlXk+xN0ZP99eVAmSn71eGx2EAbFobc4Du0apFXEz+P0edp2Qs2tNnRCUf9lYtxMfhGRfxmquVEzENP6drnQm1LVLPbpZAPteXbWdXzgQ2pl2bVvGP1PQ1gXwo+oCtqcsQhvLVkLMzwQDqXGxkKAxKgE+PCnG5nXR6G5nK+TcDEILZb3KIMgCBNsA8zJBfsjRoQc2JETyz1T5Kcqf5oQH8ud0DfDz0k0Qf7+hXOG+ve3gOdgJX16WSCEeXM/DwP72MDY2QvqWpfwelbc6DXL1bBYvVakynBkaAL/RHhygSydrlB5Ll8LpPIjkX+0dMWsS3FwdMM7XE6lJC/H19TkZV2sSIBI1RA/CGtgiA5z74EBWotoyNXCU+K5lamoC76EDEBrkx11Kg7IUrcxb8vqEYqljh/aNC2Jt1RaJK+fxk7m2v1NCeDxvCz/RzVqqbq7RNrxzazw+vyiRKaYsLbQ+JJlaA6nJVju7VSakYHZ6AnxHDpZWetQipZW/UZqt9D0azxoDpCg3pV67Uk1qHjs/mL9fXpypdNzHZ6dh1d5SN0AoFd+REof71w7KuR0diGkb4xS+V3IkDS5OvRovRorqAKHmA20CNLZnt86ImhvEy9+4BSG8Vr9SkiUz/uLJDIzwchUCAIK7FsVHwb4kzA6bwFMUeo86KEmr50vHEBClLQICoN4g1BygdIM6iuQu1Msid3rzULaDUiNPbhdKU5ObF/Ziwlgvbf8DgdYgmduX8w67omcERau8J30VPj0/IwNz9/J+fvgZGmrUq4LgIKSsOuNaNDdF4PjhWBIdyq8aNtvQYCBNQJjYCuhBmN4iTHT3gT5GmPgrrZb8BYXYLwfl7AQUAAAAAElFTkSuQmCC"
                    alt="giving"
                  ></img>
                  {/* <div className="w-2 h-2 bg-[var(--color-primary-text)] rounded-full mt-2 shrink-0"></div> */}
                  <div className="text-[var(--color-secondary-text)]">
                    <div className="font-bold text-xl text-[var(--color-primary-text)] pb-1">
                      Humanitarian relief program
                    </div>
                    <li className="list-disc">
                      <span className="font-semibold">Emergency Help:</span>{" "}
                      Providing food, water, shelter, and medical aid during
                      disasters.
                    </li>
                    <li className="list-disc">
                      <span className="font-semibold">Recovery Support:</span>{" "}
                      Helping families rebuild and prepare for future
                      emergencies.
                    </li>
                  </div>
                </div>
                <div className="hidden flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[var(--color-primary-text)] rounded-full mt-2 shrink-0"></div>
                  <div className="text-[var(--color-secondary-text)]">
                    <span className="font-semibold">Family Support:</span>{" "}
                    Counseling and guidance for families to better support their
                    children
                  </div>
                </div>
                <div className="hidden flex items-start space-x-3">
                  <div className="w-2 h-2 bg-[var(--color-primary-text)] rounded-full mt-2 shrink-0"></div>
                  <div className="text-[var(--color-secondary-text)]">
                    <span className="font-semibold">
                      Community Integration:
                    </span>{" "}
                    Programs to help children participate actively in community
                    activities
                  </div>
                </div>
                <li className="block lg:hidden">
                  <Link href="/whatwedo">
                    <button className="btn-navbar">Read more</button>
                  </Link>
                </li>
              </div>
            </div>
          </div>
          {/*  Image Content */}
          <div className=" hidden md:block pl-4 lg:pl-12 flex items-center justify-center md:py-10 lg:py-28">
            <Image
              src="/section1.png"
              alt="rescued kid studying"
              width={100}
              height={100}
              className=" w-full h-auto max-w-[320px] max-h-[400px] xl:max-w-[480px] xl:max-h-[568px] object-contain "
            ></Image>
          </div>
        </div>

        {/* </div> */}
      </section>
      {/* other sections */}
      <section className="w-full py-10 bg-white">
        <ProjectsDone />
        {/* <div className="w-full py-8 grid grid-cols-1 md:grid-cols-2 bg-black my-18">
          <div className="py-4 flex flex-col justify-center items-center mx-8 md:ml-[120px] px-4 md:pl-[72px]">
            <h2 className="font-bold text-2xl md:text-5xl leading-tight text-white max-w-[626px]">
              How we spend your donations and where it goes
            </h2>
            <div className="font-medium text-base leading-[25.6px] text-white opacity-60 py-4 ">
              We understand that when you make a donation, you want to know
              exactly where your money is going and we pledge to be transparent.
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="flex flex-rows my-2">
                <div className="w-4 h-4 rounded-[4px] bg-[#BEF3C0]"></div>
                <div className="text-white text-base font-medium">
                  {" "}
                  40% child care home{" "}
                </div>
              </div>
            </div>
          </div>
          <div className="max-w-[600px]">
            <MyPieChart />
          </div>
        </div> */}
        <div className="w-full px-8 py-6 md:px-16 md:py-10 lg:px-28 grid grid-cols-1 gap-4 bg-black text-[var(--color-primary-text)] ">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div className="px-6 grid grid-cols-1 md:col-span-2 gap-4">
              <div className="grid grid-cols-1 gap-1">
                <h2 className="font-bold text-white md:leading-[48.2px] text-4xl md:text-[56px] max-w-[780px] text-center md:text-left md:pl-[82px] py-8">
                  How we spend your donations and where it goes
                </h2>
                <p className="md:pl-[82px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere est repellendus ducimus sint, nobis iusto eius
                  recusandae quo, accusamus provident neque iste ea temporibus
                  ipsum earum? Atque ullam at dignissimos.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-2 md:pl-[82px]">
                <div className="flex flex-row gap-2 items-center justify-center">
                  <div className="h-3 w-3 bg-[#BEF3C0] rounded-[2px]"></div>
                  <div className="text-white">40% Child care </div>
                </div>
                <div className="flex flex-row gap-2 items-center justify-center">
                  <div className="h-3 w-3 bg-[#AC94F1] rounded-[2px]"></div>
                  <div className="text-white">35% cleanliness program</div>
                </div>
                <div className="flex flex-row gap-2 items-center justify-center">
                  <div className="h-3 w-3 bg-[#FFF0CA] rounded-[2px]"></div>
                  <div className="text-white">10% helping people</div>
                </div>
               <div className="flex flex-row gap-2 items-center justify-center">
                  <div className="h-3 w-3 bg-[#F9CF64] rounded-[2px]"></div>
                  <div className="text-white">10% excursions</div>
                </div>
                <div className="flex flex-row gap-2 items-center justify-center">
                  <div className="h-3 w-3 bg-[#F38FBF] rounded-[2px]"></div>
                  <div className="text-white">5% feeding the poor</div>
                </div>
              </div>
            </div>
            <div className="">
              <MyPieChart />
            </div>
          </div>
        </div>
        <ContributionPage />
      </section>
    </div>
  );
}
