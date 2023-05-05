export const checkIsUSernameIsTaken = (userName: string): boolean => {
  return false;
};

export const validatePassword = (password: string): boolean => {
  const passwordRegex =
    /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex?.test(password);
};

export const checkIsPasswordTaken = (password: string): boolean => {
  return false;
};
