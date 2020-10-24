import React, { createContext, useContext, useState, useEffect } from 'react';

const InfoContext = createContext(null);

export const useInfo = () => useContext(InfoContext);

export const InfoContextProvider = ({ children }) => {
  
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userCity, setUserCity] = useState('');
  const [userState, setUserState] = useState('');
  const [userPfp, setUserPfp] = useState('');

  return (
    <InfoContext.Provider
      value={{
        userName,
        setUserName,
        userPhone,
        setUserPhone,
        userEmail,
        setUserEmail,
        userCity,
        setUserCity,
        userState,
        setUserState,
        userPfp,
        setUserPfp
      }}
    >
      {children}
    </InfoContext.Provider>
  );
}
