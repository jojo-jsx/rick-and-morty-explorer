import { Link } from "react-router";
import { FiGithub } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { RiDiscordLine } from "react-icons/ri";
import { RiRedditLine } from "react-icons/ri";
import { CiLinkedin } from "react-icons/ci";

export default function Footer() {
  function style() {
    return "text-[#F2F2EF] text-xl p-2 rounded-full hover:bg-[#F2F2EF] hover:text-[#797A7D] transition-all";
  }

  return (
    <div className="bg-[#797A7D]">
      <div className="flex flex-col gap-4 md:flex items-center justify-between p-6">
        <div>
          <h2 className="text-4xl font-bold text-[#F2F2EF] mb-4 ">
            R&M Explorer
          </h2>
          <p className="text-[#A09F96]">
            Browse the complete multiverse character database. <br />
            Powered by the Rick and Morty REST API - explore <br />
            characters from every dimension, every timeline , and every <br />
            reality.
          </p>
          <div className="flex items-center gap-6 mt-4">
            <Link to={"https://github.com/jojo-jsx"} className={style()}>
              <FiGithub />
            </Link>
            <Link to={"https://x.com/jojo_jsx"} className={style()}>
              <FaXTwitter />
            </Link>
            <Link to={"https://github.com/jojo-jsx"} className={style()}>
              <RiDiscordLine />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/joshua-leo-3ba984373/"}
              className={style()}
            >
              <CiLinkedin />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6 text-[#A09F96]">
          <p>Rick and Morty API</p>
          <Link to={"/"} className="hover:text-white transition-colors">
            Home
          </Link>
          <Link className="text-[#79CC66] hover:text-green-400 ">
            rickandmortyapi.com
          </Link>
          <Link
            to={"/characters"}
            className="hover:text-white transition-colors"
          >
            Characters
          </Link>
        </div>
      </div>
    </div>
  );
}
