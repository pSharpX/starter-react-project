export const sleepDelay = (delay, args) =>
  new Promise((resolve) => setTimeout(() => resolve(args), delay))
