export const validateDateCheck = (value) => {
  const regex = /^\d{8}$/;
  return regex.test(value);
};
