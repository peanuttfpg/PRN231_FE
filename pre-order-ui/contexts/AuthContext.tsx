import React, { createContext, useEffect, useState } from "react";
import firebase from "firebase/compat/app";
import { onAuthStateChanged, User } from "firebase/auth";

const initialUser: any = null;

const AuthContext = createContext({
  user: initialUser,
  loading: true,
});

function AuthContextProvider({ children }: any) {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((authUser) => {
      if(authUser){
        setUser(authUser)
        setLoading(false);
      }
      else {
        setUser(null);
        setLoading(true);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContextProvider, AuthContext };
