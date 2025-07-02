import { getSession } from "@/lib/session";
import axios, { AxiosRequestConfig } from "axios";

const getDefaultAxiosSettings = (): AxiosRequestConfig => {
  const accessToken = getSession();

  const headers: Record<string, string> = {
    Accept: "application/json",
    "Content-Type": "application/json",
  };

  if (accessToken) {
    headers.Authorization = `Bearer ${accessToken}`;
  }
  return { headers };
};

const defaultAxiosSettings = getDefaultAxiosSettings();

export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  ...defaultAxiosSettings,
});

axiosInstance.interceptors.request.use((config) => {
  const token = getSession();
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  } else {
    delete config.headers["Authorization"];
  }
  return config;
});
