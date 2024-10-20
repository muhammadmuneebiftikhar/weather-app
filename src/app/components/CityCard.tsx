import { CityWeather } from "../utils/types";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import getWeatherIcon from '../utils/weatherIcons';
import Link from 'next/link';

interface CityCardProps {
  cityWeather: CityWeather;
  isFavorite?: boolean;
  onFavoritesChange: (newFavorites: CityWeather[]) => void;
}

export default function CityCard({ cityWeather, isFavorite = false, onFavoritesChange }: CityCardProps) {
  const { name, sys, main, weather, wind } = cityWeather;
  const [isFavoriteState, setIsFavoriteState] = useState(isFavorite);
  
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const isAlreadyFavorite = favorites.some((favorite: CityWeather) => favorite.name === cityWeather.name);
    setIsFavoriteState(isAlreadyFavorite);
  }, [cityWeather]);

  const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const isAlreadyFavorite = favorites.some((favorite: CityWeather) => favorite.name === cityWeather.name);

    let updatedFavorites;
    if (isAlreadyFavorite) {
      updatedFavorites = favorites.filter((favorite: CityWeather) => favorite.name !== cityWeather.name);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavoriteState(false);
    } else {
      updatedFavorites = [...favorites, cityWeather];
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavoriteState(true);
    }
    
    onFavoritesChange(updatedFavorites);
  };

  return (
    <div className="p-4 bg-white shadow rounded-lg flex flex-col items-center relative">
      <button onClick={handleFavoriteClick} className={`absolute top-2 right-2 px-2 py-1 transition-all duration-300 ${isFavoriteState ? 'bg-white' : 'bg-slate-100'} border rounded shadow hover:bg-black hover:text-white`}>
        <Star className={`h-3 w-3 ${isFavoriteState ? 'fill-yellow-500 text-yellow-500' : ''}`} />
      </button>
      <Link href={`/city-detail/${encodeURIComponent(name)}`} className="text-xl font-semibold mb-2 hover:underline">
        {name}, {sys.country}
      </Link>
      <div className="flex items-center mb-2">
        {/* Weather Icon */}
        {getWeatherIcon(weather[0].main)}
        <p className="ml-2 text-lg">Temperature: {Math.round(main.temp)}°C</p>
      </div>
      <p className="text-gray-500">Condition: {weather[0].description}</p>
      <p className="text-gray-500">Wind Speed: {wind.speed} m/s</p>
      <p className="text-gray-500">Humidity: {main.humidity}%</p>
    </div>
  );
}
