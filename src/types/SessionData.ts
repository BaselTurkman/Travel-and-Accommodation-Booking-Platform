import { UserRole } from "./User";

export interface SessionData {
  user_id: string;
  given_name: string;
  family_name: string;
  userType: UserRole;
  authentication: string;
}