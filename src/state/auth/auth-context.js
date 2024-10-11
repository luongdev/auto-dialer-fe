'use client';
import React from 'react';

const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = React.useState();
  const login = async (email, password) => {
    setUser({
      email: 'hotenhai351@gmail.com',
      uid: '01'
    })
  };
  const logOut = async () => {
    setUser({ email: null, uid: null });
  };

  React.useEffect(() => {
    setUser({ email: null, uid: null });
    // const unsubscribe = onAuthStateChanged(auth, (user) => {
    //   if (user) {
    //     setUser({
    //       email: user.email,
    //       uid: user.uid,
    //     });
    //   } else {
    //     setUser({ email: null, uid: null });
    //   }
    // });
    // return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
