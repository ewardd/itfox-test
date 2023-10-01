import { LocationEnum } from "../Constants";
import { getMyPosition } from "./getMyPosition";

export const getLocationCoordinates = async (
  location: LocationEnum
): Promise<[number, number]> => {
  switch (location) {
    case LocationEnum.Moscow:
      return [55.7522, 37.6156];
    case LocationEnum.StPetersburg:
      return [59.8944, 30.2642];
    case LocationEnum.Rostov:
      return [57.1914, 39.4139];
    case LocationEnum.CurrentLocation:
      return await getMyPosition();
    default:
      return [55.7522, 37.6156];
  }
};
