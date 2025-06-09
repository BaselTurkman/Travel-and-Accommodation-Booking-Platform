export interface LoginPayload {
  userName: string;
  password: string;
}

export interface loginResponse {
  authentication: string;
  userType: string;
}