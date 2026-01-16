import { User } from "./types/auth.types";
import { DEFAULT_USER } from "../lib/constants/constants";

const USERS_KEY = "users";
const CURRENT_USER_KEY = "currentUser";

export const AuthService = {
  getUsers(): User[] {
    return JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
  },

  saveUsers(users: User[]) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  },

  signUp(email: string, password: string): User {
    const users = this.getUsers();

    const exists = users.find((u) => u.email === email);
    if (exists) {
      throw new Error("User already exists");
    }

    const newUser: User = {
      id: crypto.randomUUID(),
      email,
      password,
      name: DEFAULT_USER.name,
      avatar: DEFAULT_USER.avatar,
    };

    users.push(newUser);
    this.saveUsers(users);

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(newUser));

    return newUser;
  },

  signIn(email: string, password: string): User {
    const users = this.getUsers();

    const user = users.find(
      (u) => u.email === email && u.password === password,
    );

    if (!user) {
      throw new Error("Invalid email or password");
    }

    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    return user;
  },

  getCurrentUser(): User | null {
    return JSON.parse(localStorage.getItem(CURRENT_USER_KEY) || "null");
  },

  logout() {
    localStorage.removeItem(CURRENT_USER_KEY);
  },
};
