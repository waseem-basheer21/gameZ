import { useState, useEffect } from "react";
import GameCard from "../components/GameCard";
import { Player } from "@lottiefiles/react-lottie-player";

const Games = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const key = "";

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${key}&page=20`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch games");
        }
        const data = await response.json();
        setGames(data.results);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchGames();
  }, []);

  if (loading) {
    return (
      <div>
        {" "}
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
          {games.map((game) => {
            return <GameCard key={game.id} game={game} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Games;
