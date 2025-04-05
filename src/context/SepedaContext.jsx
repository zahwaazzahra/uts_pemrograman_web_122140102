import { createContext, useState, useContext } from 'react';

const SepedaContext = createContext();

export const SepedaProvider = ({ children }) => {
  const [selectedBike, setSelectedBike] = useState(null);

  return (
    <SepedaContext.Provider value={{ selectedBike, setSelectedBike }}>
      {children}
    </SepedaContext.Provider>
  );
};

export const useSepeda = () => useContext(SepedaContext);
