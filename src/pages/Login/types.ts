export interface LoginPayload {
  userName: string;
  password: string;
}

export interface loginResponse {
  token: string;
  expiresOn: string;
}