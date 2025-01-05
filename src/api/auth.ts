const API_URL = (import.meta.env.VITE_API_URL as string) || "";

interface SignInParams {
  email: string;
  password: string;
}

export const SignIn = async ({ email, password }: SignInParams) => {
  try {
    const resp = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    if (!resp.ok) {
      console.error(resp);
    }

    return await resp.json();
  } catch (e) {
    console.error(e);
    return;
  }
};

interface RegisterParams {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  userName: string;
}

export const Register = async ({
  email,
  password,
  firstName,
  lastName,
  userName,
}: RegisterParams) => {
  return (
    await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, firstName, lastName, userName }),
    })
  ).json();
};
