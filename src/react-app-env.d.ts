/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_WEATHER_API: string;
    REACT_APP_LOCATION_API: string;
    REACT_APP_API_KEY: string;
    REACT_APP_ICON_URI: string;
    REACT_APP_AUTH_LOGIN: string;
    REACT_APP_AUTH_PASS: string;
  }
}
