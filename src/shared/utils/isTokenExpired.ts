// обновляем токен за 10 минут до его окончания
// значение в миллисекундах
const tokenExpiredTimeRatio = 600_000;
const milliSeconds = 1000;

export const isTokenExpired = (start: number, endTime: number) => {
  const end = endTime * milliSeconds;

  const currentTime = Date.now();
  const expirationTime = end - tokenExpiredTimeRatio;

  return currentTime > expirationTime;
};
