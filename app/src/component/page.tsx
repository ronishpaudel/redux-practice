// SetCounter.tsx
"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState, decrement, increment } from "../redux/store";
import { useRouter } from "next/navigation";

const SetCounter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch<AppDispatch>();
  const { push } = useRouter();
  console.log("Current count:", count); // Debugging

  const onClickCounter = () => {
    console.log("Increment button clicked"); // Debugging
    dispatch(increment());
  };

  const onClickDecrement = () => {
    console.log("Decrement button clicked"); // Debugging
    dispatch(decrement());
  };

  const onClickRouting = () => {
    push("/login");
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-sm text-center">
        <p className="text-xl mb-6 text-slate-900">
          Current count: <span className="font-semibold">{count}</span>
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onClickCounter}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            Increment
          </button>
          <button
            onClick={onClickDecrement}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            Decrement
          </button>
        </div>
        <div
          onClick={onClickRouting}
          className="bg-slate-900 w-full hover:bg-slate-800 text-white font-bold py-2 mt-4 px-4 rounded transition duration-200"
        >
          login
        </div>
      </div>
    </div>
  );
};

export { SetCounter };
