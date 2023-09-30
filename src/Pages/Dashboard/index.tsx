import React from "react";
import { LocationMenu } from "../../Components/LocationMenu";
import { WeatherWidget } from "../../Components/WeatherWidget";
import "./styles.scss";

export const Dashboard: React.FC = () => {
  return (
    <div className={"wrapper"}>
      <LocationMenu />
      <WeatherWidget />
    </div>
  );
};
