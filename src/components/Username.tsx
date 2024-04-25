"use client";

import { useAppStore } from "@/lib/zustand/store";
import { useShallow } from "zustand/react/shallow";

const Username = () => {
  const { username, updateName } = useAppStore(
    useShallow((state) => ({
      username: state.username,
      updateName: state.updateName,
    }))
  );
  console.log("Running username");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername = event.target.value;

    updateName(newUsername);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-x-3">
      <h1 className="font-light mr-auto mb-5">Change Username</h1>
      <div className="flex flex-col gap-y-3">
        <span className="text-sm font-medium text-black">Username: {username}</span>
        <input type="text" className="py-2 px-3 bg-gray-100 text-sm border border-black rounded-lg focus:bg-white focus:outline-none" placeholder="New username" onChange={handleChange} />
      </div>
    </div>
  );
};

export default Username;
