"use client";

import { useAppStore } from "@/lib/zustand/store";
import { useState } from "react";
import { useShallow } from "zustand/react/shallow";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const { userGithub, getUserGithub, logoutGithub } = useAppStore(
    useShallow((state) => ({
      userGithub: state.userGithub,
      getUserGithub: state.getUserGithub,
      logoutGithub: state.logoutGithub,
    }))
  );
  console.log("Running login");

  const handleLogin = (username: string) => {
    getUserGithub(username);
    setUsername("");
  };

  return (
    <div className="flex flex-col justify-center items-center gap-x-3">
      <h1 className="font-light mr-auto mb-5">Login Github</h1>
      {userGithub.login ? (
        <div className="flex flex-col gap-y-1.5 text-sm font-light text-black">
          <p>Username: {userGithub.login}</p>
          <p>Name: {userGithub.name}</p>
          <p>Location: {userGithub.location}</p>
          <button className="py-2 px-3 mt-3 bg-transparent text-sm font-semibold text-black rounded-lg border border-black hover:bg-black hover:text-white" onClick={logoutGithub}>
            Logout
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-y-3">
          <span className="text-sm font-medium text-black">Login by username</span>
          <div className="flex gap-x-2">
            <input
              type="text"
              className="py-2 px-3 bg-gray-100 text-sm border border-black rounded-lg focus:bg-white focus:outline-none"
              placeholder="New username"
              value={username}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
            />
            <button className="py-2 px-3 bg-black text-sm font-semibold text-white rounded-lg" onClick={() => handleLogin(username)}>
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
