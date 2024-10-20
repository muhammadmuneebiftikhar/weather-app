export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface MainWeather {
  temp: number;
  humidity: number;
}

export interface Wind {
  speed: number;
}

export interface Sys {
  id: number;
  country: string;
}

export interface CityWeather {
  name: string;
  sys: Sys;
  main: MainWeather;
  weather: Weather[];
  wind: Wind;
}

type ForecastDay = {
  dt_txt: string;
  main: {
    temp: number;
    humidity: number;
  };
  weather: { description: string; icon: string; }[];
  wind: { speed: number };
};

export type CityForecast = {
  list: ForecastDay[];
};
