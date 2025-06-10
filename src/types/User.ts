import { SessionData } from "./SessionData";

export type UserRole = "Admin" | "User";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
export interface User extends Omit<SessionData, "authentication"> {}