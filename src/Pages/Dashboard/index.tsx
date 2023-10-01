import React from "react";
import { LocationMenu } from "../../Components/LocationMenu";
import { WeatherWidget } from "../../Components/WeatherWidget";
import styles from "./styles.module.scss";

export const Dashboard: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <LocationMenu />
      <WeatherWidget />
    </div>
  );
};
