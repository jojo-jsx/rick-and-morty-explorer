import { useState, useEffect } from "react";
import { GoDotFill } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

export default function Characters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);

    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character",
        );
        if (!response.ok) {
          throw new Error("There is an error");
        }
        const data = await response.json();
        setCharacters(data.results);
        setError(null);
      } catch (error) {
        console.error(error.message);
        setError(error.message);
        setCharacters([]);
      } finally {
        setLoading(false);
      }
    };
    fetchCharacters();
  }, []);

  if (loading) {
    return <div>..loading</div>;
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

  console.log(characters);

  return (
    <div className="p-6 bg-[#010204]">
      <div className="mb-4 text-[#79CC66]">
        <p className="text-[12px]">BROWSE THE MULTIVERSE</p>
      </div>
      <div className=" flex flex-col gap-9 md:flex items-center justify-between mb-8">
        <p className="text-5xl font-bold text-[#F2F2EF]">Character Database</p>
        <div className=" flex items-center gap-1 bg-[#02050A] px-3 py-2 rounded-4xl">
          <span className="text-green-700 animate-pulse">
            <GoDotFill />
          </span>
          <span className="text-[#A09F96]">Live API</span>
        </div>
      </div>

      <div className=" flex flex-col md:grid grid-cols-4 gap-6 cursor-pointer">
        {characters.map((character) => (
          <Link
            to={`/characters/${character.id}`}
            key={character.id}
            className="  rounded-2xl overflow-hidden hover:-translate-y-2  hover:shadow-[0_0_30px_rgba(121,204,102,0.4)] transition-all duration-300"
          >
            <img
              src={character.image}
              alt={character.name}
              className="w-full aspect-square object-cover"
            />
            <div className="bg-[#04070F] p-4">
              <p className="flex items-center gap-2 mb-2">
                <span className={changeStatus(character.status)}>
                  <GoDotFill />
                </span>
                <span className="text-[12px] text-[#A09F96]">
                  {character.status} - {character.species}
                </span>
              </p>
              <h2 className="font-bold text-[15px] text-white mb-1">
                {character.name}
              </h2>
              <p className="text-[#A09F96] text-[12px] mb-2">
                {character.location.name}
              </p>
              <Link
                to={`/characters/${character.id}`}
                className="flex items-center justify-end text-white text-[10px]"
              >
                <div className="border border-[#090E1A] bg-[#090E1A] rounded-full p-2  transition-all duration-300 hover:bg-[#79CC66]">
                  <FaArrowRight />
                </div>
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
