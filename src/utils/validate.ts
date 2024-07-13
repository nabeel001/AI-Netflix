export const validateEmailAndPassword = (email?: string, password?: string) => {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const isEmailValid = email ? emailRegex.test(email) : false;
  const isPasswordValid = password ? passwordRegex.test(password) : false;

  if (!isEmailValid) return "Email is Invalid";
  if (!isPasswordValid)
    return "Password is Invalid. Min 8 characters.\nAtleast 1 uppercase and 1 lowercase letter,\nAtleast 1 number and 1 special character";

  return null;
};
