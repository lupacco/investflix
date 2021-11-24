import React, { createContext } from "react";
import usePersistedState from "./persistedState";

export const context = createContext({});

export const ConxtextProvider = (props) => {
  const [userReg, setUserReg] = usePersistedState("user", {});
  const [pwdReg, setPwdReg] = usePersistedState("pwd", {});
  const [emailReg, setEmailReg] = usePersistedState("email", {});

  return (
    <context.Provider
      value={{
        userReg,
        pwdReg,
        emailReg,
        setUserReg,
        setPwdReg,
        setEmailReg,
      }}
    >
      {props.children}
    </context.Provider>
  );
};

export default usePersistedState;
