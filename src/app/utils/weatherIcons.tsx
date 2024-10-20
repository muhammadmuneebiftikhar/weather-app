import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning, Wind, CloudDrizzle, CloudFog, CloudSun } from 'lucide-react';

const getWeatherIcon = (condition: string) => {
  switch (condition.toLowerCase()) {
    case 'clear':
      return <Sun className="w-6 h-6 text-yellow-500" />;
    case 'clouds':
      return <Cloud className="w-6 h-6 text-gray-500" />;
    case 'rain':
      return <CloudRain className="w-6 h-6 text-blue-500" />;
    case 'drizzle':
      return <CloudDrizzle className="w-6 h-6 text-blue-400" />;
    case 'thunderstorm':
      return <CloudLightning className="w-6 h-6 text-purple-500" />;
    case 'snow':
      return <CloudSnow className="w-6 h-6 text-white" />;
    case 'mist':
    case 'fog':
      return <CloudFog className="w-6 h-6 text-gray-400" />;
    case 'wind':
      return <Wind className="w-6 h-6 text-gray-400" />;
    case 'haze':
    case 'smoke':
    case 'dust':
      return <CloudSun className="w-6 h-6 text-orange-400" />;
    default:
      return <Sun className="w-6 h-6 text-yellow-500" />;
  }
};

export default getWeatherIcon;
