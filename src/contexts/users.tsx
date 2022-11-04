import { createContext, useState, useEffect } from "react";
import { IUser } from "../models/user";
import { api } from "../services/api";

export interface IUserContext {
  user: IUser;
  isAuthenticated: boolean;
  handleLogin: (email: string, password: string) => void
  handleLogout: () => void
}

interface IUsersContextProvider {
  children: React.ReactNode;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUsersContextProvider) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({} as IUser)

  const handleLogin = async (email: string, password: string) => {
    try {
      const response = await api.get(`/users?email=${email}`);
      if (response.data.length > 0 && response.data[0].password === password) {
        localStorage.setItem("data", JSON.stringify(response.data));
        setIsAuthenticated(true)
        setUser(response.data[0])
      } else {
        alert("big problems");
      }
    } catch (error) {}
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("data");
  };

  useEffect(() => {
    const data = localStorage.getItem("data");
    if (data) {
      const parsedData = JSON.parse(data);
      if (parsedData.length > 0) {
        setIsAuthenticated(true);
        setUser(parsedData[0])
      }
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ user, isAuthenticated, handleLogin, handleLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
