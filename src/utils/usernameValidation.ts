export default (e: Event) => {
  const username = (e.target as HTMLInputElement).value;

  if (username.length < 6) {
    return "Username must be atleast 6 characters";
  } else {
    return "";
  }
};
