// src/components/SetCounter.tsx
"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { increment, decrement, setUser, clearUsers } from "../redux/store";
import { useRouter } from "next/navigation";

const SetCounter = () => {
  const count = useSelector((state: RootState) => state.counter.count);
  const users = useSelector((state: RootState) => state.counter.users);
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

  const onClickLoginLogout = () => {
    if (users.length > 0) {
      dispatch(clearUsers());
    } else {
      const dummyUsers = [
        { id: 1, name: "John Doe", loggedIn: true },
        { id: 2, name: "Jane Smith", loggedIn: true },
      ];
      dispatch(setUser(dummyUsers));
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-8 max-w-sm  text-slate-950">
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
        {users.length > 0 && (
          <div className="mt-2 text-left">
            <p className="text-lg font-bold">User Data:</p>
            <pre className="bg-gray-200 p-2 rounded">
              {JSON.stringify(users, null, 2)}
            </pre>
          </div>
        )}
        <button
          onClick={onClickLoginLogout}
          className="bg-slate-900 w-full hover:bg-slate-800 text-white font-bold py-2 mt-4 px-4 rounded transition duration-200"
        >
          {users.length > 0 ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export { SetCounter };
