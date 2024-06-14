export const getCurrentLocation = (
  onSucces: (pos: GeolocationPosition) => void,
) => {
  if (typeof navigator !== 'undefined') {
    return navigator.geolocation.getCurrentPosition(
      (pos) => onSucces(pos),
      (err) =>
        console.error(
          `Fetch location error: ${err.PERMISSION_DENIED} - ${err.POSITION_UNAVAILABLE} - ${err.TIMEOUT} - ${err.code} - ${err.message}`,
        ),
    )
  }
}
