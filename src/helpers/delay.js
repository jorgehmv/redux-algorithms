export const SMALL_DELAY = 100;
export const MEDIUM_DELAY = 500;
export const LARGE_DELAY = 1000;

export default function delay(interval = MEDIUM_DELAY) {
  return new Promise((fulfill) => {
    setTimeout(() => {
      fulfill();
    }, interval);
  });
}
