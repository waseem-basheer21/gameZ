import Carousel from "../components/Carousel";
import { useState, useEffect } from "react";
import GameCard from "../components/GameCard";
import { Player } from "@lottiefiles/react-lottie-player";
import "./styles.css"

const Home = () => {
  const [game, setGame] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const key = "";

  // Fetch Games from API

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.rawg.io/api/games?key=${key}&page_size=100`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch games.");
        }
        const data = await response.json();
        setGame(data.results);
        setLoading(false); // Set loading to false after successfully fetching games
      } catch (error) {
        setError(error.message);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchGames();
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
      <div>
        <Carousel />
      </div>
      <div className="flex flex-col justify-center items-center text-white ">
        <div className="text-[4rem] mt-[130px] font-bold trending">
          TRENDING
        </div>
        <div className="mt-[80px] flex justify-center items-center gap-4 w-full md:w-1500px flex-wrap">
          {game.map((game) => {
            return <GameCard key={game.id} game={game} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Home;
