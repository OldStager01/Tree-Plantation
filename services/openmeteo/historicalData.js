import { fetchWeatherApi } from "openmeteo";

const weatherVariables = [
  "weather_code",
  "temperature_2m_max",
  "temperature_2m_min",
  "sunshine_duration",
  "precipitation_sum",
  "et0_fao_evapotranspiration",
  "relative_humidity_2m_mean",
];
export const getHistoricalWeatherData = async () => {
  const params = {
    latitude: 19.990706816984115,
    longitude: 73.71583504361898,
    start_date: "2024-08-01",
    end_date: "2024-08-07",
    daily: weatherVariables,
  };
  const url = "https://archive-api.open-meteo.com/v1/archive";
  const responses = await fetchWeatherApi(url, params);

  const daily = responses[0].daily();
  console.log(daily.variables(1)?.valuesArray());
  return;
};
