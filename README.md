Create the project using Next.js -> npx create-next-app@latest weather-app

Selected the default options like typescript, Tailwind CSS, etc.

Install Lucide Icons -> npm install lucide-react

// File Structure:
- Utils
    - constants.ts file to store the default cities.
    - types.ts file to define the types for the city weather data.
    - weatherIcons.tsx file to map the weather condition to the corresponding Lucide icon.
    - api.ts file to store the api call to openweathermap.

- Components
    - CityCard.tsx file to display the city weather information.
    - Favorites.tsx file to display the favorite cities.
    - CitySearch.tsx file to search for the city weather information.

- App
    - layout.tsx file to set the background color.
    - page.tsx file to render the main page.

// Explanation:
- Page.tsx
    - State to store the cities weather data and favorites.
    - useEffect to load the weather data and favorites from local storage.
    - Function to handle the city search and add the city weather data to the cities weather state.
    - Function to update the favorites state.
    - Filtered cities weather to display the cities that are not in favorites.
    - Render the CitySearch, Favorites, and CityCard components.

- Layout.tsx
    - Set the background color.

- CityCard.tsx
    - Display the city weather information.
    - Handle the favorite click event to add or remove the city from favorites.
    - Use useEffect to update the favorite state when the component is mounted.

- Favorites.tsx
    - Display the favorite cities.

- CitySearch.tsx
    - Search for the city weather information.
    - Handle the add city click event to add the city weather data to the cities weather state.

- api.ts
    - Fetch the weather data from openweathermap.

- types.ts
    - Define the types for the city weather data.

- constants.ts
    - Store the default cities.

- weatherIcons.tsx
    - Map the weather condition to the corresponding Lucide icon.
