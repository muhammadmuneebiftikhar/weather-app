import { useState } from 'react';
import { fetchWeatherData } from '../utils/api';
import { CityWeather } from '../utils/types';

interface CitySearchProps {
  onCityAdd: (cityWeather: CityWeather) => void;
}

export default function CitySearch({ onCityAdd }: CitySearchProps) {
  const [city, setCity] = useState<string>('');

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const cityWeather = await fetchWeatherData(city);
      onCityAdd(cityWeather);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  return (
    <div className="my-4">
      <form onSubmit={handleSearch} className="flex items-center">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="border p-2 rounded-md w-full"
        />
        <button
          type="submit"
          className="ml-3 bg-black text-white p-2 rounded-md hover:bg-slate-600"
        >
          Search
        </button>
      </form>
    </div>
  );
}
