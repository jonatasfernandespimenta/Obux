import React, { createContext, useContext, useState, useEffect } from 'react';

const InfoContext = createContext(null);

export const useInfo = () => useContext(InfoContext);

export const InfoContextProvider = ({ children }) => {
  
  const [userId, setUserId] = useState('');
  const [userName, setUserName] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userCity, setUserCity] = useState('');
  const [userState, setUserState] = useState('');
  const [userPfp, setUserPfp] = useState();
  const [userDescricao, setUserDescricao] = useState('');
  const [books, setBooks] = useState([]);
  const [show, setShow] = useState(false);
  const [transactionId, setTransactionId] = useState(0);
  const [userAge, setUserAge] = useState(0);

  return (
    <InfoContext.Provider
      value={{
        userAge,
        setUserAge,
        transactionId,
        setTransactionId,
        show,
        setShow,
        userId,
        setUserId,
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
        setUserPfp,
        userDescricao,
        setUserDescricao,
        books,
        setBooks
      }}
    >
      {children}
    </InfoContext.Provider>
  );
}
