import { TbBrandGithub } from "react-icons/tb";
import {
  SlSocialYoutube,
  SlSocialLinkedin,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="hidden mdl:inline-flex xl:hidden items-center justify-center w-full py-6 gap-4">
      <a
        href="https://www.linkedin.com/in/jeremy-zeyu-liu/"
        target="_blank"
        aria-label="linkedin"
      >
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <SlSocialLinkedin />
        </span>
      </a>

      <a
        href="https://github.com/JeremyyyLiu"
        target="_blank"
        aria-label="github"
      >
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <TbBrandGithub />
        </span>
      </a>

      <a
        href="https://www.youtube.com/@jeremyliu5737/featured"
        target="_blank"
        aria-label="youtube"
      >
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <SlSocialYoutube />
        </span>
      </a>

      <a href="mailto:jeremy.zeyuliu@gmail.com" aria-label="mail">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300">
          <AiOutlineMail />
        </span>
      </a>

      <span
        className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
        aria-label="facebook"
      >
        <SlSocialFacebook />
      </span>

      <span
        className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex items-center justify-center hover:text-textGreen cursor-pointer hover:-translate-y-2 transition-all duration-300"
        aria-label="instagram"
      >
        <SlSocialInstagram />
      </span>
    </div>
  );
};

export default Footer;
