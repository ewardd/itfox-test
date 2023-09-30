import { useGetWeatherByCoordinatesQuery } from "../../Api/weatherApi";
import { useAppSelector } from "../../Hooks/redux";
import { Typography } from "antd";
import "./styles.scss";
import { useGetLocationNameByCoordinatesQuery } from "../../Api/locationNameApi";

export const WeatherWidget: React.FC = () => {
  const selectedCoordinates = useAppSelector(
    (state) => state.location.coordinates
  );

  const { data: weather } =
    useGetWeatherByCoordinatesQuery(selectedCoordinates);

  const { data: locationName } =
    useGetLocationNameByCoordinatesQuery(selectedCoordinates);

  return weather && locationName ? (
    <div className={"wrapper"}>
      <Typography.Title>{locationName[0].name}</Typography.Title>
      <Typography.Text>Feels like {weather.main.feels_like}°</Typography.Text>
      <div className={"description"}>
        <Typography.Text>{weather.weather[0].description}</Typography.Text>
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt={weather.weather[0].id.toString()}
          height={"32px"}
        />
      </div>
      <div className={"wind"}>
        <Typography.Text>wind {weather.wind.speed} MPS</Typography.Text>
      </div>
      <div className={"wind"}>
        <Typography.Text>humidity {weather.main.humidity}%</Typography.Text>
      </div>
    </div>
  ) : (
    <></>
  );
};
