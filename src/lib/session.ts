import Cookies from "js-cookie";

export const setSession = (token: string) => {
  Cookies.set(import.meta.env.VITE_ACCESS_TOKEN, token, {
    expires: 10 / 24,
  });
};

export const getSession = () => {
  return Cookies.get(import.meta.env.VITE_ACCESS_TOKEN);
};

export const clearSession = () => {
  Cookies.remove(import.meta.env.VITE_ACCESS_TOKEN);
};
