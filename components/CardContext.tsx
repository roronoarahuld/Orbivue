import React, { createContext, useState } from 'react';

export const CardContext = createContext({
  selectedId: "default",
  setSelectedId: (id: string) => {}
});

export const CardProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedId, setSelectedId] = useState("default");

  return (
    <CardContext.Provider value={{ selectedId, setSelectedId }}>
      {children}
    </CardContext.Provider>
  );
};
