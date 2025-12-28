import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import { User } from "../services/types/auth.types";
import { AuthService } from "../services/auth.service";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  signUp: (email: string, password: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    return AuthService.getCurrentUser();
  });

  useEffect(() => {
    const savedUser = AuthService.getCurrentUser();
    setUser(savedUser);
  }, []);

  const login = (email: string, password: string) => {
    const userData = AuthService.signIn(email, password);
    setUser(userData);
  };

  const signUp = (email: string, password: string) => {
    const userData = AuthService.signUp(email, password);
    setUser(userData);
  };

  const logout = () => {
    AuthService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signUp, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
