import CityCard from "./CityCard";
import { CityWeather } from "../utils/types";

interface FavoritesProps {
  favorites: CityWeather[];
  onFavoritesChange: (newFavorites: CityWeather[]) => void;
}

export default function Favorites({ favorites, onFavoritesChange }: FavoritesProps) {
  return (
    <div className="my-6 bg-slate-300 p-4 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Favorites</h2>
      {favorites.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((cityWeather, index) => (
            <CityCard key={index} cityWeather={cityWeather} isFavorite={true} onFavoritesChange={onFavoritesChange} />
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No favorite cities yet</p>
      )}
    </div>
  );
}
