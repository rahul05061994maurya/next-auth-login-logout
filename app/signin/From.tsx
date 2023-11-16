"use client";
import { signIn } from "next-auth/react";
import React, { useRef } from "react";

const From = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const formHandler = function (e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    signIn("first-provider", {
      email: inputRef.current?.value,
      password: passwordRef.current?.value,
      callbackUrl: "/",
    });
  };
  return (
    <form
      onSubmit={formHandler}
      className="flex flex-col w-[300px] gap-3 m-3 p-3"
    >
      <input
        type="text"
        name="email"
        placeholder="email"
        className="text-blue-600"
        ref={inputRef}
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        className="text-blue-600"
        ref={passwordRef}
      />
      <button type="submit" className="bg-pink-400 rounded">
        Login
      </button>
      <button
        type="button"
        onClick={() => {
          signIn("google", { callbackUrl: "/" });
        }}
      >
        Login with google
      </button>
    </form>
  );
};

export default From;
