export const getMyPosition = async (): Promise<[number, number]> => {
  const result = await new Promise<GeolocationPosition>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });

  return [result.coords.latitude, result.coords.longitude];
};
