export interface IUser {
  name?: string;
  email: string;
  password?: string;
  Picture?: string;
  status: "Active" | "Inactive" | "Blocked";
  role: "User" | "Admin";
};