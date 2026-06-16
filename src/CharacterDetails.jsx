import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { FaArrowLeft } from "react-icons/fa";

export default function CharacterDetails() {
  const { id } = useParams();

  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    const fetchCharacter = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/${id}`,
        );
        if (!response.ok) {
          throw new Error("An error occured");
        }
        const data = await response.json();
        setCharacter(data);
        setError(null);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
        setCharacter(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCharacter();
  }, [id]);

  if (loading) {
    return <div>...loading</div>;
  }
  if (error) {
    return <div>{error}</div>;
  }

  function style() {
    return "flex items-center gap-10";
  }
  function changeStatus(status) {
    if (status == "Alive") {
      return "text-green-700";
    }
    if (status == "Dead") {
      return "text-red-700";
    } else {
      return "text-[#A09F96]";
    }
  }

  console.log(character);

  return (
    <div className=" flex flex-col p-4  md:flex-row items-center md:p-8 justify-center  gap-10 bg-[#010204]">
      <div>
        <Link
          to={"/characters"}
          className="flex items-center gap-2 text-[#A09F96]"
        >
          <span>
            <FaArrowLeft />
          </span>
          <p>Back to Characters</p>
        </Link>
        <img
          src={character.image}
          alt={character.name}
          className=" w-80 md:w-100 rounded-2xl mt-10 shadow-[0_0_30px_rgba(121,204,102,0.4)]"
        />
      </div>
      <div className="mt-4 px-4 md:px-0">
        <div className="text-[12px] text-[#79CC66] ml-8 md:ml-0">
          <p>(CHARACTER PROFILE)</p>
        </div>
        <div className="text-5xl font-bold mt-1 mb-2 ml-8 md:ml-0 text-[#F2F2EF]">
          <h1>{character.name}</h1>
        </div>
        <div className="text-2xl ml-8 md:ml-0 text-[#A09F96]">
          <p>{character.species}</p>
        </div>
        <div className="mt-6 ml-8 md:ml-0 space-y-3">
          <div className={style()}>
            <span className="text-[#A09F96]">Status</span>
            <span className="flex items-center gap-1">
              <span className={changeStatus(character.status)}>
                <GoDotFill />
              </span>
              <span className="text-[#F2F2EF]">{character.status}</span>
            </span>
          </div>
          <div className={style()}>
            <span className="text-[#A09F96]">Species</span>
            <span className="text-[#F2F2EF]">{character.species}</span>
          </div>
          <div className={style()}>
            <span className="text-[#A09F96]">Gender</span>
            <span className="text-[#F2F2EF]">{character.gender}</span>
          </div>
          <div className={style()}>
            <span className="text-[#A09F96]">Origin</span>
            <span className="text-[#F2F2EF]">{character.origin.name}</span>
          </div>
          <div className={style()}>
            <span className="text-[#A09F96]">Location</span>
            <span className="text-[#F2F2EF]">{character.location.name}</span>
          </div>
        </div>
        <div className="w-96 h-1  bg-[#04060C] mt-3"></div>
        <div className="mt-3 text-[#A09F96] ml-8 md:ml-0 mb-8 md:mb-0">
          <p>- Last known location: {character.location.name}</p>
        </div>
      </div>
    </div>
  );
}
