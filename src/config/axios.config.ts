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

export const axiosFormData = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    ...defaultAxiosSettings.headers,
    Accept: "*/*",
    "Content-Type": "multipart/form-data",
  },
});