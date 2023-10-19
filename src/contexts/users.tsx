import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import { IUser } from "../models/user";
import { api } from "../services/api";
import { toast } from "react-toastify";

export interface IUserContext {
  user: IUser;
  isUserLoggedIn: boolean;
  handleLogin: (email: string, password: string) => void;
  handleLogout: () => void;
  loading: boolean;
}

interface IUsersContextProvider {
  children: React.ReactNode;
}

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IUsersContextProvider) => {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<IUser>({} as IUser);
  const [loading, setLoading] = useState<boolean>(false);

  let history = useHistory();

  const handleLogin = async (email: string, password: string) => {
    setLoading(true);
    try {
      const response = await api.post(
        "/cgshopbackend-f143a/us-central1/login",
        {
          email,
          password,
        }
      );

      toast.success("Succesfull login");

      localStorage.setItem("account", JSON.stringify(response.data));
      setIsUserLoggedIn(true);
      history.push("/");
    } catch (error) {
      console.log(error);
      toast.error("Unsuccessful login");
    }
    setLoading(false);
  };

  const handleLogout = () => {
    setIsUserLoggedIn(false);
    localStorage.removeItem("account");
  };

  useEffect(() => {
    const account = localStorage.getItem("account");
    if (account) {
      const parsedData = JSON.parse(account);
      setIsUserLoggedIn(true);
      setUser(parsedData);
    }
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        isUserLoggedIn,
        handleLogin,
        handleLogout,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
