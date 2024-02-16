import { useState, useEffect } from "react";
import CreatorCard from "../components/CreatorCard";
import { Player } from "@lottiefiles/react-lottie-player";

const Creator = () => {
  const [name, setName] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://api.rawg.io/api/creators?key=ee06e0fd2b014aab8ae0d70566786513"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch games");
        }
        const data = await response.json();
        setName(data.results);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchCreator();
  }, []);

  if (loading) {
    return (
      <div>
        <Player
          src="loadingAnimation.json"
          className="player h-[600px] w-[600px]"
          loop
          autoplay
        />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        
        <Player
          src="error.json"
          className="player h-[600px] w-[600px]"
          loop
          autoplay
        />
      </div>
    );
  }

  return (
    <section className="mt-[40px]">
      <div className="flex flex-col justify-center items-center text-white ">
        <div className="mt-[80px] flex justify-center items-center gap-4 w-1500px flex-wrap">
          {name.map((creator) => {
            return <CreatorCard key={creator.id} creator={creator} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Creator;
