import { LocationEnum } from "../Constants";

export const isLocationEnum = (token: string): token is LocationEnum =>
  Object.values(LocationEnum).includes(token as LocationEnum);
