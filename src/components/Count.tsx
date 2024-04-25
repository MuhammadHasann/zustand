"use client";

import { useAppStore } from "@/lib/zustand/store";
import { useShallow } from "zustand/react/shallow";

const Count = () => {
  const { count, increase, decrease } = useAppStore(
    useShallow((state) => ({
      count: state.count,
      increase: state.increase,
      decrease: state.decrease,
    }))
  );
  console.log("Running count");

  return (
    <div className="flex justify-center items-center gap-x-3">
      <button className="flex justify-center items-center w-8 h-8 bg-black/75 font-semibold text-white rounded-lg" onClick={decrease}>
        -
      </button>
      <span>Count: {count}</span>
      <button className="flex justify-center items-center w-8 h-8 bg-black/75 font-semibold text-white rounded-lg" onClick={increase}>
        +
      </button>
    </div>
  );
};

export default Count;
