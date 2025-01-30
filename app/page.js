import Image from "next/image";
import Hero from "@/app/hero-1.png";

export default function Home() {
  return (
    <>
      <nav className="relative mx-auto p-3 bg-red-500">
        <div className="flex items-center justify-between space-x-20 my-3">
          <div className="z-30 w-10">
            <img src="favicon.ico" alt="logo" id="logo" className="img-fluid"/>
          </div>
          <div className="hidden items-center space-x-10 uppercase text-white md:flex">
            <a href="#feature" className="tracking-widset" id="feature">
              feature
            </a>
            <a href="#resume" className="tracking-widset" id="resume">
              resume
            </a>
            <a href="#portfolio" className="tracking-widset" id="portfolio">
              portfolio
            </a>
            <a href="#blog" className="tracking-widset" id="blog">
              blog
            </a>
            <a href="#contact" className="tracking-widset" id="contact">
              contact
            </a>
          </div>
        </div>
      </nav>

      <section id="hero" className="hero">
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
          <div className="flex flex-col space-y-10 lg:mt-16 lg:w-1/2">
            <p className="uppercase">
              Live in motion!
            </p>
            <h1 className="text-3xl font-semibold lg:text-6xl">
              Hi, I’m <span className="text-red-500">Arturo Cuicas</span>
            </h1>
            <h2 className="text-2xl font-semibold lg:text-4xl">
              a Tech Lead.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus, odio, recusandae. Assumenda
              laudantium possimus provident quidem sequi tempore voluptatibus! Accusantium consequuntur dolore facilis
              mollitia neque nisi quasi sit. Ab, distinctio!
            </p>
            <div className="container relative mx-auto p-6 bg-red-500">
              <div className="flex items-center justify-between space-x-20 my-6">
                find with me
              </div>
            </div>
          </div>
          <div className="relative mx-auto lg:mx-0 lg:mb-0 lg:w-1/2">
            <img src={Hero.src} alt="me"
                 className="relative mx-auto lg:w-3/4 z-10 lg:top-24 xl:top-0 overflow-x-visible"/>
          </div>

        </div>
      </section>

      <section id="features">
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
          features
        </div>
      </section>
      <section id="resume">
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
          resume
        </div>
      </section>
      <section id="portfolio">
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
          portfolio
        </div>
      </section>
      <section id="blog">
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
          blog
        </div>
      </section>
      <section id="contact">
        <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row lg:mb-0">
          contact
        </div>
      </section>
    </>
  );
}
