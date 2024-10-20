'use client';

import { useEffect, useState } from 'react';
import { DEFAULT_CITIES } from './utils/constants';
import { fetchWeatherData } from './utils/api';
import CityCard from './components/CityCard';
import CitySearch from './components/CitySearch';
import Favorites from './components/Favorites';
import { CityWeather } from './utils/types';

export default function Home() {
  const [citiesWeather, setCitiesWeather] = useState<CityWeather[]>([]);
  const [favorites, setFavorites] = useState<CityWeather[]>([]);

  const loadWeatherData = async () => {
    const weatherData: CityWeather[] = await Promise.all(
      DEFAULT_CITIES.map((city) => fetchWeatherData(city))
    );
    setCitiesWeather(weatherData);
  };

  useEffect(() => {
    loadWeatherData();

    const storedFavorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    setFavorites(storedFavorites);
  }, []);

  const handleCityAdd = (cityWeather: CityWeather) => {
    setCitiesWeather([cityWeather, ...citiesWeather]);
  };

  const updateFavorites = (newFavorites: CityWeather[]) => {
    setFavorites(newFavorites);
  };

  const filteredCitiesWeather = citiesWeather.filter(
    (city) => !favorites.some((fav) => fav.name === city.name)
  );

  return (
    <div className="mx-auto p-6">
      <h1 className="text-4xl font-bold mb-6">Weather Dashboard</h1>
      <CitySearch onCityAdd={handleCityAdd} />

      <Favorites favorites={favorites} onFavoritesChange={updateFavorites} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCitiesWeather.map((cityWeather, index) => (
          <CityCard key={index} cityWeather={cityWeather} onFavoritesChange={updateFavorites} />
        ))}
      </div>
    </div>
  );
}
