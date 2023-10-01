import { getLocationName } from "../Methods/getLocationName";

export enum LocationEnum {
  Moscow = "moscow",
  StPetersburg = "st_petersburg",
  Rostov = "rostov",
  CurrentLocation = "current_location",
}

export const locationMenuItems = [
  LocationEnum.Moscow,
  LocationEnum.StPetersburg,
  LocationEnum.Rostov,
  LocationEnum.CurrentLocation,
].map((location) => ({ key: location, label: getLocationName(location) }));
