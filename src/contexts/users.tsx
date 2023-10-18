import { createContext, useState, useEffect } from "react";
import { IUser } from "../models/user";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { IoInformation } from "react-icons/io5";

export interface IUserContext {
  user: IUser;
  isAuthenticated: boolean;
  handleLogin: (email: string, password: string) => void;
  handleLogout: () => void;
  loading: boolean;
}

interface IUsersContextProvider {
  children: React.ReactNode;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUsersContextProvider) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState<boolean>(false);

  // const handleUserAuthentication = async (
  //   username: string,
  //   password: string
  // ) => {
  //   try {
  //     const apiResponse = await api.get(`/users?${username}`);
  //     if (
  //       apiResponse.data.length > 0 &&
  //       apiResponse.data[0].password === password
  //     ) {
  //       localStorage.setItem("data", JSON.stringify(apiResponse.data));
  //       setIsAuthenticated(true);
  //       setUser(apiResponse.data[0]);
  //       return true;
  //     }
  //     return false;
  //   } catch (error) {
  //     return false;
  //   }
  // };

  const handleLogin = async (username: string, password: string) => {
    setLoading(true);
    const response = await api.post("/cgshopbackend-f143a/us-central1/login", {
      username,
      password,
    });
    console.log(response);
    setLoading(false);
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
        setUser(parsedData[0]);
      }
    }
  }, []);

  return (
    <UserContext.Provider
      value={{ user, isAuthenticated, handleLogin, handleLogout, loading }}
    >
      {children}
    </UserContext.Provider>
  );
};
