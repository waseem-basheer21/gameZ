import { useState, useEffect } from "react";
import StoreCard from "../components/StoreCard";
import { Player } from "@lottiefiles/react-lottie-player";

const Store = () => {
  const [stores, setStores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const key = "";

  useEffect(() => {
    const fetchStores = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.rawg.io/api/stores?key=${key}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch stores");
        }
        const data = await response.json();
        setStores(data.results);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchStores();
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
          {stores.map((store) => {
            return <StoreCard key={store.id} store={store} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Store;
