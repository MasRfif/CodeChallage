"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
export default function NotFound() {
  // return <h1>404</h1>;
  const router = useRouter();
  const [remainingTime, setRemainingTime] = useState(10);
  useEffect(() => {
    const timerId = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(remainingTime - 1);
      } else {
        clearInterval(timerId);
        router.push("/");
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, [remainingTime, router]);

  return (
    <>
      <div className="flex justify-center items-center h-screen p-24">
        <div className="flex flex-col items-center">
          <h1 className="text-center relative text-xl">
            what are you Searching m8 ? <br />
            here a <b className="text-9xl">404</b> for you
            <br />
            you will Spawn in : {remainingTime}
          </h1>

          <img
            className="mx-auto mt-4 rounded-xl"
            src="https://media1.tenor.com/m/wy2zHeWyf2gAAAAd/side-eye-dog-suspicious-look.gif"
            alt="what the dog doin"
          />
        </div>
      </div>
    </>
  );
}
