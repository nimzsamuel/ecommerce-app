import React, { createContext, useState } from "react";

export const CurrencyContext = createContext();

export const CurrencyProvider = ({ children }) => {
  const [currency, setCurrency] = useState("USD");
  const [rate, setRate] = useState(1); // conversion rate

  const changeCurrency = (curr) => {
    setCurrency(curr);
    if (curr === "USD") setRate(1);
    if (curr === "NGN") setRate(1500);
    if (curr === "EUR") setRate(0.9);
  };

  return (
    <CurrencyContext.Provider value={{ currency, rate, changeCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};
