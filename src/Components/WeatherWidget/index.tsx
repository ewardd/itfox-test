import { useGetWeatherByCoordinatesQuery } from "../../Api/weatherApi";
import { useAppSelector } from "../../Hooks/redux";
import { Divider, Typography } from "antd";
import { useGetLocationNameByCoordinatesQuery } from "../../Api/locationNameApi";
import styles from "./styles.module.scss";

export const WeatherWidget: React.FC = () => {
  const selectedCoordinates = useAppSelector(
    (state) => state.location.coordinates
  );

  const { data: weather } =
    useGetWeatherByCoordinatesQuery(selectedCoordinates);

  const { data: locationName } =
    useGetLocationNameByCoordinatesQuery(selectedCoordinates);

  if (!weather || !locationName) return null;

  return (
    <div className={styles.wrapper}>
      <Typography.Title className={styles.cityName}>
        {locationName[0].name}
      </Typography.Title>

      <Divider className={styles.nameDivider} />

      <div className={styles.weatherContainer}>
        <div className={styles.weatherExtra}>
          <Typography.Text>
            Feels like {weather.main.feels_like}°
          </Typography.Text>

          <div className={styles.description}>
            <Typography.Text>{weather.weather[0].description}</Typography.Text>
            <img
              src={`${process.env.REACT_APP_ICON_URI}/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].id.toString()}
              height={"32px"}
            />
          </div>

          <div>
            <Typography.Text>wind: {weather.wind.speed} MPS</Typography.Text>
          </div>

          <div>
            <Typography.Text>
              humidity: {weather.main.humidity}%
            </Typography.Text>
          </div>
        </div>

        <div className={styles.weatherMain}>
          <Typography.Text>{weather.main.temp} C</Typography.Text>
        </div>
      </div>
    </div>
  );
};
