"use client";

import { useAppStore } from "@/lib/zustand/store";

const Count = () => {
  const store = useAppStore();
  const count = useAppStore((state) => state.count);
  // const increase = useAppStore((state) => state.increase);
  // const decrease = useAppStore((state) => state.decrease);
  console.log("Running count");

  return (
    <div className="flex justify-center items-center gap-x-3">
      <button className="flex justify-center items-center w-8 h-8 bg-black/75 font-semibold text-white rounded-lg" onClick={store.decrease}>
        -
      </button>
      <span>Count: {count}</span>
      <button className="flex justify-center items-center w-8 h-8 bg-black/75 font-semibold text-white rounded-lg" onClick={store.increase}>
        +
      </button>
    </div>
  );
};

export default Count;
