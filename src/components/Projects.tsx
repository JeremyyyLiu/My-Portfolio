import SectionTitle from "./SectionTitle";
import Image from "next/image";
import Fotopie from "../../public/fotopie.png";
import { AiOutlineYoutube } from "react-icons/ai";
import { TbBrandGithub } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";

const Projects = () => {
  return (
    <section id="projects" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Things I Have Built" titleNo="03" />

      {/* Project One */}
      <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
        <div className="flex flex-col xl:flex-row gap-6">
          {/* Left side */}
          <a
            href="https://www.fotopie.net/"
            target="_blank"
            className="w-full xl:w-1/2 h-auto relative group"
          >
            <div>
              <Image
                src={Fotopie}
                alt="image"
                className="w-full h-full object-contain"
              />
            </div>
          </a>
          {/* Right side */}
          <div className="w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between items-end text-right xl:-ml-16 z-10">
            <p className="font-titleFont text-textGreen text-sm tracking-wide">
              Featured Project
            </p>
            <h3 className="text-2xl font-bold">FotoPie</h3>
            <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md">
              As a full stack project, FotoPie provides a dynamic and engaging
              space for users to share their favorite photos. Users can upload
              their own photos and subscribe by using{" "}
              <span className="text-textGreen">Stripe</span>. They can also
              search for photos using keywords, and even generate unique images
              using <span className="text-textGreen">OpenAI</span> models.
            </p>

            <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
              <li>Next.js</li>
              <li>Typescript</li>
              <li>Nest.js</li>
              <li>MongoDB</li>
              <li>Stripe</li>
              <li>OpenAI</li>
              <li>AWS S3</li>
            </ul>

            <div className="text-2xl flex gap-4">
              <a
                href="https://github.com/JeremyyyLiu"
                target="_blank"
                className="hover:text-textGreen duration-300"
              >
                <TbBrandGithub />
              </a>
              <a
                href="https://www.youtube.com/watch?v=aR2_ywGywjo"
                target="_blank"
                className="hover:text-textGreen duration-300"
              >
                <AiOutlineYoutube />
              </a>
              <a
                href="https://www.fotopie.net/"
                target="_blank"
                className="hover:text-textGreen duration-300"
              >
                <RxOpenInNewWindow />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Project Two */}

      {/* Project Three */}
    </section>
  );
};

export default Projects;
