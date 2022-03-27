import React, { useState } from "react";
import { auth } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

const Login = () => {
  const [registerEmail, setRegisterEmail] = useState<string>("");
  const [registerPassword, setRegisterPassword] = useState<string>("");
  const [loginEmail, setLoginEmail] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");

  const [user, setUser] = useState<any>({});

  onAuthStateChanged(auth, (currentUser: any) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    signOut(auth);
  };

  return (
    <>
      <div>
        <h3>Register User</h3>
        <input
          type="text"
          placeholder="Email..."
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password..."
          onChange={(e) => setRegisterPassword(e.target.value)}
        />

        <button onClick={register}>ユーザー登録</button>
      </div>
      <div>
        <h3>Register User</h3>
        <input
          type="text"
          placeholder="Email..."
          onChange={(e) => setLoginEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Password..."
          onChange={(e) => setLoginPassword(e.target.value)}
        />

        <button onClick={login}>ログイン</button>
      </div>
      <h4>User Logged In: </h4>
      {user?.email}
      <div>
        <button onClick={logout}>ログアウト</button>
      </div>
    </>
  );
};

export default Login;
