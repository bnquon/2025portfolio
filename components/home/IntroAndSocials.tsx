import { lora } from "@/app/fonts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { DATA } from "../../data/data";

const ICONS: Record<string, IconDefinition> = {
  faGithub,
  faLinkedin,
  faEnvelope,
};

export default function IntroAndSocials() {
  return (
    <div className="sm:grid sm:grid-cols-[1fr_1fr] sm:gap-0 gap-4 flex flex-col mt-auto">
      <div className={`${lora.className} 2xl:text-5xl text-3xl 2xl:leading-[60px] leading-[40px] sm:mt-0 mt-20`}>
        {DATA.homeIntro}
      </div>
      <div className="flex gap-6 sm:ml-auto h-fit mt-auto">
        {DATA.socials.map((social, idx) => (
          <a
            key={idx}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="sm:w-[60px] sm:h-[60px] h-[50px] w-[50px] border-[1px] border-black rounded-full flex items-center justify-center"
          >
            <FontAwesomeIcon icon={ICONS[social.icon]} className="sm:text-2xl text-xl" />
          </a>
        ))}
      </div>
    </div>
  );
}
