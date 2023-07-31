import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();

  const login = async (payload) => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(payload),
    };
    return await fetch("http://localhost:3001/api/auth/signin", requestOptions);
  };

  const mutation = useMutation({
    mutationFn: async () => {
      const requestOptions = {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      };
      const response = await fetch(
        "http://localhost:3001/api/auth/userislogged",
        requestOptions,
      );
      return response.json();
    },
    onError: (error, variables, context) => {},
    onSuccess: (data, variables, context) => {
      console.log("Oi");
      if (data.isLogged) {
        return true;
      } else {
        navigate("/login");
        return false;
      }
    },
  });

  const isLogged = async () => {
    mutation.mutate();
  };

  return (
    <>
      <AuthContext.Provider value={{ isLogged, login }}>
        {children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContext;
