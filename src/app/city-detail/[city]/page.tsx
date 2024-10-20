'use client';

import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { fetchForecastData } from '../../utils/api';
import { CityForecast } from '../../utils/types';
import Link from 'next/link';
import getWeatherIcon from '../../utils/weatherIcons';
import { Loader2, ArrowLeft } from 'lucide-react';

export default function CityWeatherDetails() {
    const params = useParams();
    const city = params.city as string;

    const [forecast, setForecast] = useState<CityForecast | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadForecastData = async () => {
            if (city) {
                const forecastData: CityForecast = await fetchForecastData(city);
                console.log(forecastData);
                setForecast(forecastData);
                setLoading(false);
            }
        };
        loadForecastData();
    }, [city]);

    if (loading) {
        return <div className="flex justify-center items-center h-screen">
            <Loader2 className="animate-spin" />
        </div>;
    }

    if (!forecast) {
        return <p>Forecast data not found.</p>;
    }

    return (
        <div className="container mx-auto p-4">
            <div className="flex items-center mb-5 bg-slate-300 p-3 rounded-md">
                <Link href={`/`} className="hover:text-slate-600">  
                    <span className="hover:text-slate-600">
                        <ArrowLeft />
                    </span>
                </Link>
                <h1 className="text-xl font-bold ml-3">Detailed Weather for {city}</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {forecast.list.map((day, index) => (
                    <div key={index} className="bg-white p-4 shadow rounded text-center">
                        <p className="font-bold mb-2">{day.dt_txt}</p>
                        <div className="flex justify-center items-center mb-2">
                            {/* Weather Icon */}
                            {getWeatherIcon(day.weather[0].main)}
                            <p className="ml-2 text-lg">Temperature: {Math.round(day.main.temp)} °C</p>
                        </div>
                        <p>Condition: {day.weather[0].description}</p>
                        <p>Wind: {day.wind.speed} m/s</p>
                        <p>Humidity: {day.main.humidity}%</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
