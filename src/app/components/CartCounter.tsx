"use client";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  addOne,
  initCounterState,
  resetCounter,
  substractOne,
} from "@/lib/counter/counterSlice";
import { useEffect } from "react";
import { RootState } from "@/lib/store";

interface CartCounter {
  value: number;
}

export default function CartCounter({ value = 0 }: CartCounter) {
  const count = useAppSelector((state: RootState) => state.count);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(initCounterState(value));
  }, [dispatch, value]);

  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button
          onClick={() => dispatch(addOne(1))}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
        <button
          onClick={() => dispatch(substractOne(1))}
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
      </div>
    </>
  );
}
