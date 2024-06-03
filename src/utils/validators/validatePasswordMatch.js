export const validatePasswordMatch = (password, confirm) => {
  if (password !== confirm) {
    return false;
  }
  return true;
};
