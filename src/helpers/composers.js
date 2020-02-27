// eslint-disable-next-line import/prefer-default-export
export const throttle = (closure, milliseconds) => {
  let inThrottle = false;

  return () => {
    if (!inThrottle) {
      inThrottle = true;

      setTimeout(() => {
        closure();
        inThrottle = false;
      }, milliseconds);
    }
  };
};
