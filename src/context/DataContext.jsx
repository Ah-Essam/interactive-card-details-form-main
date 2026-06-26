import { createContext, useState } from "react";
const DataContext = createContext();
const DataProvider = ({ children }) => {
  const [cardData, setCardData] = useState({
    name: "",
    number: "",
    mm: "",
    yy: "",
    cvc: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    number: "",
    mm: "",
    yy: "",
    cvc: "",
  });
  const [approved, setApproved] = useState(false);
  return (
    <DataContext.Provider
      value={{
        cardData,
        setCardData,
        errors,
        setErrors,
        approved,
        setApproved,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
