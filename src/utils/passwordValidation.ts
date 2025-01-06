export default (e: Event) => {
  const password = (e.target as HTMLInputElement).value;

  if (!/[A-Z]/.test(password)) {
    return "Password must contain atleast one uppercase letter";
  }

  if (!/[a-z]/.test(password)) {
    return "Password must contain atleast one lowercase letter";
  }

  if (!/[0-9]/.test(password)) {
    return "Password must contain atleast one number";
  }

  if (!/[^A-Za-z0-9]/.test(password)) {
    return "Password must contain atleast one special character";
  }

  if (password.length < 8) {
    return "Password must be atleast 8 characters";
  }

  return "";
};
