import { useState, useEffect } from "react";
import CreatorDetailsCard from "../components/CreatorDetailsCard";
import { useParams } from "react-router-dom";
import { Player } from "@lottiefiles/react-lottie-player";

const CreatorDetails = () => {
  const [creatorDetails, setCreatorDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const key = "";

  const { id } = useParams();

  // Fetch Games from API

  useEffect(() => {
    const fetchCreatorDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.rawg.io/api/creators/${id}?key=${key}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch creator details.");
        }
        const data = await response.json();
        setCreatorDetails(data);
        setLoading(false); // Set loading to false after successfully fetching games
      } catch (error) {
        setError(error.message);
        setLoading(false); // Set loading to false in case of error
      }
    };

    fetchCreatorDetails();
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
      <CreatorDetailsCard creator={creatorDetails} />
    </>
  );
};

export default CreatorDetails;
