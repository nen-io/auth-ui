export default (e: Event, password: string) => {
  const confirmPassword = (e.target as HTMLInputElement).value;

  if (confirmPassword !== password) {
    return "Passwords do not match";
  } else {
    return "";
  }
};
