import { useState, useEffect } from "react";

export const isLoggedIn = () => {
  const [isLogged, setIsLogged] = useState(false);

  useEffect(() => {
    var user_data = localStorage.getItem("user_details");
    var isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn || !user_data) {
      setIsLogged(false);
    } else {
      setIsLogged(true);
    }
  });
  return isLogged;
};