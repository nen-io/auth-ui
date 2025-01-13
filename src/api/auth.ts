const API_URL = (import.meta.env.VITE_API_URL as string) || "";

interface SignInParams {
  email: string;
  password: string;
}

export const Logout = async () => {
  const resp = await fetch(`${API_URL}/logout`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  return await resp.json();
};

export const SignIn = async ({ email, password }: SignInParams) => {
  try {
    const resp = await fetch(`${API_URL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
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
  const resp = await fetch(`${API_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password, firstName, lastName, userName }),
  });

  return await resp.json();
};

interface RequestVerify {
  email: string;
}

export const RequestVerify = async ({ email }: RequestVerify) => {
  const resp = await fetch(`${API_URL}/request-email-verification`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  const json = await resp.json();
  return json;
};

export const VerifyEmail = async (id: string, token: string) => {
  const resp = await fetch(`${API_URL}/verify/${token}/${id}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return await resp.json();
};

export const Me = async () => {
  const resp = await fetch(`${API_URL}/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  return await resp.json();
};

export const ForgotPasswordRequest = async (email: string) => {
  const resp = await fetch(`${API_URL}/forgot-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email }),
  });

  return await resp.json();
};

export const ForgotPasswordChange = async (
  token: string,
  id: string,
  password: string,
) => {
  const resp = await fetch(`${API_URL}/forgot-password`, {
    body: JSON.stringify({
      token,
      id,
      newPassword: password,
    }),
  });

  return resp.json();
};
