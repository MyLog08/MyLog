const validatePasswordFormat = (password) => {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()\-_=+{};:,<.>])(?=.*[^\s]).{8,}$/;
  return passwordRegex.test(password);
};

export default validatePasswordFormat;
