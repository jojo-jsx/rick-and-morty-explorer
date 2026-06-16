import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen bg-[url('/bgimage.png')] bg-cover bg-center relative">
      <div className=" flex flex-col gap-8 md:flex items-center justify-between p-10">
        <div className="mt-22">
          <div>
            <p className="text-[14px] text-[#79CC66]">
              MULTIVERSE CHARACTER DATABASE
            </p>
          </div>
          <div className="text-7xl font-bold mb-8 text-[#F2F2EF]">
            <h2>Explore Every</h2>
            <h2 className=" text-[#79CC66]">Dimension</h2>
          </div>
          <div className="mb-7 text-[#B9B8B0]">
            <p>
              Dive into the complete Rick and Morty multiverse. <br />
              Browse characters across all dimensions - powered <br />
              by live API data.
            </p>
          </div>
          <Link
            to={"/characters"}
            className="flex items-center justify-center p-3 gap-4 border border-[#79CC66] bg-[#79CC66] rounded-3xl w-50 ml-2"
          >
            <span className="text-[#797A7D] font-bold">Start Exploring</span>
            <div className="bg-[#797A7D] p-1 rounded-full text-[#79CC66] text-[15px]">
              <FaArrowRight />
            </div>
          </Link>
        </div>
        <div className="text-[#B9B8B0]">
          <p>
            Browse the complete multiverse character index. Live <br />
            API data from every dimension - discover over 800 <br />
            unique character
          </p>
        </div>
      </div>
    </div>
  );
}
