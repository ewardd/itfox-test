import { LocationEnum } from "../Constants";

export const getLocationName = (location: LocationEnum): string => {
  switch (location) {
    case LocationEnum.Moscow:
      return "Moscow";
    case LocationEnum.StPetersburg:
      return "St. Petersburg";
    case LocationEnum.Rostov:
      return "Rostov";
    case LocationEnum.CurrentLocation:
      return "Current location";
    default:
      return "Unknown location";
  }
};
