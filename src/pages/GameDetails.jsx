import { useState, useEffect } from "react";
import GameDetail from "../components/GameDetail";
import { useParams } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const GameDetails = () => {
  const [gameDetails, setGameDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const key = "ee06e0fd2b014aab8ae0d70566786513";

  const { id } = useParams();

  // Fetch Games from API

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.rawg.io/api/games/${id}?key=${key}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch games.");
        }
        const data = await response.json();
        setGameDetails(data);

        setLoading(false); // Set loading to false after successfully fetching games
      } catch (error) {
        setError(error.message);

        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchGames();
  }, [id]);

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
    <>
      <GameDetail details={gameDetails} />
    </>
  );
};

export default GameDetails;
