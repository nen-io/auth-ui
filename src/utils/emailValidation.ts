export default (e: Event): string => {
  const email = (e.target as HTMLInputElement).value;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  const isValid = emailRegex.test(email);
  if (!isValid) {
    return "Invalid Email";
  } else {
    return "";
  }
};
