import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="">
      <div
        className=" min-h-screen w-full bg-cover bg-no-repeat grid grid-cols-1 px-6  md:px-10  lg:px-28 py-28"
        style={{ backgroundImage: `url('/BG Image.png')` }}
      >
        {/* Content */}
        <div className="max-w-4xl sm:px-6 md:px-10 lg:px-28">
          <div className="text-4xl lg:text-6xl font-bold text-white max-w-[780px] md:leading-[64.8px] py-10 text-center md:text-left">
            Inclusive care for children with special needs
          </div>
          <div className="flex flex-row gap-4 sm:max-md:justify-center items-center mx-auto">
            <div className="">
              <Link href="/whatwedo">
                <button className="btn-secondary">What We Do</button>
              </Link>
            </div>
            <div className="/donate">
              <Link href="/donate">
                <button className="btn-supportus">Support Us</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
