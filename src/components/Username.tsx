"use client";

import { useAppStore } from "@/lib/zustand/store";

const Username = () => {
  // const store = useAppStore();
  const username = useAppStore((state) => state.username);
  const updateName = useAppStore((state) => state.updateName);
  console.log("Running username");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newUsername = event.target.value;

    updateName(newUsername);
  };

  return (
    <div className="flex flex-col gap-y-3">
      <span className="text-sm font-medium text-black">Username: {username}</span>
      <input type="text" className="py-2 px-3 bg-gray-100 text-sm border border-black rounded-lg focus:bg-white focus:outline-none" placeholder="New username" onChange={handleChange} />
    </div>
  );
};

export default Username;