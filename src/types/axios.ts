import { AxiosError } from "axios";

export interface BaseResponse {
  type: string;
  title: string;
  status: number;
  traceId: string;
  errors: Record<string, string[]>;
  message: string
}

export type AxiosBaseError = AxiosError<BaseResponse>